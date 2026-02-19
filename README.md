# Upagraha — Club Website

A Jekyll-based static site for the Upagraha space & technology club.  
Theme: **Black · Purple · White**

---

## Quick Start

```bash
# 1. Install dependencies
bundle install

# 2. Run locally
bundle exec jekyll serve

# 3. Open in browser
http://localhost:4000
```

---

## Editing Content

All content lives in simple Markdown files. **No coding required.**

| File | What it controls |
|---|---|
| `index.md` | About page — tagline, description, stats, team members |
| `achievements.md` | List of achievements / awards |
| `projects.md` | Ongoing and completed projects |
| `sponsors.md` | Sponsor tiers and contact email |

Each file has a clearly marked `EDIT THIS FILE` section at the top (the YAML front matter between `---` lines).

### Adding a Team Member (`index.md`)
```yaml
team:
  - name: Your Name
    role: Your Role
```

### Adding a Project (`projects.md`)
```yaml
projects:
  - name: "Project Name"
    status: ongoing        # or: completed
    description: "What the project does."
    tags: ["Tag1", "Tag2"]
    team_size: 5
    started: "Jan 2025"
    ended: "Jun 2025"      # omit if ongoing
```

### Adding an Achievement (`achievements.md`)
```yaml
achievements:
  - icon: "🏆"
    title: "Achievement Title"
    description: "Brief description of what was achieved."
    year: "2025"
    event: "Event or Venue Name"
```

### Adding a Sponsor (`sponsors.md`)
```yaml
sponsors:
  - name: "Company Name"
    tier: gold             # platinum / gold / silver / community
    logo_initial: "C"      # first letter shown in logo circle
    description: "Short description of support"
    url: "https://company.com"  # leave "" if no website
```

---

## Structure

```
upagraha/
├── _config.yml          # Site title, description
├── _layouts/
│   └── default.html     # Main HTML layout
├── _includes/
│   ├── header.html      # Navigation bar
│   └── footer.html      # Footer
├── assets/
│   ├── css/main.css     # All styles
│   └── js/main.js       # Filter + scroll animations
├── index.md             # About page
├── achievements.md      # Achievements page
├── projects.md          # Projects page
└── sponsors.md          # Sponsors page
```

---

## Deployment

Works with GitHub Pages, Netlify, or Vercel.  
Push to a repo and enable Pages — no extra config needed.
