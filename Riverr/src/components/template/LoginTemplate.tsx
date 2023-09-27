import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { Button, Input } from "components";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginSchema, LoginType } from "schema";
import { ROOTSTATE, SignInThunk, useAppDispatch } from "store";
import { useSelector } from "react-redux";
export const LoginTemplate = () => {
  const { isLoading } = useSelector((state: ROOTSTATE) => state.administerUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginType>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit: SubmitHandler<LoginType> = (value) => {
    console.log(value);
    dispatch(SignInThunk(value))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch(() => {});
  };
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-red-500 text-center font-bold">Sign In</h1>
      <Input
        placeholder="Email"
        type="text"
        id="email"
        register={register}
        error={errors?.email?.message}
      />
      <Input
        placeholder="Password"
        type="password"
        id="password"
        register={register}
        error={errors?.password?.message}
      />

      <Button
        type="primary"
        htmlType="submit"
        className="!w-full !h-[50px] mt-[20px] !bg-blue-500"
        loading={isLoading}
      >
        Sign Up
      </Button>
    </form>
  );
};
