export const HERO_CONTENT = {
  badge: 'Open Source IoT Platform',
  heading: 'Manage your IoT devices from cloud to edge',
  description:
    'Magistrala is a secure, scalable platform for device management, real-time messaging, data processing, and visualization. Self-hosted or cloud-managed.',
  primaryCta: 'Try Magistrala',
  secondaryCta: 'Documentation',
  video: {
    poster: '/video/hero-poster.jpg',
    src: '/video/hero-poster.mp4',
  },
} as const;

export const PARTNERS_CONTENT = {
  heading: 'Trusted by teams at',
} as const;

export const FEATURES_CONTENT = {
  heading: 'Everything you need to run IoT at scale',
  description:
    'From device connectivity to dashboards and alarms, Magistrala covers the full IoT stack.',
} as const;

export const WHY_MAGISTRALA_CONTENT = {
  heading: 'Why teams choose Magistrala',
  items: [
    {
      title: 'Open Source, No Lock-in',
      description:
        'Apache 2.0 licensed. Run it on your infrastructure, modify the source, or use our managed cloud. No vendor lock-in.',
      iconPath: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    },
    {
      title: 'Cloud-Native Architecture',
      description:
        'Microservices deployed on Kubernetes. Stateless services scale horizontally. Built for high availability and fault tolerance.',
      iconPath:
        'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z',
    },
    {
      title: 'Pluggable Storage & Brokers',
      description:
        'Choose your database (PostgreSQL, TimescaleDB, MongoDB, InfluxDB) and message broker (NATS, Kafka, RabbitMQ).',
      iconPath:
        'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
    },
  ],
} as const;

export const DEPLOYMENTS_CONTENT = {
  heading: 'Global Deployments',
  description:
    'Real-time deployment statistics from Magistrala instances around the world.',
  loadingText: 'Loading deployments...',
  linkText: 'View full deployments dashboard',
  linkUrl: 'https://deployments.absmach.eu',
  iframeUrl: 'https://deployments.absmach.eu?filter=hidden&sidebar=hidden',
} as const;

export const USE_CASES_CONTENT = {
  heading: 'Built for your industry',
  description:
    'Magistrala adapts to your domain. From factory floors to smart grids, the platform handles the complexity.',
  learnMoreText: 'Learn more',
  viewAllText: 'View all use cases',
  viewAllHref: '/use-cases/',
} as const;

export const SUCCESS_STORIES_CONTENT = {
  heading: 'Deployed in production',
  description:
    'Companies across industries rely on Magistrala for their IoT infrastructure.',
} as const;

export const PRICING_CONTENT = {
  heading: 'Simple pricing',
  description: "Start free. Scale when you're ready.",
  recommendedBadge: 'Recommended',
} as const;

export const FAQ_CONTENT = {
  heading: 'Frequently asked questions',
} as const;

export const CTA_CONTENT = {
  heading: 'Ready to get started?',
  description:
    'Try Magistrala free on our managed cloud, or deploy the open-source version on your own infrastructure.',
  primaryCta: 'Try Magistrala',
  secondaryCta: 'Contact Us',
} as const;

export const NEWSLETTER_CONTENT = {
  heading: 'Stay updated',
  description: 'News, updates, and releases from the Magistrala team.',
  placeholder: 'you@company.com',
  buttonText: 'Subscribe',
  disclaimerPrefix: 'By subscribing, you agree to our',
  privacyLinkText: 'Privacy Policy',
  privacyLinkHref: '/privacy/',
  disclaimerSuffix: '. Unsubscribe anytime.',
  formAction:
    'https://absmach.us11.list-manage.com/subscribe/post?u=70b43c7181d005024187bfb31&id=0a319b6b63&f_id=002711e1f0',
  hiddenTag: '8115258',
  honeypotName: 'b_70b43c7181d005024187bfb31_0a319b6b63',
} as const;
