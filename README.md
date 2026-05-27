# Petr Komar - Portfolio

Personal portfolio built with Next.js, TypeScript and Tailwind CSS 4.
Live: [next-js-iota-roan.vercel.app](https://next-js-iota-roan.vercel.app)

## Tech Stack

- Next.js 16 / React 19 / TypeScript
- Tailwind CSS 4
- Deployed on Vercel

## Features

- Bilingual UI (Czech / English) via Context API and typed translation dictionary
- Dark / Light theme with system preference detection
- Scroll-triggered fade-in animations via a custom `useInView` hook
- Responsive layout

## Code Highlights

**Typed i18n without a library**

`translations.ts` uses `as const` and `typeof` to derive the `Translations` type,
ensuring every language key is present in both `cs` and `en` at compile time.
Missing or mismatched keys produce a TypeScript error.

**Custom `useInView` hook**
Wraps the browser `IntersectionObserver` API to detect when an element enters
the viewport. Used by `AnimatedSection` to trigger CSS transitions once -
the element fades in and stays visible. Cleanup is handled in the `useEffect`
return to avoid memory leaks.

**App Router structure**
Components that require interactivity (`useState`, `useEffect`, event handlers)
are explicitly marked `'use client'`. Layout and page components remain server
components by default, keeping the JS bundle smaller.

## What I Learned

- The difference between App Router and Page Router in practice:
  file-based routing with folders, layouts, and server components as the default.
- When to add `"use client"`: any component that uses hooks or browser APIs.
  Server components render to HTML only - no hydration, no JS sent to browser.
- How `IntersectionObserver` works and why it is more efficient than
  `scroll` event listeners for viewport detection.
  - Configuring `metadataBase` in Next.js for correct Open Graph URL resolution.

## Challenges

- Implementing bilingual support without an i18n library:
  typed the translation dictionary with `as const` so TypeScript enforces
  structural parity between `cs` and `en` at compile time.
- Fixing the `metadataBase` URL so Open Graph tags resolve to the correct
  canonical domain rather than the old GitHub Pages address.
