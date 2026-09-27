import type { Project } from '../types'

export const netlightWebsite: Project = {
  id: 'netlight-website',
  title: 'Rebuilding Netlight.com: Brand integration and CMS implementation',
  description:
    "Netlight needed a website that reflected its refreshed brand and supported its mission of enabling success in business-critical projects. As lead designer, I worked across teams to deliver a modern, easy-to-update site built on a CMS, making content management effortless for internal stakeholders. The new website now powerfully communicates Netlight's offerings to clients and future talents, positioning the company for continued growth in a fast-evolving digital landscape.",
  client: 'Netlight',
  year: '2024',
  industry: 'IT & Management Services',
  role: 'Design Lead & UX Designer',
  coverImage: '/images/netlight/thumbnail-netlight.webp',
  tags: ['UX/UI', 'Product'],
  stats: [
    {
      value: '2 months',
      label: 'Length of assignment',
    },
    {
      value: '2 000+',
      label: 'Employees at offices across the world',
    },
    {
      value: '15 000',
      label: 'Average number of visitors per month',
    },
  ],
  sections: [
    {
      type: 'text-image',
      title: 'The Challenge',
      text: "Netlight's previous webpage had become outdated in design, content, and alignment with the company's brand and evolving audience. The site failed to clearly communicate Netlight's value to future talents and potential clients, and lacked an easy way for internal teams to update content efficiently. With a recent rebrand, the company needed a new website that accurately reflected its identity and could be quickly adapted as needs evolved. Meeting these goals posed additional pressure due to tight deadlines and the need for seamless cross-team collaboration.",
      image: '/images/netlight/challenge-netlight.webp',
      imageAlt: 'Netlight website redesign',
      imagePosition: 'left',
      extraBlocks: [
        {
          title: 'The Celebrations',
          text: "I led the redesign and launch of Netlight's new website, delivering a modern platform that aligned with refreshed brand guidelines and communicated our offering effectively to both clients and prospective employees. The site was built on a CMS, empowering internal teams to keep content current without technical barriers. Through enhanced design collaboration, we achieved a high-quality release within the deadline, fostering consistency and excellence throughout the project. The new webpage now serves as a dynamic showcase for Netlight's brand and expertise, supporting recruitment and business development.",
        },
      ],
    },
    {
      type: 'text-image',
      title: 'The Process',
      text: 'Taking ownership of the end-to-end experience, I worked closely with the brand, communication, legal, and development teams to gather requirements, align on objectives, and ensure the new site met diverse stakeholder needs. To streamline ways of working, I organized design meetups and fostered a collaborative environment where designers could share insights and stay aligned.\n\nI prioritized transparent communication and regular check-ins, ensuring all team members felt supported and empowered to focus on design quality under pressure. Throughout the project, I balanced attention to brand identity, usability, and technical feasibility, overseeing the integration of the CMS and guiding implementation to deliver a future-proof website.',
      image: '/images/netlight/process-netlight.webp',
      imageAlt: 'Netlight website design process',
      imagePosition: 'right',
    },
    {
      type: 'full-image',
      image: '/images/netlight/gallery-netlight.webp',
      imageAlt: 'Netlight website overview',
    },
  ],
}
