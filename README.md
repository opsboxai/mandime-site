# mandime-site

The public site behind mandime.com. Next.js (App Router) + MDX. Posts live in
`content/posts/*.mdx` with cover images in `public/posts/`. The
[Mandime Curator](../Mandime) app commits new posts here via the GitHub API,
and Vercel auto-deploys on each push.

## Local dev

```bash
npm install
npm run dev      # http://localhost:3000
```

## How posts work

Each post is an MDX file with frontmatter:

```mdx
---
title: "A black titanium dive watch that costs less than dinner"
date: "2026-05-21"
source: "Hodinkee"
source_url: "https://..."
excerpt: "One-line summary for cards + SEO."
cover: "/posts/my-slug.jpg"
alt: "A black titanium dive watch on a wrist."
hashtags: "watches, watchnerd, dive"
---

The post body, in the Mandime voice. Plain prose or MDX.
```

The Curator writes both the `.mdx` file and the cover image, then commits them
in one shot. No manual editing needed.

## Deploy to Vercel

1. Push this folder to a new GitHub repo (see below).
2. On vercel.com → "Add New Project" → import the repo.
3. Framework preset: **Next.js** (auto-detected). No env vars needed.
4. Deploy. Point your `mandime.com` domain at the Vercel project under
   Project → Settings → Domains.

## Push to GitHub

```bash
cd ~/mandime-site
git init
git add -A
git commit -m "Initial Mandime site"
gh repo create mandime-site --private --source=. --push
# (or create the repo on github.com and `git remote add origin ...` + push)
```

Then in the Curator's `backend/.env`, set:

```
GITHUB_TOKEN=<a PAT with 'repo' scope>
MANDIME_REPO=<your-username>/mandime-site
MANDIME_BRANCH=main
MANDIME_CONTENT_PATH=content/posts
```
