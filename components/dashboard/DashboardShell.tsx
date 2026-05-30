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
        bg-[#05060A]
        text-white
        flex
        overflow-hidden
      "
    >
   
      <div
        className="
          absolute
          top-[-180px]
          left-[-120px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-purple-600/15
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[20%]
          right-[-100px]
          w-[350px]
          h-[350px]
          rounded-full
          bg-fuchsia-500/10
          blur-[130px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-120px]
          right-[-80px]
          w-[350px]
          h-[350px]
          rounded-full
          bg-cyan-500/10
          blur-[130px]
          pointer-events-none
        "
      />
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          pointer-events-none
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      <Sidebar />

      <main
        className="
          relative
          z-10
          flex-1
          p-4
          sm:p-5
          md:p-6
          lg:p-8
          xl:p-10
          pb-24
          md:pb-8
          overflow-x-hidden
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1700px]
          "
        >
          {children}
        </div>
      </main>

      <MobileBottomNav />
    </div>
  );
}