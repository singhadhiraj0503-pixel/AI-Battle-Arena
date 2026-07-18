export default function SectionTitle({ title, subtitle, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>

      {subtitle && <p className="mt-2 text-slate-500">{subtitle}</p>}
    </div>
  );
}
