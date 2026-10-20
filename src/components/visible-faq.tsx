/**
 * FAQ answers are always in the server HTML. Closed accordions drop the
 * answer from the DOM, so schema and visible text would not match.
 */
export function VisibleFaq({
  items,
  className = "",
  questionClassName = "",
  answerClassName = "",
}: {
  items: { q: string; a: string }[];
  className?: string;
  questionClassName?: string;
  answerClassName?: string;
}) {
  return (
    <div className={className}>
      {items.map((item) => (
        <article key={item.q} className="border-b border-current/15 py-6">
          <h3 className={questionClassName}>{item.q}</h3>
          <p className={answerClassName}>{item.a}</p>
        </article>
      ))}
    </div>
  );
}
