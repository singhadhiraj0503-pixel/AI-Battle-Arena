export default function ScoreBadge({ score }) {
  const bg =
    score >= 8
      ? "bg-green-100 text-green-700"
      : score >= 6
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700";

  return (
    <div
      className={`
          inline-flex
          items-center
          justify-center
          rounded-full
          px-4
          py-1.5
          text-sm
          font-semibold
          ${bg}
        `}
    >
      ⭐ {score}/10
    </div>
  );
}
