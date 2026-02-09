# Booking API (Node.js + Prisma + MySQL)

Backend professionnel pour un système de réservation de rendez-vous.  
Architecture modulaire inspirée des pratiques “LinkedIn/Pro”.

---

## 💡 Fonctionnalités

- CRUD pour les **clients**, **services**, **utilisateurs** et **rendez-vous**
- Vérification automatique de la disponibilité des créneaux
- Gestion des statuts de rendez-vous (BOOKED, CANCELLED, DONE)
- Architecture **Controller → Service → Repository → Prisma**
- Middleware global pour erreurs
- Structure prête pour tests unitaires et intégration
- Authentification possible avec JWT (ADMIN / STAFF)

---

## ⚡ Stack

- Node.js + TypeScript
- Express.js
- Prisma ORM
- MySQL
- JWT pour authentification

---

## 🏗 Structure du projet

booking-api/
├─ prisma/ # Schema Prisma, migrations, seed data
├─ src/
│ ├─ app.ts # Express app configuration (middlewares, routes)
│ ├─ server.ts # Entry point: start server
│ ├─ config/ # DB, logger, environment variables
│ │ ├─ db.ts
│ │ ├─ env.ts
│ │ └─ logger.ts
│ ├─ common/ # Middleware, utils, types, errors
│ │ ├─ middleware/
│ │ │ ├─ error.middleware.ts
│ │ │ ├─ notFound.middleware.ts
│ │ │ └─ validate.middleware.ts
│ │ ├─ utils/
│ │ │ ├─ date.ts
│ │ │ ├─ pagination.ts
│ │ │ └─ apiFeatures.ts
│ │ ├─ types/
│ │ │ └─ express.d.ts
│ │ └─ errors/
│ │ ├─ AppError.ts
│ │ └─ catchAsync.ts
│ ├─ modules/ # Features: users, customers, services, appointments, auth
│ │ ├─ auth/
│ │ │ ├─ auth.controller.ts
│ │ │ ├─ auth.service.ts
│ │ │ ├─ auth.repository.ts
│ │ │ ├─ auth.routes.ts
│ │ │ └─ auth.schema.ts
│ │ ├─ users/
│ │ ├─ customers/
│ │ ├─ services/
│ │ ├─ availability/
│ │ └─ appointments/
│ ├─ routes/ # Central route aggregator
│ │ └─ index.ts
│ └─ jobs/ # Background jobs (e.g., reminders)
│ └─ reminder.job.ts
├─ tests/ # Unit & integration tests
├─ .env # Variables d'environnement
├─ package.json
├─ tsconfig.json
└─ README.md

---

## 🚀 Installation
