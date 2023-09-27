import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "components";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterSchema, RegisterType } from "schema";
import { administerUser } from "services";
import { toast } from "react-toastify";
import { handleErr } from "utils";
import { useNavigate } from "react-router-dom";
import { PATH } from "constant";

export const RegisterTemplate = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterType>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });
  const onsubmit: SubmitHandler<RegisterType> = async (value) => {
    try {
      console.log(value);
      await administerUser.signUp(value);
      toast.success("Đăng ký thành công !!!");
      navigate(PATH.login);
    } catch (err) {
      handleErr(err);
    }
  };
  return (
    <form action="" onSubmit={handleSubmit(onsubmit)}>
      <h1 className="text-red-500 font-bold text-center text-[25px]">
        Sign Up
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <Input
          id="id"
          placeholder="ID"
          type="text"
          register={register}
          error={errors?.id?.message}
        />
        <Input
          id="email"
          placeholder="Email"
          type="text"
          register={register}
          error={errors?.email?.message}
        />
        <Input
          id="password"
          placeholder="Password"
          type="password"
          register={register}
          error={errors?.password?.message}
        />
        <Input
          id="name"
          placeholder="Name"
          type="text"
          register={register}
          error={errors?.name?.message}
        />
        <Input
          id="phone"
          placeholder="Phone"
          type="text"
          register={register}
          error={errors?.phone?.message}
        />
        <Input
          id="birthday"
          placeholder="Birthday"
          type="text"
          register={register}
          error={errors?.birthday?.message}
        />

        {/* <Input
          id="role"
          placeholder="Role"
          type="text"
          register={register}
          error={errors?.role?.message}
        /> */}
        {/* <Input
          id="skill"
          placeholder="Skill"
          type="text"
          register={register}
          error={errors?.skill?.message}
        />
        <Input
          id="certification"
          placeholder="Certification"
          type="text"
          register={register}
          error={errors?.certification?.message}
        /> */}
        <div>
          <p className="text-white">Giới Tính</p>
          <select
            className="p-[10px] mt-[3px] rounded-[10px] h-[45px] w-full"
            name="gender"
            id="gender"
          >
            <option value="true">Male</option>
            <option value="false">Female</option>
          </select>
        </div>
      </div>
      <Button
        type="primary"
        htmlType="submit"
        className="!w-full !mt-[20px] !h-[50px]"
      >
        Sign Up
      </Button>
    </form>
  );
};
