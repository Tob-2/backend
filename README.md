npm start  "start": "node app.js"   node app.js http://localhost:8080/67130500086/api/
npm init -y
npm install express
npm install prisma@5.14.0 --save-dev
npm install @prisma/client@5.14.0
npm install mysql2
npm install --save-dev nodemon
"dev": "nodemon app.js"  แล้วเพิ่มใน package.json npm run dev
npx prisma init  จะได้โฟลเดอร์:prisma/
                              schema.prisma
                            .env
จากนั้นแก้ใน .env ให้ตรงกับ DB ที่คุณเพิ่งสร้างเอง เช่น:

DATABASE_URL="mysql://root:password@localhost:3306/ass_67130xxxxx"


แก้shema.prismaก่อรค่อยdb pull
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
}


แก้ prisma.config.ts
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});

npx prisma generate

npx prisma db pull




