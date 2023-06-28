import { Spinner } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button = ({ children, loading = false, ...rest }: ButtonProps) => {
  return (
    <button
      disabled={loading}
      className="flex items-center justify-center gap-2 py-4 px-6 bg-violet-500 rounded hover:bg-violet-600 active:bg-violet-700 transition-colors mt-2 outline-violet-700 disabled:bg-violet-400 disabled:cursor-not-allowed"
      {...rest}
    >
      {loading ? <Spinner className="animate-spin text-white" size={20} /> : null}
      {children}
    </button>
  );
};

export { Button };
