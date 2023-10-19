
import { Button, Input } from ".";
import { danhSachCongViecThunk, themCongViecThunk, useAppDispatch } from "store";
import { useForm, SubmitHandler } from "react-hook-form";
import { CongViecSchema, CongViecType } from "schema/CongViecSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from 'react'
import { toast } from 'react-toastify'
import { DanhSachCongViec } from "types";

import { useEffect } from 'react'
export const ModelThemCongViec = () => {

  const dispatch = useAppDispatch()

  const { handleSubmit, register, formState: { errors } } = useForm<CongViecType>({
    mode: "onChange",
    resolver: zodResolver(CongViecSchema)
  })
  const noneModel = () => {
    let modal = document.getElementById("addCv")
    modal.style.display = "none"
    let form: any = document.getElementById("form")
    form.reset()
  }
  const [number, setNumber] = useState(0)
  const onSubmit: SubmitHandler<CongViecType> = async (value) => {
    const { danhGia, giaTien, hinhAnh, maChiTietLoaiCongViec, moTa, moTaNgan, nguoiTao, saoCongViec, tenCongViec, id } = value
    const CongViecMoi: DanhSachCongViec = {
      hinhAnh, moTa, moTaNgan, nguoiTao, tenCongViec, danhGia, giaTien, maChiTietLoaiCongViec, saoCongViec, id
    }
    dispatch(themCongViecThunk(CongViecMoi)).then(() =>
      toast.success("Thêm thành công!!!")
    ).catch((err) => console.log(err))
    setNumber(8)
    noneModel()
  }

  useEffect(() => {
    dispatch(danhSachCongViecThunk())
  }, [dispatch, number])

  return (
    <div id="addCv" className="modal">
      <div className="modal-content !w-[40%]">
        <h1 className="text-black font-bold text-[30px] text-center">
          Thêm Công Việc
        </h1>
        <form
          noValidate
          id="form"
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input name="" id="id" placeholder="ID" register={register} type="text" error={errors?.id?.message} />
          <Input name="" id="tenCongViec" placeholder="Tên Công Việc" type="text" register={register} error={errors?.tenCongViec?.message} />
          <Input name="" id="danhGia" placeholder="Đánh Giá" type="text" register={register} error={errors?.danhGia?.message} />
          <Input name="" id="giaTien" placeholder="Giá tiền" type="text" register={register} error={errors?.giaTien?.message} />
          <Input name="" id="nguoiTao" placeholder="Người Tạo" type="text" register={register} error={errors?.nguoiTao?.message} />
          <Input name="" id="hinhAnh" placeholder="Hình ảnh" type="text" register={register} error={errors?.hinhAnh?.message} />
          <Input name="" id="moTa" placeholder="Mô Tả" type="text" register={register} error={errors?.moTa?.message} />
          <Input name="" id="maChiTietLoaiCongViec" placeholder="Mã chi tiết loại Cv" type="text" register={register} error={errors?.maChiTietLoaiCongViec?.message} />
          <Input name="" id="moTaNgan" placeholder="Mô tả ngắn" type="text" register={register} error={errors?.moTaNgan?.message} />
          <Input name="" id="saoCongViec" placeholder="Sao Công Việc" type="text" register={register} error={errors?.saoCongViec?.message} />



          <Button
            type="primary"
            htmlType="submit"
            className="!w-full !h-[50px] mt-[20px] !bg-red-500 !font-bold"
          >
            Thêm
          </Button>
        </form>
      </div>
    </div>
  )
}
