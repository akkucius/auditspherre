# AuditSpherre

AuditSpherre is a file server auditing and monitoring platform for Windows and Linux environments. Track file changes, review activity logs, and improve visibility across shared storage.

**Repository**: [github.com/akkucius/auditspherre](https://github.com/akkucius/auditspherre)

## Status

Early development — project scaffold and web UI foundation.

## Tech Stack

- [Next.js](https://nextjs.org/) — web application
- [React](https://react.dev/) — UI
- [Tailwind CSS](https://tailwindcss.com/) — styling

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production

```bash
npm run build
npm start
```

## Project Structure

```
auditspherre/
├── components/       # Shared UI components
├── pages/            # Next.js routes
├── public/           # Static assets
├── styles/           # Global styles
├── .env.example      # Environment variable template
└── package.json
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values as features are added.

## License

Private project — all rights reserved.
