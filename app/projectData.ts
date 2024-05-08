import projectImage1 from "../public/sample-project-001.jpeg";
import projectImage2 from "../public/sample-project-002.jpeg";
import projectImage3 from "../public/sample-project-003.jpeg";
import heroImageTrappedDowntown from "../public/hero-trapped-downtown.jpg";

export const data = [
  {
    title: "Unlocking more bookings",
    description: "Refreshing the Trapped Downtown website",
    image: projectImage1,
    bg: "bg-green-500",
    path: "/projects/trapped-downtown",
    tags: ["Freelance", "Entertainment"],
    hero: {
      image: heroImageTrappedDowntown,
      bulletPoints: {
        role: ["UX Designer", "Project Manager"],
        tools: ["Figma", "Card Sort", "Google Suite"],
        when: ["5 weeks,", "March - April 2024"],
      },
      content: {
        challenge: "Trapped Downtown wants to increase their bookings. They've tried marketing in a few places locally but haven't seen enough of an increase in bookings.",
        goal: "Targeted refresh of website to be mobile-first while maintaining current branding.",
        process: "I started with a card sort to understand the current site's information architecture. I then created wireframes and a prototype in Figma. I tested the prototype with users and made adjustments based on their feedback. I then worked with the developer to implement the changes."
      }
    }
  },
  {
    title: "Community engagemnent",
    description: "Relaunching the Richfield July 4th website",
    image: projectImage2,
    bg: "bg-lavender-500",
    path: "/projects/richfield-july-4",
    tags: ["Freelance", "Community"],
    hero: {
      image: "../public/hero-trapped-downtown.jpg",
      bulletPoints: {
        role: ["UX Designer", "Project Manager"],
        tools: ["Figma", "Card Sort", "Google Suite"],
        when: ["5 weeks,", "March - April 2024"],
      },
      content: {
        challenge: "Trapped Downtown wants to increase their bookings. They've tried marketing in a few places locally but haven't seen enough of an increase in bookings.",
        goal: "Targeted refresh of website to be mobile-first while maintaining current branding.",
        process: "I started with a card sort to understand the current site's information architecture. I then created wireframes and a prototype in Figma. I tested the prototype with users and made adjustments based on their feedback. I then worked with the developer to implement the changes."
      }
    }
  },
  {
    title: "Project Title",
    description: "Some description text here",
    image: projectImage3,
    bg: "bg-sand-500",
    path: "/projects/project-3",
    tags: ["Tag 1", "Tag 2"],
    hero: {
      image: "../public/hero-trapped-downtown.jpg",
      bulletPoints: {
        role: ["UX Designer", "Project Manager"],
        tools: ["Figma", "Card Sort", "Google Suite"],
        when: ["5 weeks,", "March - April 2024"],
      },
      content: {
        challenge: "Trapped Downtown wants to increase their bookings. They've tried marketing in a few places locally but haven't seen enough of an increase in bookings.",
        goal: "Targeted refresh of website to be mobile-first while maintaining current branding.",
        process: "I started with a card sort to understand the current site's information architecture. I then created wireframes and a prototype in Figma. I tested the prototype with users and made adjustments based on their feedback. I then worked with the developer to implement the changes."
      }
    }
  },
];
