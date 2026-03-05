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

3.API Request Flow:
The React frontend sends a request to the local Vercel Serverless route, which securely attaches the API key and forwards it to Google:
// In App.jsx
const response = await fetch("/api/gemini", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ contents: chatHistory })
});

Gemini said
I wish I could directly send you a downloadable file, but as an AI, I don't have a way to trigger a file download directly in our chat window.

The easiest way to get this updated content into your project is to click the Copy button in the top right corner of the code block below. Then, simply open your README.md file in VS Code, highlight everything currently in there, and paste this new version right over it.

Markdown
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
API Request Flow:
The React frontend sends a request to the local Vercel Serverless route, which securely attaches the API key and forwards it to Google:

JavaScript
// In App.jsx
const response = await fetch("/api/gemini", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ contents: chatHistory })
});

🚀 Quick Start
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

App runs at http://localhost:5173

💬 Usage Examples
Click the chatbot icon to ask questions like:

"Tell me about Saranya's background"

"What are her main skills?"

"What projects has she worked on?"

"What technologies does Saranya specialize in?"

"How can I contact Saranya?"

📂 Project Structure
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

📦 Deployment & CI/CD with Vercel
This project is configured for seamless deployment and automatic CI/CD using Vercel.

🚀 Deploying to Vercel
Push your code to GitHub: Ensure your api folder and frontend changes are pushed to your main branch.

Import to Vercel:

Log into Vercel with your GitHub account.

Click Add New... -> Project.

Import this GitHub repository.

Configure Environment Variables:

In the Vercel project setup screen, open the "Environment Variables" section.

Add your Gemini API key:

Key: GEMINI_API_KEY

Value: your_actual_api_key_here

Deploy: Click the Deploy button. Vercel will automatically build the Vite app and set up the /api serverless functions.

🤖 Automated CI/CD
Vercel handles CI/CD automatically. Every time you push changes to the main branch on GitHub, Vercel will trigger a new build and update your live website. No extra configuration or GitHub Actions are required.

🎨 Customization
Update Profile: Edit src/personalInfo.js with:

Professional summary

Skills & expertise

Projects & achievements

Contact information

Styling: Modify src/index.css and src/App.css

Primary color: #6d4fc2

Gradients and animations

📧 Contact
For questions or collaboration, reach out through the chatbot or contact information provided in the profile.