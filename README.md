# Data Visualization Platform

An interactive dashboard for visualizing charging station data with real-time updates and dynamic KPI tracking. Built with React, TypeScript, and Firebase.

## 🚀 Features

- **Interactive Dashboard**

  - Real-time data visualization with dynamic charts
  - Key Performance Indicators (KPI) tracking
  - Expandable/collapsible sections for detailed information
  - Responsive design for mobile and desktop

- **Firebase Integration**

  - Google Authentication
  - Real-time database updates
  - Secure hosting and deployment

- **User Interface**
  - Dark mode interface
  - Tooltips for enhanced user guidance
  - Slide-over panel for variable editing
  - Mobile-responsive navigation

## 🛠️ Technical Stack

- **Frontend:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Authentication:** Firebase Auth
- **Charts:** [Your charting library]
- **State Management:** React Context
- **Deployment:** Firebase Hosting

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Git

Architecture Decisions

Vite: Chosen for its fast development server and build times
TypeScript: Added for type safety and better developer experience
Tailwind CSS: Used for rapid UI development and consistent styling
Firebase: Selected for easy authentication and hosting setup

Trade-offs

Real-time Updates vs. Performance

Implemented selective real-time updates to balance responsiveness
Used debouncing for certain operations

Bundle Size vs. Feature Set

Carefully selected dependencies to maintain reasonable bundle size
Implemented code splitting for larger components

⚠️ Known Limitations

Browser Support

Optimized for modern browsers
Limited support for IE11

Performance

Large datasets might cause performance issues
Mobile performance may vary with complex visualizations

Authentication

Currently only supports Google authentication
No role-based access control implemented

⏱️ Development Timeline
Total time spent: [13] hours
Breakdown:

Initial setup and configuration: [30min] hours
Core features implementation: [10] hours
Testing and bug fixes: [3] hours

## ⚙️ Installation & Setup

## 🛠️ Installation Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Git

### Step 1: Clone the Repository

```bash
git clone [repository-url]
cd data-viz-platform
Step 2: Install Dependencies
npm install
# or
yarn install
Step 3: Firebase Setup

Create a new Firebase project at Firebase Console
Enable Google Authentication:

Go to Authentication > Sign-in method
Enable Google sign-in
Add authorized domains


Create a .env file in the root directory and add your Firebase configuration:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
Step 4: Development Server
npm run dev
# or
yarn dev
Step 5: Production Build
npm run build
# or
yarn build
Step 6: Deploy to Firebase

Install Firebase CLI:

npm install -g firebase-tools

Login to Firebase:

firebase login

Initialize Firebase:

firebase init hosting
When prompted:

Select "Hosting"
Choose "dist" as your public directory
Select "Yes" to configure as a single-page app
Select "No" to overwrite index.html


Deploy to Firebase:

firebase deploy
Your app will be deployed and accessible at the provided Firebase hosting URL.
Common Issues

If you see environment variable errors:

Make sure your .env file is in the root directory
Check that all variables start with VITE_
Restart the development server


If deployment fails:

Verify that the dist directory exists
Check Firebase configuration
Ensure you have the correct permissions in Firebase



Local Development
The app will be available at http://localhost:5173 by default.
Additional Commands

Run tests:

npm run test

Preview production build:

npm run preview

```
