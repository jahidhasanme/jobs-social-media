# Job Social Media Platform

This repository contains the codebase for a comprehensive Job Social Media Platform. The platform facilitates interactions between users (job seekers), employers, and admins, allowing them to post jobs, apply for jobs, manage interviews, and participate in Q&A sections.

**Repository URL**: [Private Repository](https://github.com/jahid-git/jobs-social-media.git)

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies](#technologies)
4. [Setup Instructions](#setup-instructions)
5. [License](#license)

## Introduction

This project aims to create a social media platform that connects job seekers with employers in an interactive manner. The system supports users in searching for jobs, applying to jobs, managing profiles, and participating in Q&A sections. Employers can post job listings, manage applications, and communicate with candidates. The admin panel allows the platform administrators to manage content and users.

## Features

### User Features:
- 🔐 Login/registration via email, Google, and mobile.
- 👤 Manage profile (Job category, profile picture, bio, academic details, job experience, etc.).
- 🔍 Search and apply for jobs with filters.
- 📄 Upload and manage documents (CVs, etc.).
- 🗓️ Interview management (accept, cancel, schedule interviews).
- 💬 Real-time chat and notifications for job matches, interviews.
- ❓ Q&A section for asking/answering questions.
- 🚩 Report jobs, manage packages, and view invoices.

### Employer Features:
- 👔 Manage employer accounts and company profiles.
- 📄 Post and manage job listings.
- 💬 Interact with job candidates via chat.
- 🗓️ Schedule and manage interviews.
- 📊 View analytics (job post views, applications, hires).
- ❓ Participate in Q&A.
- 💼 Purchase platform packages and receive notifications.

### Admin Features:
- 🛠️ Manage job categories, filters, and job posts.
- 🧑‍💼 Manage users and employers (search, communication).
- ❓ Moderate Q&A sections.
- 📢 Set up and manage ads and pricing plans.
- 💰 Handle payments and invoices.
- 🎓 Manage courses and content for online learning.

## Technologies

Here’s a breakdown of the technologies used in the platform:

### Backend:
- 🚀 **Node.js** - Event-driven, non-blocking I/O server-side platform.
- 🌐 **Express.js** - Minimal and flexible Node.js web application framework.
- 🛠️ **Prisma ORM** - A modern ORM for Node.js and TypeScript.
- 🔒 **JWT** - JSON Web Token for secure authentication.
- ✉️ **Nodemailer** - Sending emails using SMTP.
- 📲 **Twilio** - Cloud communications platform for SMS and voice.
- 🛢️ **MongoDB** - NoSQL database for storing data.

### Frontend:
- 📱 **Flutter** - UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.
- 🎛️ **GetX** - State management for Flutter, with minimal boilerplate code and high-performance operations.

### Others:
- 📦 **Yarn** - Fast, reliable, and secure dependency management.
- ☁️ **Google Cloud** - Cloud services for hosting, data storage, and push notifications.
- 💳 **Stripe/PayPal** - Payment processing platforms for online transactions.

## Setup Instructions

### Prerequisites:
Ensure that the following are installed on your system:
- [Node.js](https://nodejs.org/) 🚀
- [Flutter](https://flutter.dev/) 📱
- [Yarn](https://yarnpkg.com/) 📦
- [Prisma](https://www.prisma.io/) 🛠️
- MongoDB (Either local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)) 🛢️

### Backend Setup

1. Navigate to the `backend` directory: `cd backend`
2. Install dependencies: `yarn install`
3. Create a `.env` file based on the `.env.example`: `cp .env.example .env`
4. Run Prisma migration to set up the database schema: `npx prisma migrate dev`
5. Run the backend in development mode: `yarn dev`

### Frontend Setup

1. Navigate to the `frontend` directory: `cd frontend`
2. Install dependencies: `yarn install`
3. Run the frontend: `flutter run`

### Running Both Frontend and Backend Simultaneously
You can run both the backend and frontend together by running the respective commands in two different terminals.

## License

This project is proprietary and is not licensed for public use, modification, or distribution without permission from the repository owner. Please see the [LICENSE](./LICENSE) file for more information.

---

**Repository Owner:** [Jahid](https://github.com/jahid-git)