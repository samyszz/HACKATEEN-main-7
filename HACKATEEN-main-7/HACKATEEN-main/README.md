# HACKATEEN Project

## Setup Instructions

1. Install dependencies:

```bash
npm install react-leaflet leaflet
```

2. Run the development server:

```bash
npm run dev
```

## Notes on Map Replacement

- The map component in `app/localizacao/page.tsx` has been updated to use `react-leaflet` instead of `@react-google-maps/api`.
- Make sure to install the required packages as shown above.
- The map uses OpenStreetMap tiles, which are free to use.

## TypeScript Fixes

- The new map component uses TypeScript. If you encounter type errors, you may need to add type declarations or adjust your tsconfig.json accordingly.

## Next Steps

- After installing dependencies, rebuild the project with:

```bash
npx next build
```

- Then start the development server:

```bash
npx next dev
```

This should fix the build errors and the broken design issue.
