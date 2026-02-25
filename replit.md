# Jenny Lee SLP Website - Project Documentation

## Overview
This is a modern, responsive, SEO-optimized single-page website for Jenny Lee SLP, a pediatric speech therapy private practice in Lexington, Kentucky. The website showcases Jennifer Lee Marshall's expertise in pediatric speech and feeding therapy, with special focus on cleft palate, craniofacial differences, and complex communication needs.

## Project Status
**Status**: Complete MVP  
**Last Updated**: November 13, 2025  
**Version**: 1.0

## Recent Changes
- **2026-02-25**: Restructure, simplify, and accordion
  - Removed "Why Families Choose Me" section entirely
  - Reordered sections: Hero → Who I Help → Services → Meet Jenny → Contact
  - Trimmed hero to single subtitle line (removed redundant tagline)
  - Added expandable accordion to Meet Jenny (Her story / Clinical background / Publications & research) — collapsed by default, pure JS/CSS, no libraries
  - Moved ASHA CCC-SLP · ACPA Member · KY & OH Licensed to footer credential line
  - Updated nav to match new section order
- **2026-02-25**: Content simplification and brand refresh
  - Rewrote all copy to be shorter, warmer, and more conversational for young-mom audience
  - Replaced credentials box with inline pill badges in Meet Jenny section
  - Replaced numbered Why-Choose cards with icon + text list layout
  - Removed "Collaborative Approach" box and "service-benefit" blocks
  - Added `text-wrap: balance` and `text-wrap: pretty` to prevent orphan words
  - Added real logo (images/logo.png), headshot (images/headshot.jpg), therapy photo (images/therapy.jpg)
  - Updated color scheme to sage green matching brand logo
- **2025-11-13**: Initial website build complete
  - Created responsive single-page design with 7 main sections
  - Implemented SEO optimization with meta tags and Open Graph tags
  - Added contact form with client-side validation
  - Configured smooth scrolling navigation
  - Set up Python HTTP server workflow on port 5000

## Project Architecture

### Tech Stack
- **Frontend**: Plain HTML5, CSS3, Vanilla JavaScript
- **Server**: Python HTTP server (for development)
- **Fonts**: Google Fonts (Inter, Poppins)
- **No frameworks or dependencies** - fully portable

### File Structure
```
├── index.html          # Main HTML with all content sections
├── styles.css          # Complete responsive stylesheet
├── script.js           # Form validation and smooth scrolling
├── README.md           # Comprehensive documentation
├── .gitignore          # Git ignore rules
└── replit.md           # This file
```

### Key Features Implemented
1. **Sticky Navigation**: Fixed header with smooth scroll to sections
2. **Hero Section**: Clear value proposition with primary CTAs
3. **About Section**: Professional background and credentials
4. **Services Section**: Three service categories with detailed descriptions
5. **Who I Help Section**: Target client descriptions
6. **Why Choose Section**: Key differentiators and certifications
7. **Contact Form**: Lead capture with validation
8. **Footer**: Business info and social media placeholders

### SEO Implementation
- Title tag optimized for "Speech Therapy Lexington KY"
- Meta description with key services and location
- Open Graph tags for social sharing
- Semantic HTML structure (header, nav, main, section, footer)
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text on all images
- Keywords integrated naturally throughout content

### Target Keywords
- Speech therapy Lexington KY
- Pediatric speech therapy Lexington
- Cleft palate speech therapist Kentucky
- Craniofacial speech therapist
- Feeding therapy for children
- Resonance disorders SLP

### Color Palette
- Primary: `#5aa9c7` (Soft blue)
- Primary Light: `#e8f4f8` (Very light blue)
- Secondary: `#7ec4dd` (Teal)
- Text Dark: `#2c3e50`
- Background: `#ffffff`, `#f8f9fa`

## User Preferences
None specified yet.

## Known Limitations & Next Steps

### Current Limitations
1. **Contact Form**: Currently uses placeholder endpoint `/api/contact`
   - Needs backend integration (Formspree, SendGrid, or custom API)
2. **Images**: Using SVG placeholder for Jennifer's photo
   - Need professional headshot
3. **Social Media**: Placeholder URLs in footer
   - Need actual Facebook and Instagram URLs
4. **Favicon**: Placeholder favicon link
   - Need actual favicon.png file

### Recommended Next Steps
1. **Contact Form Integration**
   - Set up Formspree or FormSubmit for email notifications
   - Or create serverless function for custom handling
   
2. **Images & Media**
   - Add professional headshot photo
   - Create favicon (16x16, 32x32, 180x180 for Apple)
   - Design Open Graph sharing image (1200x630px)
   
3. **Analytics & Tracking**
   - Add Google Analytics tracking code
   - Set up Google Search Console
   - Implement conversion tracking for form submissions
   
4. **Additional Features**
   - Add testimonials section
   - Integrate online scheduling (Calendly, Acuity)
   - Add blog section for SEO content
   - Implement Google Reviews integration

5. **Deployment**
   - Deploy to production hosting (Netlify, Vercel, etc.)
   - Set up custom domain
   - Configure SSL certificate
   - Submit sitemap to search engines

## Deployment Notes
The website is fully portable and can be deployed to:
- Netlify (recommended for easy setup)
- Vercel
- GitHub Pages
- Traditional web hosting via FTP
- AWS S3 with static hosting

No build process required - just upload the files.

## Contact Information
**Business**: Jenny Lee LLC  
**Clinician**: Jennifer Lee Marshall, MA, CCC-SLP  
**Phone**: 859-545-2117  
**Location**: Lexington, Kentucky  
**Service Area**: Lexington and Central Kentucky

## Development Workflow
**Current Workflow**: `web-server`
- Command: `python -m http.server 5000`
- Port: 5000
- Output: webview
- Status: Running

To restart the server:
```bash
python -m http.server 5000
```

## Maintenance Notes
- All content is in `index.html` for easy updates
- Color scheme can be changed via CSS variables in `styles.css`
- Form endpoint can be updated in `script.js` (line ~102)
- Social media links are in footer section of `index.html`
