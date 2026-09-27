import type { Project } from '../types'

export const bucky: Project = {
  id: 'bucky',
  title: 'Turning a dream into motion: Building "Bucky" the van',
  description:
    'Long fascinated by the idea of freedom on four wheels, I decided to turn my vision into reality by converting a metal-shell van into a custom adventure home. This project was more than building a vehicle, it was a deep dive into planning, problem-solving, and learning-by-doing, all while sharing unforgettable moments with family and friends.',
  client: 'Yours truly',
  year: '2023',
  industry: 'Adventure Engineering',
  role: 'Project Manager & Builder',
  coverImage: '/images/bucky/thumbnail-bucky.webp',
  tags: ['Product'],
  stats: [
    {
      value: '7 months',
      label: 'Project timeline: first as Designer, then as Builder/Project Manager/Mechanic.',
    },
    {
      value: '80 000+',
      label: 'SEK invested in the van conversion.',
    },
    {
      value: '10+',
      label: 'Countries explored with Bucky across Europe.',
    },
  ],
  sections: [
    {
      type: 'text-image',
      title: 'The Challenge',
      text: 'My mission was clear: buy an empty van, strip it down to its bare metal, and build a fully functional, cozy living space from scratch, all within a six-month timeline. The journey began with research and sketches, evolved into isolating the car, and led to hands-on project management.\n\nFrom laying insulation and wiring every cable, to mounting solar panels and collaborating with professionals for the final electrical assembly. This project demanded curiosity, resilience, and a willingness to ask for help and iterate solutions. Every detail, from kitchen layout to colour decisions, pushed me to combine vision with practical execution.',
      image: '/images/bucky/challenge-bucky.webp',
      imageAlt: 'Bucky van build process',
      imagePosition: 'left',
      extraBlocks: [
        {
          title: 'The Celebrations',
          text: 'The outcome? "Bucky" rolled out better than I imagined, especially for a first-timer van conversion project alongside my dad. We hit our deadline and reached Falun just in time for the World Cup in cross-country skiing, and eventually realised the ultimate dream: driving to the Dolomites for a hiking adventure in 2025.\n\nBut the true celebration lies in the journey, the unscripted moments and personal milestones. From buying Bucky on a sunny August day, to fixing a flat tyre on a Swedish highway, tasting wines along the Loire, and repairing wipers in Saumur, every challenge became a cherished memory. These experiences are what I value most in any project.',
        },
      ],
    },
    {
      type: 'text-image',
      title: 'The Process',
      text: 'This project was structured like my other professional projects: clear vision, detailed planning, stakeholder (family) buy-in, phased execution, problem-solving, and continuous refinement. I mapped the electrical system after thorough research, consulted experts, and managed sourcing and logistics. My dad and I worked as a team, balancing ambition with the constraints of time and resources, always iterating based on what we learned.\n\n"Bucky" is still evolving, with tweaks and upgrades between new destinations. A testament to my project management skills, drive to see ideas through, and the belief that the process is where learning and joy happen. Fun is serious business!!',
      image: '/images/bucky/process-bucky.webp',
      imageAlt: 'Bucky van finished and on the road',
      imagePosition: 'right',
    },
    {
      type: 'full-image',
      image: '/images/bucky/gallery-bucky.webp',
      imageAlt: 'Bucky van adventures across Europe',
    },
  ],
}
