"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error,reset,}: ErrorProps) {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Something went wrong
        </h1>
        <p className="text-zinc-400 mb-6">
          {error.message}
        </p>
        <button onClick={() => reset()} className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition">
          Try Again
        </button>
      </div>
    </main>
  );
}