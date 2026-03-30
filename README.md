# To-Do App (Full Stack - Spring Boot + JavaScript)

A simple and powerful **full-stack To-Do application** built using **Spring Boot (Java)** for the backend and **HTML, CSS, JavaScript** for the frontend.

---

## Features

* Add new tasks
* View all tasks
* Mark tasks as completed
* Delete tasks
* Toggle task status
* REST API integration

---

## Tech Stack

### Backend

* Java
* Spring Boot
* Spring Web
* Spring Data JPA
* H2 Database

### Frontend

* HTML
* CSS
* JavaScript (Fetch API)

---

---

## How It Works

```
Frontend → Controller → Service → Repository → Database
```

1. User interacts with UI
2. Frontend sends HTTP request
3. Controller handles request
4. Service processes logic
5. Repository interacts with database
6. Response is sent back to UI

---

## API Endpoints

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| GET    | /api/tasks      | Get all tasks   |
| POST   | /api/tasks      | Create new task |
| PUT    | /api/tasks/{id} | Toggle task     |
| DELETE | /api/tasks/{id} | Delete task     |

---

## Setup & Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/todoapp.git
cd todoapp
```

---

### 2️⃣ Run Backend

Make sure you are inside the project folder:

```
./mvnw spring-boot:run
```

Backend will run at:

```
http://localhost:8080
```

---

### 3️⃣ Test API

Open browser:

```
http://localhost:8080/api/tasks
```

Or use REST Client / Postman

---

### 4️⃣ Run Frontend

Go to frontend folder and open:

```
index.html
```

---

## Database Info

* Using **H2 in-memory database**
* Data is **temporary**
* Data resets when server restarts

---

## ⚠️ Common Issues

### Maven not recognized

Use:

```
./mvnw spring-boot:run
```

### CORS Error

Handled using:

```java
@CrossOrigin(origins = "*")
```


## Acknowledgements

* Spring Boot Documentation
* REST API concepts
* JavaScript Fetch API

---

## Conclusion

This project demonstrates a complete **full-stack development workflow**, including backend API creation, database interaction, and frontend integration.

---
