import { NextApiRequest, NextApiResponse } from "next";
import { createTRPCContext } from "~/server/api/trpc";
import { createOpenApiNextHandler } from "trpc-openapi";
import { appRouter } from "~/server/api/root";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Setup CORS
    await cors(req, res);
  
    // Handle incoming OpenAPI requests
    return createOpenApiNextHandler({
      router: appRouter,
      createContext: createTRPCContext,
    })(req, res);
  };
  
  export default handler;
  
  function cors(req: NextApiRequest, res: NextApiResponse) {
    // throw new Error('Function not implemented.');
  }
  