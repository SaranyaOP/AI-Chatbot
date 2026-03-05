
# Saranya's AI Assistant Chatbot 🤖

An intelligent AI-powered chatbot built with React and Vite that showcases Saranya's professional portfolio through conversations securely powered by Google's Gemini API and Vercel Serverless Functions.

## 📋 Project Overview

This is an interactive AI chatbot that introduces Saranya's background, experience, skills, and projects. Users can ask questions and get intelligent responses about Saranya's professional journey.
**Demo:** [Add your Vercel URL here, e.g., https://your-project.vercel.app]

## 🌟 Features

- **AI-Powered Conversations** - Uses Google Gemini API for intelligent responses
- **Secure Backend** - API keys are protected using Vercel Serverless API routes
- **Professional Portfolio Showcase** - Displays background, skills, and projects
- **Interactive Chat Interface** - Modern UI with smooth animations
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Real-time Chat History** - Maintains conversation context
- **Easy Toggle** - Click button to open/close chatbot window

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| **React** | UI framework |
| **Vite** | Build tool & dev server |
| **Google Gemini API** | AI responses generation |
| **Vercel Serverless** | Secure backend API routing |
| **CSS3** | Styling & animations |
| **JavaScript (ES6+)** | Application logic |

## ⚙️ API Configuration

To keep the API key secure, this project uses a backend proxy route. The key is never exposed to the browser.

1. **Get API Key:**
   - Visit [Google AI Studio](https://aistudio.google.com)
   - Create a new API key

2. **Configure Local Environment:**
   Create a `.env` file in the root directory (do not commit this file):
   ```env
   GEMINI_API_KEY=your_google_gemini_api_key_here
   
3. **API Request Format:**
The React frontend sends a request to the local Vercel Serverless route, which securely attaches the API key and forwards it to Google:

```javascript
// In App.jsx
const response = await fetch("/api/gemini", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ contents: chatHistory })
});
```
## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

App runs at http://localhost:5173

##💬 Usage Examples

Click the chatbot icon to ask questions like:

- *"Tell me about Saranya's background"*
- *"What are her main skills?"*
- *"What projects has she worked on?"*
- *"What technologies does Saranya specialize in?"*
- *"How can I contact Saranya?"*

## 📂 Project Structure
```
/
├── api/
│   └── gemini.js            # Secure serverless backend route
├── src/
│   ├── components/
│   │   ├── ChatbotIcon.jsx  # Chatbot icon
│   │   ├── ChatForm.jsx     # Message input form
│   │   └── ChatMessage.jsx  # Message display
│   ├── App.jsx              # Main component
│   ├── personalInfo.js      # Profile data & system instructions
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point

```

---

# 🚀 Deployment Guide (Vercel)

## 1. Push Code to GitHub

Make sure your latest code is pushed to the **main branch** of your GitHub repository.

Required folders/files should include:

* `api/` – Serverless API functions
* `src/` – Frontend source code
* `package.json`
* `vite.config.js`

Example command:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

---

## 2. Import Project to Vercel

1. Log in to **Vercel** using your GitHub account.
2. Click **Add New → Project**.
3. Select and **import your GitHub repository**.

---

## 3. Configure Environment Variables

During project setup in Vercel:

1. Open the **Environment Variables** section.
2. Add the following variable:

```
Key: GEMINI_API_KEY
Value: your_actual_api_key_here
```

This API key allows the chatbot backend to communicate with the **Gemini AI API**.

---

## 4. Deploy the Project

Click **Deploy**.

Vercel will automatically:

* Build the **Vite frontend**
* Configure **/api serverless functions**
* Deploy the project to a live URL

After deployment, your chatbot will be accessible online.

---

# 🤖 Automated CI/CD

Vercel provides **automatic CI/CD**.

Whenever you push changes to the **main branch**:

1. Vercel detects the update.
2. A new build starts automatically.
3. Your live website gets updated.

No additional **GitHub Actions** or manual setup is required.

---

# 🎨 Customization

## Update Profile Information

Edit the file:

```
src/personalInfo.js
```

Update:

* Professional summary
* Skills & expertise
* Projects & achievements
* Contact information

---

## Styling

Modify the following files:

```
src/index.css
src/App.css
```

Customization options include:

* Primary color: `#6d4fc2`
* Gradients
* Animations
* Layout styles

---

# 📧 Contact

For questions, suggestions, or collaboration:

Reach out using the chatbot or the contact information listed in the profile.

---
