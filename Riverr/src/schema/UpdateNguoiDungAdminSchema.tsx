
import { z } from 'zod';

export const updateNguoiDungAdminSchema = z.object({
    name: z.string().nonempty("Không để trống"),
    phone: z.string().nonempty("Không để trống"),
    email: z.string().nonempty("Không để trống").email("Không đúng định dạng"),
    role: z.string().nonempty("USER hoặc ADMIN")
})

export type updateNguoiDungAdminType = z.infer<typeof updateNguoiDungAdminSchema>


export const themQuanTriVienSchema = z.object({
    email: z.string().nonempty("Không để trống").email("Không đúng định dạng email!!!"),
    name: z.string().nonempty("Không để trống"),
    phone: z.string().nonempty("Không để trống"),
    password: z.string().nonempty("Không để trống")
})

export type themQuanTriVienType = z.infer<typeof themQuanTriVienSchema>