# Camco Construction

A multi-page website built with plain HTML, CSS, and JavaScript.

> **When building this project:** Update the title and description above once you know what the app will be for. Replace "Static Website" and this paragraph with a specific name and brief description of the site.

## Running Locally

### MacOS 13 and Above

```bash
nvm use 22
npx wrangler pages dev ./ --live-reload
```

#### How to return to devshop standard node version

```bash
nvm use 18.20.8
```

### Pre MacOS 13

```bash
podman machine start
podman compose up --watch
```

### How to install

MacOS 13 and Above

Make sure you have NVM installed on your machine

```bash
nvm install --lts v22
nvm use 22
npm i wrangler
npx wrangler pages dev ./ --live-reload
```

Pre MacOS 13

Go to important links for projects, In the camco section is a folder,
Follow the steps from running.md

### Open `http://localhost:8788` in your browser.

## Git Workflow

1. **Create a dev branch** (in GitHub or locally): `git checkout -b dev` from `main`
2. **Clone the repository**: `git clone <repo-url>`
3. **Create a feature branch** using your initials and the website name:  
   `git checkout -b <your-initials>/<website-name>`  
   Example: `abc/new-website-name`
4. **Build the website** on this branch
5. **Commit and push**:
   ```bash
   git add .
   git commit -m "Your message"
   git push origin <branch-name>
   ```

## Structure

```
/
├── index.html
├── about.html
├── contact-us.html
├── includes/       # Shared header, footer, nav (if using a build step)
├── css/
│   └── main.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── media/
├── Page Context/ # Contains a list of MarkDown files used to show how a corresponding page should be laid out
├── Template Pages/ # Contains a list of HTML files to be used as templates for new pages
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── README.md
└── AGENTS.md
```

## Guidelines

See [AGENTS.md](./AGENTS.md) for HTML, CSS, and JavaScript best practices, anti-patterns, and development guidelines.
