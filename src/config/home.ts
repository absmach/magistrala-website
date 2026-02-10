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
      iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
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
