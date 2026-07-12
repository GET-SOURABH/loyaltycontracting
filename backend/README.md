# Loyalty Contracting Backend

This is the Node.js + Express backend for the Loyalty Contracting website. It handles the form submissions and sends emails using Nodemailer via Gmail SMTP.

## Prerequisites

- Node.js (v14 or higher)
- npm

## Setup Instructions

1. **Install Dependencies**
   Navigate to the `backend` directory and run:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   Rename `.env.example` to `.env` or create a new `.env` file in the root of the `backend` folder.
   Add your Gmail credentials to the `.env` file:
   ```
   PORT=5000
   SMTP_EMAIL=your_gmail_address@gmail.com
   SMTP_PASSWORD=your_gmail_app_password
   ```

   **Note about Gmail:**
   You must use an "App Password" rather than your regular Gmail password.
   - Go to your Google Account -> Security -> 2-Step Verification.
   - Scroll down to "App passwords" and generate a new app password for this application.
   - Paste that 16-character password into the `SMTP_PASSWORD` field (no spaces).

3. **Run the Server Locally**
   To start the server for development:
   ```bash
   npm run dev
   ```
   To start the server for production:
   ```bash
   npm start
   ```

## Deployment Instructions

To deploy this backend (e.g., to Render, Railway, DigitalOcean, or Heroku):

1. **Host the Code**: Push the `backend` folder to a GitHub repository or deploy it directly.
2. **Environment Variables**: Configure the environment variables (`PORT`, `SMTP_EMAIL`, `SMTP_PASSWORD`) in your hosting provider's dashboard.
3. **Build/Start Command**: Use `npm install` for the build command and `npm start` for the start command.
4. **Update Frontend**: Once deployed, you will get a live URL (e.g., `https://loyalty-backend.onrender.com`). Update the `API_BASE_URL` in your frontend `js/config.js` to point to this new live URL.
