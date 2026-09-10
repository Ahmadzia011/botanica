# Botanica

Botanica is a full-stack demo storefront for a premium herbal infusion brand. It includes a polished Next.js shopping experience, Clerk authentication, Stripe Checkout, Prisma, and PostgreSQL persistence.

## Features

- Editorial homepage with product highlights, testimonials, FAQ, and calls to action
- Responsive shop page with botanical product cards
- Clerk sign-in, sign-up, and user menu integration
- Stripe Checkout for one-time purchases
- Stripe Checkout subscription-mode demo page
- Stripe webhook route for checkout completion handling
- Clerk webhook route for syncing users to the database
- Contact form that stores customer notes in PostgreSQL
- Prisma schema for users, products, purchases, and contact submissions
- Smooth scrolling and reveal animations

## Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- lucide-react
- Motion
- Lenis

### Backend

- Next.js App Router
- Server actions
- Route handlers

### Database

- PostgreSQL
- Prisma
- `pg`
- `@prisma/adapter-pg`

### Authentication

- Clerk

### Payments

- Stripe Checkout
- Stripe webhooks

## Getting Started

Install dependencies:

```bash
npm install
```

Configure environment variables in `.env`.

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

To run the local database with Docker Compose:

```bash
docker compose up -d
```

Run Prisma migrations as needed:

```bash
npx prisma migrate dev
```

## Environment Variables

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SIGNING_SECRET=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

DATABASE_URL=
```

For the Docker Compose database:

```env
DB_USER=
DB_PASSWORD=
DB_NAME=
```

## Project Structure

```text
src/app/                  App Router pages, server actions, and API routes
src/app/home-page/        Homepage sections
src/app/shop/             Shop and product demo pages
src/app/contact-us/       Contact form page
src/app/api/webhooks/     Stripe and Clerk webhook routes
src/components/           Shared Navbar, Footer, and animation components
src/constants/            Static product and storefront content
src/lib/                  Prisma, Stripe, and Lenis helpers
prisma/                   Prisma schema and migrations
public/botanica/          Storefront image assets
```

## Screenshots

<!-- Add homepage screenshot here -->
<!-- Add shop screenshot here -->
<!-- Add contact page screenshot here -->
<!-- Add Stripe Checkout test-mode screenshot here -->

## Status

This is a portfolio/demo project. The core storefront, authentication, checkout session creation, webhook routes, and contact form persistence are implemented, but it is not a production-ready commerce system.

Notable limitations:

- Product content in the main storefront is static.
- Purchase records do not currently store full Stripe order details or purchased product data.
- Success and cancellation URLs are hardcoded to localhost.
- No inventory, fulfillment, shipping, tax, refund, or email notification system is implemented.
