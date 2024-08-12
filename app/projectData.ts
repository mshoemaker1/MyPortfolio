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
    title: "Finding clues and solving puzzles to unlock more bookings",
    description: "Updating the Trapped Downtown user experience",
    image: homeTrappedDowntown,
    bg: "bg-sand-500",
    path: "/projects/trapped-downtown",
    tags: ["Freelance", "Entertainment"],
    hero: {
      image: heroImageTrappedDowntown,
      alt: "Hands holding a phone",
      content: {
        challenge: "Trapped Downtown needs to increase their revenue. They’ve tried marketing in a few places locally (including innovative ideas like adding QR codes on drink coasters at local breweries and sponsoring the pedal pub that runs downtown) but they haven’t seen a substantial enough increase in bookings to turn this hobby business into a revenue generating business.",
        goal: "Increase revenue through multi-prong approach to fresh marketing. This will include turning a non-responsive website into a mobile experience as well as continuing to implement innovative marketing activities.",
        process: [
          [
          "Competitive analysis",
          "Heuristic evaluation of current website",
          "User interviews",
          "Card sort activity with users",
          "Identified actionable insights",
          "Reorganize information architecture and site map",
          "Mid-point check-in with stakeholders",
          "Sketched mobile-first wireframes",
          "Designed high fidelity prototype",
          "Conducted user testing and made modifications",
          "Worked with developer to implement new designs",
          ],
        ]
      }
    }
  },
  {
    title: "Rebuilding trust with the community after financial scandal",
    description: "Designing the Richfield 4th of July website",
    image: homeRichfield,
    bg: "bg-lavender-500",
    path: "/projects/richfield-july-4",
    tags: ["Volunteer", "Community", "Events"],
    hero: {
      image: heroImageRichfield,
      alt: "Computer on a desk",
      content: {
        challenge: "The Richfield 4th of July volunteer committee needs to raise funds for this year’s celebration. After a hiatus due to a previous leader’s misappropriation of funds and COVID-19, the committee needs to rebuild trust with the community to raise the necessary funds.",
        process: [
          [
            "Interviewed Richfield community members",
            "Conducted competitive analysis",
            "Identified actionable insights",
            "Designed low-fidelity wireframes ",
            "Built Squarespace site",
          ],
        ],
        outcome: "The site went live and empowered the committee to raise funds from local business and community members. The event was attended by an estimated 50,000 people. The community was re-engaged with the Richfield 4th of July event.",
      }
    }
  },
  {
    title: "Finding the perfect coffee shop",
    description: "Designing Little Cup, a responsive website",
    image: homeLittleCup,
    bg: "bg-bronze-500",
    path: "/projects/little-cup",
    tags: ["Case study", "social", "consumer services"],
    hero: {
      image: heroLittleCup,
      alt: "Computer on a desk",
      content: {
        challenge: "The well-known sites that provide crowd-sourced reviews about businesses have expanded their purview to the point of oversaturation. This leads to a cluttered map and an overwhelming list of recommendations for users.",
        goal: "Provide users an engaging experience to search and review coffee shops. The experience will include a search function with coffee shop specific filters and the ability to engage with other coffee shop loving community members.",
      }
    }
  },
];

export const richfieldResearchSquares = [
  {
    image: handshake,
    alt: "Handshake icon",
    title: "Rebuild Trust",
    description:
      "The events won’t happen without donations so the website needs to authentically rebuild trust with the community and sponsors.",
  },
  {
    image: dottedGrid,
    alt: "Dotted grid icon",
    title: "Build Awareness",
    description:
      "After a 3-year hiatus and a rebrand, users might be unaware or reluctant to engage with the event.",
  },
  {
    image: people,
    alt: "People icon",
    title: "Serve Multiple Audiences",
    description:
      "The website will serve as a hub for gathering donations, signing up volunteers, and event details.",
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
  { x: "left-[calc(50%+400px)]", y: "top-[calc(50%-220px)]", text: 'Show WHO this experience is for'},
  { x: "right-[calc(50%+340px)]", y: "bottom-[calc(50%-200px)]", text: 'Showcase external validation on website'},
  { x: "left-[calc(50%+370px)]", y: "bottom-[calc(50%-250px)]", text: 'Remove group planning friction'},
]
