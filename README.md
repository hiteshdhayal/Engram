# Meridian — Full-Stack AI Company Brain Landing Page

This repository contains the full-stack codebase for **Meridian**, a premium landing page demonstrating an AI company brain. The project is physically split into dedicated root-level frontend and backend server folders.

---

## 📁 Repository Structure

```text
corsair-hackathon/
├── frontend/               # Next.js Full-Stack App (Client-side UI)
│   ├── app/                # Next.js App Router (pages, layouts, global styles)
│   ├── components/         # Highly stylized interactive React components
│   ├── public/             # Static graphics (backgrounds, generated logos)
│   ├── package.json        # Frontend scripts and dependency configurations
│   └── tsconfig.json       # TypeScript setup
│
└── backend/                # Express.js API Server (Server-side API handlers)
    ├── index.js            # Entry server listening on port 5000
    ├── package.json        # Scripts and backend dependency configurations
    ├── .env                # Local server configuration parameters
    └── .gitignore          # Backend ignore patterns
```

---

## 🚀 Getting Started

To run the full stack locally, follow these setup instructions:

### 1. Backend Server Setup

Navigate into the `/backend` directory, install dependencies, and start the Express server:

```bash
cd backend
npm install
npm start
```

The server will spin up on **`http://localhost:5000`** and begin logging connections.

### 2. Frontend Next.js Setup

Navigate into the `/frontend` directory, install dependencies, and launch the hot-reloading dev server:

```bash
cd frontend
npm install
npm run dev
```

Open **`http://localhost:3000`** in your browser to view the application.

---

## ✨ Features & Architecture

### 1. Futuristic capitalized monospaced hero headline
*   The hero section features a bold, uppercase, monospaced headline using `JetBrains Mono` and sized dynamically with `clamp(56px, 9vw, 110px)`.
*   Blends the custom space map backdrop (`hero-bg.png`) smoothly with the page void via a dark overlay gradient.

### 2. Live Agent Demo (Single Viewport Layout)
*   **1 Task + 1 Response**: Simplified to a single mock prompt and agent tool-calling block, keeping the interface clean and preventing vertical cutoff.
*   **Viewport constraint**: Gaps, padding, and font sizes are tuned to ensure the entire split panel fits within a single screen viewport (730px height) without scrolling.
*   **Radar Scanner**: Central column features a 2D golden radar constellation layout (`GravitationalLens.tsx`) with data nodes orbiting concentric dashed rings under a rotating scanning cone.

### 3. Integrated SVG Data Flow (`HowItWorksSection.tsx`)
*   **Background Image**: Features the Adventure Time sunset treehouse graphic (`mid-section.png`) with a gradient overlay keeping text highly readable.
*   **Interactive Flow**: Curved quadratic SVG bezier paths connect input channels (Gmail, Zoom, Slack) to a central gold glowing brain core, which then runs out to downstream actions (Drafts, calendar updates).
*   **Light Particle Stream**: Glowing light circles continuously float down and out along paths using browser-native `<animateMotion>` vectors.
*   **Translucent Step Cards**: Wrapped detail text columns in glassmorphic cards (`rgba(5, 5, 8, 0.45)` backdrop, `12px` blur, drop shadows) with floating number watermarks (`01`, `02`, `03`) and translateY hover lift transitions.

---

## 🔌 API Documentation

### Waitlist Registration
Registers an email address for early access.

*   **URL**: `http://localhost:5000/api/waitlist`
*   **Method**: `POST`
*   **Headers**:
    *   `Content-Type: application/json`
*   **Request Body**:
    ```json
    {
      "email": "user@company.com"
    }
    ```
*   **Success Response** (Code: `200 OK`):
    ```json
    {
      "success": true,
      "message": "Successfully registered on the backend waitlist.",
      "email": "user@company.com"
    }
    ```
*   **Error Response** (Code: `400 Bad Request`):
    ```json
    {
      "error": "Invalid email address"
    }
    ```
