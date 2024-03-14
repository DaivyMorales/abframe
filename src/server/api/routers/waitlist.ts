import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const waitlistRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ ctx, input }) => {
      const emailExists = await ctx.db.waitlist.findFirst({
        where: {
          email: input.email,
        },
      });

      if (emailExists) {
        throw new Error("Email already exists");
      }

      return ctx.db.waitlist.create({
        data: {
          email: input.email,
        },
      });
    }),
});
