# 🍬 Sugary React Recruitment Task

Welcome to the **Sugary React Recruitment Task** repository! This project is built as part of the Frontend Developer hiring process for **Sugary**, focusing on performance, usability, and elegant frontend architecture using React.

Live Demo: https://sugary-react.vercel.app/login

GitHub Repo: https://github.com/nafistarik/sugary-react-recruitment

---

## 🚀 Tech Stack

- **React 18**
- **Next 15.1.4**
- **TypeScript**
- **Redux Toolkit + RTK Query**
- **Framer Motion**
- **Tailwind CSS**
- **Zod + React Hook Form**
- **Vercel** 

---

## 🧾 Features

### 🔐 Authentication System
- Login with username/password
- Stores access and refresh tokens securely
- Automatically refreshes access token using `RTK Query`'s custom `baseQuery`
- Protects routes using conditional rendering and layout guards

### 📦 Dashboard
- Loads after successful authentication
- Fetches materials via API and displays them in a card-based layout
- Implements **lazy loading on scroll** (infinite scroll)
- Uses `base64` encoded filters as required by the API

### 🎨 Polished UI/UX
- Fully responsive design
- Elegant transitions using `Framer Motion`
- Clean layout and components styled with **Tailwind CSS**
- Empty, loading, and error states handled gracefully
- Dark mode ready (if implemented)

---

## 📦 API Integration

- **Base API URL**: `https://sugarytestapi.azurewebsites.net`
- **Image Base URL**: `https://d1wh1xji6f82aw.cloudfront.net`
- API routes:
  - `POST /AdminAccount/Login` – user login
  - `POST /Account/RefreshToken` – refresh token logic
  - `GET /Materials/GetAll/` – materials with filter param

🏁 How to Run Locally
bash
Copy
Edit
## Clone the repo
```
git clone https://github.com/nafistarik/sugary-react-recruitment
```

## Install dependencies

```
npm install
```

## Run the app
```
npm run dev
```
🌐 Deployment
This app is deployed live on Vercel / Netlify for quick access and sharing with recruiters.
