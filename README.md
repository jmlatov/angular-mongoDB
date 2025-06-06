# Angular + Node.js + MongoDB Project

Este proyecto contiene una aplicación completa que conecta un frontend hecho en Angular con un backend en Node.js utilizando MongoDB como base de datos.

---

## 📁 Estructura del proyecto

```
angular-mongo-learning/
│
├── backend/              → API REST con Express y Mongoose
├── frontend-app/         → API REST con Express y Mongoose
└── README.md             → Este archivo
```

---

## 🚀 Cómo ejecutar el backend

1. Ve a la carpeta del backend:

```bash
cd backend
```

2. Instala las dependencias:

```bash
npm install
```

3. Asegúrate de que tu MongoDB esté corriendo en `mongodb://localhost:27017/mi_basedatos`. Luego arranca el servidor:

```bash
node server.js
```

El backend estará disponible en: `http://localhost:3000/api/items`

---

## 💻 Cómo ejecutar el frontend (Angular)

Debido a limitaciones del entorno, deberás generar el frontend con Angular CLI por separado:

1. Ejecuta el frontend:

```bash
cd frontend-app
ng serve
```

Abre en el navegador: `http://localhost:4200`

---

## ✅ Funcionalidad

- Insertar ítems desde el formulario
- Ver ítems listados desde la base de datos MongoDB

---

## 🧠 Autor

Generado con ayuda de ChatGPT (OpenAI).
