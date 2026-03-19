// Session information configuration
import type { FeaturedLink } from './sessionInfo.types';

export const sessionInfo = {
  title: "From Intern to Toolmaker",
  subtitle: "Five Roles AI Can Play in Your Studies",

  talkPageUrl: "",
  talkPageLabel: "",

  speaker: {
    name: "Dominik Lukeš",
    affiliation: "Oxford e-Research Centre, University of Oxford",
    email: "Dominik.Lukes@oerc.ox.ac.uk",
    links: {
      website: "https://dominiklukes.net",
    },
    bio: `AI Consultant for Research and Strategy at the Oxford e-Research Centre. Helps researchers and students leverage AI and computational methods for research and learning. Runs workshops on practical AI applications across disciplines.`,
  },

  event: {
    name: "",
    date: "",
    time: "",
    location: "",
    type: "Workshop",
    sessionLink: "",
  },

  abstract: `This workshop covers the key topics in what roles AI can play in the process of learning, researching, and studying a subject. These roles will not only give you ideas about what tools like ChatGPT, NotebookLM, or Google Gemini can do for you but also how to approach using them with the right level of confidence and caution.\n\nThe five roles are: Intern (routine tasks and literature searches), Translator (between languages, formats, and modalities), Peer Reviewer (feedback on ideas and work), Tutor (step-by-step concept guidance), and Toolmaker (creating useful tools for research and study).\n\nThe workshop also covers the key principles of how all generative AI tools work: a combination of models and orchestrations which combine the intelligence of Large Language Models with traditional tools like search or code.`,

  keyTopics: [
    "AI as Intern — Help with routine tasks: from literature searches to organising your study schedule",
    "AI as Translator — Translate between languages, formats, styles and even modalities like text to audio",
    "AI as Peer Reviewer — Give you feedback on your ideas and work",
    "AI as Tutor — Walk you through concepts and processes step by step",
    "AI as Toolmaker — Create useful tools for yourself and others to use in your research and study",
    "Understanding the jagged frontier of AI capabilities — what AI can and cannot do",
    "Models vs Orchestration — how generative AI tools actually work",
    "Practical verification strategies — how to check and validate AI outputs",
  ],

  featuredLinks: {
    title: "Tools & Resources",
    items: [
      {
        name: "Google AI Studio",
        url: "https://ai.dev",
        description: "Free platform for exploring frontier AI models and building simple tools",
      },
      {
        name: "NotebookLM",
        url: "https://notebooklm.google.com",
        description: "AI-powered research and note-taking tool with podcast generation",
      },
      {
        name: "EduTools",
        url: "https://edutools.fyi",
        description: "Collection of educational tools and workshop handouts",
      },
      {
        name: "Deliberate Practice Guide",
        url: "https://deliberatepractice.dominiklukes.net",
        description: "Guide to building skills through reflective practice",
      },
    ] as FeaturedLink[],
  },
};
