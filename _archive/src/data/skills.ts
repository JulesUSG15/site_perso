export interface SkillCategory {
  name: string
  description?: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level: number // 0-100
}

export const skills: SkillCategory[] = [
  {
    name: 'Interfaces web modernes',
    description: 'Frameworks front-end réactifs et maintenables pour des expériences utilisateurs premium.',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Angular', level: 70 },
      { name: 'Nuxt.js', level: 75 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 }
    ]
  },
  {
    name: 'APIs & services métiers',
    description: 'Un socle backend modulaire, sécurisé et orienté performance pour vos services numériques.',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'FastAPI', level: 90 },
      { name: 'NestJS', level: 75 },
      { name: 'Symfony', level: 85 },
      { name: 'Laravel', level: 70 },
      { name: 'GraphQL', level: 70 },
      { name: 'tRPC', level: 65 },
      { name: 'Pydantic', level: 90 },
      { name: 'Prisma', level: 75 },
      { name: 'TypeORM', level: 70 },
      { name: 'PyJWT', level: 80 }
    ]
  },
  {
    name: 'IA prédictive & data science',
    description: 'Pipelines data complets pour la modélisation statistique et le machine learning de production.',
    skills: [
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 90 },
      { name: 'SciPy', level: 85 },
      { name: 'scikit-learn', level: 90 },
      { name: 'TensorFlow / Keras', level: 85 },
      { name: 'OpenCV-Python', level: 75 },
      { name: 'XGBoost', level: 85 },
      { name: 'LightGBM', level: 80 }
    ]
  },
  {
    name: 'IA générative & LLM',
    description: 'Fine-tuning, serving et optimisation de modèles multimodaux ou texte de grande taille.',
    skills: [
      { name: 'PyTorch / torch', level: 90 },
      { name: 'Transformers', level: 90 },
      { name: 'Sentence-Transformers', level: 85 },
      { name: 'PEFT (LoRA/QLoRA)', level: 80 },
      { name: 'vLLM', level: 75 },
      { name: 'llama-cpp-python', level: 70 }
    ]
  },
  {
    name: 'Chaîne RAG de bout en bout',
    description: 'Automatisation complète : ingestion, vectorisation, orchestration et évaluation continue.',
    skills: [
      { name: 'PyPDF', level: 85 },
      { name: 'Unstructured', level: 80 },
      { name: 'Tiktoken', level: 85 },
      { name: 'Faiss', level: 80 },
      { name: 'Qdrant Client', level: 85 },
      { name: 'pgvector', level: 80 },
      { name: 'LangChain', level: 90 },
      { name: 'LlamaIndex', level: 85 },
      { name: 'FlagEmbedding', level: 80 },
      { name: 'Ragas', level: 75 }
    ]
  },
  {
    name: 'Données & stockage',
    description: 'Bases relationnelles et NoSQL, caches et ORM pour des solutions scalables.',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'MariaDB', level: 75 },
      { name: 'SQLAlchemy', level: 85 },
      { name: 'Psycopg', level: 80 },
      { name: 'Redis', level: 75 }
    ]
  },
  {
    name: 'Plateforme, DevOps & qualité',
    description: 'Industrialisation, observabilité et automatisation pour des déploiements fiables.',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 70 },
      { name: 'Grafana', level: 75 },
      { name: 'Uvicorn', level: 85 },
      { name: 'Gunicorn', level: 80 },
      { name: 'Poetry', level: 90 },
      { name: 'uv', level: 85 },
      { name: 'Pytest', level: 85 }
    ]
  }
]

