# MQTT Auth Platform

Mqtt Auth Platform is a platform to make user connect to mqtt broker provide by mosquitto with authorization from database (Mysql in this case). Providing nextjs as a front-end to login and register to network.
With a admin panel for superuser to watch and manage account.

---

# Table of contents

- [Structure](#Structure)
  - [Files](##Files)
  - [Database](##Database)
- [To-Do](#To-Do)
- [Test](#Test)

---

# Structure

## Files

```bash
.
├── docker-compose.yml
├── LICENSE
├── next.config.js
├── package.json
├── postcss.config.js
├── prisma
│   ├── migrations
│   │   ├── 20230718191144_init
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── public
│   ├── next.svg
│   └── vercel.svg
├── README.md
├── src
│   ├── actions
│   │   ├── index.ts
│   │   ├── login.ts
│   │   └── register.ts
│   ├── app
│   │   ├── api
│   │   │   └── auth
│   │   │       └── [...nextauth]
│   │   │           └── route.ts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── login.tsx
│   │   ├── navigation.tsx
│   │   └── provider.tsx
│   └── database
│       └── database.ts
├── tailwind.config.js
├── test
│   └── bcrypt.mjs
└── tsconfig.json
```

## Database

- <strong><u>mqtt-data/account</u></strong>

| name          | types                               |
| ------------- | ----------------------------------- |
| username      | string                              |
| userId        | string(unique)                      |
| hash_password | string(bcryptHash)                  |
| superuser     | interger( 1 for true, 0 for false ) |

- <strong><u>mqtt-data/acl</u></strong>

| name      | types                   |
| --------- | ----------------------- |
| userId    | string                  |
| topic     | string                  |
| readWrite | integer(1=read,2=write) |

---

# To-Do

- [x] Create database
- [x] Create and config docker file
- [x] Add and connect ORM. to database
- [/] Create Front-end
  - [x] Authentication System.
  - [ ] Admin Panel for super user.

---

# Test

- [x] Connect to protocol
- [x] ACL. Block unauthorized
- [x] Real time database update
- [ ] Iot. Connection

---
