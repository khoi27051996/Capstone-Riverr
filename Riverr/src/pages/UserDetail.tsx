import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ROOTSTATE, useAppDispatch } from 'store'
import { styled } from 'styled-components'
import { useEffect } from 'react'
import { deleteNguoiDungThunk, getListNguoiDung, updateNguoiDungThunk } from 'store/NguoiDung'
import { Button, Input } from 'components'
import { useForm, SubmitHandler } from 'react-hook-form'
import { updateNguoiDungAdminSchema, updateNguoiDungAdminType } from 'schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { User2 } from 'types'
import { toast } from 'react-toastify'
export const UserDetail = () => {
    const params = useParams()
    const dispatch = useAppDispatch()
    const { listNguoiDung } = useSelector((state: ROOTSTATE) => state.quanLyNguoiDung)
    const id: number = parseInt(params.idUser, 10)
    const userDetail = listNguoiDung?.find(v => v.id == id)
    const { handleSubmit, register, reset, formState: { errors } } = useForm<updateNguoiDungAdminType>({
        mode: "onChange",
        resolver: zodResolver(updateNguoiDungAdminSchema)
    })
    const onSubmit: SubmitHandler<updateNguoiDungAdminType> = async (value) => {
        const { name, email, phone, role } = value
        const updateUser: User2 = {
            name, email, phone, role,
            avatar: userDetail?.avatar,
            birthday: userDetail?.birthday,
            bookingJob: userDetail?.bookingJob,
            certification: userDetail?.certification,
            gender: userDetail?.gender,
            id: userDetail?.id,
            password: userDetail?.password,
            skill: userDetail?.skill
        }
        dispatch(updateNguoiDungThunk(updateUser)).then(() => toast.success("Chỉnh sửa thành công!!!")).catch((err) => console.log(err))
        window.history.back()
    }
    useEffect(() => {
        dispatch(getListNguoiDung())
        reset({
            ...userDetail
        })
    }, [dispatch, reset])
    return (
        <UserDetailAdmin>
            <h1 className='text-center font-bold text-[30px]'>Chi tiết người dùng</h1>

            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className='form'>
                    <div>
                        <Input id='name' placeholder='Tên người dùng' type='text' register={register} error={errors?.name?.message} />
                        <Input id='phone' placeholder='Số điện thoại' type='text' register={register} error={errors?.phone?.message} />
                        <Input id='email' placeholder='Email' type='text' register={register} error={errors?.email?.message} />
                    </div>
                    <div>
                        <Input id='role' placeholder='Vai trò' type='text' register={register} error={errors?.role?.message} />
                        <h1>Skill</h1>
                        <p>{userDetail?.skill?.map((v, index) => {
                            return <p key={index} className='flex gap-[10px]'>{v}</p>
                        })}</p>
                        <h1>CERTIFICATION</h1>
                        <p>{userDetail?.certification?.map((v, index) => {
                            return <p key={index} className='flex gap-[10px]'>{v}</p>
                        })}</p>
                    </div>
                </div>
                <Button type="primary"
                    htmlType="submit"
                    className="!w-full !h-[50px] mt-[20px] !bg-blue-500">Update</Button>
            </form>
        </UserDetailAdmin>
    )
}

const UserDetailAdmin = styled.div`
    padding: 50px;
    margin-top: 30px;
    .form{
        display: flex;
        justify-content: space-around;
        
        label{
            color: black;
            font-weight: bold;
        }
        input{
            border:  1px solid black;
            width: 100%;
        }
        h1{
            font-weight: bold;
            margin: 15px 0;
        }
    }
`