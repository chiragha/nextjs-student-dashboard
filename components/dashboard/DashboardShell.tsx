import Sidebar from "./Sidebar";
import MobileBottomNav from "./MobileBottomNav";

type DashboardShellProps = {
  children: React.ReactNode;
};

export default function DashboardShell({
  children,
}: DashboardShellProps) {
  return (
   <div
  className="
    relative
    min-h-screen
    bg-[#09090B]
    text-white
    flex
    overflow-hidden
  "
>
 
  <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

  <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <Sidebar />

      <main
        className="
          flex-1
          p-4
          md:p-6
          lg:p-8
          pb-24
          md:pb-6
          overflow-hidden
        "
      >
        {children}
      </main>

      <MobileBottomNav />
    </div>
  );
}