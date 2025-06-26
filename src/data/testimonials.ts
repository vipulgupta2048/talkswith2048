export interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

export const testimonials: TestimonialData[] = [
  {
    id: "1",
    name: "Nikhil Maan",
    role: "Senior Developer",
    company: "FoodPe",
    avatar: "/img/avatars/alex.jpg",
    content: "Vipul's mentorship was invaluable during the ALiAS AMA program. His guidance helped me navigate complex projects, and going out of the way to edit some parts of the proposal himself.",
  },
  {
    id: "2",
    name: "Nishchit Dhanani & Shreya Ranpariya",
    role: "Founder", 
    company: "Firecamp",
    avatar: "/img/avatars/sarah.jpg",
    content: "“Vipul is the goto person for technical documentation. He brings commitment and experience across the stack. If you’re looking for someone to write your technical docs I’d say, don’t waste your time, just call this guy!”",
  },
  {
    id: "3",
    name: "Yash",
    role: "Software Engineer",
    company: "Annoymous",
    avatar: "/img/avatars/marcus.jpg",
    content: "Vipul has a unique way of making complex topics accessible with his interactive presentations. It was an enlightening talk and your made each concept clear.",
  },
  {
    id: "6",
    name: "Annoymous",
    role: "Technical Writer",
    company: "Annoymous",
    avatar: "/img/avatars/annoymous.jpg",
    content: "Attending Vipul's workshop on technical documentation was a game-changer for my career. His practical approach and real-world examples were invaluable.",
  },
  {
    id: "7",
    name: "Zoya Naaz",
    role: "Associate",
    company: "IIM Business Incubator",
    avatar: "/img/avatars/raj.jpg",
    content: "Vipul’s workshop was incredibly insightful. He made Git and GitHub easy to understand and inspired me to start contributing to open source. His approachable nature and real-world insights made a lasting impact. Truly grateful for his guidance!",
  },
  {
    id: "8",
    name: "Devank Srivastava",
    role: "Frontend Engineer",
    company: "Orygin AI",
    avatar: "/img/avatars/lisa.jpg",
    content: "A big thank you to the amazing organizer, Vipul Gupta for putting together such a fantastic GitTogether. Your hard work and dedication made this possible, and I can’t wait to see what you plan for the next one!",
  }
];
