import { z } from 'zod';

export const CongViecSchema = z.object({
    id: z.coerce.number(),
    tenCongViec: z.string().nonempty("No empty"),
    danhGia: z.coerce.number(),
    giaTien: z.coerce.number(),
    nguoiTao: z.string().nonempty("No empty").regex(/^[0-9]+$/, "Người tạo là  theo số"),
    hinhAnh: z.string().nonempty("No empty"),
    moTa: z.string().nonempty("No empty"),
    maChiTietLoaiCongViec: z.coerce.number(),
    moTaNgan: z.string().nonempty("No empty"),
    saoCongViec: z.coerce.number()
})

export type CongViecType = z.infer<typeof CongViecSchema>