import { createFileRoute } from "@tanstack/react-router";
import { CityCabinetryPage, cityHead } from "@/components/city-cabinetry-page";
import { quebecCity } from "@/data/city-pages";

export const Route = createFileRoute("/custom-cabinetry-quebec-city")({
  head: () => cityHead(quebecCity),
  component: () => <CityCabinetryPage city={quebecCity} />,
});
