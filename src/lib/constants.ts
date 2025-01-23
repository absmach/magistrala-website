export const featuresData = [
  {
    title: 'Data Visualization',
    description:
      'Magistrala takes data visualization to the next level with customizable dashboards that provide real-time insights into the metrics that matter most to your business. Access a variety of charts, gauges, and control systems to monitor your devices effortlessly. Track and map your devices globally using advanced location services with marker and route maps. Shareable dashboards make it easy to collaborate with your team and keep everyone informed, no matter where they are.',
    imageUrl: 'visual-person.svg',
  },
  {
    title: 'Efficient and Cloud-Native',
    description:
      'Leverage a microservices-based, cloud-native architecture for scalable and efficient IoT application deployment.',
    imageUrl: 'scalability.svg',
  },
  {
    title: 'Rules Engine',
    description:
      'Implement business logic and trigger custom actions in real-time with the built-in rules engine. The Rules Engine empowers you to create dynamic, event-driven solutions tailored to your specific needs, ensuring complete control over your operations.',
    imageUrl: 'calculator.svg',
  },
  {
    title: 'UI and Open APIs',
    description:
      "Magistrala provides access to a User Interface which enables to quickly build, edit and share any dashboard data without needing any code basics. There are also well-documented open API's that enable you to integrate Magistrala easily into your own existing systems.",
    imageUrl: 'ui-woman-with-a-laptop.svg',
  },
  {
    title: 'Superior Security',
    description:
      'Magistrala is built with security at its core, ensuring the protection and integrity of your data across diverse ecosystems. Advanced encryption, authentication, and fine-grained access control mechanisms safeguard sensitive information. The platform leverages access tokens for secure, token-based authentication and integrates with Google Zanzibar for distributed policy management, enabling scalable, granular access policies. Whether for IoT or enterprise systems, Magistrala provides the confidence to innovate without compromising security.',
    imageUrl: 'abstract-art-5.svg',
  },
  {
    title: 'Readers and Writers',
    description:
      'Magistrala enables seamless communication across diverse ecosystems with its powerful readers and writers framework. Utilize industry-leading tools like TimescaleDB, RabbitMQ, Mosquitto, and CoAPCLI to handle both message ingestion and delivery with ease. With full support for scalable databases and message brokers, you can ensure reliable data flow, optimized performance, and flexibility for your unique needs.',
    imageUrl: 'searching-location-on-the-phone.svg',
  },
  {
    title: 'Multi-Protocol Messaging',
    description:
      'The Magistrala Platform is a cutting-edge SaaS solution designed to streamline communication between devices, applications, and systems, regardless of their underlying protocols such as http or mqtt. Built with multi-protocol messaging capabilities, it empowers businesses to handle data exchange across diverse infrastructures — from IoT ecosystems to cloud-based applications and enterprise software.',
    imageUrl: 'surreal-hourglass.svg',
  },
];

export const benefitsData = [
  {
    title: 'State of the Art Security',
    description:
      'Build highly secure applications with advanced encryption protocols and robust security frameworks via tokens and ecnryptions. Magistrala ensures resilience against cyber threats giving you the confidence to innovate without compromising security.',
    imageUrl: 'cybersec.avif',
  },
  {
    title: 'Seamless Connectivity',
    description:
      'Connect and manage your devices effortlessly with our open-source frameworks, libraries and APIs. Enjoy a streamlined data flow as well as smooth integration of existing systems. We ensure seamless connectivity across diverse ecosystems.',
    imageUrl: 'connectivity.avif',
  },
  {
    title: 'Thriving Dev Community',
    description:
      'Join a vibrant open-source community that fosters collaboration and innovation. Magistrala empowers developers to create groundbreaking technologies together through the use of extensive training, support and discussion forums.',
    imageUrl: 'opensource.avif',
  },
];

export const benefitsSectionData = {
  sectionId: 'benefits',
  title: 'Why Choose Magistrala?',
  subtitle:
    'Empower your production ecosystem with tools designed to simplify, secure, and scale your operations.',
  benefits: [
    {
      title: 'State of the Art Security',
      description:
        'Build highly secure applications with advanced encryption protocols and robust security frameworks via tokens and encryptions. Magistrala ensures resilience against cyber threats giving you the confidence to innovate without compromising security.',
      imageUrl: 'cybersec.avif',
    },
    {
      title: 'Seamless Connectivity',
      description:
        'Connect and manage your devices effortlessly with our open-source frameworks, libraries and APIs. Enjoy a streamlined data flow as well as smooth integration of existing systems. We ensure seamless connectivity across diverse ecosystems.',
      imageUrl: 'connectivity.avif',
    },
    {
      title: 'Thriving Dev Community',
      description:
        'Join a vibrant open-source community that fosters collaboration and innovation. Magistrala empowers developers to create groundbreaking technologies together through the use of extensive training, support and discussion forums.',
      imageUrl: 'opensource.avif',
    },
  ],
};

