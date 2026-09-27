import type { Project } from '../types'

export const scania: Project = {
  id: 'scania-help-center',
  title: "Empowering customers: Building Scania's global Help Centre",
  description:
    "Scania sought to create a structured and scalable Help Centre to empower customers with autonomy, clarity, and control over their digital experience. The initiative aimed to reduce dependency on support, alleviate pressure on sales and support teams, and ensure consistently up-to-date content across global markets. By aligning with Scania's mission to deliver a premium digital experience, the Help Centre was designed to foster self-service, enhance customer satisfaction, and support users in navigating Scania's digital ecosystem with confidence.",
  client: 'Scania',
  year: '2025',
  industry: 'Automotive',
  role: 'Product Owner & UX Designer',
  coverImage: '/images/scania/thumbnail-scania.webp',
  tags: ['AI', 'UX/UI', 'Product'],
  stats: [
    {
      value: '1 year',
      label: 'Length of assignment, starting as UX Designer and ending as a PO.',
    },
    {
      value: '10 000+',
      label: 'Page views on the Help Centre every month.',
    },
    {
      value: '30+',
      label: 'The number of languages the Help Centre is available for.',
    },
  ],
  sections: [
    {
      type: 'text-image',
      title: 'The Challenge',
      text: 'I was tasked to create a scalable Help Centre for Scania, empowering customers to find answers independently and reducing reliance on sales and support. Delivering a consistent, up-to-date experience across 100+ countries and 30+ languages was key, alongside upholding Scania\'s mission of a premium digital ecosystem. Balancing stakeholder and user needs, tight timelines, and complex technical requirements made the challenge ambitious.',
      image: '/images/scania/challenge-scania.webp',
      imageAlt: 'Scania Help Centre interface',
      imagePosition: 'left',
      extraBlocks: [
        {
          title: 'The Celebrations',
          text: 'We achieved over 10,000 page views in the first month and successfully launched the Help Centre on time. The rollout was celebrated together with the markets at Scania\'s Digital Service Conference. Our AI initiative not only received approval from top management but the proof-of-concept was a success. The platform is now live in 100+ countries, driving global engagement and positive feedback across teams.',
        },
      ],
    },
    {
      type: 'text-image',
      title: 'The Process',
      text: 'I steered stakeholder alignment, design, and IT teams, ensuring clarity and collaboration throughout. I initiated and led the AI search setup using AWS Bedrock, built a knowledge base, and tested models with Langfuse for real user feedback and data-driven optimization. My hands-on, user-focused approach shaped an intuitive platform, and I provided clear business cases using token-level cost analysis.\n\nI initiated and led the establishment of a dedicated marketing group, representing our five largest markets, to ensure ongoing, structured input from key customer segments. This collaborative setup enabled us to gather representative user insights in real time, inform usability testing cycles, and validate feature development throughout the product lifecycle. I organized user interviews and conducted regular needs analyses to ensure that our platform enhancements were shaped by genuine user pain points and local market realities.\n\nBeyond my core role, I addressed user needs by designing quick-guide images for each category, creating video tutorial thumbnails, and establishing a structured content creation framework for the Help Centre.',
      image: '/images/scania/process-scania.webp',
      imageAlt: 'Scania Help Centre AI search setup',
      imagePosition: 'right',
    },
    {
      type: 'full-image',
      image: '/images/scania/gallery-scania.webp',
      imageAlt: 'Scania Help Centre overview',
    },
  ],
}
