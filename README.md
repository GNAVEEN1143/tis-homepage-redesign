# Tulas International School — Homepage Redesign

A modern, responsive and animated homepage redesign for **Tulas International School (TIS)**, developed as part of a Frontend Developer assessment.

The project focuses on clean component architecture, responsive design, smooth animations, interactive UI elements and a polished school-focused user experience.

## Live Demo

Live Demo: tis-homepage-redesign-brown.vercel.app/

## GitHub Repository

GitHub Repository: https://github.com/GNAVEEN1143/tis-homepage-redesign

---

## Project Overview

This project redesigns the Tulas International School homepage while retaining the school's core identity and educational messaging.

The goal was to create a modern and engaging web experience that helps visitors:

- Understand the school's learning approach
- Explore academics and student life
- Discover sports and activities
- Learn about the campus
- Understand the school's key strengths
- Navigate easily to admissions and contact information

---

## Features

### Responsive Navigation

- Desktop navigation with clear section links
- Mobile navigation menu
- "Enquire Now" call-to-action
- Smooth navigation using section anchors

### Animated Hero Section

- Entrance animations using Framer Motion
- Clear primary and secondary calls-to-action
- School-focused visual presentation
- Responsive layout

### Scroll-Triggered Animations

Reusable `Reveal` component is used to animate sections as they enter the viewport.

Animations are implemented using:

- Framer Motion
- `whileInView`
- Opacity and position transitions
- Staggered card animations

### Scroll Progress Bar

A fixed progress indicator at the top of the page shows the user's reading progress.

### Custom Cursor

Desktop users get an interactive cursor ring that:

- Follows the mouse
- Expands over interactive elements
- Automatically hides on mobile/touch devices

### Responsive Design

The website is designed for:

- Desktop
- Tablet
- Mobile

Special attention was given to navigation, typography, spacing, images and content layout across screen sizes.

### Interactive Sections

The homepage includes:

- Hero
- School statistics
- About TIS
- Why TIS
- Academics
- Campus & Student Life
- Sports & Activities
- Admissions
- Contact/Footer

---

## Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3

### Animation

- Framer Motion

### Icons

- Lucide React

### Code Quality

- Oxlint

### Deployment

- Vercel

---

## Project Structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Stats.jsx
│   │   ├── Stats.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── WhyTIS.jsx
│   │   ├── WhyTIS.css
│   │   ├── Academics.jsx
│   │   ├── Academics.css
│   │   ├── Campus.jsx
│   │   ├── Campus.css
│   │   ├── Sports.jsx
│   │   ├── Sports.css
│   │   ├── Testimonials.jsx
│   │   ├── Testimonials.css
│   │   ├── Admissions.jsx
│   │   └── Admissions.css
│   │
│   └── animation/
│       ├── CustomCursor.jsx
│       ├── CustomCursor.css
│       ├── ScrollProgress.jsx
│       ├── ScrollProgress.css
│       └── Reveal.jsx
│
├── assets/
├── App.jsx
├── App.css
├── index.css
└── main.jsx