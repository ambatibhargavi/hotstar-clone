# 🎬 Hotstar Clone – Inspired by *Criminal Justice* | Dockerized with Vite + Nginx

Ever watched a series and suddenly felt the urge to build something? That’s how this project was born! While watching *Criminal Justice*, I had the idea of recreating a Hotstar-like streaming UI — and then decided to take it further by containerizing it with Docker.
![image](https://github.com/user-attachments/assets/49b1af54-6ffc-4330-86ae-60f7721425fa)


This repository contains a full frontend app built with **React + TypeScript + Vite**, served using **Nginx** in a **Docker** container.

---

## ⚙️ Tech Stack

* ⚛️ React (with TypeScript)
* ⚡ Vite
* 🐳 Docker
* 🌐 Nginx

---

## 📸 Demo

👉 Live Demo: [https://hotstar-clone-blond.vercel.app/](https://hotstar-clone-blond.vercel.app/)

---

## 📁 Project Structure

```
hotstar-clone/
├── public/
├── src/
├── dist/             # Generated after build
├── Dockerfile
├── .dockerignore
├── index.html
├── package.json
├── vite.config.ts
```

---

## ✨ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ambatibhargavi/hotstar-clone.git
cd hotstar-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the project

```bash
npm run build
```

---

## 🐳 Docker Deployment

### Build the Docker image

```bash
docker build -t hotstar-clone .
```

### Run the container

```bash
docker run -d -p 8080:80 hotstar-clone
```

Now open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📦 Dockerfile

```Dockerfile
# Stage 1: Build with Node
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🚫 .dockerignore

```
node_modules
dist
.dockerignore
Dockerfile
```
---

## ✨ Inspiration

This project was inspired by the intense and immersive series *Criminal Justice*. Sometimes a binge-watch can become a breakthrough idea — and this one did!

---

## ✍️ Author

**Ambati Bhargavi**
📧 [ambatibhargavi977@gmail.com](mailto:ambatibhargavi977@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/ambatibhargavi/) • [GitHub](https://github.com/ambatibhargavi)

---
<img width="1426" alt="Screenshot 2025-06-12 at 22 11 14" src="https://github.com/user-attachments/assets/02695c3e-d569-4ef1-98ff-0bf6a6fb3a33" />
<img width="1440" alt="Screenshot 2025-06-12 at 21 51 32" src="https://github.com/user-attachments/assets/ec9ecef6-c75e-4f85-b22b-83a92f23cb8a" />
<img width="1436" alt="Screenshot 2025-06-12 at 21 51 17" src="https://github.com/user-attachments/assets/8291b5e4-6a15-4d1a-af64-6aa68afdb45a" />
<img width="1440" alt="Screenshot 2025-06-12 at 21 51 06" src="https://github.com/user-attachments/assets/2954851f-9e57-4189-bf8c-859898ad24a9" />
<img width="1440" alt="Screenshot 2025-06-12 at 21 50 56" src="https://github.com/user-attachments/assets/3cd7e471-fe88-41da-81ec-6f5e9da5244a" />

