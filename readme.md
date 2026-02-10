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

```text
booking-api/
├── prisma/                 # Schéma Prisma & Migrations
│   ├── schema.prisma
│   └── seed.ts
├── src/
│   ├── app.ts              # Configuration Express (Middlewares, Routes)
│   ├── server.ts           # Point d'entrée du serveur
│   ├── config/             # DB, Logger, Variables d'env
│   │   ├── db.ts
│   │   └── env.ts
│   ├── common/             # Logique partagée & Utilitaires
│   │   ├── middleware/     # Auth, Error handling, Validation
│   │   ├── utils/          # Gestion des dates, Pagination
│   │   └── errors/         # Classes d'erreurs personnalisées
│   ├── modules/            # Logique Métier (Modulaire)
│   │   ├── auth/           # Login, Register, JWT
│   │   ├── users/          # Gestion du staff/admin
│   │   ├── customers/      # Gestion des clients
│   │   ├── services/       # Catalogue des prestations
│   │   └── appointments/   # Réservations & Disponibilités
│   ├── routes/             # Agrégateur central des routes
│   └── jobs/               # Tâches de fond (Rappels par mail)
├── tests/                  # Tests unitaires et d'intégration
├── .env                    # Variables d'environnement
├── package.json
└── tsconfig.json

```

---

## 🚀 Installation
