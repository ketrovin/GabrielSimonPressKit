# Gabriel Simon Author Press Kit

Welcome to the digital and text press kit for Gabriel Simon, Mi'kmaw speculative fiction author and creator of the ongoing *Deadlands* zombie apocalypse series.

This repository contains both a high-quality, interactive web-based press kit and a portable, text-based press kit for offline reading and distribution.

---

## What's Included
* `index.html`, `index.css`, `index.js`: The source code for the interactive digital press kit website.
* `presskit.md`: A portable, offline text version of the press kit containing biographies, book summaries, Q&As, and quick facts.
* `covers/`: High-resolution cover art files for the books in the series.
* `covers/covers_kit.zip`: A downloadable archive containing all book covers for press and review usage.

---

## The Deadlands Series
*Deadlands* is an ongoing anthology of zombie apocalypse survival horror written by Gabriel Simon. The series exploring themes of resilience, technology, history, and First Nations perspectives through the lens of societal collapse:
1. **Volume 1: No Treaty With The Dead** (eBook & Paperback) – Focuses on Native American and First Nations protagonists.
2. **Volume 2: Static and Sinew** (eBook & Paperback) – Explores the clash between technology and visceral survival.
3. **Volume 3: The Dead and the Dustbowl** (eBook & Paperback) – A 518-page epic set during the 1930s Great Depression.
4. **Volume 4: The Dead and The Signal** (eBook) – The latest release (June 23, 2026) focusing on communication and survival.

---

## Local Development & Preview
To preview the interactive press kit site on your computer:
1. Open the folder in your file explorer.
2. Double-click `index.html` to open it directly in your web browser.
3. Alternatively, if you have a local server (like Live Server in VS Code or python):
   ```bash
   # Run a simple python web server in this directory:
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

---

## How to Publish on GitHub Pages (Free Hosting)
You can host this press kit website online for free using GitHub Pages:

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and log in.
2. Click **New** to create a new repository.
3. Name your repository `presskit` (or something similar).
4. Keep the repository **Public** (required for free GitHub Pages hosting).
5. Do **not** initialize it with a README, `.gitignore`, or license (this project already has them!).
6. Click **Create repository**.

### Step 2: Push Your Local Files to GitHub
Open your terminal (or command prompt) in this project folder and run the following commands (replace `yourusername` with your actual GitHub username):

```bash
# Add your GitHub repository as the remote destination
git remote add origin https://github.com/yourusername/presskit.git

# Rename default branch to main (if not already main)
git branch -M main

# Add all files to stage
git add .

# Commit files
git commit -m "Initial commit of press kit website and assets"

# Push to GitHub
git push -u origin main
```

### Step 3: Turn on GitHub Pages
1. Go to your repository on GitHub.com.
2. Click on the **Settings** tab (gear icon at the top of the repository page).
3. In the left-hand sidebar, click on **Pages** (under the "Code and automation" section).
4. Under the **Build and deployment** section, select **Deploy from a branch** as the source.
5. Under **Branch**, click the dropdown that says `None` and select `main` (and leave folder as `/root`).
6. Click **Save**.

Within 1–2 minutes, GitHub will deploy your site! Your official press kit URL will be:
`https://yourusername.github.io/presskit/` (where `yourusername` is your GitHub username).
