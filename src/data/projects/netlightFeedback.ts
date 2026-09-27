import type { Project } from '../types'

export const netlightFeedback: Project = {
  id: 'netlight-feedback-tool',
  title: 'Driving continuous growth: Feedback tool for employee success',
  description:
    "Feedback is a core part of Netlight, and a culture of continuous feedback is encouraged, as a way of caring for each other and promoting personal growth. Netlight has therefore developed the Feedback Tool, an application designed for writing feedback to one another. The tool's goal is to enhance the quality of feedback, foster a feedback culture, and strengthen relationships among employees.",
  client: 'Netlight',
  year: '2025',
  industry: 'IT & Management Services',
  role: 'Product Designer',
  coverImage: '/images/feedback-tool/thumbnail-feedbacktool.webp',
  tags: ['UX/UI', 'Energy Efficient Design'],
  stats: [
    {
      value: '1 month',
      label: 'Length of assignment',
    },
    {
      value: '1 000+',
      label: 'Number of users',
    },
    {
      value: '10',
      label: 'User tests',
    },
  ],
  sections: [
    {
      type: 'text-image',
      title: 'The Challenge',
      text: "I was tasked with improving Netlight's Feedback Tool to encourage a culture of continuous feedback and personal growth. It was crucial to make feedback and reflection more accessible, clear, and actionable without compromising authenticity. Balancing user needs with business objectives and ensuring clarity in the feedback process were key challenges.",
      image: '/images/feedback-tool/challenge-feedbacktool.webp',
      imageAlt: 'Netlight Feedback Tool interface',
      imagePosition: 'left',
      extraBlocks: [
        {
          title: 'The Celebrations',
          text: "My contributions led to improved usability and engagement within the Feedback tool. The redesigned Reflection page and enhanced email notifications helped users give and receive clearer, more frequent feedback. Also made sure to use my skills within energy efficient design to create a design system with less component variants and colors used.\n\nThese improvements reinforced Netlight's mission, driving meaningful personal growth and relationship-building across the company as well as decreased time spent on implementation.",
        },
      ],
    },
    {
      type: 'text-image',
      title: 'The Process',
      text: 'As the sole designer on the project, I drove the end-to-end design process, collaborating closely with developers and stakeholders to ensure smooth implementation and resolve blockers as they arose. I used Figma to prototype scalable designs optimized for both desktop and mobile, and refined the design system by introducing reusable components and organizing the component library to streamline workflows.\n\nTo keep users at the center of my process, I conducted user testing to validate and refine my designs, gathering actionable insights for continuous improvement. I communicated regularly with the team, making sure final design specifications, interactions, and behaviors were clearly understood before handoff.',
      image: '/images/feedback-tool/process-feedbacktool.webp',
      imageAlt: 'Netlight Feedback Tool design process',
      imagePosition: 'right',
    },
    {
      type: 'full-image',
      image: '/images/feedback-tool/gallery-feedbacktool.webp',
      imageAlt: 'Netlight Feedback Tool overview',
    },
  ],
}
