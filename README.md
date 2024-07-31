# Social Media Application

This is a social media application built with Express.js and MongoDB.

## Features

- User authentication using Passport.js
- Session management with express-session and connect-mongo
- View templating with EJS
- SASS middleware for CSS preprocessing
- Flash messages for user notifications
- Cookie parsing
- Static file serving

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your MongoDB connection in `config/mongoose.js`

## Configuration

- Update the session secret in the `app.use(session(...))` middleware
- Adjust the port number if needed (currently set to 3000)

## Running the Application

Start the server: 
   ```
   npm start
   ```
