

# 🔐 Secure Data Sender

A modern, lightweight web application that lets authorized users securely submit and transmit sensitive data to a backend server. Built with a responsive glassmorphism UI and password-protected access layer.

---

## 📦 Features

- 🔐 **Access Control**: Only users with the correct password can access the data submission form.  
- 📤 **Secure Data Submission**: Send sensitive data through a protected POST request.  
- 💅 **Beautiful UI**: Glassmorphic interface with smooth animations and responsive design.  
- 🔄 **Loading Spinner**: Visual feedback for user actions (e.g., login process).  
- 🧼 **Clear UX**: Easily clear form data and toggle login/logout states.  

---

## ⚙️ Tech Stack

| Layer    | Technology                     |
|----------|--------------------------------|
| Frontend | HTML, CSS, JavaScript (Vanilla)|
| Backend  | Node.js + Express              |
| Hosting  | [Render](https://render.com)   |
| Auth     | `.env`-based password system   |

---

## 🚀 Live Demo

**Backend URL:**  
🔗 [https://data-collector-xaow.onrender.com](https://data-collector-xaow.onrender.com)  
*Note: Only backend is hosted. You'll need to run or host the frontend separately.*

---

## 🛠️ Getting Started (Local Dev)

### 🔧 Prerequisites

- [Node.js](https://nodejs.org/) installed  
- Optional: Live Server extension for frontend testing

### 📁 Backend Setup

1. Clone the repo or navigate to your `server` folder.  
2. Create a `.env` file:

   ```env
   ACCESS_PASSWORD=yourpassword
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

---

### 🌐 Frontend Setup

Just open `index.html` in your browser, or use Live Server (recommended).

To test locally, ensure this code is present in `index.html`:

```js
const API_BASE = 'http://localhost:5080';
```

---

## 🔐 Password Logic

The backend uses this logic to validate the password:

```js
if (req.body.password === process.env.ACCESS_PASSWORD) {
  // Access granted
} else {
  // Access denied
}
```

---

## 📂 Project Structure

```txt
debt-collector/
├── public/          # Frontend (index.html, styles)
├── server/          # Backend (Node.js/Express)
│   ├── server.js
│   └── .env
```

```


```
