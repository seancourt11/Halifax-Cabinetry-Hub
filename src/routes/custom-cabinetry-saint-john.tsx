import { createFileRoute } from "@tanstack/react-router";
import { CityCabinetryPage, cityHead } from "@/components/city-cabinetry-page";
import { saintJohn } from "@/data/city-pages";

export const Route = createFileRoute("/custom-cabinetry-saint-john")({
  head: () => cityHead(saintJohn),
  component: () => <CityCabinetryPage city={saintJohn} />,
});
