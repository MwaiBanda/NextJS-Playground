import { generateOpenApiDocument } from 'trpc-openapi';
import { appRouter } from './api/root';


// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: 'NextJS Playground',
  description: 'OpenAPI compliant REST API built using tRPC with Next.js',
  version: '1.0.0',
  baseUrl: 'http://localhost:3000/api',
  docsUrl: 'https://github.com/MwaiBanda/NextJS-Playground',
  tags: ['examples', 'users', 'posts'],
});