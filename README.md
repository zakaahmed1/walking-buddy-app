Walking Buddy App

A mobile-first React Native application that helps people in the UK safely connect with local walking partners. This MVP aims to improve upon existing platforms like WalkBuddy by focusing on simplicity, trust, and usability.

Features:
1. User Authentication

Sign up and log in using email/password via Firebase Auth

User profiles stored in Firestore (name, email, UID, createdAt)

2. Profile Setup

Enter name and email during signup

Profile stored in Firestore for future buddy matching

3. Walk Buddy Matching (Coming Soon)

Filter walkers by distance, pace, and availability

Send and receive walk requests

Accept/decline matches

4. Messaging (Coming Soon)

Simple one-to-one chat between matched users

Safety prompt before chat starts

5. Safety & Simplicity

Email verification required

Ability to report/block users (future feature)

Getting Started:
1. Clone the repo:
git clone https://github.com/YOUR_USERNAME/walking-buddy-app.git
cd walking-buddy-app

2. Install dependencies:
npm install

3. Start the Expo server:
npm start


Then scan the QR code with Expo Go on your mobile device.

Firebase Setup

Make sure to:

Create a Firebase project

Enable Email/Password Auth

Enable Cloud Firestore (test mode for development)

Add your Firebase config to:
src/services/firebaseConfig.js

Roadmap (Post-MVP):

 Add walk buddy matching algorithm

 Implement messaging via Firestore

 Add location-based filters

 Profile photos & profile editing

 Admin moderation tools

 Push notifications
