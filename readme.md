# CRUD BACKEND NUR

Desarrollado por *Juan Carlos Acho Ayala*  
🕒 Tiempo estimado de desarrollo: 2 horas

---

## PRUEBA SPS NODE

## 🚀 Instalación y configuración inicial

1. Clonar el repositorio:
   bash
   git clone <URL-del-repositorio>
   

2. Acceder al proyecto:
   bash
   cd nombre-de-tu-proyecto
   

3. Instalar las dependencias:
   bash
   npm install
   

4. Crear el usuario inicial del sistema:
   bash
   node src/seeds/crearusuario.js
   

---

## 📡 API - Endpoints

A continuación se detallan los endpoints disponibles para interactuar con el sistema de usuarios:

---

### 🟢 Crear usuario

- *Método:* POST
- *URL:* http://localhost:3001/create-update-user

*Request body:*
json
{
  "name": "user4",
  "email": "user4@spsgroup.com.br",
  "type": "user",
  "password": "123456"
}


---

### 🟡 Actualizar usuario

- *Método:* POST
- *URL:* http://localhost:3001/create-update-user?user_id={user_id}

*Request body:*
json
{
  "name": "user4",
  "email": "user4@spsgroup.com.br",
  "type": "user",
  "password": "123456"
}


---

### 🔵 Obtener todos los usuarios

- *Método:* GET
- *URL:* http://localhost:3001/usersview

---

### 🔍 Obtener un usuario por ID

- *Método:* GET
- *URL:* http://localhost:3001/usersview?user_id=1

---

### 🔴 Eliminar usuario

- *Método:* DELETE
- *URL:* http://localhost:3001/delete-user?user_id=4