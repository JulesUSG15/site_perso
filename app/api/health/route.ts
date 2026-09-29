// Endpoint santé utilisé par le HEALTHCHECK Docker.
// Aucune dépendance externe : renvoie 200 dès que le serveur Next répond.

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export function GET(): Response {
  return Response.json({ status: "ok", uptime: process.uptime() });
}
