# 📚 College Course Feedback System

A robust **MERN stack** web application designed to streamline the collection and management of course feedback within a college environment. It supports distinct functionalities for both **Students** and **Faculty**.

---

## 🚀 Features

### 👨‍🏫 Faculty Privileges

-   ✅ Add new courses to the database
-   ✅ Manage course feedback assignments (add/remove)
-   ✅ Manage course materials in the backpack (add/remove)
-   ✅ Upload various material types: audio, video, text, Word, PPT, PDF, XLSX, etc.
-   ✅ Review overall feedback for all offered courses

### 👩‍🎓 Student Privileges

-   ✅ Provide feedback for assigned courses
-   ✅ Download course materials from the backpack

---

## 🧰 Tech Stack

| Component     | Tech                           |
|---------------|--------------------------------|
| Frontend      | React.js                       |
| Backend       | Node.js, Express.js            |
| Database      | MongoDB                        |
| Deployment    | (Assumed: Heroku/Vercel/Netlify) |
| Language      | JavaScript                     |

---

## 🛠️ Setup Instructions

To set up the project locally:

```bash
# Clone the repository (assuming it's named erp_ads_dept)
git clone https://github.com/Namasivaayam-L/erp_ads_dept.git # Replace with actual repo URL if different
cd erp_ads_dept

# Install server dependencies
cd server
npm install
cd ..

# Install client dependencies
cd client
npm install
cd ..
```

### ⚙️ Configuration

-   Ensure MongoDB is running and accessible.
-   Update any necessary database connection strings or environment variables in the `server` directory (e.g., in a `.env` file).

---

## 🧑‍💻 Run the Application

```bash
# Start the backend server
cd server
node server.js & # Runs in background, or use 'npm start' if defined
cd ..

# Start the frontend development server
cd client
npm start
```

The application should be accessible at `http://localhost:3000` (for frontend) and `http://localhost:5000` (for backend API, if configured on port 5000).

---

## 🔮 Future Enhancements

-   ➕ Implement an attendance register
-   📝 Enable assignment submission and leave application to faculty
-   🗣️ Add an alumni discussion section

---

## 📂 Project Structure

```
.
├── client/                     # Frontend React application
│   ├── public/                 # Static assets
│   ├── src/                    # React components, pages, services
│   ├── package.json            # Client dependencies
│   └── ...
├── server/                     # Backend Node.js/Express.js application
│   ├── collections/            # MongoDB collection definitions (if any)
│   ├── models/                 # Mongoose models
│   ├── routes/                 # API endpoints
│   ├── utilities/              # Helper functions
│   ├── db.js                   # Database connection setup
│   ├── server.js               # Main server entry point
│   ├── package.json            # Server dependencies
│   └── ...
├── README.md                   # Project overview and documentation
└── .gitignore                  # Git ignore rules
