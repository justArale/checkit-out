# checkit-out

A monorepo project with separate frontend and backend.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Setup & Development](#setup--development)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [UI Libraries & Technologies](#ui-libraries--technologies)
- [Folder Structure](#folder-structure)
- [Notes](#notes)
- [Licence](#licence)

---

## Project Overview

- **Frontend:** React app with TypeScript, Vite, and Sass
- **Backend:** Express server with TypeScript and MongoDB
- **Monorepo:** Root `package.json` with workspaces for both frontend and backend
- **Deployment:** Frontend deployed on Netlify, backend deployed on Vercel

---

## Setup & Development

### Prerequisites

- **Node.js** version 18 or higher
- MongoDB-Instanz (lokal oder remote)
- Git

Clone the repository, install dependencies and start:

```bash
git clone https://github.com/justArale/checkit-out.git
cd checkit-out
```

```bash
npm install
```

```bash
npm run dev
```

---

## Usage

- Type the grocery item in the input field
- Press the add button or hit enter
- Set the bought status either by clicking the checkbox or swiping the panel to the right
- Delete the item either by clicking the trash icon or swiping left

---

## UI Libraries & Technologies

- **Frontend:**

  - React 19
  - React DOM
  - React Router DOM (for routing)
  - Axios (for API)
  - React Swipeable (for swipe interactions)
  - Sass (for styling)

- **Backend:**
  - Express 5
  - Mongoose (MongoDB ODM)
  - dotenv (for environment variables)
  - CORS, Morgan (middleware & logging)

---

## Folder Structure

```
├── backend
│   └── src
│       ├── config
│       ├── db
│       ├── middleware
│       ├── models
│       ├── routes
│       ├── types
│       └── utils
├── frontend
│   ├── node_modules
│   ├── public
│   │   └── meta
│   └── src
│       ├── assets
│       │   ├── font
│       │   └── sass
│       │       ├── base
│       │       └── components
│       ├── components
│       │   └── icons
│       ├── interfaces
│       ├── pages
│       └── services
```

---

## Usage

- Type the grocery item in the input field
- Press the add button or hit enter
- sSet the bought status either by clicking the checkbox or swiping the panel to the right
- Delete the item either by clicking the trash icon or swiping left

---

### Notes

The project uses TypeScript in both frontend and backend.
Environment variables (e.g. .env files) are required for API URLs and database connections.
Workspaces enable easy simultaneous development of both parts.

---

### Licence

This project is licensed under the [MIT License](https://github.com/justArale/checkit-out.git/blob/main/LICENSE).
