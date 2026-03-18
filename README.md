# Jenny Lee SLP Website

A modern, responsive, SEO-optimized single-page website for Jenny Lee SLP, a pediatric speech therapy private practice in Lexington, Kentucky.

## 📋 Overview

This website is designed to be a high-converting landing page that showcases Jennifer Lee Marshall's expertise in pediatric speech and feeding therapy, with special focus on cleft palate, craniofacial differences, and complex communication needs.

## 🚀 Features

- **Fully Responsive Design**: Mobile-first approach that looks great on all devices
- **SEO Optimized**: Meta tags, Open Graph tags, and semantic HTML structure
- **Smooth Scrolling Navigation**: Sticky header with anchor links to all sections
- **Lead Capture Form**: Contact form with client-side validation
- **Accessible**: WCAG-compliant semantic HTML with proper ARIA labels
- **Fast Loading**: No frameworks, just clean HTML, CSS, and vanilla JavaScript
- **Portable**: Easy to deploy to any hosting environment

## 📁 File Structure

```
├── index.html          # Main HTML file with all content sections
├── styles.css          # Complete stylesheet with responsive design
├── script.js           # JavaScript for interactivity and form handling
└── README.md          # This file
```

## 🎨 Design

The website uses a calm, professional color palette suitable for pediatric healthcare:

- **Primary Color**: `#5aa9c7` (Soft blue)
- **Primary Light**: `#e8f4f8` (Very light blue)
- **Secondary Color**: `#7ec4dd` (Teal)
- **Accent Color**: `#f4a261` (Warm orange)

Typography:
- **Headings**: Poppins (Google Fonts)
- **Body Text**: Inter (Google Fonts)

## 📄 Page Sections

1. **Hero Section**: Clear value proposition with primary CTAs
2. **Meet Jenny**: Professional background and credentials
3. **Services**: Three main service categories (Consultations, Therapy, Evaluations)
4. **Who I Help**: Target client descriptions
5. **Why Families Choose Me**: Key differentiators
6. **Contact Form**: Lead capture with validation
7. **Footer**: Contact info and social links

## 🔧 Setup & Deployment

### Local Development

Simply open `index.html` in a web browser, or use a local server:

```bash
# Python 3
python -m http.server 5000

# Node.js (with http-server package)
npx http-server -p 5000
```

### Deployment Options

This website can be deployed to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a repository and enable GitHub Pages
- **AWS S3**: Upload files to an S3 bucket with static hosting
- **Traditional Web Hosting**: Upload via FTP to any web server

## 📝 Customization Guide

### Updating Content

All content is in `index.html`. Key areas to update:

- **Phone Number**: Search for `859-545-2117` and update all instances
- **Service Area**: Currently set to "Lexington and Central Kentucky"
- **Social Media Links**: Replace `#` with actual URLs in the footer

### Adding a Logo

Replace the text logo in the header with an image:

```html
<!-- Current (text logo) -->
<div class="logo">
    <a href="#hero">Jenny Lee SLP</a>
</div>

<!-- Replace with image -->
<div class="logo">
    <a href="#hero">
        <img src="images/logo.png" alt="Jenny Lee SLP">
    </a>
</div>
```

### Updating the Photo Placeholder

Replace the SVG placeholder in the "Meet Jenny" section:

```html
<!-- Find this line in index.html -->
<img src="data:image/svg+xml..." alt="...">

<!-- Replace with -->
<img src="images/jennifer-marshall.jpg" alt="Jennifer Lee Marshall, MA, CCC-SLP">
```

### Changing Colors

Update the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #5aa9c7;      /* Main brand color */
    --primary-dark: #4890b0;       /* Darker shade for hovers */
    --primary-light: #e8f4f8;      /* Light background */
    /* ... update as needed */
}
```

## 📧 Contact Form Integration

### Current Implementation: Web3Forms

The contact form submits directly to **Web3Forms** (web3forms.com), which delivers each submission to `admin@jennyleeslp.com`. No visitor action is required beyond clicking "Send My Message" — there is no email client involved.

**How it works:**
1. Visitor fills out and submits the form
2. Form validates the input
3. A JSON payload is sent via `fetch()` to `https://api.web3forms.com/submit`
4. Web3Forms delivers the message to Jenny's inbox
5. A success or error message is shown in-page

**Fields sent:** `access_key`, `subject`, `name`, `email`, `phone`, `message` (formatted combination of all form fields).

The Web3Forms access key is stored directly in `script.js`. The free tier allows 250 submissions/month, which is ample for a small practice.

### Changing the Email Destination

To route submissions to a different inbox:
1. Go to [web3forms.com](https://web3forms.com) and enter the new email address
2. Retrieve the new access key from the confirmation email
3. Update the `access_key` value in `script.js`

#### Alternative Backend API

To replace Web3Forms with a custom endpoint:

```javascript
fetch('YOUR_ENDPOINT_URL', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
```

Popular platforms for serverless functions:
- Netlify Functions
- Vercel Serverless Functions
- AWS Lambda
- Cloudflare Workers

#### Option 4: Email Service Integration

Use services like SendGrid, Mailgun, or AWS SES with a serverless function to send emails professionally.

## 🔍 SEO Optimization

The website is optimized for these key search phrases:

- "speech therapy Lexington KY"
- "pediatric speech therapy Lexington"
- "cleft palate speech therapist Kentucky"
- "craniofacial speech therapist"
- "feeding therapy for children"
- "resonance disorders SLP"

### Adding Google Analytics

Add this code before the closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Updating Open Graph Image

Create a social sharing image (1200x630px recommended) and update this meta tag:

```html
<meta property="og:image" content="/images/jenny-lee-slp-og-image.jpg">
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

The website follows WCAG 2.1 AA guidelines:

- Semantic HTML structure
- Proper heading hierarchy (H1 → H2 → H3)
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus indicators on interactive elements

## 📞 Support

For questions about this website:

**Jenny Lee SLP**  
Phone: 859-545-2117  
Location: Lexington, Kentucky

---

© 2018–2025 Jenny Lee LLC. All rights reserved.
