import type { Project } from '../types'

export const senseworks: Project = {
  id: 'senseworks-tech-platform',
  title: 'Rebranding of cloud-based analysis and audit program',
  description:
    'Senseworks wanted to improve the user experience of their cloud-based B2B SaaS analysis program and upcoming audit program while seamlessly integrating a new rebranding across their web platforms. The goal was to ensure a smooth transition from the old design to the new, maintaining user efficiency and satisfaction throughout the process.',
  client: 'Senseworks',
  year: '2023',
  industry: 'Finance',
  role: 'UX-Designer, Frontend Developer',
  coverImage: '/images/senseworks/thumbnail-senseworks.webp',
  tags: ['UX/UI', 'Product'],
  stats: [
    {
      value: '5 months',
      label: 'Length of assignment',
    },
    {
      value: '60+',
      label: 'Companies using it',
    },
    {
      value: '10',
      label: 'People in the team at that point',
    },
  ],
  sections: [
    {
      type: 'text-image',
      title: 'The Challenge',
      text: 'Senseworks needed to enhance the user experience of their cloud-based analysis program while implementing a comprehensive rebranding across their digital platforms. The goal was to ensure a seamless transition to the new design without disrupting user efficiency or satisfaction. Addressing weaknesses in user flow and integrating new branding elements, including dark mode, was essential.',
      image: '/images/senseworks/challenge-senseworks.webp',
      imageAlt: 'Senseworks analysis platform interface',
      imagePosition: 'left',
      extraBlocks: [
        {
          title: 'The Celebrations',
          text: 'My contributions led to a smoother, more intuitive user experience for customers on Senseworks Analysis. The redesigned pages, streamlined workflows, and updated graphic profile were well received and remain actively used today. Integrating the Ant Design system increased design consistency and development efficiency. My research-driven improvements continue to add long-term value, supporting ongoing development and customer satisfaction.',
        },
      ],
    },
    {
      type: 'text-image',
      title: 'The Process',
      text: 'As the main UX Designer, I collaborated closely with the UX lead and frontend team throughout the rebranding and redesign process. To identify pain points and optimize user flows, I conducted user research using Hotjar, analyzed behavior data, and established research tools and processes which have been adopted company-wide.\n\nDrawing on these insights, I took the initiative to redesign key pages in the Senseworks Analysis platform, ensuring the integration of new branding elements while maintaining user efficiency. I led the development of a new graphic profile for dark mode and facilitated its implementation, aligning visual updates with technical requirements by integrating the Ant Design system into the codebase. I documented actionable recommendations for ongoing development, communicated regularly with stakeholders, and ensured user needs were at the forefront of every design decision.',
      image: '/images/senseworks/process-senseworks.webp',
      imageAlt: 'Senseworks rebranding design process',
      imagePosition: 'right',
    },
    {
      type: 'full-image',
      image: '/images/senseworks/gallery-senseworks.webp',
      imageAlt: 'Senseworks platform overview',
    },
  ],
}
