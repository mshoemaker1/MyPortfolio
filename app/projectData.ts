import homeTrappedDowntown from "../public/trapped-downtown/home-trapped-downtown.jpg";
import homeRichfield from "../public/richfield-july-4/home-richfield.jpg";
import homeLittleCup from "../public/little-cup/home-little-cup.jpg";
import heroImageTrappedDowntown from "../public/trapped-downtown/hero-trapped-downtown.jpg";
import heroImageRichfield from "../public/richfield-july-4/hero-richfield.jpg";
import heroLittleCup from "../public/little-cup/hero-little-cup.jpg";
import handshake from "../public/handshake-icon.png";
import dottedGrid from "../public/dotted-grid-icon.png";
import people from "../public/people-icon.png";
import { Point } from "@/components/Section/SectionBullets";

export const data = [
  {
    title: "Unlocking more bookings",
    description: "Updating the Trapped Downtown user experience",
    image: homeTrappedDowntown,
    bg: "bg-sand-500",
    path: "/projects/trapped-downtown",
    tags: ["Freelance", "Entertainment"],
    hero: {
      image: heroImageTrappedDowntown,
      alt: "Hands holding a phone",
      bulletPoints: {
        role: ["UX Designer", "Project Manager"],
        tools: ["Figma", "Card Sort", "Google Suite"],
        when: ["5 weeks,", "March - April 2024"],
      },
      content: {
        challenge: "Trapped Downtown wants to increase their bookings. They've tried marketing in a few places locally but haven't seen enough of an increase in bookings.",
        goal: "Targeted refresh of website to be mobile-first while maintaining current branding.",
        process: [
          "My ideal process to address this challenge starts with a discovery phase where I learn as much as I can about the business itself, and start to dig in to the nuances of the industry. Then I plan to get to know users and their motivations.",
          "Once I have grounded myself with that information, I will evaluate the structure of information on the website to ensure there is a good foundation to design on. After setting the information architecture, I will create multiple wireframes then build mockups to review with the stakeholders. Finally, I plan to do user testing to ensure the designs are meeting the needs of the user and iterate based on those findings.",
          "In reality, I was able to follow my process fairly closely. I wasn't able to interview as many local users as I would have liked so I supplemented with users that met the criteria but were located across the country."
        ]
      }
    }
  },
  {
    title: "Rebuilding trust",
    description: "Designing the Richfield 4th of July website",
    image: homeRichfield,
    bg: "bg-lavender-500",
    path: "/projects/richfield-july-4",
    tags: ["Volunteer", "Community", "Events"],
    hero: {
      image: heroImageRichfield,
      alt: "Computer on a desk",
      bulletPoints: {
        role: ["UX Designer", "Web Designer"],
        tools: ["Figma", "Squarespace"],
        when: ["5 weeks,", "Oct - Nov 2023"],
      },
      content: {
        challenge: "The Richfield 4th of July volunteer committee needs to raise funds for this year’s celebration. After a hiatus due to a previous leader’s misappropriation of funds and COVID-19, the committee needs to rebuild trust with the community to raise the necessary funds.",
        goal: "Design and build a website that rebuilds trust with the community, accepts donations, and is the source of relevant information for the 2024 Richfield 4th of July celebration.",
        process: [
          "We were a small team of two - myself and my mentor, a Senior UX Designer. We had a tight deadline as the committee wanted to have a live website when sourcing year-end gifts from local businesses. With the tight deadline in mind, we laid out the following plan:",
          [
            "Interview Richfield residents to understand their needs",
            "Create personas & user journeys",
            "Create site map, moodboard, and style guide as foundation for the new website",
            "Design low-fidelity wireframes and test with users",
            "Design high-fidelity mockups",
            "Build Squarespace site",
          ],
          "Due to outside work and family commitments, we lost additional time at the beginning of the project making our timeline even tighter. We pared down our research plan and ultimately skipped testing our wireframes with users.  Though not ideal, we prioritized launching the site on time to meet the needs of the committee."
        ]
      }
    }
  },
  // {
  //   title: "Finding the perfect coffee shop",
  //   description: "Designing Little Cup, a responsive website",
  //   image: homeLittleCup,
  //   bg: "bg-bronze-500",
  //   path: "/projects/little-cup",
  //   tags: ["Case study", "social", "consumer services"],
  //   hero: {
  //     image: heroLittleCup,
  //     alt: "Computer on a desk",
  //     bulletPoints: {
  //       role: ["UX Designer"],
  //       tools: ["Figma"],
  //       when: ["Phase 1: 4 weeks,", "February 2024", "Phase 2: 1 week,", "June 2024"],
  //     },
  //     content: {
  //       challenge: "The well-known sites that provide crowd-sourced reviews about businesses have expanded their purview to the point of oversaturation, leading to a cluttered map and overwhelming list of recommendations for users.",
  //       goal: "Provide users an engaging experience to search and review coffee shops. The experience will include a search function with coffee shop specific filters and the ability to engage with other coffee shop loving community members.",
  //     }
  //   }
  // },
];

export const richfieldResearchSquares = [
  {
    image: handshake,
    alt: "Handshake icon",
    title: "Rebuild Trust",
    description:
      "Without donations, the events will not happen so the website needs to authentically (and quickly) rebuild trust with the community and potential sponsors.",
  },
  {
    image: dottedGrid,
    alt: "Dotted grid icon",
    title: "Build Awareness",
    description:
      "After a 3-year hiatus and a rebrand, users might be unaware or confused about the event.",
  },
  {
    image: people,
    alt: "People icon",
    title: "Serve Multiple Audiences",
    description:
      "The website will serve as a hub for gathering donations, signing up volunteers and vendors, and event details.",
  },
];

export const trappedDowntownCurrentExperiencePoints: Point[] = [
  {"Optimize navigation": "All topics are on the same level and could benefit from a clearer hierarchy."},
  {"Prioritize mobile-first refresh": "Each page is dense with content and CTA buttons are inconsistent. 60% of users visit the website using a mobile phone."},
  {"Create consistent layouts": "Small adjustments could have a big impact including adding a consistent margin to enhance readability."},
  {"Create homepage": "Add a homepage that has critical information and easily directs users where to find more information."},
]

export const trappedDowntownSiteMapPoints: Point[] = [
  {"Add Homepage": "Adding a homepage gives users high priority information quickly (ex. price, hours of operation) and a Book Now CTA. Homepage also serves as a central hub for directing users to more information."},
  {"Redesign CTA button": "Book Now CTA redesigned as a stand-alone button vs. blending in with the other menu items."},
  {"Streamline Content": "Organized content into 3 groups which enables a 'right information at the right time' flow to the website."},
  {"Update Footer": "Added relevant information and quick links to site footer to help users navigate the website."},
]

export const trappedDowntownCircles = [
  { x: "right-[calc(50%+430px)]", y: "top-[calc(50%-320px)]", text: 'Make “Book Now” action easy to find'},
  { x: "right-[calc(50%+340px)]", y: "bottom-[calc(50%-200px)]", text: 'Showcase external validation on website'},
  { x: "left-[calc(50%+400px)]", y: "top-[calc(50%-220px)]", text: 'Show WHO this experience is for'},
  { x: "left-[calc(50%+370px)]", y: "bottom-[calc(50%-250px)]", text: 'Remove group planning friction'},
]
