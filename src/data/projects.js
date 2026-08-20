export const projects = [
  {
    number: '01',
    title: 'Healthcare Monitoring System',
    type: '1st Year Hardware Project · 2024–2025',
    summary:
      'An academic healthcare monitoring prototype combining sensor-based health measurements, AD8232 ECG monitoring, and a web-based dashboard for viewing current and historical data.',
    contribution: 'ECG monitoring with the AD8232 sensor, with small frontend support using HTML, CSS, and JavaScript.',
    features: ['6+ health parameters', 'AD8232 ECG sensor', 'Web monitoring dashboard'],
    technologies: ['Healthcare', 'Embedded Systems', 'ECG', 'IoT', 'Web'],
    href: '/projects/healthcare-monitoring-system',
    linkLabel: 'View project',
  },
  {
    number: '02',
    title: 'Cloud Storage Solution',
    type: 'Admin Management Module',
    summary:
      'A secure admin dashboard for managing users and monitoring storage usage across a cloud storage platform.',
    contribution:
      'Built the React and Tailwind CSS admin dashboard, including JWT login, role-based authorization, user management, analytics, and Axios integration with Django REST APIs.',
    features: ['JWT-secured login', 'Role-based authorization', 'User search and filtering', 'Storage-usage analytics'],
    technologies: ['React.js', 'Tailwind CSS', 'Django REST Framework', 'JWT'],
    githubUrl: 'https://github.com/chirath1231/Software-Project-Storage-Solution',
    githubLabel: 'GitHub repository',
  },
  {
    number: '03',
    title: 'ResQAI',
    type: 'Emergency Response Platform · Team Hackathon',
    summary:
      'A real-time emergency response platform connecting citizen SOS reports with operator incident monitoring and evidence review.',
    contribution:
      'Architected and built the citizen SOS evidence pipeline, validated upload flow, Supabase security policies, live incident feed, and photo/audio evidence viewer.',
    features: ['Evidence uploads', 'Row-level security', 'Realtime incident feed', 'Photo and audio lightbox'],
    technologies: ['Next.js', 'React', 'Supabase Storage', 'Supabase Realtime'],
    githubUrl: 'https://github.com/Sahas-sass/ResQAI-web',
    githubLabel: 'GitHub repository',
  },
  {
    number: '04',
    title: '7°Skin',
    type: 'Full-Stack MERN PWA E-Commerce Platform · 2025–2026',
    summary:
      'A production-style luxury skincare e-commerce platform combining a MERN backend, installable PWA architecture, PayHere checkout, and a mobile-first Sri Lankan-inspired brand experience.',
    contribution:
      'Built the full-stack application with JWT authentication, responsive Tailwind CSS UI, live product search, filters, shopping cart, PayHere payment integration, and installable offline-capable behavior.',
    features: ['Installable PWA', 'Live product search', 'PayHere checkout', 'Mobile-first UI'],
    technologies: ['MERN', 'PWA', 'E-Commerce', 'PayHere', 'MongoDB'],
    href: '/projects/7skin',
    linkLabel: 'View case study →',
  },
]
