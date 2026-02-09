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
│ ├─ config/ # DB, logger
│ ├─ common/ # Middleware, utils, types, errors
│ ├─ modules/ # Features: users, customers, services, appointments, auth
│ ├─ routes/ # Central route aggregator
│ └─ jobs/ # Background jobs (e.g., reminders)
│  
├─ tests/ # Unit & integration tests
├─ .env # Variables d'environnement
├─ package.json
├─ tsconfig.json
└─ README.md

## 🚀 Installation
