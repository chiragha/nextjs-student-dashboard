export default function Loading() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white flex">
      <aside
        className="
          hidden md:flex
          flex-col
          border-r
          border-zinc-800
          bg-black
          p-4
          animate-pulse
          md:w-20
          lg:w-72
        ">
        <div className="mb-10">
          <div className="h-7 w-28 bg-zinc-800 rounded-xl hidden lg:block" />
          <div className="h-8 w-8 bg-zinc-800 rounded-xl lg:hidden" />
        </div>
        <nav className="flex flex-col gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="
                h-12
                rounded-2xl
                bg-zinc-900
              "
            />
          ))}
        </nav>
      </aside>
      <main
        className="
          flex-1
          p-4
          md:p-6
          lg:p-8
          pb-24
          md:pb-6">
        <section
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
            animate-pulse">
          <article
            className="
              md:col-span-2
              rounded-[2rem]
              border
              border-zinc-800
              bg-zinc-950
              p-8
              min-h-[220px]
            ">
            <div className="h-10 w-80 bg-zinc-800 rounded-xl mb-5" />
            <div className="h-5 w-52 bg-zinc-800 rounded-xl" />
          </article>
          <article
            className="
              rounded-[2rem]
              border
              border-zinc-800
              bg-zinc-950
              p-6
              min-h-[220px] ">
            <div className="h-8 w-8 bg-zinc-800 rounded mb-5" />
            <div className="h-6 w-40 bg-zinc-800 rounded mb-4" />
            <div className="h-4 w-24 bg-zinc-800 rounded mb-5" />
            <div className="h-2 bg-zinc-800 rounded-full" />
          </article>
          {[1, 2].map((item) => (
            <article
              key={item}
              className="
                rounded-[2rem]
                border
                border-zinc-800
                bg-zinc-950
                p-6
                min-h-[220px]">
              <div className="h-8 w-8 bg-zinc-800 rounded mb-5" />
              <div className="h-6 w-40 bg-zinc-800 rounded mb-4" />
              <div className="h-4 w-24 bg-zinc-800 rounded mb-5" />
              <div className="h-2 bg-zinc-800 rounded-full" />
            </article>
          ))}

          <article
            className="
              rounded-[2rem]
              border
              border-zinc-800
              bg-zinc-950
              p-6
              min-h-[220px]">
            <div className="h-6 w-40 bg-zinc-800 rounded mb-8" />
            <div className="flex gap-3 items-end h-28">
              {[30, 60, 80, 40, 90, 50, 70].map((height, index) => (
                <div
                  key={index}
                  className="
                      flex-1
                      rounded-full
                      bg-zinc-800
                    "
                  style={{
                    height: `${height}%`,
                  }}
                />
              ))}
            </div>
          </article>
        </section>
      </main>
      <nav
        className="
          fixed
          bottom-0
          left-0
          right-0
          md:hidden
          border-t
          border-zinc-800
          bg-zinc-950
          p-4
          flex
          justify-around
          animate-pulse">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="h-8 w-8 bg-zinc-800 rounded-lg" />
        ))}
      </nav>
    </div>
  );
}