export const futureFeaturesData = [
  {
    title: 'Rules Engine',
    description:
      'Implement business logic and trigger custom actions in real-time with the built-in rules engine. The Rules Engine empowers you to create dynamic, event-driven solutions tailored to your specific needs, ensuring complete control over your operations.',
    imageUrl: 'calculator.svg',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: 'premium_vector.avif',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: 'iot-phone.jpg',
  },
];

export const useCasesData = [
  {
    title: 'Smart Cities',
    description:
      'Manage traffic flow, monitor air quality, and optimize energy usage across urban environments.',
    imageUrl: 'smart-city2.avif',
    ctaText: 'Learn more',
    ctaLink: '#',
    secondaryCtaText: 'View demo',
    secondaryCtaLink: '/demo/smart-cities',
  },
  {
    title: 'Smart Energy',
    description:
      'Deliver and store data from smart meters in reliable and fault-tolerant way, visualize real-time and historical energy consumption data on customizable end-user dashboards.',
    imageUrl: 'smart-home.jpg',
    ctaText: 'See more about Smart energy',
    ctaLink: '#',
  },
  {
    title: 'Industrial IoT',
    description:
      'Monitor and control industrial equipment, optimize production processes, and predict maintenance needs in real-time.',
    imageUrl: 'more-dashboards.jpg',
    ctaText: 'Explore Industrial IoT',
    ctaLink: '#',
  },
];

export const pricingData = [
  {
    title: 'Trial',
    features: ['Test 14 days for free', 'Up to 5 users', 'Self-service'],
    ctaText: 'Sign Up',
    ctaVariant: 'default' as const,
    ctaLink: '#',
  },
  {
    title: 'Starter',
    features: [
      'Pay-per-user',
      'unlimited workspaces and clients',
      'All elemental features',
    ],
    ctaText: 'Sign Up',
    ctaVariant: 'default' as const,
    ctaLink: '/#',
  },
  {
    title: 'Enterprise',
    features: [
      'The full experience',
      'Individual models and customized dashboard templates',
      'All advanced features',
    ],
    ctaText: 'Sign Up',
    ctaVariant: 'success' as const,
    ctaLink: '/contact',
  },
];

export const faqData = [
  {
    title: 'General Questions',
    faqs: [
      {
        question: 'What protocols does the platform support?',
        answer:
          "Our platform supports a wide range of protocols including MQTT, HTTP, CoAP, and more. We're constantly adding support for new protocols to ensure compatibility with various devices.",
      },
      {
        question: 'How secure is the data transmission?',
        answer:
          'We implement industry-standard encryption protocols and security measures to ensure that all data transmitted through our platform is secure. This includes end-to-end encryption and regular security audits.',
      },
      {
        question: 'Can I integrate with existing systems?',
        answer:
          'Yes, our platform is designed to be highly integrable. We offer APIs and SDKs that allow you to easily integrate with your existing systems and workflows.',
      },
    ],
  },
  {
    title: 'Billing and Subscription',
    faqs: [
      {
        question: 'What are the available pricing plans?',
        answer:
          'We offer flexible pricing plans tailored to your needs. Visit our pricing section for detailed information.',
      },
      {
        question: 'How do I upgrade my plan?',
        answer:
          'You can upgrade your plan directly from your billing page. Select the desired plan and complete the payment process.',
      },
    ],
  },
];

export const heroData = {
  title: 'Simplify Messaging and Empower Systems',
  subtitle:
    'Magistrala SaaS bridges the gap between devices, applications, and systems. With multi-protocol messaging, customizable dashboards, and robust security, we make it easy to manage, monitor, and scale your operations.',
  buttonText: 'Get Started',
  buttonLink: '#',
  imageUrl: 'messaging.avif',
};

export const bannerIcons = {
  title: 'Coming Soon to Magistrala Cloud',
  subtitle:
    'Magistrala is launching as a cloud-based service! Experience cutting-edge connectivity and security paired with visually stunning dashboards tailored to your needs.',
  buttonText: 'Get Early Access',
  features: [
    {
      title: 'Fast Connectivity',
      description:
        'Optimized for lightning-fast message delivery, ensuring real-time communication.',
      icon: 'fast-icon.jpg',
    },
    {
      title: 'Multi-Protocol Messaging',
      description: 'Seamless communication across protocols.',
      icon: 'message-icon.jpg',
    },
    {
      title: 'Secure and Encrypted',
      description: 'Advanced encryption and token-based authentication.',
      icon: 'lock-icon.jpg',
    },
  ],
};

export const productsData = [
  {
    title: 'Cube AI',
    description:
      'Cube AI leverages trusted execution environments (TEEs) to build secure, GPT-based AI applications. With Cube AI, you can deploy and run AI models on edge devices with enhanced security and privacy, enabling real-time, on-device processing of sensitive data.',
    imageUrl: 'ai.jpg',
  },
];

export const navigationLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  {
    label: 'Blog',
    href: 'https://medium.com/abstract-machines-blog',
  },
];
