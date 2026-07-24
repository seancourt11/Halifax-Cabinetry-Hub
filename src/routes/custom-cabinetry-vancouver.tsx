import { createFileRoute } from "@tanstack/react-router";
import { CityCabinetryPage, cityHead } from "@/components/city-cabinetry-page";
import { vancouver } from "@/data/city-pages";

export const Route = createFileRoute("/custom-cabinetry-vancouver")({
  head: () => cityHead(vancouver),
  component: () => <CityCabinetryPage city={vancouver} />,
});
