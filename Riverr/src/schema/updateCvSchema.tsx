import { z } from 'zod';

export const updateCvSchema = z.object({

    tenCongViec: z.string().nonempty("No empty"),
    danhGia: z.coerce.number(),
    giaTien: z.coerce.number(),

    hinhAnh: z.string().nonempty("No empty"),
    moTa: z.string().nonempty("No empty"),
    maChiTietLoaiCongViec: z.coerce.number(),
    moTaNgan: z.string().nonempty("No empty"),
})

export type updateCvType = z.infer<typeof updateCvSchema>