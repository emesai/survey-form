# 📊 Survey Form App  

Fullstack survey form application built with **Express.js + PostgreSQL + Sequelize** for the backend and **Next.js** for the frontend.  

---

## 🛠️ Prerequisites

```bash
# Make sure you have these installed on your machine:

# 🐳 Docker (latest version recommended)
# 👉 https://docs.docker.com/get-docker/

# 🔧 Docker Compose
# 👉 https://docs.docker.com/compose/install/

# ✅ Verify installation
docker --version
docker-compose --version

```

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

### 2️⃣ Setup environment (optional)  

#### Backend (`backend/.env`)  

```env
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=survey_form
```

#### Frontend (`frontend/.env.local`)  

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---


### 3️⃣ Installation

```bash
# build
docker-compose build 

# run database
docker-compose up -d db

# migrate and seed
docker-compose run --rm migrate

# run services
docker-compose up -d backend frontend
```

---

## 🌐 Usage  

- **Frontend (Next.js)**: [http://localhost:3000](http://localhost:3000)  
- **API (Express)**: [http://localhost:5000](http://localhost:5000)  

---


## 📜 License  

MIT License © 2025  

---
