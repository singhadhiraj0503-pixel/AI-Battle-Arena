export default function Footer() {
  return (
    <footer className="flex h-14 items-center justify-between border-t border-slate-200 bg-white px-10 text-sm text-slate-500">
      <p>© 2026 AI Battle Arena. Powered by Mistral & Cohere.</p>

      <div className="flex gap-8">
        <button className="hover:text-black">Privacy Policy</button>

        <button className="hover:text-black">Terms</button>
      </div>
    </footer>
  );
}
