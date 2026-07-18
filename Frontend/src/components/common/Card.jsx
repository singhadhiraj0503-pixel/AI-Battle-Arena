export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-sm
          p-6
          transition-all
          duration-300
          hover:shadow-lg
          ${className}
        `}
    >
      {children}
    </div>
  );
}
