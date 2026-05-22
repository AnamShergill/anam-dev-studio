# Getform.io Setup Guide (EASIEST METHOD)

This is the simplest way to get your contact form working - no email authentication needed!

## Step 1: Create Getform Account (2 minutes)
1. Go to https://getform.io/
2. Click "Sign Up" (FREE - 50 submissions/month)
3. Sign up with any email (doesn't have to be dev_studio@yahoo.com)

## Step 2: Create a Form
1. After login, click "Create Form"
2. Give it a name: "Portfolio Contact Form"
3. Click "Create"
4. You'll see your form endpoint URL like:
   ```
   https://getform.io/f/abc123xyz
   ```
5. **Copy this URL**

## Step 3: Set Email Notification
1. In your form settings, go to "Notifications"
2. Add your email: `dev_studio@yahoo.com`
3. Enable "Email notifications"
4. Save

## Step 4: Update Your Code
Open `components/sections/contact.tsx` and find this line:

```typescript
const formEndpoint = 'https://getform.io/f/YOUR_FORM_ID'
```

Replace `YOUR_FORM_ID` with your actual endpoint URL from Step 2.

Example:
```typescript
const formEndpoint = 'https://getform.io/f/abc123xyz'
```

## Step 5: Test
1. Run `npm run dev`
2. Fill out the contact form
3. Submit
4. Check your email at `dev_studio@yahoo.com`
5. Also check Getform dashboard to see the submission

## Why Getform?
- ✅ No email authentication needed
- ✅ Works with Yahoo Mail
- ✅ No activation required
- ✅ Instant setup (2 minutes)
- ✅ 50 free submissions/month
- ✅ View all submissions in dashboard
- ✅ Spam protection included

## Troubleshooting
- Make sure you copied the full endpoint URL
- Check Getform dashboard for submissions
- Verify email notification is enabled
- Check spam folder

That's it! This is the easiest method and works perfectly with Yahoo Mail.
