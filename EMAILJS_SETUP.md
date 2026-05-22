# EmailJS Setup Guide

Follow these steps to get your contact form working:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Sign up with your email

## Step 2: Add Email Service
1. After login, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your email: `dev_studio@yahoo.com`
5. Copy the **Service ID** (looks like: `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:**
```
New Contact from {{from_name}}
```

**Content:**
```
You have a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save the template
5. Copy the **Template ID** (looks like: `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (looks like: `abcdefghijklmnop`)

## Step 5: Update Your Code
Open `components/sections/contact.tsx` and replace:

```typescript
const serviceId = 'YOUR_SERVICE_ID'      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
```

## Step 6: Test
1. Run `npm run dev`
2. Fill out the contact form
3. Check your email at `dev_studio@yahoo.com`

## Troubleshooting
- Make sure all 3 IDs are correct
- Check EmailJS dashboard for error logs
- Verify your email service is connected
- Check spam folder for test emails

That's it! Your contact form will now send emails directly to your inbox.
