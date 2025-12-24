# Project Overview
This is a React-based web application using Vite for build tooling and Tailwind CSS for styling. It features a modern, responsive design with animations powered by Framer Motion and GSAP. The backend is built with Cloudflare Workers and D1 database.

# Development Commands
- **Install Dependencies**: `npm install`
- **Build for Production**: `npm run build`
- **Start Development Server**: `npm run dev` (Note: Use production builds for final verification)

# Architecture

## Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: Zustand
- **Animations**: Framer Motion, GSAP
- **Physics/3D**: Three.js, Cannon-es, Matter-js (available)
- **AI Integration**: Vercel AI SDK

## Backend
- **Platform**: Cloudflare Workers
- **Database**: D1 (SQLite)
- **Schema**: `backend/schema.sql` (Contacts table)

# Database Schema
- `contacts`: Stores contact form submissions (id, name, email, subject, message, created_at)

# Recent Changes
- `WorkshopCTA`: Added detailed event timing (Dec 28, 2025, 9am-12pm) and address (VinHomes Central Park) to the reservation section. Explicitly stated that reservation is required.
- `ArtAsLanguage`: Updated hero image to `src/assets/art-workshop-hero.png` (user uploaded), maintaining the white evanescence effect. Removed "[ section ]" labels from section titles. Updated FAQ to remove mention of Vietnamese support.
- `Blog`: Fixed an issue where updating one blog post image affected others. Decoupled image references in `src/data/posts.ts`. Updated the third blog post image to `https://public.youware.com/image/3bcb051d-cefe-47e9-9809-72aa0a42f9d1/e0tuqdb76i.jpeg` while preserving the original image for others.
- `WhoWeAre`: Organizer bios with refined mission statement ("Not Gurus. Just Humans."). Uses `src/assets/team-authentic.jpg` for a more natural, authentic look. Layout updated to a single central column (Title -> Image -> Text). **Updated**: Text alignment improved (centered, split paragraphs, relaxed leading) for better readability. **Team Members**: Added Gabriele (Art Director), Hanh (Facilitator), and Sarah (Cooking) with photos and descriptions.
    - **Title**: Restored to "The Collective" using the `GraphicTitle` component (brackets style) for consistency with other sections.
    - **Images**: Photos use a custom CSS `border-radius` to simulate an organic "paint drop" or blob effect. Grayscale effect removed. **Updated**: Images use `.team-photo` class for consistent styling (no zoom-in, centered faces). Sarah's image updated to a new URL. **Hanh's image updated to a new URL.** **Gabriele's image updated to a new URL.**
    - **Titles**: Added "Who'll Guide You?" subtitle before the collective description. **Updated**: Styled with elegant serif italic (text-2xl/3xl) to be coherent but distinct from main titles.
    - **Design**: Removed top border from "Who We Are" section to eliminate the line between Location and Collective sections.
- `CTASection`: Pricing and dates. **Updated CTA**: Replaced interview booking with direct contact options (WhatsApp, Zalo, Email) and payment details. Displays "JAN 08-11 2026 EDITION" and pricing "3,700,000 VND". **Design**: Reverted to original Black background with White text theme for high contrast.
- `Program`: Added "What is about?" subtitle before the schedule accordion. **Updated**: Styled with elegant serif italic (text-2xl/3xl) to be coherent but distinct from main titles.
- `WhatThisIs`: Updated gallery images with 9 new photos provided by user.
- `Manifesto`: Centered "THE ONLY RULES" text.
- `General`: Updated Hero section background to `bg-black` (greenish gray). Removed background image. Layout updated: Centered Kaalila logo (white), smaller payoff text at the bottom with a bouncing arrow that scrolls to the Philosophy section. Adjusted scroll margin for Philosophy section to ensure proper alignment with navbar.
- `Backend`: Restored backend integration in `ContactModal` and `Newsletter` components. Forms now make API calls to `https://backend.youware.com`.
- `Philosophy`: Updated layout to a single narrow column (`max-w-2xl`) containing all text elements ("Kaalila is..." and "We design...") for better alignment and readability.
- `Retreats`: Updated date for "Creative Empowerment Retreat" to "JAN 08-11, 2026".
- `Configuration`: Added `vercel.json` to handle SPA routing rewrites (fixing 404s on refresh).
- `Gallery`: Replaced duplicate images in "Off the Noise" section. Replaced `location-4.jpg` with `location-4.png` (user uploaded) and `location-6.jpg` with new user-uploaded photo.
- `Blog`: Updated the first blog post image to `https://public.youware.com/image/825b8804-8493-427e-b5d4-5809acbeaa1a/2stpt9xjzd.jpg`.
- `ContactModal`: Fixed form submission by adding a default `subject` field to the API payload, as required by the backend. Added `id="contact-form"` for analytics tracking.
- `Newsletter`: Added `id="newsletter-form"` for analytics tracking.
- `ThankYou`: Created a new Thank You page (`/thank-you`) and updated `ContactModal` to redirect there after successful submission.
- `Configuration`: Updated `ContactModal` and `Newsletter` to use `VITE_BACKEND_URL` environment variable for API calls, falling back to `https://backend.youware.com` (which requires configuration). Added error message display in `ContactModal`.
- `EmailJS`: Configured `ContactModal` to use EmailJS (`@emailjs/browser`). Uses provided credentials (Service ID: `service_20dn4b7`, Template ID: `template_x09plef`, Public Key: `QCrfo0KZp21-Hay9C`). Can be overridden with `VITE_EMAILJS_PUBLIC_KEY`.
- `Home`: Repositioned "Reserve Your Spot" CTA in Hero section to the right side (`self-end`) to align with the end of the payoff text "CREATIVITY".
- `NavBar`: Changed "Book Now" text to "Reserve Your Spot".
- `CTASection`: Changed "How To Book" title to "Reserve Your Spot".
- `Home`: Fixed hero payoff text responsiveness by removing inline font size. Reduced mobile font size to 12px (text-xs).
- `Configuration`: Updated Google Analytics measurement ID to G-7M7MS36H56.
- `Pages`: Added "Art as an Expressive Language" workshop landing page at `/art-as-language`.
- `Navigation`: Added "Workshop" link to the main navigation pointing to `/art-as-language`.
- `Pages`: Updated "Art as an Expressive Language" page structure (simplified) and CTA section (matched visual style with Home page).
- `Pages`: Updated "Art as an Expressive Language" hero section to match Vietnam retreat style and added FAQ section.
