# BuySwift - Advanced E-Commerce SPA

## Overview

BuySwift is a modern E-Commerce Single Page Application built with **Next.js 16**, **Redux Toolkit**, and **Tailwind CSS**. The project demonstrates advanced state management architecture, global state synchronization, filtering systems, theme management, and responsive user experience.

The application consumes product data from the Escuelajs Fake Store API and provides users with a complete shopping experience including product browsing, filtering, wishlist management, cart management, and theme customization.

---

## Tech Stack

### Frontend

* Next.js 16 (App Router)
* React 19
* Tailwind CSS

### State Management

* Redux Toolkit
* React Redux
* Redux Persist

### API

* Escuelajs Fake Store API

### Development Tools

* ESLint
* PostCSS

---

## Features

### Product Management

* Product listing page
* Product detail page
* Dynamic product routes
* Responsive product grid
* Product image fallback handling

### Shopping Cart

* Add products to cart
* Remove products from cart
* Quantity management
* Cart summary calculation
* Persistent cart state

### Wishlist

* Add products to wishlist
* Remove products from wishlist
* Persistent wishlist state

### Advanced Filtering

* Search products
* Filter by category
* Filter by price range
* Sort products
* Instant UI updates through global state

### Theme Management

* Light mode
* Dark mode
* Persistent theme preference
* Global theme state using Redux

### User Experience

* Responsive design
* Loading skeletons
* Empty states
* Error handling
* Image fallback support

---

## Redux Architecture

The application uses Redux Toolkit as the centralized state management solution.

### Slices

#### Product Slice

Handles:

* Product fetching
* Category generation
* Loading state
* Error state

#### Cart Slice

Handles:

* Cart items
* Quantity updates
* Total calculations

#### Wishlist Slice

Handles:

* Wishlist items
* Add/Remove functionality

#### Filter Slice

Handles:

* Search filters
* Category filters
* Price range filters
* Sorting options

#### Theme Slice

Handles:

* Dark mode
* Light mode
* Theme persistence

---

## Project Structure

```text
src
├── app
├── components
│   ├── cart
│   ├── common
│   ├── filters
│   ├── product
│   └── wishlist
├── hooks
├── lib
├── redux
│   ├── selectors
│   └── slices
├── services
├── styles
└── utils
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd buyswift
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_BASE_URL=https://api.escuelajs.co/api/v1
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
npm start
```

---


## Future Enhancements

* Authentication
* Checkout process
* Order history
* Product reviews
* Payment gateway integration
* Admin dashboard

---