import { createFileRoute } from "@tanstack/react-router";
import { CityCabinetryPage, cityHead } from "@/components/city-cabinetry-page";
import { ottawa } from "@/data/city-pages";

export const Route = createFileRoute("/custom-cabinetry-ottawa")({
  head: () => cityHead(ottawa),
  component: () => <CityCabinetryPage city={ottawa} />,
});
