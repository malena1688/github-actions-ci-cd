# 🚀 GitHub Actions — CI/CD Pipeline

> **Proyecto práctico de DevOps enfocado en automatización, integración continua (CI), testing y despliegue continuo (CD).**

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?logo=githubactions\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=nodedotjs\&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-Testing-C21325?logo=jest\&logoColor=white)
![Supertest](https://img.shields.io/badge/Supertest-API_Testing-000000)
![DevOps](https://img.shields.io/badge/DevOps-Automation-6f42c1)

---

## 🎯 Sobre el proyecto

Este repositorio forma parte de mi aprendizaje práctico en **DevOps y CI/CD**, utilizando GitHub Actions para automatizar diferentes etapas del ciclo de desarrollo de una aplicación.

El objetivo es comprender cómo un cambio de código puede pasar automáticamente por un proceso de:

```text
👩‍💻 Desarrollo
     │
     ▼
📦 Git Push
     │
     ▼
⚙️ GitHub Actions
     │
     ▼
🧪 Tests automatizados
     │
     ▼
✅ Validación
     │
     ▼
🚀 Deploy
```

La idea principal es que **el código no llegue a producción sin haber sido validado previamente**.

---

## 🛠️ Tecnologías utilizadas

| Tecnología        | Uso                                |
| ----------------- | ---------------------------------- |
| 🐙 GitHub         | Control de versiones y repositorio |
| ⚙️ GitHub Actions | Automatización de workflows        |
| 🟢 Node.js        | Entorno de ejecución               |
| 🧪 Jest           | Tests automatizados                |
| 🔌 Supertest      | Testing de APIs HTTP               |
| ☁️ Render         | Despliegue continuo                |
| 📄 YAML           | Configuración de workflows         |

---

## 📁 Estructura del proyecto

```text
github-actions-ci-cd/
│
├── .github/
│   └── workflows/
│       └── hello.yml
│
├── src/
│   └── ...
│
├── tests/
│   └── ...
│
├── package.json
├── package-lock.json
└── README.md
```

La carpeta `.github/workflows/` contiene los workflows que GitHub Actions ejecutará automáticamente.

---

## ⚙️ GitHub Actions

El primer workflow del proyecto se encuentra en:

```text
.github/workflows/hello.yml
```

Ejemplo:

```yaml
name: Hello GitHub Actions

on:
  push:
    branches: [ main ]

jobs:
  hello:
    runs-on: ubuntu-latest

    steps:
      - name: Say hello
        run: echo "¡Hola! Mi primer GitHub Action funciona 🚀"
```

### ¿Qué hace?

El workflow se ejecuta automáticamente cuando se realiza un `push` sobre la rama `main`.

El proceso es:

```text
git push
   ↓
GitHub detecta el cambio
   ↓
GitHub Actions inicia el workflow
   ↓
Se crea un entorno Ubuntu
   ↓
Se ejecutan los steps
   ↓
Workflow ✅
```

---

## 🧪 Testing automatizado

El siguiente objetivo del proyecto es integrar pruebas automatizadas utilizando **Jest y Supertest**.

El pipeline ejecutará:

```bash
npm ci
npm test
```

Si los tests son correctos:

```text
Tests ✅
   ↓
Pipeline continúa
   ↓
Deploy 🚀
```

Si algún test falla:

```text
Tests ❌
   ↓
Pipeline detenido
   ↓
Deploy bloqueado
```

De esta forma, el despliegue queda condicionado a la calidad del código.

---

## 🔄 Pipeline CI/CD

El objetivo final es construir un pipeline como este:

```text
                 ┌───────────────┐
                 │   git push    │
                 └───────┬───────┘
                         │
                         ▼
                ┌─────────────────┐
                │ GitHub Actions  │
                └────────┬────────┘
                         │
                         ▼
                  📥 Checkout
                         │
                         ▼
                  🟢 Setup Node
                         │
                         ▼
                    📦 npm ci
                         │
                         ▼
                    🧪 npm test
                         │
                    ┌────┴────┐
                    │         │
                   ❌         ✅
                    │         │
                  STOP        ▼
                         🚀 Deploy
```

---

## 🔐 Secrets y seguridad

Para conectar GitHub Actions con servicios externos como Render, las credenciales sensibles se almacenan mediante **GitHub Secrets**.

Ejemplo:

```yaml
${{ secrets.RENDER_API_KEY }}
```

Las claves privadas **no se almacenan directamente en el código fuente**.

Esto permite mantener las credenciales separadas del repositorio y utilizarlas únicamente durante la ejecución del workflow.

---

## 📚 Qué estoy aprendiendo con este proyecto

Este proyecto me permite trabajar de forma práctica conceptos fundamentales de DevOps:

* ✅ Git y GitHub
* ✅ GitHub Actions
* ✅ Workflows y Jobs
* ✅ Triggers
* ✅ Runners
* ✅ Steps
* ✅ Automatización con YAML
* ✅ Integración continua (CI)
* ✅ Testing automatizado
* ✅ Jest
* ✅ Supertest
* ✅ Continuous Deployment (CD)
* ✅ GitHub Secrets
* ✅ Despliegue con Render

---

## 🚀 Próximos pasos

Este repositorio irá evolucionando progresivamente.

### Fase 1 — Workflow básico

* [x] Crear repositorio
* [x] Crear primer workflow
* [x] Ejecutar un `push`
* [x] Comprobar GitHub Actions

### Fase 2 — Node.js

* [ ] Crear aplicación Node.js
* [ ] Configurar `package.json`
* [ ] Automatizar `npm ci`
* [ ] Automatizar `npm test`

### Fase 3 — Testing

* [ ] Añadir Jest
* [ ] Añadir Supertest
* [ ] Crear tests unitarios
* [ ] Crear tests de integración
* [ ] Generar cobertura

### Fase 4 — CI/CD

* [ ] Separar jobs de `test` y `deploy`
* [ ] Utilizar `needs`
* [ ] Configurar GitHub Secrets
* [ ] Conectar con Render
* [ ] Automatizar el despliegue

---

## 💡 Objetivo profesional

Este proyecto forma parte de mi **portfolio técnico** y tiene como objetivo demostrar de forma práctica mi evolución en:

**Testing → Automatización → CI → CD → DevOps**

Más que mostrar únicamente código, el proyecto busca demostrar la capacidad de **crear procesos automatizados que validen y preparen una aplicación para su despliegue**.

---

## 👩‍💻 Sobre el proyecto

Proyecto desarrollado como parte de mi formación práctica en **Testing, Node.js y DevOps**, siguiendo una metodología progresiva de aprendizaje y automatización.

> 🚀 *Aprender haciendo: cada commit es una oportunidad para automatizar algo más.*
