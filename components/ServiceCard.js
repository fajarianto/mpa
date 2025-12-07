export default function ServiceCard({ number, title, description }) {
  return (
    <article className="group p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/90 transition-colors">
      <p className="text-xs font-semibold text-amber-300 mb-1">{number}</p>
      <h3 className="font-semibold mb-2 text-sm sm:text-base">{title}</h3>
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
        {description}
      </p>
    </article>
  );
}
