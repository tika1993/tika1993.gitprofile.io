// gitprofile.config.js

const config = {
  github: {
    username: 'tika1993', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'tika-oliver',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'tblanton93@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Analytical Skills',
    'Problem Solving',
    'Communication',
    'Priortize Workload',
    'Electronic Medical Records',
    'Teamwork',
    'Management',
    'Decision-Making',
    'Multitasking',
  ],
  experiences: [
    {
      company: 'Duke University Health System',
      position: 'Licensed Practical Nurse',
      from: 'April 2023',
      to: 'Present',
      companyLink: 'https://dukehealth.org',
    },
    {
      company: 'Freelance Computer Specialist and Builder',
      position: 'Freelance',
      from: 'January 2021',
      to: 'Present',
      companyLink: '',
    },
     {
      company: 'Duke University Health System',
      position: 'Nurse Navigator',
      from: 'April 2022',
      to: 'January 2023',
      companyLink: 'https://dukehealth.org',
    },
     {
      company: 'Duke University Health System',
      position: 'Licensed Practical Nurse',
      from: 'January 2019',
      to: 'April 2022',
      companyLink: 'https://dukehealth.org',
    },
     {
      company: 'The Carolina Inn',
      position: 'Licensed Practical Nurse Supervisor',
      from: 'Decemeber 2017',
      to: 'December 2018',
      companyLink: 'https://carolinainnnc.com',
    },
    {
      company: 'The U.S. Army',
      position: 'Dental Hygienist',
      from: 'Decemeber 2010',
      to: 'May 2016',
      companyLink: 'https://www.army.mil',
    },
  ],
  /* certifications: [
    {
      name: 'CSSLP: The Basics',
      body: 'LinkedIn Learning',
      year: 'November 2023',
      link: 'https://www.linkedin.com/in/tika-oliver'
    },
      {
      name: 'Licensed Practical Nurse',
      body: 'NC Board of Nursing',
      year: 'January 2025',
      link: 'https://www.linkedin.com/in/tika-oliver'
    },
      {
      name: 'BLS Provider',
      body: 'American Heart Association',
      year: 'December 2024',
      link: 'https://www.linkedin.com/in/tika-oliver'
    },
      {
      name: 'Emerging Leaders',
      body: 'Truist Leadership Institute',
      year: 'October 2021',
      link: 'https://www.linkedin.com/in/tika-oliver'
    },
  ], */
  education: [
    {
      institution: 'East Carolina University',
      degree: 'Master of Business Administration',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'East Carolina University',
      degree: 'Bachelor of Science in Business Administration',
      from: '2019',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
