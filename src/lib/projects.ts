export interface ProjectSection {
  heading: string;
  content: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  role: string;
  heroImage: string; // placeholder path
  overview: string;
  sections: {
    problem: ProjectSection;
    approach: ProjectSection;
    solution: ProjectSection;
    outcome: ProjectSection;
  };
  technologies: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "aether-finance",
    title: "Aether Finance",
    client: "Aether Capital",
    category: "Brand, Product Design, Motion",
    year: "2024",
    role: "Design Lead · Motion Director · Frontend Engineering",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    overview:
      "Aether Finance needed a complete brand and digital platform redesign to reposition as a modern, trustworthy financial partner. We delivered a full identity system, interactive UI toolkit, and a performant web experience.",
    sections: {
      problem: {
        heading: "Outdated perception, fragmented experience",
        content:
          "Aether's existing brand felt corporate and cold, and their web platform was slow, inconsistent, and failed to reflect their sophisticated investment products. They needed to attract a new generation of clients without alienating existing high‑net‑worth users.",
      },
      approach: {
        heading: "Building trust through precision",
        content:
          "We crafted a warm‑minimal visual language that paired a modern sans‑serif font with subtle data‑inspired motifs. Motion played a key role: we designed a choreographed on‑boarding flow that introduced complexity through progressive disclosure, with soft scroll‑triggered reveals and purposeful micro‑interactions.",
      },
      solution: {
        heading: "A unified design & code system",
        content:
          "The final product included a design system with over 60 responsive components, a full marketing site, and a client portal prototype. We built the frontend in Next.js with Framer Motion and GSAP, achieving near‑perfect Lighthouse scores.",
      },
      outcome: {
        heading: "Measurable impact",
        content:
          "Post‑launch, Aether saw a 34% increase in qualified leads, a 28% improvement in time‑on‑site, and a dramatic uplift in brand perception scores. The design system now serves as the single source of truth for all digital products.",
      },
    },
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Radix UI",
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    slug: "mono-identity",
    title: "Mono Identity",
    client: "Mono",
    category: "Branding, Web, Engineering",
    year: "2024",
    role: "Brand Design · Full‑stack Frontend",
    heroImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop",
    overview:
      "Mono needed a versatile visual identity and a lightning‑fast marketing site that could double as a developer showcase. We focused on clarity, speed, and a monochromatic aesthetic that let the content breathe.",
    sections: {
      problem: {
        heading: "A brand without a voice",
        content:
          "Mono’s original identity lacked distinction, and their web presence was a generic template. They risked blending into a saturated market of API‑first products.",
      },
      approach: {
        heading: "Less is more — but every detail counts",
        content:
          "We stripped everything back to a pure typographic system with a custom monospaced wordmark and a restrained color palette. Motion was used exclusively to signify state changes and guide attention, never to decorate.",
      },
      solution: {
        heading: "A site that feels like an SDK",
        content:
          "The marketing site was built with Next.js and a custom CSS framework, achieving a 100 Lighthouse performance score. The codebase itself became a reference example for the developer community.",
      },
      outcome: {
        heading: "Community trust & conversion",
        content:
          "Within three months, Mono’s developer sign‑ups tripled, and the site became widely shared among frontend engineers. Several high‑profile companies reached out after seeing the technical quality of the implementation.",
      },
    },
    technologies: [
      "Next.js",
      "MDX",
      "Prism",
      "CSS Modules",
      "Framer Motion",
      "Vercel",
    ],
    images: [
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop",
    ],
  },
  {
    slug: "nexus-e-commerce",
    title: "Nexus Storefront",
    client: "Nexus Goods",
    category: "E-Commerce, UX Design",
    year: "2023",
    role: "UX Director · Full‑stack Frontend",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    overview:
      "Nexus required a high-performance headless e-commerce experience to scale their growing lifestyle brand. We designed a clean, immersive storefront focused on product storytelling and rapid checkout.",
    sections: {
      problem: {
        heading: "A rigid template limiting growth",
        content:
          "Nexus was constrained by a monolithic Shopify theme that made custom storytelling impossible and suffered from poor mobile performance. They needed a bespoke headless solution that could handle rapid inventory turnover while maintaining a premium brand feel.",
      },
      approach: {
        heading: "Content-driven commerce",
        content:
          "We prioritized a modular design system that allows the Nexus team to build rich editorial pages around their products. We utilized subtle parallax scrolling and dynamic image loading to make the experience feel app-like.",
      },
      solution: {
        heading: "Headless architecture",
        content:
          "By decoupling the frontend using Next.js and Shopify Storefront API, we reduced load times by 40%. The UI was built with Tailwind CSS, ensuring pixel-perfect responsiveness across all devices.",
      },
      outcome: {
        heading: "Increased conversion and retention",
        content:
          "The new platform yielded a 22% increase in mobile conversion rates and a significant drop in cart abandonment. The headless architecture also future-proofed their tech stack for international expansion.",
      },
    },
    technologies: [
      "Next.js",
      "Shopify Storefront API",
      "Tailwind CSS",
      "Zustand",
      "Vercel",
    ],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    slug: "lumin-ai",
    title: "Lumin AI",
    client: "Lumin Labs",
    category: "SaaS, Interface Design",
    year: "2023",
    role: "Lead Product Designer",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    overview:
      "Lumin Labs developed a powerful AI analysis tool but struggled with a complex, intimidating interface. We reimagined their dashboard into a clean, intuitive workspace that prioritizes user flow and data clarity.",
    sections: {
      problem: {
        heading: "Complexity hindering adoption",
        content:
          "The core AI technology was exceptional, but the interface was cluttered with unnecessary toggles, data tables, and confusing navigation, leading to high user churn during the trial period.",
      },
      approach: {
        heading: "Simplifying the complex",
        content:
          "We conducted extensive user research to understand the primary workflows. We then restructured the navigation, introduced a cohesive design system, and utilized a minimalist color palette to let the data stand out.",
      },
      solution: {
        heading: "A focused, modular dashboard",
        content:
          "We designed a modular dashboard that users could customize to their specific needs. Complex data visualizations were simplified into interactive, easy-to-digest charts using D3.js and polished with refined typography.",
      },
      outcome: {
        heading: "Empowered users",
        content:
          "Post-launch, user retention increased by 45%, and customer support tickets related to usability dropped significantly. The clean interface helped position Lumin Labs as a premium enterprise solution.",
      },
    },
    technologies: [
      "React",
      "TypeScript",
      "D3.js",
      "Tailwind CSS",
      "Radix UI",
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
    ],
  },
  {
    slug: "strata-architecture",
    title: "Strata Architects",
    client: "Strata Group",
    category: "Portfolio, Web Design",
    year: "2022",
    role: "Web Design · Development",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    overview:
      "Strata Architects needed a digital presence that matched the elegance and precision of their physical structures. We created a visually striking, image-forward portfolio site.",
    sections: {
      problem: {
        heading: "A digital presence lagging behind physical work",
        content:
          "Strata's previous website felt dated and failed to properly showcase their stunning architectural photography. The navigation was clunky, and the site felt static and lifeless.",
      },
      approach: {
        heading: "Letting the work speak",
        content:
          "We adopted a 'gallery-first' approach, utilizing large, immersive imagery and generous white space. Typography was kept sharp and minimal, echoing architectural blueprints.",
      },
      solution: {
        heading: "Fluid motion and layout",
        content:
          "We implemented smooth, staggered reveal animations and subtle parallax effects to give the site a sense of depth and movement, using GSAP to ensure high performance across all devices.",
      },
      outcome: {
        heading: "Award-winning portfolio",
        content:
          "The new website not only won multiple design awards but also significantly increased inquiries for high-end residential projects, establishing Strata as a leading firm in their region.",
      },
    },
    technologies: [
      "Next.js",
      "GSAP",
      "Tailwind CSS",
      "Sanity CMS",
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    slug: "aura-wellness",
    title: "Aura Wellness App",
    client: "Aura Health",
    category: "Mobile App, UI/UX",
    year: "2023",
    role: "Lead UI/UX Designer",
    heroImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
    overview:
      "Aura approached us to design a mobile application focused on mindfulness and guided meditation. We created a serene, calming interface that guides users intuitively without demanding their attention.",
    sections: {
      problem: {
        heading: "Digital noise in a mindfulness app",
        content:
          "Most wellness apps are surprisingly stressful to use, bombarded with notifications, complex tracking graphs, and vibrant colors that counteract the goal of relaxation.",
      },
      approach: {
        heading: "Designing for calm",
        content:
          "We chose an earthy, muted palette and relied entirely on soft gradients and fluid transitions. Every interaction was designed to feel soft—from the haptic feedback to the ease-in curves of the animations.",
      },
      solution: {
        heading: "A seamless daily ritual",
        content:
          "The final app features a simple daily hub that adapts to the time of day, offering contextual meditations. The UI recedes into the background, allowing the audio content to take center stage.",
      },
      outcome: {
        heading: "Market leadership",
        content:
          "Aura reached #1 in the Health & Fitness category within a month of launch, boasting a daily active user retention rate that was 3x the industry average.",
      },
    },
    technologies: [
      "React Native",
      "Framer Motion",
      "Redux",
      "Styled Components",
    ],
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
    ],
  }
];