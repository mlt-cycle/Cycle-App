# Cycle Club

The Cycle Club web app, rebuilt in code on the existing Supabase backend ("Cycle Core"). Members keep their accounts, profiles and photos.

## Stack

- Next.js 16 (App Router, Cache Components, `src/proxy.ts` for session refresh)
- Supabase via `@supabase/ssr`: every query runs as the signed-in member, so Row Level Security applies
- Plain CSS with the Cycle design tokens (`src/app/globals.css`) and CSS Modules per screen

## Run locally

```bash
cp .env.example .env.local   # then paste the publishable key (Supabase > Project Settings > API Keys)
npm install
npm run dev
```

### Fonts

Benton Sans is a licensed typeface and this repository is public, so the font files are **not** committed.
Put `BentonSans-Book.otf`, `BentonSans-Regular.otf` and `BentonSans-Medium.otf` in `public/fonts/`.
Without them the app falls back to Inter / system sans. For production, upload them through the hosting provider
(or a private asset store) rather than Git.

## How data is read

- `src/lib/members.ts` is the data access layer. It never uses a secret key.
- Member photos live in the private `private-files` bucket. The server signs URLs (1 hour) with the member's session.
- Primary expertise = the expertise a member lists most often across their experiences (profiles have no expertise column).
- Role comes from `users__status` (Talent, Mentor; Corporate is shown as Internal).
- "Available" = the member has weekly availability slots. Absences are private per member under current RLS.
- Profiles without a first and last name are hidden.

## Data rules

Member profiles and photos are personal data (GDPR). Never commit exports, photos or keys.
Only the publishable key goes in the client. Database changes go through migrations on a Supabase branch, not production.

## Screens

| Route | Status |
|---|---|
| `/login` | Email and password sign-in |
| `/` Home | Welcome block, member count, New in the Club |
| `/club` | Full roster with filters and search |
| `/members/[id]` | Profile: photo, experience, expertise, projects, experience history, links |
| `/collaborations`, `/calendar`, `/inbox` | Placeholders, next in the rebuild |
