/**
 * The one "built in Canada" sentence for a page. Do not render this more
 * than once, and do not also repeat the phrase in headings or FAQs.
 */
export function BuiltInCanadaLine({ className = "" }: { className?: string }) {
  return (
    <p className={className}>
      Cabinetry is built in Canada, and we install across Canada and the United States.
    </p>
  );
}
