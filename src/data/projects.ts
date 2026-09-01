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
  { number:"01", label:"Featured case study", title:"TripPlan AI", summary:"A smart travel planning platform designed around the real decisions Bangladeshi travellers make — destination, budget, transport, food and pace.", problem:"Travel information is scattered across pages, groups and outdated posts, making even a short local trip hard to plan confidently.", solution:"One responsive experience connects personalised itineraries with destination discovery, hotels, local food, transport guidance and role-based content workflows.", tags:["Next.js","TypeScript","Tailwind","Express","MongoDB"], tone:"amber", image:"/project-tripplan-ai.webp", liveUrl:"https://tripplan-ai-delta.vercel.app", githubUrl:"https://github.com/Saidulislam007/TRIP-PLAN-AI" },
  { number:"02", label:"Product experience", title:"RouteSync", summary:"A route-focused travel experience that turns saved trips into clear, useful day-by-day details across devices.", problem:"Trip history becomes difficult to use when routes, schedules and essential details are separated from the traveller’s dashboard.", solution:"A focused dashboard brings trip history, route details and actions into one consistent flow with responsive navigation.", tags:["React","JavaScript","Tailwind","REST API"], tone:"mint", image:"/project-routesync.webp", githubUrl:"https://github.com/Saidulislam007/routesync" },
  { number:"03", label:"E-commerce experience", title:"Furniture", summary:"A polished furniture shopping experience that helps customers discover products and move confidently from browsing to purchase.", problem:"Large product collections can feel difficult to explore when categories, product details and purchase actions are visually disconnected.", solution:"A responsive storefront brings product discovery, clear details and conversion-focused actions into one consistent experience.", tags:["React","JavaScript","Tailwind","Firebase"], tone:"sand", image:"/project-furniture.webp", liveUrl:"https://furniture-client-chi.vercel.app", githubUrl:"https://github.com/Saidulislam007/furniture-client" },
  { number:"04", label:"Healthcare platform", title:"MedReserve", summary:"A modern healthcare appointment platform designed to make finding doctors and reserving care feel simple and trustworthy.", problem:"Patients often struggle to compare medical professionals and understand appointment availability through fragmented interfaces.", solution:"A clear discovery and booking flow organizes doctor information, specialties and appointment actions around patient needs.", tags:["React","JavaScript","Tailwind","Firebase"], tone:"blue", image:"/project-medreserve.webp", liveUrl:"https://doctor-client-beta.vercel.app", githubUrl:"https://github.com/Saidulislam007/doctor-client" },
  { number:"05", label:"Creative gallery", title:"TilesGallery", summary:"A visual gallery experience that presents curated tile collections through an elegant, responsive browsing interface.", problem:"Design-heavy catalogues lose impact when imagery, categories and product context compete for attention.", solution:"A clean gallery system gives every collection room to breathe while keeping exploration fast across screen sizes.", tags:["React","JavaScript","Tailwind","Responsive UI"], tone:"rose", image:"/project-tilesgallery.webp", liveUrl:"https://tiles-gallery-iq34.vercel.app", githubUrl:"https://github.com/Saidulislam007/tiles-gallery" },
  { number:"06", label:"Library experience", title:"BiblioDrop", summary:"A focused digital library interface for discovering, organising and engaging with books in one accessible space.", problem:"Book collections become hard to navigate when discovery, details and personal actions are spread across disconnected screens.", solution:"A structured catalogue combines clear book presentation with intuitive browsing and collection-focused interactions.", tags:["React","JavaScript","Tailwind","Firebase"], tone:"violet", image:"/project-bibliodrop.webp", githubUrl:"https://github.com/Saidulislam007/bibliodrop-client" },
];
