import { z } from "zod";

const formLoginSchema = z.object({
    email:z.string().email("Email tidak valid"),
    password:z.string().min(6, 'Password harus lebih dari 6 karakter')
  })

export default formLoginSchema