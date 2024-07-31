# Project Context

## EcomData Overview

EcomData is a startup specializing in e-commerce solutions. The company is seeking a full-stack developer to help develop a web application based on a freemium business model. This app will allow users to track price drops of specific products on various e-commerce sites.

## User Features

- **Registration and Authentication:** Users can sign up and log in.
- **Product Tracking:** Users can add a limited number of products to track for free.
- **Price Drop Notifications:** Users receive email notifications when a price drop is detected.
- **Price History Display:** Users can view price history for each tracked product.
- **Freemium Model Implementation:** Premium features include unlimited product tracking and ad-free experience.

The goal is to attract a large user base and build a solid foundation before seeking investor funding to grow the business.

## Application Requirements

- **Extensibility:** The application should be designed to add new e-commerce platforms without major modifications to the source code.

## Main Features

1. **User Registration and Authentication**
2. **Add New Products to Track**
3. **Price History Display for Each Tracked Product**
4. **Price Drop Notifications**
5. **Freemium Model Implementation**

## Design

- **Create a Design System:** Develop a consistent visual style.
- **Create High-Fidelity Prototypes:** Develop interactive mockups that closely resemble the final application.

## Frontend

- **Pages Development with Next.js:** Registration, Login, Home, Upgrade (from free to premium), Dashboard, and Add Product pages.
- **Use TailwindCSS:** For styling the pages.
- **Component Framework:** Use a component framework of your choice.

## Backend

- **NextAuth Integration:** For authentication and session management.
- **API Configuration with Next.js API Routes**
- **Web Scraping:** Regularly scrape e-commerce sites to retrieve product prices.
- **Database Operations:** Use Prisma or Mongoose for database interactions with MySQL/MongoDB.
- **Database Modeling and Creation**

## Technologies to Use

- **Next.js:** A framework for server-side rendering based on React.
- **Programming Language:** TypeScript
- **NextAuth:** A complete authentication solution for Next.js applications (900k weekly downloads).
- **Data Validation:** Zod (10M weekly downloads).
- **Form Management:** react-hook-form, providing hooks for managing form state and integrating with data validators (5M weekly downloads).
- **ORM/ODM:** Prisma or Mongoose for interacting with MySQL or MongoDB databases.
- **Database:** MySQL or MongoDB
- **TailwindCSS:** A framework for designing and styling pages. Use the @apply directive to include predefined TailwindCSS utility classes directly in SCSS files.
- **Sass:** A CSS preprocessor to add advanced functionalities like variables, nesting, and mixins.
