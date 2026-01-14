// Session information configuration
// Fill in details relevant to your presentation
// Optional fields can be left empty ("") or arrays empty ([])

interface FeaturedLink {
  name: string;
  url: string;
  description?: string;
}

export const sessionInfo = {
  // Main presentation title
  title: "From intern to toolmaker",
  // Subtitle or tagline
  subtitle: "Five roles AI can play to support research and learning",

  // Link to the talk/presentation page (optional)
  talkPageUrl: "",
  talkPageLabel: "Talk Page", // e.g., "Talk Page", "Webinar Recording", "Session Info"

  speaker: {
    name: "Dominik Lukeš",
    affiliation: "Oxford e-Research Centre, University of Oxford",
    email: "Dominik.Lukes@oerc.ox.ac.uk",
    links: {
      website: "https://oerc.ox.ac.uk/ai-centre/about/staff/dominik-lukes",
    },
    bio: `Research facilitator and trainer at the Oxford e-Research Centre, helping researchers leverage AI and computational methods for research and learning.`,
  },

  // Event/conference details (optional - leave empty if standalone presentation)
  event: {
    name: "", // e.g., "AULC 2026" - leave empty if no conference
    date: "January 2026", // e.g., "Friday, 9 January 2026"
    time: "", // e.g., "14:00 - 15:15"
    location: "", // e.g., "Room 301"
    type: "Talk", // e.g., "Workshop", "Talk", "Seminar", "Webinar"
    sessionLink: "", // Link to conference program page (optional)
  },

  // Multi-paragraph abstract (use \n\n for paragraph breaks)
  abstract: `Exploring five key roles that AI can play in supporting research and learning: from basic task automation to sophisticated tool creation. This session examines practical applications and considerations for researchers looking to integrate AI into their workflows.`,

  // Key topics covered in the presentation (optional)
  // These will be displayed as highlights on the home page
  keyTopics: [] as string[],
  // Example:
  // keyTopics: [
  //   "Topic 1: Brief description",
  //   "Topic 2: Brief description",
  // ],

  // Featured links section (optional)
  // Use for related resources, example apps, tools, etc.
  featuredLinks: {
    title: "", // e.g., "Related Resources", "Example Apps", "Tools Mentioned"
    items: [] as FeaturedLink[],
    // Example:
    // items: [
    //   {
    //     name: "Resource Name",
    //     url: "https://example.com",
    //     description: "Brief description",
    //   },
    // ],
  },
};
