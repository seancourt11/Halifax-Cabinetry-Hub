import { createFileRoute } from "@tanstack/react-router";
import { CityCabinetryPage, cityHead } from "@/components/city-cabinetry-page";
import { kitchener } from "@/data/city-pages";

export const Route = createFileRoute("/custom-cabinetry-kitchener")({
  head: () => cityHead(kitchener),
  component: () => <CityCabinetryPage city={kitchener} />,
});
