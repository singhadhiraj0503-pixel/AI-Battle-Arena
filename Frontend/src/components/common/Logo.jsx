import { Swords } from "lucide-react";

export default function Logo({ size = "md" }) {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-16 w-16",
    lg: "h-24 w-24",
  };

  const icon = {
    sm: 20,
    md: 28,
    lg: 42,
  };

  return (
    <div
      className={`
        ${sizes[size]}
        rounded-3xl
        bg-black
        flex
        items-center
        justify-center
      `}
    >
      <Swords size={icon[size]} className="text-white" />
    </div>
  );
}
