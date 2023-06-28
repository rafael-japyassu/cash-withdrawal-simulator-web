import { z } from "zod";

export const withdrawalMoneySchema = z.object({
  value: z.preprocess(Number, z.number().step(10, "O valor deve ser múltiplo de 10"))
})

