# Contributing to WnCC NIT Patna Website

Thank you for your interest in contributing to the official website of the **Web & Coding Club (WnCC), NIT Patna**! We are a thriving community of developers, builders, designers, and tech enthusiasts. 

This guide is designed to help you get started with contributing to this repository, whether you're fixing a bug, adding features, or updating club data.

---

## 🚀 Quick Start (Local Setup)

To set up the project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.x or higher is recommended) along with `npm` (or `yarn` / `pnpm`).

### Setup Instructions
1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/OfficialWebsite.git
   cd OfficialWebsite
   ```
3. **Install the dependencies**:
   ```bash
   npm install
   ```
4. **Start the local development server**:
   ```bash
   npm run dev
   ```
5. **Open the web application**:
   Navigate to [http://localhost:3000](http://localhost:3000) (or [http://localhost:3001](http://localhost:3001) if port 3000 is occupied) in your browser.

---

## 📁 Directory Structure

The project is structured modularly. Here is a quick layout of the main directories:

* 📦 `app/` — **Next.js 16 App Router Routes**. Defines the pages (`/team`, `/events`, `/gallery`, `/blog`, `/developers`, `/contact`). Global styles reside in `globals.css` and the main wrapper is `layout.tsx`.
* 📦 `components/` — **React Components**:
  * `ui/` — Common, highly reusable components (Buttons, Cards, Badges, etc.).
  * `layout/` — Shared structural components (Header, Footer, Mobile Navigation, Lenis smooth scroll).
  * `landing/` — Sections specific to the landing/home page.
  * `three/` — Three.js / React Three Fiber interactive 3D particle fields.
  * `team/`, `events/`, `gallery/`, `blog/`, `developers/`, `contact/` — Page-specific UI components.
* 📦 `lib/` — **Data & Configuration**:
  * `data/` — Static data stores in JSON/TypeScript formats (where you will add member info, events, gallery pictures, blogs).
  * `types/` — TypeScript schema interfaces (`lib/types/index.ts`).
  * `constants.ts` — Global configuration, default SEO values, PI/President data.
* 📦 `hooks/` — **Custom React Hooks** (GSAP wrappers, media queries, viewports).
* 📦 `public/` — **Static Assets** (Fonts, images, icons, and generated graffiti background textures).

---

## 🛠️ Data-Driven Contributions (No-Code Changes)

If you only want to update content on the site (like adding a member, an event, a blog, or a gallery image), **you do not need to edit JSX/TSX components**. Simply modify the files inside the `lib/data/` folder.

### 1. Adding a Team Member
To add yourself or another member to a club team:
1. Open [lib/data/teams.ts](file:///Users/jarvis/OfficialWebsite/lib/data/teams.ts).
2. Locate the team array you want to edit (e.g., `Blockchain`, `Web Development`, `Gen AI`, `Machine Learning`, `PR`, `Social Media`, `Design`).
3. Add a member object under the correct tier:
   * **Post Bearers**: Club coordinators and leads (displayed at the top).
   * **Senior Members**: Third-year/senior builders.
   * **Junior Members**: Second-year/junior builders.
4. Member format example:
   ```typescript
   {
     name: "John Doe",
     role: "Blockchain Developer",
     image: "/images/team/john-doe.png", // Save your photo in public/images/team/
     linkedin: "https://linkedin.com/in/johndoe",
     github: "https://github.com/johndoe",
     email: "johndoe@nitp.ac.in",
     hierarchy: "Junior Member" // "Post Bearer" | "Senior Member" | "Junior Member"
   }
   ```

### 2. Adding a Club Event
To list a new event:
1. Open [lib/data/events.ts](file:///Users/jarvis/OfficialWebsite/lib/data/events.ts).
2. Add a new event entry at the beginning of the `events` array:
   ```typescript
   {
     id: "hackathon-2026",
     title: "ByteCraft Hackathon",
     date: "March 15, 2026",
     description: "A 36-hour hackathon designed to solve real-world industrial challenges.",
     image: "/images/events/bytecraft.png", // Save in public/images/events/
     tags: ["Hackathon", "Web3", "AI"],
     link: "/events/hackathon-2026"
   }
   ```

### 3. Adding a Photo to the Gallery
To upload club activity memories:
1. Copy the image into `/public/images/gallery/`.
2. Open [lib/data/gallery.ts](file:///Users/jarvis/OfficialWebsite/lib/data/gallery.ts).
3. Add an entry to the `galleryImages` array:
   ```typescript
   {
     src: "/images/gallery/event-photo.png",
     alt: "Students working on project at Hackathon",
     event: "Hackathon 2026",
     date: "March 2026",
     category: "Hackathons" // "Hackathons" | "Workshops" | "Talks" | "Socials"
   }
   ```

### 4. Writing a Blog Post
To contribute articles, tutorials, or guides:
1. Open [lib/data/blogs.ts](file:///Users/jarvis/OfficialWebsite/lib/data/blogs.ts).
2. Add a blog post entry:
   ```typescript
   {
     slug: "getting-started-with-nextjs16",
     title: "Getting Started with Next.js 16 and Tailwind CSS v4",
     excerpt: "A deep dive into the latest Next.js 16 routing conventions and Tailwind's brand new compiler.",
     content: `
       <p>Your HTML blog content goes here...</p>
       <pre><code>const codeExample = "Highlighting is supported!"</code></pre>
     `,
     author: {
       name: "Jane Smith",
       avatar: "/images/team/jane-smith.png"
     },
     date: "May 22, 2026",
     tags: ["Next.js", "TailwindCSS", "WebDev"],
     coverImage: "/images/blog/nextjs16.png",
     readTime: "5 min read"
   }
   ```

### 5. Adding to the Developers Page
If you made code contributions, add yourself to the developers wall:
1. Open [lib/data/developers.ts](file:///Users/jarvis/OfficialWebsite/lib/data/developers.ts).
2. Append your profile:
   ```typescript
   {
     name: "Your Name",
     role: "Core Developer / Contributor",
     image: "/images/team/your-avatar.png",
     linkedin: "https://linkedin.com/in/yourusername",
     github: "https://github.com/yourusername",
     email: "your.email@example.com",
     contributions: ["UI Refinement", "Gallery Lightbox Implementation"]
   }
   ```

---

## 🎨 Design & Code Guidelines

To maintain the premium look and feel of the website (our "million-dollar web agency" dark aesthetic), please adhere to the following guidelines:

### 1. Color Palette
Our design uses a refined dark palette:
* **Backgrounds**: Deep black (`#09090b`), dark grey glass cards.
* **Muted Accent Palettes**:
  * **Coral**: `#D4643B` (Primary action/highlight)
  * **Amber**: `#D9A84E` (Warning/accent)
  * **Sage Green**: `#7A9A6B` (Secondary status/success)
