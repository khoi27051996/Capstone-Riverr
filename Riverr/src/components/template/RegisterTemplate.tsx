// import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { Button } from "components";
import { PATH } from "constant";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Navigate, useNavigate } from "react-router-dom";
// import { useForm, SubmitHandler } from "react-hook-form";

import { toast } from "react-toastify";
// import { RegisterSchema, RegisterType } from "schema";
import { administerUser } from "services";
import { ROOTSTATE } from "store";

import { User, UserErr } from "types";
import { handleErr, sleep } from "utils";

export const RegisterTemplate = () => {
  const { token } = useSelector((state: ROOTSTATE) => state.administerUser)
  if (token) {
    return <Navigate to={"/"} />
  }
  const [inputValue, setInputValue] = useState<string>();
  const [arraySkill, setArrraySkil] = useState<string[]>([]);
  const handleArraySkill = () => {
    setArrraySkil([...arraySkill, inputValue]);
    setInputValue("");
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const [inputValue2, setInputValue2] = useState<string>();
  const [arrayCertification, setArrrayCertification] = useState<string[]>([]);
  const handleArrayCerti = () => {
    setArrrayCertification([...arrayCertification, inputValue2]);
    setInputValue2("");
  };
  const handleInput2 = (v: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(v.target.value);
  };

  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "",
    skill: arraySkill,
    certification: arrayCertification
  });

  const [userErr, setUserErr] = useState<UserErr>({
    id: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
  });
  const validation = (ele) => {
    const { validity, minLength, value, title } = ele;
    const { valueMissing, tooShort, patternMismatch } = validity;
    let mess = "";
    if (valueMissing) {
      mess = `${title} no empty`;
    } else if (tooShort || value.length < minLength) {
      mess = `${title} have minlength ${minLength} char`;
    } else if (patternMismatch) {
      if (title == "ID" || title == "Phone") {
        mess = `${title} is number`;
      } else if (title == "Email") {
        mess = `${title} undefined`;
      } else if (title == "Name") {
        mess = `${title} is abc..xyz`;
      }
    }
    return mess;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const mess = validation(e.target);
    setUser({
      ...user,
      [name]: value,
    });

    setUserErr({
      ...userErr,
      [name]: mess,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    user.certification = arrayCertification;
    user.skill = arraySkill;
    let isFlag = true;
    for (const key in userErr) {
      if (userErr[key]) return (isFlag = true);
    }
    if (!isFlag) {
      alert("ERROR");
    } else {
      try {
        await administerUser.signUp(user);
        toast.success("Đăng ký thành công!!!");
        await sleep(1000);
        navigate(PATH.login);
      } catch (err) {
        handleErr(err);
      }
    }
  };

  return (
    <form noValidate action="" onSubmit={handleSubmit}>
      <h1 className="text-red-500 font-bold text-center">SignUp</h1>
      <div className="md:flex gap-[30px]">
        <div className="w-full">
          <div>
            <label htmlFor="id" className="text-white">
              ID
            </label>
            <input
              required
              minLength={3}
              maxLength={8}
              title="ID"
              type="text"
              id="id"
              name="id"
              pattern="^[0-9]+$"
              value={user?.id || ""}
              placeholder="ID"
              className="w-full p-[10px] rounded-[10px]"
              onChange={handleChange}
            />
            <p className="text-red-500">{userErr?.id}</p>
          </div>
          <div>
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              required
              title="Email"
              pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
              type="text"
              id="email"
              name="email"
              value={user?.email}
              placeholder="Email"
              className="w-full p-[10px] rounded-[10px]"
              onChange={handleChange}
            />
            <p className="text-red-500">{userErr?.email}</p>
          </div>
          <div>
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input
              required
              title="Password"
              type="password"
              id="password"
              name="password"
              value={user?.password}
              placeholder="Password"
              className="w-full p-[10px] rounded-[10px]"
              onChange={handleChange}
            />
            <p className="text-red-500">{userErr?.password}</p>
          </div>
          <div>
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              required
              minLength={5}
              pattern="^([a-zA-ZÀ-ỹ]+\s)*[a-zA-ZÀ-ỹ]+$"
              title="Name"
              id="name"
              name="name"
              value={user?.name}
              placeholder="Name"
              className="w-full p-[10px] rounded-[10px]"
              onChange={handleChange}
            />
            <p className="text-red-500">{userErr?.name}</p>
          </div>
        </div>
        <div className="w-full">
          <div>
            <label htmlFor="phone" className="text-white">
              Phone
            </label>
            <input
              required
              pattern="^[0-9]+$"
              title="Phone"
              id="phone"
              name="phone"
              value={user?.phone}
              placeholder="Phone"
              className="w-full p-[10px] rounded-[10px]"
              onChange={handleChange}
            />
            <p className="text-red-500">{userErr?.phone}</p>
          </div>
          <div>
            <label htmlFor="birthday" className="text-white">
              Birthday
            </label>
            <input
              required
              title="birthday"
              id="birthday"
              name="birthday"
              value={user?.birthday}
              placeholder="Birthday"
              className="w-full p-[10px] rounded-[10px]"
              onChange={handleChange}
            />
            <p className="text-red-500">{userErr?.birthday}</p>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="mt-[5px]">
                <label htmlFor="skill" className="text-white">
                  Skill
                </label>
                <input
                  id="skill"
                  name="skill"
                  type="text"
                  placeholder="Skill"
                  className="w-full p-[10px] rounded-[10px]"
                  onChange={handleInput}
                  value={inputValue}
                />
              </div>
              <button
                type="button"
                className="bg-emerald-500 px-[10px] rounded-[10px] h-[45px] mt-[28px]"
                onClick={handleArraySkill}
              >
                Add to Skill
              </button>
            </div>
            <p className="text-white flex gap-[10px]">
              {arraySkill?.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </p>
            <div>
              {/* {array.map((item, index) => (
                <p key={index}>{item}</p>
              ))} */}
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="mt-[5px]">
                <label htmlFor="certification" className="text-white">
                  Certification
                </label>
                <input
                  id="certification"
                  type="text"
                  name="certification"
                  placeholder="Certification"
                  className="w-full p-[10px] rounded-[10px]"
                  value={inputValue2}
                  onChange={handleInput2}
                />
              </div>
              <button
                type="button"
                className="bg-emerald-500 px-[0px] rounded-[10px] h-[45px] mt-[28px]"
                onClick={handleArrayCerti}
              >
                Add to certification
              </button>
            </div>
            <p className="text-white flex gap-[10px]">
              {arrayCertification?.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </p>
          </div>
        </div>
      </div>
      <Button
        type="primary"
        htmlType="submit"
        className="!w-full !h-[50px] mt-[20px] !bg-red-500"
      >
        SignUp
      </Button>
    </form>
  );
};
