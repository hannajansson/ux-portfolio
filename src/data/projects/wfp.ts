import type { Project } from '../types'

export const wfp: Project = {
  id: 'wfp',
  title: 'Accelerating disaster response: redesigning the WFP SKAI+ platform',
  client: 'WFP Innovation Accelerator',
  year: '2026',
  industry: 'Humanitarian Technology',
  role: 'UX & product Design Lead',
  description:
    'The World Food Programme Innovation Accelerator empowers global solutions to end hunger, including scalable digital tools for rapid response after natural disasters. WFP needed a faster, more effective way for rescue teams to assess post-disaster building damage. While their AI-powered SKAI tool could analyze satellite imagery at scale, it was only accessible to technical users, leading to manual, time-consuming coordination when every hour counted. I was brought on to transform SKAI into a user-friendly platform, making cutting-edge AI technology accessible to non-technical teams on the frontlines of emergencies.',
  coverImage: '/images/wfp/thumbnail-wfp.webp',
  tags: ['AI', 'UX/UI', 'Product'],
  stats: [
    { value: '3×', label: 'Platforms harmonized under a unified design system' },
    { value: '<24h', label: 'To deliver actionable damage assessments (down from weeks)' },
    { value: '1/3', label: 'SKAI was one of the projects that was officially endorsed by the AB' },
  ],
  sections: [
    {
      type: 'text-image',
      title: 'The Challenge',
      text: "WFP's SKAI platform enabled AI analysis of disaster zones, but only technical users with code access could harness its power. This meant non-technical responders relied on email handoffs and complex workflows, delaying critical insights for days or weeks. My challenge was to compress this workflow to under 24 hours by designing a seamless, accessible interface for a diverse, global userbase. The product needed to support rapid scaling, offering a familiar experience across multiple related tools while balancing strict WFP brand guidelines with the flexibility for future growth.",
      image: '/images/wfp/challenge-wfp.webp',
      imageAlt: 'WFP SKAI challenge overview',
      imagePosition: 'right',
      extraBlocks: [
        {
          title: 'The Celebrations',
          text: "With the launch of SKAI+, rescue teams can now independently run AI-powered damage assessments and access actionable insights in less than one day. Grounded in continuous user research which included interviews, usability testing, and field feedback, the unified design system empowers consistency and future extensibility across all SKAI+ products. Stakeholders report dramatically improved workflows and alignment, and the new platform is being adopted in multiple countries, helping WFP's mission to save lives when every hour matters. The user-centered approach and measurable impact contributed to SKAI’s official endorsement by the AB during the pilot.",
        },
      ],
    },
    {
      type: 'text-image',
      title: 'The Process',
      text: 'I joined SKAI+ during a pivotal transition, as rapid development led to inconsistent user experiences and unaligned design decisions across multiple products. With the pilot focused on just one product, the design system was not reflected in production. I took the lead in re-aligning design and development by introducing clearer processes, leveraging Figma MCP and Claude Code for real-time collaboration, and translating the shadcn-based system into practical, reusable components.\n\nI conducted a systematic review of user journeys and design patterns, and, through hands-on prototyping, user research, interviews, data analysis, and workshops, redesigned flows so all three products felt like a unified platform. My focus on bridging development and design established collaboration, consistent user experience, and scalable guidelines solving immediate challenges and laying the groundwork for future growth.',
      image: '/images/wfp/process-wfp.webp',
      imageAlt: 'WFP SKAI design process',
      imagePosition: 'left',
    },
    {
      type: 'full-image',
      image: '/images/wfp/gallery-wfp.webp',
      imageAlt: 'WFP SKAI+ platform gallery',
    },
  ],
}
