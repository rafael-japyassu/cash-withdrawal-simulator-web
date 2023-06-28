import { useAuth } from "@/hooks";
import { SignOut } from "phosphor-react";

export const Header = () => {
  const { signOut } = useAuth();

  return (
    <header className="flex justify-between items-center px-8 p-6 border-b-zinc-950 border-b-[1px]">
      <span className="text-white text-xl">
        <span className="text-violet-500">Cash</span> Withdrawal Simulator
      </span>
      <div className="flex items-center gap-8">
        <button onClick={() => signOut()}>
          <SignOut className="text-violet-500" weight="bold" size={20} />
        </button>
      </div>
    </header>
  );
};
