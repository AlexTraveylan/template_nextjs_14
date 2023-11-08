# Template next.js

This project is a template for a Next.js application. It includes several features to help you get started with your Next.js project.

## Features

- **Examples**: This template includes several examples to help you get started.
- **NextAuth**: Integrated with NextAuth for authentication.
- **Prisma**: Uses Prisma as an ORM for easier database management.

## Installation

To install this project, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install the dependencies: `npm install` or `yarn install`
4. Setup the environment variables:

```bash
DATABASE_URL="file:./dev.db" //for sqlite
GITHUB_ID="your-github-id"
GITHUB_SECRET="your-github-secret"
NEXTAUTH_SECRET="whatever-you-want-in-development"
```

- Generate NEXTAUTH_SECRET in production

  - linux

  ```bash
  openssl rand -base64 32
  ```

  - windows (use powershell)

  ```powershell
  [Byte[]]$randomBytes = New-Object Byte[] 24
  [Security.Cryptography.RNGCryptoServiceProvider]::Create().GetBytes($randomBytes)
  [System.Convert]::ToBase64String($randomBytes)
  ```

5. Start the development server: `npm run dev` or `yarn dev`

Please replace `<repository-url>` and `<project-directory>` with your actual repository URL and directory name respectively.

## Prisma Installation

To install Prisma in your project, follow these steps:

1. Install the Prisma CLI package globally on your machine with the following command:

```bash
npm install prisma -g
```

2. Navigate to your project directory and initialize Prisma:

```bash
cd <project-directory>
npx prisma init --datasource-provider sqlite
```

3. This will create a prisma/schema.prisma file. Modify this file to define your database model.

4. Then, you can generate the Prisma client with the following command:

```bash
npx prisma generate
```

5. Now, you can use Prisma Client in your code to interact with your database.

Please replace <project-directory> with your actual project directory name.
