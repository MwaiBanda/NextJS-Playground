import { Example, Prisma, PrismaClient } from "@prisma/client";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { type } from "os";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
  .meta({
    openapi: { 
      method: 'GET',
      path: '/say-hello',
      tags: ['examples'],
    }
  })
  .input(z.object({ text: z.string() }))
  .output(z.object({ greeting: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure
  .meta({
    openapi: { 
     method: 'GET',
     path: '/examples',
     tags: ['examples'],
     protect: false,
     summary: 'Get all existing examples',
    } 
  })
  .input(z.void())
  .output(z.array( z.custom() ))
  .query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});

