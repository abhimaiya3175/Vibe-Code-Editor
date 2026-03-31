# 🧠 Vibecode Editor – AI-Powered Web IDE

![Vibecode Editor Thumbnail](public/vibe-code-editor-thumbnaail.svg)

**Vibecode Editor** is a blazing-fast, AI-integrated web IDE built entirely in the browser using **Next.js App Router**, **WebContainers**, **Monaco Editor**, and **local LLMs via Ollama**. It offers real-time code execution, an AI-powered chat assistant, and support for multiple tech stacks — all wrapped in a stunning developer-first UI.

---

## 🚀 Features

npm run dev
- 🎨 **Modern UI** – Built with TailwindCSS & ShadCN UI.
- 🌗 **Dark/Light Mode** – Seamlessly toggle between themes.
- 🧱 **Project Templates** – Choose from React, Next.js, Express, Hono, Vue, or Angular.
- 🗂️ **Custom File Explorer** – Create, rename, delete, and manage files/folders easily.
- 🖊️ **Enhanced Monaco Editor** – Write faster with rich syntax highlighting, on-the-fly formatting, intuitive keybindings, and AI-powered autocomplete.
- 💡 **AI Core powered by Google Gemini** – Integrated with the Gemini API for advanced code generation, file manipulation, and real-time completions.
- 🎨 **Modern Dashboard & Management** – Initiate new playgrounds with robust cloned templates, star your favorites, and track recent projects in a sleek, unified dashboard.
- ⚙️ **WebContainers Integration** – Boot and run full frontend/backend apps directly in your browser, no local runtime setup required.
- 🤖 **Agentic AI Assistant** – A hands-on AI teammate that can **read files**, **write code**, and **run terminal commands** in your workspace.
- 🌍 **Community Discover Hub** – Share projects publicly with one toggle and get discovered through the global creator gallery.
- 🍴 **Template Forking** – Explore community builds by stack and fork any project into your workspace in seconds.
- 💻 **Interactive Shell** – Use a live xterm.js-powered terminal synced with your running container for real-time command execution.
- 🔍 **Masonry Discovery** – Browse a Pinterest-style discovery wall with real-time search across published landing pages.

---

## 🧱 Tech Stack

| Layer         | Technology                                   |
|---------------|----------------------------------------------|
| Framework     | Next.js 15 (App Router)                      |
| Styling       | TailwindCSS, ShadCN UI                       |
| Language      | TypeScript                                   |
| Auth          | NextAuth (Google + GitHub OAuth)             |
| Editor        | Monaco Editor                                |
| AI Engine    | Google Gemini API                           |
| Runtime      | WebContainers                               |
| Terminal     | xterm.js                                    |
| Database     | MongoDB (with Prisma)                       |

---

## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/vibecode-editor.git
cd vibecode-editor
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file using the template:

```bash
cp .env.example .env.local
```

Then, fill in your credentials:

```env
AUTH_SECRET=your_auth_secret
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_secret
DATABASE_URL=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
GEMINI_API_KEY=your_gemini_api_key_from_google_ai_studio
```

### 4. Start Local MongoDB & Ollama
**MongoDB Requirement**: Prisma requires a Replica Set for this project.
1. Start MongoDB on port `27031`:
   ```bash
   mongod --port 27031 --replSet rs0 --dbpath "C:/your/data/db"
   ```
2. Initialize the replica (first time only):
   ```bash
   node init-replica.js
   ```

**AI Engine**: This project uses the Google Gemini API. Get your API key from [Google AI Studio](https://aistudio.google.com/) and add it to your `.env` file.

### 5. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.


---

## 🎯 Keyboard Shortcuts

* `Ctrl + Space` or `Double Enter`: Trigger AI suggestions
* `Tab`: Accept AI suggestion
* `/`: Open Command Palette (if implemented)

---



---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

* [Monaco Editor](https://microsoft.github.io/monaco-editor/)
* [Ollama](https://ollama.com/) – for offline LLMs
* [WebContainers](https://webcontainers.io/)
* [xterm.js](https://xtermjs.org/)
* [NextAuth.js](https://next-auth.js.org/)

```
