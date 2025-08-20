# 📊 Survey Form App  

Fullstack survey form application built with **Express.js + PostgreSQL + Sequelize** for the backend and **Next.js** for the frontend.  
Supports employee satisfaction survey with Likert scale and dynamic questions.

---

## 🚀 Tech Stack  

- **Backend**: Express.js + Sequelize ORM  
- **Database**: PostgreSQL  
- **Frontend**: Next.js (App Router) + Tailwind CSS  
- **Containerization**: Docker + Docker Compose  

---

## 📂 Project Structure  

```
.
├── backend/          # Express.js + Sequelize
├── frontend/         # Next.js + Tailwind
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Setup & Installation  

### 1️⃣ Clone repository  

```bash
git clone <repo-url>
cd survey-form
```

---

### 2️⃣ Install dependencies  

Backend:  

```bash
cd backend
yarn install
```

Frontend:  

```bash
cd ../frontend
yarn install
```

---

### 3️⃣ Setup environment  

#### Backend (`backend/.env`)  

```env
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=survey_form_db

PORT=5000
```

#### Frontend (`frontend/.env.local`)  

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

### 4️⃣ Run migrations & seeders  

From backend folder:  

```bash
cd backend

# create tables
npx sequelize-cli db:migrate

# insert default questions
npx sequelize-cli db:seed:all
```

---

### 5️⃣ Run with Docker Compose  

```bash
docker-compose up --build
```

This will start:  
- **Postgres DB** → port `5432`  
- **Backend API** → port `5000`  
- **Frontend** → port `3000`  

---

## 🌐 Usage  

- **Frontend (Next.js)**: [http://localhost:3000](http://localhost:3000)  
- **API (Express)**: [http://localhost:5000](http://localhost:5000)  

---

## 📝 Development Tips  

- If you want to reset DB completely:  

```bash
npx sequelize-cli db:drop
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

- For fresh Docker run (drop all data):  

```bash
docker-compose down -v
docker-compose up --build
```

---


## 📜 License  

MIT License © 2025  

---

⚡️ Ready to collect employee feedback in minutes!
