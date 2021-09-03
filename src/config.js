module.exports = {
  email: 'brittany.chiang@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/LiveEkansh',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/not._.liveekansh/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/EkanshLive',
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/fRBq3N3ZT2',
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/channel/UCS6t-VigVblKcHhjdtBnE4w',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    red: '#f21f1f',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
