import projectImage1 from "../public/sample-project-001.jpeg";
import projectImage2 from "../public/sample-project-002.jpeg";
import projectImage3 from "../public/sample-project-003.jpeg";
import heroImageTrappedDowntown from "../public/hero-trapped-downtown.jpg";
import heroImageRichfield from "../public/hero-richfield.jpg";

export const data = [
  {
    title: "Unlocking more bookings",
    description: "Refreshing the Trapped Downtown website",
    image: projectImage1,
    bg: "bg-sand-500",
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
        process: [
          "My ideal process to address this challenge starts with a discovery phase where I learn as much as I can about the business itself, and start to dig in to the nuances of the industry. Then I plan to get to know users and their motivations.",
          "Once I have grounded myself with that information, I will evaluate the structure of information on the website to ensure there is a good foundation to design on. After setting the information architecture, I will create multiple wireframes then build mockups to review with the stakeholders. Finally, I plan to do user testing to ensure the designs are meeting the needs of the user and iterate based on those findings.",
          "In reality, I was able to follow my process fairly closely. I wasn't able to interview as many local users as I would have liked so I supplemented with users that met the criteria but were located across the country."
        ]
      }
    }
  },
  {
    title: "Rebuilding Trust",
    description: "Designing the Richfield 4th of July website",
    image: projectImage2,
    bg: "bg-lavender-500",
    path: "/projects/richfield-july-4",
    tags: ["Volunteer", "Community", "Events"],
    hero: {
      image: heroImageRichfield,
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
            "Design Lo-Fidelity wireframes and test with users",
            "Design Hi-Fidelity mockups",
            "Build Squarespace site",
          ],
          "Due to outside work and family commitments, we lost additional time at the beginning of the project making our timeline even tighter. We pared down our research plan and ultimately skipped testing our wireframes with users.  Though not ideal, we prioritized launching the site on time to meet the needs of the committee."
        ]
      }
    }
  },
  {
    title: "Project Title",
    description: "Some description text here",
    image: projectImage3,
    bg: "bg-green-500",
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
        process: [
          "My ideal process to address this challenge starts with a discovery phase where I learn as much as I can about the business itself, and start to dig in to the nuances of the industry. Then I plan to get to know users and their motivations.",
          "Once I have grounded myself with that information, I will evaluate the structure of information on the website to ensure there is a good foundation to design on. After setting the information architecture, I will create multiple wireframes then build mockups to review with the stakeholders. Finally, I plan to do user testing to ensure the designs are meeting the needs of the user and iterate based on those findings.",
          "In reality, I was able to follow my process fairly closely. I wasn't able to interview as many local users as I would have liked so I supplemented with users that met the criteria but were located across the country."
        ]
      }
    }
  },
];
