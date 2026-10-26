import { BUILT_IN_CANADA, INSTALL_LINE } from "@/lib/site";

/** Trust line for Canadian pages. Do not render this on US-only copy. */
export function BuiltInCanadaLine({ className = "" }: { className?: string }) {
  return (
    <p className={className}>
      {BUILT_IN_CANADA} {INSTALL_LINE}
    </p>
  );
}
