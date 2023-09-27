import { UseFormRegister } from "react-hook-form";
type InputProps = {
  id: string;
  type: string;
  placeholder: string;
  error: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
};

export const Input = ({ id, type, placeholder, error, register }: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className="text-white">
        {placeholder}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full p-[10px] mt-[5px] rounded-[10px]"
        {...register?.(id)}
      />
      <p className="text-red-500">{error}</p>
    </div>
  );
};
