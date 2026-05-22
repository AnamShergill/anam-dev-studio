# Forminit Setup - Final Steps

Your Forminit integration is almost complete! Just 2 more steps:

## Step 1: Get API Key (1 minute)

1. Go to your Forminit dashboard: https://forminit.com/account/api-tokens
2. Click "Create API Token"
3. Give it a name: "Portfolio Contact Form"
4. Copy the API key (starts with `sk_live_...`)

## Step 2: Update Environment Variable

1. Open `.env.local` file in your project root
2. Replace `your_api_key_here` with your actual API key:

```
FORMINIT_API_KEY=sk_live_xxxxxxxxxxxx
```

3. Save the file

## Step 3: Set Form to Protected Mode

1. Go to your form settings: https://forminit.com/forms/w3ceht0mtx9/settings
2. Change "Authentication mode" from "Public" to "Protected"
3. Save

## Step 4: Test

1. Restart your dev server: `npm run dev`
2. Fill out the contact form
3. Submit
4. Check your Forminit dashboard for the submission
5. Check your email at `dev_studio@yahoo.com`

## What's Configured

✅ Forminit NPM package installed
✅ API proxy route created (`/api/forminit`)
✅ Contact form updated with Forminit SDK
✅ Form ID: `w3ceht0mtx9`
✅ Field names follow Forminit convention:
   - `fi-sender-firstName` (name)
   - `fi-sender-email` (email)
   - `fi-text-message` (message)

## Troubleshooting

- **"API key not found"**: Make sure `.env.local` has the correct API key
- **"Form not found"**: Verify form ID is `w3ceht0mtx9`
- **"Authentication failed"**: Set form to "Protected" mode in settings
- **Not receiving emails**: Check email notifications in form settings

That's it! Your contact form will now work perfectly with Forminit.
