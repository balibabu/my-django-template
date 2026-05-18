# Django + Vite + React Template

A simple template integrating:

* Django
* React
* Vite
* django-vite
* WhiteNoise

Supports seamless development and production workflow.

---

# Features

* Django backend
* React frontend
* Vite HMR during development
* Production asset bundling
* Static asset handling with WhiteNoise
* Simple project structure

---

# Project Structure

```txt
project/
│
├── config/              # Django project
├── frontend/            # React + Vite app
│   ├── src/
│   ├── dist/
│   └── vite.config.js
│
├── templates/
├── staticfiles/
├── manage.py
└── README.md
```

---

# Installation

## 1. Clone Project

```bash
git clone https://github.com/balibabu/my-django-template.git
cd my-django-template
```

---

## 2. Create Virtual Environment

```bash
python -m venv venv
```
Activate:
```bash
venv\Scripts\activate # windows
source venv/bin/activate # linux
```

---

## 3. Install Python Dependencies

```bash
pip install -r requirements.txt
```

---

## 4. Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

# Development

Run Django:

```bash
python manage.py runserver
```

Run Vite:

```bash
cd frontend
npm run dev
```

Now:

* Django → [http://127.0.0.1:8000](http://127.0.0.1:8000)
* Vite → [http://localhost:5173](http://localhost:5173)

Hot reload works automatically.

---

# Production Build

Build frontend:

```bash
cd frontend
npm run build
```

Collect static files:

```bash
python manage.py collectstatic
```

Run Django:

```bash
python manage.py runserver
```

---

# Tech Stack

* Django
* React
* Vite
* django-vite
* WhiteNoise

---

# Disclaimer

This project is only a starter template for integrating Django with React + Vite.

Customize and extend as needed.