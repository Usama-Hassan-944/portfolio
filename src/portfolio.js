const header = {
  homepage: 'https://usama-hassan-944.github.io/portfolio/',
  title: 'UH.',
}

const about = {
  name: 'Usama Hassan',
  role: 'Game Developer',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'I’m a game developer with over 5 years of professional experience building gameplay systems and immersive experiences across multiple platforms. I primarily work with Unity and C#, and have contributed to both shipped and prototype projects ranging from multiplayer and co-op games to Web3 titles, mixed reality experiences, casual and hypercasual games. I enjoy tackling technical challenges, designing clean and scalable systems, and turning ideas into engaging, player-focused experiences.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/usama-hassan-505b3a1a4/',
    github: 'https://github.com/Usama-Hassan-944',
  },
}

const projects = [
  {
    name: 'Nexus Arcade',
    description:
      'A mixed reality arcade simulation for Meta Quest blending virtual gameplay with real-world spatial interaction. Includes Boxing, Shooting, Racing, and Ten Pin Bowling with single-player, co-located multiplayer, and online multiplayer. Built around shared spatial experiences and Meta platform social integrations.',
    stack: [
      'Unity',
      'C#',
      'Photon Fusion',
      'Mixed Reality (MR)',
      'MR Utility Kit (MRUK)',
      'Spatial Anchors / Shared Spaces',
      'Meta Social Platform APIs',
      'Firebase Firestore',
    ],
    sourceCode: '',
    livePreview:
      'https://www.meta.com/en-gb/experiences/nexus-arcade/6962116033836064/?require_login=true',
    // Optional: video demo (either a URL, or a filename you put in `public/videos/`)
    // Example: video: 'my-game-demo.mp4'  OR  video: 'https://mycdn.com/demo.mp4'
    video: 'Nexus_Arcade.mp4',
    // You placed this in public/project-images/Nexus_Arcade.png
    image: '/project-images/Nexus_Arcade.png',
  },
  {
    name: 'Animalia',
    description:
      'A multiplayer PC card game focused on scalable architecture, real-time networking, and live-service features. Built on a customized CCG framework with reactive patterns and dependency injection, integrating Photon Fusion for multiplayer, Unity Multiplay for server orchestration, and PlayFab-backed services for player data, progression, and online play.',
    stack: [
      'Unity',
      'C#',
      'Zenject',
      'UniRx',
      'Custom CCG Framework',
      'Photon Fusion',
      'Unity Multiplay',
      'PlayFab',
      'SQL',
      'Addressables',
    ],
    sourceCode: '',
    livePreview: 'https://animalia.games/',
    video: 'Animalia.mp4',
    // NOTE: your file is `Animalia.PNG` (uppercase extension) in public/project-images
    image: '/project-images/Animalia.PNG',
  },
  {
    name: 'Thunder Horse Racing',
    description:
      'Multiplayer mobile horse racing with breeding, campaign, competitive multiplayer, and training modes. Features persistent player data on a remote backend, real-time events, championships, and progression for horse upgrades/customization. Work focused on core gameplay systems, client integration with AWS-backed services, game state management, and UI/UX for online features.',
    stack: [
      'Unity',
      'C#',
      'Photon Fusion',
      'Remote Persistence',
      'Progression Systems',
    ],
    sourceCode: '',
    livePreview:
      'https://play.google.com/store/apps/details?id=com.multiplayer.thunder.horse.racing&hl=en',
    video: '',
    image: '/project-images/HorseRacing.png',
  },
]

const skills = [
  'Unity',
  'C#',
  'C++',
  'Python',
  'JavaScript',
  'SQL',
  'Photon (Fusion & Pun2)',
  'Netcode for GameObjects',
  'Mixed Reality (MR)',
  'VR/AR Interaction Systems',
  'Voice/Text Chat Systems',
  'AWS (Backend & Hosting)',
  'Custom Backend APIs',
  'Unity Multiplay',
  'PlayFab',
  'Firebase',
  'Social Platform APIs (Meta, Apple, Google Play)',
  'Git',
]


const contact = {
  email: 'usamahassan944@gmail.com',
}

export { header, about, projects, skills, contact }
