import { createFileRoute } from "@tanstack/react-router";
import { CityCabinetryPage, cityHead } from "@/components/city-cabinetry-page";
import { calgary } from "@/data/city-pages";

export const Route = createFileRoute("/custom-cabinetry-calgary")({
  head: () => cityHead(calgary),
  component: () => <CityCabinetryPage city={calgary} />,
});
