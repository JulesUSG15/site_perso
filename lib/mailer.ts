import nodemailer from "nodemailer";

export interface MailerConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
  from: string;
  to: string;
}

export function getMailerConfig(): MailerConfig | null {
  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM;
  const to = process.env.CONTACT_EMAIL;
  if (!host || !portRaw || !user || !password || !from || !to) {
    return null;
  }
  const port = Number.parseInt(portRaw, 10);
  if (Number.isNaN(port)) return null;
  const secure = (process.env.SMTP_SECURE ?? "false").toLowerCase() === "true";
  return { host, port, secure, user, password, from, to };
}

export async function sendContactEmail(input: {
  name: string;
  email: string;
  organisation?: string;
  message: string;
}): Promise<void> {
  const config = getMailerConfig();
  if (!config) {
    throw new Error("MAILER_NOT_CONFIGURED");
  }
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: { user: config.user, pass: config.password },
  });
  const orgLine = input.organisation ? `Structure : ${input.organisation}\n` : "";
  const text = `Nouveau message depuis le formulaire de contact\n\nNom : ${input.name}\nEmail : ${input.email}\n${orgLine}\nMessage :\n${input.message}\n`;
  await transporter.sendMail({
    from: config.from,
    to: config.to,
    replyTo: input.email,
    subject: `Contact site — ${input.name}`,
    text,
  });
}
