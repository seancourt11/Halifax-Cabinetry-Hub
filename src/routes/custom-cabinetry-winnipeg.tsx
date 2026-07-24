import { createFileRoute } from "@tanstack/react-router";
import { CityCabinetryPage, cityHead } from "@/components/city-cabinetry-page";
import { winnipeg } from "@/data/city-pages";

export const Route = createFileRoute("/custom-cabinetry-winnipeg")({
  head: () => cityHead(winnipeg),
  component: () => <CityCabinetryPage city={winnipeg} />,
});
