import { createFileRoute } from "@tanstack/react-router";
import { CityCabinetryPage, cityHead } from "@/components/city-cabinetry-page";
import { hamilton } from "@/data/city-pages";

export const Route = createFileRoute("/custom-cabinetry-hamilton")({
  head: () => cityHead(hamilton),
  component: () => <CityCabinetryPage city={hamilton} />,
});
