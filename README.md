# Amit Kumar's Portfolio

This is a personal portfolio website built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/), designed to showcase my experience and projects.

## Project Structure

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (via GitHub Actions)

## Deployment Instructions

To publish this portfolio to GitHub Pages so anyone can see it, follow these steps:

1.  **Create a Repository on GitHub**
    - Go to GitHub and create a new repository (e.g., `portfolio`).
    - **Do not** initialize with README, .gitignore, or license (we already have them).

2.  **Push the Code**
    Open your terminal in this folder and run:

    ```bash
    git add .
    git commit -m "Initial commit of portfolio website"
    git branch -M main
    git remote add origin https://github.com/am1t-goswam1/portfolio.git
    git push -u origin main
    ```

    _(Replace `YOUR_REPO_NAME` with the name of the repository you created)_

3.  **Configure GitHub Pages**
    - Go to your repository **Settings** on GitHub.
    - Click on **Pages** in the left sidebar.
    - Under **Build and deployment**, select **GitHub Actions** as the source.

4.  **Wait for Deployment**
    - The GitHub Action defined in `.github/workflows/deploy.yml` will automatically run.
    - Once finished, your site will be live at `https://am1t-goswam1.github.io/portfolio`.

## Local Development

To run the project locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# portfolio
