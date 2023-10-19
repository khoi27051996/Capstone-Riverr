import { useSelector } from "react-redux"
import { Button, Input } from "."
import { ROOTSTATE, updateCongViecThunk, useAppDispatch } from "store"
import { useForm, SubmitHandler } from "react-hook-form"
import { styled } from 'styled-components'
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'react-toastify'
import { useEffect } from "react"
import { updateCvSchema, updateCvType } from "schema"
import { CongViecType } from "schema/CongViecSchema";
export const EditsCv = () => {
    const { congViecTheoId } = useSelector((state: ROOTSTATE) => state.quanLyCongViec)
    const dispatch = useAppDispatch()
    const { handleSubmit, reset, register, formState: { errors } } = useForm<updateCvType>({
        mode: "onChange",
        resolver: zodResolver(updateCvSchema)
    })
    const onSubmit: SubmitHandler<updateCvType> = (value) => {
        const { danhGia, giaTien, hinhAnh, maChiTietLoaiCongViec, moTa, moTaNgan, tenCongViec } = value

        const updateCv: CongViecType = {
            danhGia, giaTien, hinhAnh, maChiTietLoaiCongViec, moTa, moTaNgan, tenCongViec,
            id: congViecTheoId?.id,
            nguoiTao: congViecTheoId?.nguoiTao,
            saoCongViec: congViecTheoId?.saoCongViec
        }

        dispatch(updateCongViecThunk(updateCv)).then(() => toast.success("Update thành công!!!")).catch((err) => console.log(err))
        window.history.back()
    }

    useEffect(() => {
        reset({
            ...congViecTheoId
        })
    }, [reset, congViecTheoId])
    return (
        <FormEditCv>

            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-[50px]">
                <h1 className="font-bold text-center text-[30px]">Chỉnh sửa công việc</h1>

                <Input id="tenCongViec" placeholder="Tên Công Việc" type="text" register={register} error={errors?.tenCongViec?.message} />
                <Input id="danhGia" placeholder="Đánh Giá" type="text" register={register} error={errors?.danhGia?.message} />
                <Input id="giaTien" placeholder="Giá Tiền" type="text" register={register} error={errors?.giaTien?.message} />
                <Input id="hinhAnh" placeholder="Hình Ảnh" type="text" register={register} error={errors?.hinhAnh?.message} />
                <Input id="moTa" placeholder="Mô tả" type="text" register={register} error={errors?.moTa?.message} />
                <Input id="maChiTietLoaiCongViec" placeholder="Mã Chi tiết" type="text" register={register} error={errors?.maChiTietLoaiCongViec?.message} />
                <Input id="moTaNgan" placeholder="Mô Tả Ngắn" type="text" register={register} error={errors?.moTaNgan?.message} />


                <Button type="primary"
                    htmlType="submit"
                    className="!w-full !h-[50px] mt-[20px] !bg-blue-500 !font-bold">
                    Update
                </Button>
            </form>
        </FormEditCv>
    )
}

const FormEditCv = styled.div`
    padding: 0 40px;
    label{
        color: black;
        font-weight: bold;
    }
    input{
        border: 1px solid black;
    }
`