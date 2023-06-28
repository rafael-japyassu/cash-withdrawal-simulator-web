import { TextLogo } from "@/components/shared";
import { Bank, Money, Receipt, UserCircle } from "phosphor-react";
import { SidebarLink } from "./SidebarLink";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks";
import { formatCurrency } from "@/utils/currency";

export const Sidebar = () => {
  const { user } = useAuth();
  const [isMobile, setIsMobile] = useState(() => {
    return window.innerWidth <= 768;
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768);
    });
  }, []);

  return (
    <aside
      className={`bg-zinc-950 ${
        isMobile ? "w-[90px] p-4" : "w-[300px] p-8"
      } flex flex-col  gap-12 transition-all`}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        {isMobile ? (
          <Bank size={30} className="text-violet-500" />
        ) : (
          <>
            <TextLogo size="sm" />
            <div className="bg-zinc-900 p-2 rounded select-none w-full">
              <div className="flex items-center gap-2">
                <UserCircle size={40} className="text-violet-500" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">
                    {user.name}
                  </span>
                  <span className="text-green-500 font-bold text-xs">
                    {formatCurrency(user.balance)}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col gap-8 text-white">
        <SidebarLink
          icon={Money}
          path="/withdrawal-money"
          title="Saque"
          isMobile={isMobile}
        />
        <SidebarLink
          icon={Receipt}
          path="/extracts"
          title="Extratos"
          isMobile={isMobile}
        />
      </div>
    </aside>
  );
};
