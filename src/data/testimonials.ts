export interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export const testimonials: TestimonialData[] = [
  {
    id: "1",
    name: "Alex Rodriguez",
    role: "Senior Developer",
    company: "TechCorp",
    avatar: "/img/avatars/alex.jpg",
    content: "Vipul's mentorship was invaluable during my open source journey. His guidance helped me navigate complex projects and build confidence as a developer.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Product Manager", 
    company: "StartupXYZ",
    avatar: "/img/avatars/sarah.jpg",
    content: "Working with Vipul on our documentation project was amazing. His expertise in developer relations and technical writing is unmatched.",
    rating: 5,
  },
  {
    id: "3",
    name: "Marcus Johnson",
    role: "DevOps Engineer",
    company: "CloudTech",
    avatar: "/img/avatars/marcus.jpg",
    content: "Vipul's talks and workshops on open source contribution are incredibly insightful. He has a unique way of making complex topics accessible.",
    rating: 5,
  },
  {
    id: "4",
    name: "Priya Sharma",
    role: "Frontend Developer",
    company: "WebSolutions",
    avatar: "/img/avatars/priya.jpg",
    content: "The mentorship sessions with Vipul helped me understand the importance of community building and effective communication in tech.",
    rating: 5,
  },
  {
    id: "5",
    name: "David Kim",
    role: "Software Engineer",
    company: "InnovateLabs",
    avatar: "/img/avatars/david.jpg",
    content: "Vipul's contributions to the open source community are remarkable. His work has helped countless developers find their path in tech.",
    rating: 5,
  },
  {
    id: "6",
    name: "Emma Thompson",
    role: "Technical Writer",
    company: "DocuFlow",
    avatar: "/img/avatars/emma.jpg",
    content: "Attending Vipul's workshop on technical documentation was a game-changer for my career. His practical approach and real-world examples were invaluable.",
    rating: 5,
  },
  {
    id: "7",
    name: "Raj Patel",
    role: "Full Stack Developer",
    company: "CodeCraft",
    avatar: "/img/avatars/raj.jpg",
    content: "Vipul's guidance during GSoC was instrumental in my success. His passion for fostering talent in open source is truly inspiring.",
    rating: 5,
  },
  {
    id: "8",
    name: "Devank Srivastava",
    role: "Frontend Engineer",
    company: "Orygin AI",
    avatar: "/img/avatars/lisa.jpg",
    content: "A big thank you to the amazing organizer, Vipul Gupta for putting together such a fantastic GitTogether. Your hard work and dedication made this possible, and I can’t wait to see what you plan for the next one!",
    rating: 5,
  }
];
