# 🎓 B.Tech CSE Final Year - Student Records Management System (2026)

> A modern, privacy-focused Full-Stack Student Portfolio Manager. Profiles are hidden by default and shown only when searched by Name or Roll No. Built as a Final Year Major Project.

![React](https://img.shields.io/badge/Frontend-React%20Vite-61DAFB?style=for-the-badge&logo=react)
![Flask](https://img.shields.io/badge/Backend-Flask%20Python-000000?style=for-the-badge&logo=flask)
![SQLite](https://img.shields.io/badge/Database-SQLite-003B57?style=for-the-badge&logo=sqlite)
![Final Year](https://img.shields.io/badge/Batch-CSE%20Final%20Year%202026-red?style=for-the-badge)

**🔗 GitHub Repo:** https://github.com/SunilMishra123/Student-Records-Management-system  
**📂 Frontend Code:** https://github.com/SunilMishra123/Student-Records-Management-system/tree/main/frontend

---

### 🔥 Why This Project is Different?

Normal projects me saare students ek sath dikhte hain. Is project me maine **Privacy Search Logic** add kiya hai:

- Save karne ke baad student card **hide** rehta hai
- Top search bar me `Name` ya `Roll No` likhne par hi uska profile **animation ke saath** aata hai
- Search clear karne par phir se hide

Ye logic interviews me impress karta hai.

### ✨ Features

- **🔍 Privacy Search:** `search.trim() === '' ? [] : filtered` - No data leak on homepage
- **📸 Profile Photo Upload:** File -> Base64 -> Live Preview (80px circle)
- **🎨 Final Year CSE Theme:** Code watermark background, Animated gradient header, `B.TECH CSE` badge on every card
- **🎯 B.Tech Professional Fields:** Full Name, Roll No (e.g. CSE21001), Email, Phone, Branch (CSE/ECE/IT/ME/EE), Semester (1-8), CGPA, Skills, GitHub, LinkedIn
- **⚡ Animations:** `up` slide animation, `pop` on search icon, `float` tech circles in header, card hover lift
- **📱 Fully Responsive:** Desktop `1.6fr + 0.8fr`, Mobile `1fr` + sticky form
- **🗑️ Delete:** One-click delete with confirmation

### 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React.js (Vite), Axios, React Hooks (useState, useEffect) |
| **Backend** | Flask, Flask-CORS, Python |
| **Database** | SQLite (auto-created `students.db`) |
| **Styling** | Pure CSS3, Poppins + JetBrains Mono fonts, CSS Keyframes |
| **Storage** | Base64 for images |

### 📂 Project Structure
Student-Records-Management-system/
├── backend/
│   ├── app.py              # Flask APIs: GET, POST, DELETE
│   └── students.db         # SQLite DB (auto-generated)
├── frontend/
│   ├── src/
│   │   ├── App.jsx         # Main Logic - Search Hide/Show + Photo Upload
│   │   └── App.css         # Final Year Theme - watermark, badge, animations
│   ├── index.html
│   └── package.json
└── README.md               # This file

Step 2: Frontend Start-:

cd frontend
npm install
npm run dev
# Runs at: http://localhost:5173

