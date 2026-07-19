import { Swords } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="mt-5 flex flex-col items-center">
      {/* Logo */}

      <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-black shadow-lg">
        <Swords size={42} className="text-white" />
      </div>

      {/* Heading */}

      <h1 className="max-w-4xl text-center text-5xl font-semibold leading-tight tracking-tight">
        What problem should the
        <br />
        models solve today?
      </h1>
    </section>
  );
}
