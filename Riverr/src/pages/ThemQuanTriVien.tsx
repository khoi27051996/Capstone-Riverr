import { Button, Input } from 'components'
import { useForm, SubmitHandler } from 'react-hook-form'
import { themQuanTriVienSchema, themQuanTriVienType } from 'schema'
import { styled } from 'styled-components'
import { zodResolver } from '@hookform/resolvers/zod'
import { User2 } from 'types'
import { useAppDispatch } from 'store'
import { themQuanTriVienThunk } from 'store/NguoiDung'
import { toast } from 'react-toastify'
import { sleep } from 'utils'
export const ThemQuanTriVien = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<themQuanTriVienType>({
        mode: "onChange",
        resolver: zodResolver(themQuanTriVienSchema)
    })
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<themQuanTriVienType> = async (value) => {
        const { email, name, password, phone } = value
        const newQTV: User2 = {
            email, name, password, phone,
            avatar: "",
            birthday: "",
            bookingJob: [],
            certification: [],
            gender: false,
            id: 0,
            skill: [],
            role: "ADMIN"
        }
        dispatch(themQuanTriVienThunk(newQTV)).then(() => toast.success("Thêm QTV thành công!!!")).catch((err) => console.log(err))
        await sleep(2000)
        window.history.back()
    }
    return (
        <ThemQTV>
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <h1 className='text-center font-bold text-[30px]'>Thêm Quản Trị Viên</h1>
                <Input id='email' placeholder='Email' type='text' register={register} error={errors?.email?.message} />
                <Input id='name' placeholder='Tên QTV' type='text' register={register} error={errors?.name?.message} />
                <Input id='phone' placeholder='Số điện thoại' type='text' register={register} error={errors?.phone?.message} />
                <Input id='password' placeholder='Mật khẩu' type='password' register={register} error={errors?.password?.message} />

                <Button htmlType='submit' type='primary' className='!w-full !h-[50px] !font-bold !mt-[20px]'>Thêm mới</Button>
            </form>
        </ThemQTV>
    )
}

const ThemQTV = styled.div`
    padding: 50px;
    margin-top: 30px;
    label{
        color: black;
        font-weight: bold;
    }
    input{
        border: 1px solid black;
    }
`
