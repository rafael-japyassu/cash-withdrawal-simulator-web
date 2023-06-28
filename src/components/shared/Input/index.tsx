import { InputHTMLAttributes, useId } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: UseFormRegisterReturn;
  error?: string;
}

const Input = ({ label, register, error, ...rest }: InputProps) => {
  const inputId = useId();

  if (register) {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-gray-100 font-normal" htmlFor={inputId}>
            {label}
          </label>
        )}
        <input
          ref={(e) => {
            register.ref(e);
          }}
          name={register.name}
          onChange={register.onChange}
          id={inputId}
          className="p-4 border border-gray-500 rounded bg-transparent text-white outline-violet-500"
          {...rest}
        />
        {!!error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-gray-100 font-normal" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        {...rest}
        id={inputId}
        className="p-4 border border-gray-500 rounded bg-transparent text-white outline-violet-500"
      />
      {!!error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
};

export { Input };
