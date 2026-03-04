# Saranya's AI Assistant Chatbot 🤖

An intelligent AI-powered chatbot built with React and Vite that showcases Saranya's professional portfolio through conversations powered by Google's Gemini API.

## 📋 Project Overview

This is an interactive AI chatbot that introduces Saranya's background, experience, skills, and projects. Users can ask questions and get intelligent responses about Saranya's professional journey.

## 🌟 Features

- **AI-Powered Conversations** - Uses Google Gemini API for intelligent responses
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
| **CSS3** | Styling & animations |
| **JavaScript (ES6+)** | Application logic |

## ⚙️ API Configuration

1. **Get API Key:**
   - Visit [Google AI Studio](https://aistudio.google.com)
   - Create a new API key

2. **Configure Environment:**
   Create `.env` file in root directory:
   ```env
   VITE_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent
   VITE_API_KEY=your_google_gemini_api_key_here
   ```

3. **API Request Format:**
   ```javascript
   const response = await fetch(VITE_API_URL, {
     method: 'POST',
     headers: {
       'x-goog-api-key': VITE_API_KEY,
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

App runs at `http://localhost:5173`

## 💬 Usage Examples

Click the chatbot icon to ask questions like:

- *"Tell me about Saranya's background"*
- *"What are her main skills?"*
- *"What projects has she worked on?"*
- *"What technologies does Saranya specialize in?"*
- *"How can I contact Saranya?"*

## 📂 Project Structure

```
src/
├── components/
│   ├── ChatbotIcon.jsx      # Chatbot icon
│   ├── ChatForm.jsx         # Message input form
│   └── ChatMessage.jsx      # Message display
├── App.jsx                  # Main component
├── personalInfo.js          # Profile data
├── index.css               # Global styles
└── main.jsx                # Entry point
```

## 📦 Deployment & CI/CD with Firebase

Follow these steps to host the chatbot on Firebase Hosting and configure automated delivery using GitHub Actions.

### 🔧 Firebase Setup

1. **Install Firebase CLI** globally if you haven’t already:
   ```bash
   npm install -g firebase-tools
   ```
2. **Log in** to Firebase from the terminal:
   ```bash
   firebase login
   ```
3. **Create a Firebase project** via the console or run:
   ```bash
   firebase projects:create your‑project‑id
   ```
4. **Initialize hosting** inside this repository:
   ```bash
   firebase init hosting
   ```
   - Select the project you created.
   - Set the public directory to `dist` (Vite’s output).
   - Configure as a single‑page app (rewrite all urls to `/index.html`).
   - Say **no** when asked to overwrite `index.html`.

   This generates `firebase.json` and `.firebaserc` (commit them to Git).  Replace
   `YOUR_FIREBASE_PROJECT_ID` in `.firebaserc` with your real project ID.

### 🚀 Manual Deploy

Build the production bundle and push to Firebase:

```bash
npm run build
firebase deploy --only hosting
```

### 🤖 Automated GitHub Actions

A workflow at `.github/workflows/firebase-hosting.yml` is included and will run on
pushes to the `main` branch. It performs a fresh install, builds the app, and then
deploys using the Firebase CLI.

1. **Generate a CI token** locally:
   ```bash
   firebase login:ci
   ```
   Copy the output string.
2. **Add repository secret** named `FIREBASE_TOKEN` (Settings → Secrets → Actions)
   with that token value.
3. Push your changes to `main` and confirm the workflow executes successfully.

Once configured, every merge to `main` will trigger a build + deploy automatically.

---

## 🎨 Customization

**Update Profile:** Edit `src/personalInfo.js` with:
- Professional summary
- Skills & expertise
- Projects & achievements
- Contact information

**Styling:** Modify `src/index.css` and `src/App.css`
- Primary color: `#6d4fc2`
- Gradients and animations

## 📧 Contact

For questions or collaboration, reach out through the chatbot or contact information provided in the profile.

---

**Built with ❤️ using React, Vite, and Google Gemini AI**
