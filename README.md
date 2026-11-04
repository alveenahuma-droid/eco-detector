# EcoDetect: AI E-Waste Detector

A web app that uses AI to tell you whether an item is **e-waste** or **general waste**, gives a short disposal tip, and shows nearby drop-off locations. Built by a team for a pitching event.

## Features

- Upload or drag and drop a photo of an item (images up to 5 MB)
- AI identifies the item and classifies it as E-waste or General Waste
- Simple, beginner-friendly disposal tip for every result
- Searchable list of e-waste drop-off locations with a "Get Directions" link (Google Maps)
- Responsive UI with toast notifications and error handling

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend:** Supabase Edge Function (Deno) at `supabase/functions/analyze-ewaste`
- **AI:** Google Gemini 2.5 Flash (vision) through the Lovable AI Gateway

## How It Works

1. The user uploads a photo and the app converts it to base64.
2. The app calls the `analyze-ewaste` Supabase Edge Function.
3. The function sends the image and a prompt to the AI model. The reply follows a fixed format: `Item Detected`, `Category`, `Disposal Tip`.
4. The app reads the `Category` line and shows the result with an E-Waste or General Waste badge.

## Getting Started

Requirements: Node.js 18+ and a Supabase project.

```bash
git clone https://github.com/<your-username>/ecodetect-ewaste-detector.git
cd ecodetect-ewaste-detector
npm install
cp .env.example .env     # then fill in your Supabase values
npm run dev
```

The app runs at http://localhost:8080

### Environment variables

| Variable | Description |
|---|---|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Your Supabase anon (public) key |
| `VITE_SUPABASE_PROJECT_ID` | Your Supabase project ID |

### Deploy the AI function

```bash
supabase functions deploy analyze-ewaste
supabase secrets set LOVABLE_API_KEY=your-key
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Known Limitations

- Drop-off locations are **sample data** with placeholder addresses and phone numbers. Replace them with real centers, or connect a maps/places API.
- Results come from an AI model, so unusual items can be misclassified.
- The AI function has no per-user rate limiting yet.

## Possible Improvements

- Real location search using the Google Places API or geolocation
- Camera capture on mobile
- Save scan history per user with Supabase Auth
- Show a confidence score
- Rate limiting on the edge function

## License

MIT
