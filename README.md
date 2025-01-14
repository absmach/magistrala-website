# Magistrala SaaS Platform

Magistrala is a modern SaaS solution designed to simplify multi-protocol messaging and empower scalable systems. Built on cutting-edge technologies, Magistrala bridges the gap between devices, applications, and systems, enabling seamless communication and streamlined operations.

## Key Features

- **Multi-Protocol Messaging**: Supports MQTT, HTTP, CoAP, and more, ensuring flexibility in data exchange.
- **Customizable Dashboards**: Visualize your data in real-time with tailored dashboards, complete with charts, gauges, and global mapping.
- **Robust Security**: Protect your ecosystem with advanced encryption, access tokens, and policy management integrated with Google Zanzibar.
- **Pluggable Storage and Brokers**: Choose from various databases and message brokers like TimescaleDB, RabbitMQ, and Mosquitto.
- **Extensible Protocol Adapters**: Leverage or build protocol adapters for seamless device communication.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
