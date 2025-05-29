# Angular + Node.js + MongoDB Project

Este proyecto contiene una aplicación completa que conecta un frontend hecho en Angular con un backend en Node.js utilizando MongoDB como base de datos.

---

## 📁 Estructura del proyecto

```
angular-mongo-learning/
│
├── backend/              → API REST con Express y Mongoose
├── frontend-LEEME.txt    → Instrucciones para crear el frontend Angular
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

## 💻 Cómo crear el frontend (Angular)

Debido a limitaciones del entorno, deberás generar el frontend con Angular CLI por separado:

1. Desde la raíz del proyecto, corre:

```bash
ng new frontend --standalone --routing=false --style=css
```

2. Copia dentro de la carpeta `frontend/` los archivos de componentes y servicios que te proporcioné en el chat:
   - `app.component.ts`
   - `components/item-form/item-form.component.ts`
   - `components/item-list/item-list.component.ts`
   - `services/item.service.ts`

3. Ejecuta el frontend:

```bash
cd frontend
ng serve
```

Abre en el navegador: `http://localhost:4200`

---

## ✅ Funcionalidad

- Insertar ítems desde el formulario
- Ver ítems listados desde la base de datos MongoDB

---

## 🧠 Autor

Generado automáticamente con ayuda de ChatGPT (OpenAI).
