# Table of contents

- [Solution](#Solution)
- [Structure](#Structure)
  - [Files](##Files)
  - [Database](##Database)
- [To-Do](#To-Do)
- [Test](#Test)

---

### Order from client

- Create MQTT. Broker
- Create Admin Panel

---

# Solution

- Using Mosquitto MQTT. as a back-end with [mosquitto-go-auth](https://github.com/iegomez/mosquitto-go-auth) plugin with MySQL as a database.

- And connect to front-end ( NextJS. ) via websocket which provide info from database and mqtt itself.

- Using ACL. as controlling method which can provide more control for user.

- MQTT. protocol will be at port:1883
  Web socket protocol will be at port:8000

---

# Structure

## Files

```bash
├── docker-compose.yml
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
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components
│       ├── login.tsx
│       └── navigation.tsx
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock
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
- [ ] Create Front-end

---

# Test

- [x] Connect to protocol
- [x] ACL. Block unauthorized
- [x] Real time database update
- [ ] Iot. Connection

---