* Avoid using standard bright primaries (blue, red, green). Instead, use the HSL variables specified in `app/globals.css`.

### 2. Styling (Tailwind v4)
* Style with Tailwind CSS utility classes.
* Avoid custom CSS rules unless adding core design system keyframes/tokens to `app/globals.css`.
* Use translucency (`bg-black/40`, `backdrop-blur-md`) for container cards to maintain glassmorphism effects.

### 3. Animations
* We use **GSAP (GreenSock)** for reveal-on-scroll and micro-interactions.
* Use the custom hook `useGSAPAnimation(preset, triggerRef, options)` for standard effects:
  * Presets: `'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'staggerChildren' | 'scaleUp' | 'parallax'`
* Keep animations smooth, subtle, and quick (usually `< 0.8s`). Ensure they do not hinder usability.

### 4. Code Quality
* Ensure all code is strictly typed with **TypeScript**.
* Do not suppress TypeScript or ESLint warnings using `any` or `// @ts-ignore` comments unless absolutely necessary.
* Run a local build test before pushing:
   ```bash
   npm run build
   ```

---

## 📬 Git and Pull Request (PR) Workflow

Once you've made your changes and verified them locally:

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-contribution-name
   ```
2. **Commit your changes**:
   Keep commit messages clear and concise:
   ```bash
   git commit -m "feat(data): add Jane Doe to ML team"
   ```
3. **Verify the build passes**:
   Make sure there are no errors during compilation:
   ```bash
   npm run build
   ```
4. **Push your branch**:
   ```bash
   git push origin feature/your-contribution-name
   ```
5. **Open a Pull Request** on the main repository.
6. **PR Review**:
   * Include a description of what you did.
   * **Tag `@anurag3407`** in your pull request description/comments to notify the administrator for review and merge.

Thank you for building with us! Happy Coding! 💻🚀
