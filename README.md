# folio

Kevin Conklin's personal site and blog, live at https://kevconklin.com. It's built with Next.js as a static export and deployed to GitHub Pages on every push to `main`. DNS for the domain is managed in Vercel.

## Writing a blog post

1. Create a Markdown file in `content/posts/`. The filename becomes the URL, so `my-first-post.md` is served at `/blog/my-first-post/`.
2. Start the file with frontmatter:

   ```markdown
   ---
   title: My First Post
   date: 2026-09-27
   summary: Optional one-line description shown in post lists.
   draft: true   # optional; drafts are left out of the build
   ---

   Post body in regular Markdown.
   ```

3. Preview it locally with `npm run dev`, then commit and push to publish.

The build fails with a clear error if a post is missing `title` or has a `date` that isn't in `YYYY-MM-DD` format.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static output in ./out
```

## Layout

- `src/app/page.tsx`: home page (recent posts, projects)
- `src/app/about/page.tsx`: bio and contact links
- `src/lib/site.ts`: site name and tagline
- `src/app/blog/`: blog index and post pages
- `src/lib/posts.ts`: reads and parses the Markdown posts
- `src/app/globals.css`: all of the site's styles
