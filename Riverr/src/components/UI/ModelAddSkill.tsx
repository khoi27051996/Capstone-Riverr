import { useState } from "react";
import { Button } from ".";
import { useSelector } from "react-redux";
import { ROOTSTATE, upDateInfoToken, useAppDispatch } from "store";
import { User2 } from "types";
import { toast } from "react-toastify";
export const ModelAddSkill = () => {
  const { userSignUp } = useSelector(
    (state: ROOTSTATE) => state.administerUser
  );
  const { user } = userSignUp;
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>();
  const [arraySkill, setArrraySkil] = useState<string[]>([]);
  const handleArraySkill = () => {
    setArrraySkil([...arraySkill, inputValue]);
    setInputValue("");
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div id="editSkill" className="modal">
      <div className="modal-content !w-[40%]">
        <h1 className="text-black font-bold text-[30px] text-center">
          Edit - Skill
        </h1>
        <form
          noValidate
          action=""
          onSubmit={() => {
            const updateSkill: User2 = {
              id: user?.id,
              name: user?.name,
              email: user?.email,
              password: user?.password,
              phone: user?.phone,
              birthday: user?.birthday,
              gender: user?.gender,
              role: "",
              skill: arraySkill,
              certification: user?.certification,
              avatar: "",
              bookingJob: [],
            };
            dispatch(upDateInfoToken(updateSkill))
              .then(() => toast.success("Update success"))
              .catch((err) => console.log(err));
          }}
        >
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

          <Button
            type="primary"
            htmlType="submit"
            className="!w-full !h-[50px] mt-[20px] !bg-red-500 !font-bold"
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};
