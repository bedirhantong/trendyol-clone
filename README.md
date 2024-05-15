# Trendyol Web Clone

This project is a React.js application which is a clone of Trendyol's web application. I developed the frontend part with Next.js framework, TypeScript and Shadcn component library. For the backend, I used Strapi and Render Dashboard. Therefore, we need to be able to use both of these systems to run the project.

## What is Inside

This project has two main components:

1. trendyol-clone: Next.js project used to create the frontend part.
2. cms_trendyol_clone: The project used to stand up the backend and database using Strapi and Render Dashboard. 
- `In the future, I will combine the two projects under a single project.`

## Technologies

The following technologies and tools were used in this project:

### Frontend (trendyol-clone)

- [React.js](https://react.dev/) : Used to create and customise the user interface.
- [Next.js](https://nextjs.org/docs) : I used it to customise React application SSR (Server Side Render) freely.
- [TypeScript](https://www.typescriptlang.org/) : Used for type safety and more readable code.
- [Shadcn](https://ui.shadcn.com/) : I used it to take ready-made React components and create an integrated web application.

### Backend (cms_trendyol_clone)

- Strapi: Used for backend and database management and stand up.
- Render Dashboard: Used for publishing and hosting the web application.

## How to run Client Project

To run frontend project you should follow the following sequences:

1. Clone the trendyol-clone repository:

```bash
git clone https://github.com/yourusername/trendyol-clone.git
```
2. Go to trendyol-clone directory:
```bash
cd trendyol-clone
```
3. Install the necessary packages to build the project
```bash
npm install
# veya
yarn install
```

4. Run the project
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.