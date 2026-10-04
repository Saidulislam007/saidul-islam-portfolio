export type Project = {
  number: string;
  label: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  tags: string[];
  tone: string;
  image: string;
  liveUrl?: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    number: "01",
    label: "Featured case study",
    title: "TripPlan AI",
    summary: "TripPlan AI(team project)-A Bangladesh-based travel planning platform that helps users explore destinations, travel packages, hotels, and food options with AI-powered assistance.",
    problem: "Travel information was spread across different sources, making it difficult for users to find destinations, packages, hotels, and food options in one place.",
    solution: "Built responsive travel pages, AI Chatbox, Hotel & Food sections, travel packages, and dashboard tools for users and admins.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Express", "MongoDB"],
    tone: "amber",
    image: "/tripplan.png",
    liveUrl: "https://trip-plan-client.vercel.app",
    githubUrl: "https://github.com/Saidulislam007/TRIP-PLAN-AI"
  },
  {
  number: "02",
  label: "Interactive creative studio",
  title: "Nexora",
  summary: "An interactive creative studio website with cursor-driven images, animated headings, and scroll effects.",
  problem: "Combining text and cursor animations while keeping the website smooth and responsive across different screen sizes.",
  solution: "Created reusable sections with image trails, flying letter animations, image parallax, magnetic buttons, and an interactive FAQ.",
  tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Animations API"],
  tone: "sand",
  image: "/project-nexora.png",
  liveUrl: "https://nexora-seven-blush-17.vercel.app",
  githubUrl: "https://github.com/Saidulislam007/nexora"
}
  ,
  {
    number: "03",
    label: "Product experience",
    title: "RouteSync",
    summary: "A company vehicle sharing platform that manages employee trip requests, vehicle assignments, and driver operations.",
    problem: "Managing trip requests, vehicle availability, drivers, and trip status across different company roles.",
    solution: "Built separate Employee, Manager, and Driver dashboards with trip requests, approvals, vehicle/driver assignment, trip tracking, and role-based access.",
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Better Auth"],
    tone: "mint",
    image: "/project-routesync.webp",
    liveUrl: "https://routesync-phi.vercel.app",
    githubUrl: "https://github.com/Saidulislam007/routesync"
  },
  {
    number: "04",
    label: "E-commerce experience",
    title: "Furniture",
    summary: "A furniture e-commerce platform where users can browse products, manage carts, and place orders.",
    problem: "Creating a secure shopping experience with different access levels for users, managers, and administrators.",
    solution: "Built product browsing, cart and order features with Better Auth and separate dashboards for users, managers, and admins.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Better Auth"],
    tone: "sand",
    image: "/project-furniture.webp",
    liveUrl: "https://furniture-client-chi.vercel.app",
    githubUrl: "https://github.com/Saidulislam007/furniture-client"
  },
  {
    number: "05",
    label: "Healthcare platform",
    title: "MedReserve",
    summary: "A modern healthcare appointment platform designed to make finding doctors and reserving care feel simple and trustworthy.",
    problem: "Patients often struggle to compare medical professionals and understand appointment availability through fragmented interfaces.",
    solution: "A clear discovery and booking flow organizes doctor information, specialties and appointment actions around patient needs.",
    tags: ["React", "JavaScript", "Tailwind", "Firebase"],
    tone: "blue",
    image: "/project-medreserve.webp",
    liveUrl: "https://doctor-client-beta.vercel.app",
    githubUrl: "https://github.com/Saidulislam007/doctor-client"
  },
  {
    number: "06",
    label: "Creative gallery",
    title: "TilesGallery",
    summary: "A visual gallery experience that presents curated tile collections through an elegant, responsive browsing interface.",
    problem: "Design-heavy catalogues lose impact when imagery, categories and product context compete for attention.",
    solution: "A clean gallery system gives every collection room to breathe while keeping exploration fast across screen sizes.",
    tags: ["React", "JavaScript", "Tailwind", "Responsive UI"],
    tone: "rose",
    image: "/project-tilesgallery.webp",
    liveUrl: "https://tiles-gallery-iq34.vercel.app",
    githubUrl: "https://github.com/Saidulislam007/tiles-gallery"
  },
  {
    number: "07",
    label: "Library experience",
    title: "BiblioDrop",
    summary: "A focused digital library interface for discovering, organising and engaging with books in one accessible space.",
    problem: "Book collections become hard to navigate when discovery, details and personal actions are spread across disconnected screens.",
    solution: "A structured catalogue combines clear book presentation with intuitive browsing and collection-focused interactions.",
    tags: ["React", "JavaScript", "Tailwind", "Firebase"],
    tone: "violet",
    image: "/project-bibliodrop.webp",
    githubUrl: "https://github.com/Saidulislam007/bibliodrop-client"
  },
  {
  number: "08",
  label: "Typography experience",
  title: "Fontipsums",
  summary: "An immersive typography showcase that presents creative font combinations through full-screen layouts, bold visuals and smooth scrolling.",
  problem: "Exploring font combinations can feel repetitive when typography examples lack visual context, contrast and an engaging presentation.",
  solution: "An interactive editorial experience combines distinctive typefaces, imagery, colors and smooth transitions to make font pairings easier and more enjoyable to explore.",
  tags: ["HTML", "CSS", "JavaScript"],
  tone: "dark",
  image: "/project-fontipsums.webp",
  liveUrl: "https://fontipsums.vercel.app",
  githubUrl: "https://github.com/Saidulislam007/Fontipsums.git"
}
];
