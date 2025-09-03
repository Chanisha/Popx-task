# PopX React App

A simple React + TypeScript app that mimics a user onboarding flow for **PopX**.  
It includes a **welcome screen**, **signup page**, **login page**, and an **account settings page** with a profile image.  

---

## 🚀 Features

- **Welcome Screen**
  - Entry point with options to create an account or login.

- **Signup Page**
  - Fields: Full Name, Phone Number, Email, Password, Company Name.
  - Agency selection (Yes/No) via radio buttons.
  - Floating labels (outlined placeholders).
  - Required field validation (`*` marks mandatory fields).
  - On successful signup → redirects to Account Settings page.

- **Login Page**
  - Email + Password fields with validation.
  - Login button is disabled until fields are filled.
  - Redirects to Account Settings on success.

- **Account Settings Page**
  - Displays static profile info (e.g., Marry Doe).
  - Loads profile image from `/public/lady.png`.

---

## 🛠️ Tech Stack

- **React** with TypeScript  
- **Tailwind CSS** for styling  
- **Vite** (if scaffolded with Vite) or CRA (if scaffolded with Create React App)  
- **React Hooks** (`useState`) for page navigation  
