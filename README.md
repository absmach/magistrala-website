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

## Building and Running Locally

For a production-like experience, follow these steps:

1. Build the project:

```bash
npm run build
```

1. Serve the output locally:

```bash
npx serve@latest out
```

1. Serve the output in development mode:

```bash
npm run dev
```

Open the served website in your browser at the provided local URL.

## Deployment

This project is preconfigured for deployment on GitHub Pages. Once a PR is merged to main, the deployment will be updated accordingly.
Once deployed, the webpage will be accessible at the URL specified in the `homepage` field in the `package.json` which is currently:

```json
"homepage": "https://absmach.github.io/mg-website"
```
