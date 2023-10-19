import { UseFormRegister } from "react-hook-form";
type InputProps = {
  id: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error: string;
};

export const Input = ({
  id,
  type,
  placeholder,
  value,
  name,
  register,
  error,
}: InputProps) => {
  return (
    <div className="mt-[10px]">
      <label htmlFor={id} className="text-white">
        {placeholder}
      </label>
      <input
        value={value}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full p-[10px] mt-[5px] rounded-[10px]"
        {...register?.(id)}
      />
      <p className="text-red-500">{error}</p>
    </div>
  );
};
