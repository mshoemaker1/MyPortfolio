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
    },
    takeaways: [
      {title: "Stakeholder understanding", description: "The stakeholder had a pivotal aha! moment when I showed the competitors' mobile homescreens next to Trapped Downtown's mobile homescreen - they were able to step out of their understanding of their own website and really get in the user's shoes and see it with fresh eyes."},
      {title: "Getting curious", description: "After completing the project, I spent time exploring other analogous websites for interactive events (ex. Meow Wolf). I became more curious and learned that this type of analogous exploration could really strengthen my design process. "},
    ]
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
    },
    takeaways: [
      {title: "Project planning", description: "I learned the importance (and power) of planning for staged releases of information on an event-based website. We were able to quickly design and build an MVP website without getting bogged down waiting on event details."},
      {title: "Engaging the community", description: "We engaged with the community throughout our process to ensure we were meeting their needs and building awareness."}
    ]
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
        challenge: "I am passionate about cold brew coffee and find joy in searching out new coffee shops in the Twin Cities and wherever I am traveling! Unfortunately, finding crowd sourced reviews specifically about cold brew is very difficult. Every car dealership and hotel lobby advertises that they have coffee but I don’t want just any old cup of joe, I want cold brew!",
        goal: "I want to be able to search for cold brew coffee and ignore the coffee shops that don’t have cold brew. This will also allow me to connect with other cold brew lovers in the community.",
        process: [
          [
            "Competitive analysis",
            "User interviews",
            "Identified user pain points",
            "Built site map",
            "Sketched responsive wireframes",
            "Built low fidelity wireframes",
            "Designed high fidelity mockups",
            "Multiple rounds of user testing",
          ]
        ]
      }
    },
    takeaways: [
      {title: "Language matters", description: "Language for filters is important and ideally more testing would be done to validate the current choices as well as adding filters based on popular searches."},
      {title: "Context matters", description: "Call to action buttons need to be  in context. “Write a Review” doesn’t make sense without the context of a specific shop or product to write the review about."},
    ]
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
