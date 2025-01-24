   import { router } from "@trpc/server";
  import { z } from "zod";

  const todosRouter = router({
    getTodos: publicProcedure.query(async () => {
      // Fetch todos from SurrealDB
    }),
    createTodo: publicProcedure.input(z.object({
      title: z.string(),
      description: z.string().optional(),
      startDate: z.string(),
      endDate: z.string(),
      status: z.enum(["completed", "pending", "active", "overdue"]),
    })).mutation(async ({ input }) => {
      // Insert todo into SurrealDB
    }),
  });

  export const appRouter = router({
    todos: todosRouter,
  });

  export type AppRouter = typeof appRouter;

 