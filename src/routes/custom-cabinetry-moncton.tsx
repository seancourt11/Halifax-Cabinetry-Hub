import { createFileRoute } from "@tanstack/react-router";
import { CityCabinetryPage, cityHead } from "@/components/city-cabinetry-page";
import { moncton } from "@/data/city-pages";

export const Route = createFileRoute("/custom-cabinetry-moncton")({
  head: () => cityHead(moncton),
  component: () => <CityCabinetryPage city={moncton} />,
});
