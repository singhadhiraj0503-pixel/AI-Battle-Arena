import { Swords } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="mt-10 flex flex-col items-center">
      {/* Logo */}

      <div className="mb-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-black shadow-lg">
        <Swords size={42} className="text-white" />
      </div>

      {/* Heading */}

      <h1 className="max-w-4xl text-center text-6xl font-bold leading-tight tracking-tight">
        What problem should the
        <br />
        models solve today?
      </h1>
    </section>
  );
}
