# Flowline Sverige AB

Produktionsklar grund for Flowline Sveriges nya hemsida.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

## Lokal utveckling

```bash
npm install
npm run dev
```

Oppna `http://localhost:3000`.

## Miljovariabler

Skapa `.env.local` lokalt och lagg in:

```bash
NEXT_PUBLIC_SITE_URL=https://flowline.se
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
```

Anvand aldrig Supabase `service_role` eller secret key i `NEXT_PUBLIC_*`.

## Vercel

Lagg in samma publika variabler i Vercel Project Settings -> Environment Variables:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Build command: `npm run build`

Install command: `npm install`

Output hanteras automatiskt av Vercel for Next.js.
