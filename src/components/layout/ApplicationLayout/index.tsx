import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";

export const ApplicationLayout = () => {
  return (
    <div className="flex bg-zinc-900">
      <Sidebar />
      <div className="flex flex-col min-h-screen h-full w-full">
        <Header />
        <main className="p-8 flex h-full flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
