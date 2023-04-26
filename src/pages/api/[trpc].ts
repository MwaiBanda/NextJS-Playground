import { NextApiRequest, NextApiResponse } from "next";
import { createTRPCContext } from "~/server/api/trpc";
import { createOpenApiNextHandler } from "trpc-openapi";
import { appRouter } from "~/server/api/root";

const handler =  (req: NextApiRequest, res: NextApiResponse) => {
    // Setup CORS
  
    // Handle incoming OpenAPI requests
    return  createOpenApiNextHandler({
      router: appRouter,
      createContext: createTRPCContext,
    })(req, res);
  };
  
  export default handler;
  

  