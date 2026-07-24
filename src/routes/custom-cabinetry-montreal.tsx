import { createFileRoute } from "@tanstack/react-router";
import { CityCabinetryPage, cityHead } from "@/components/city-cabinetry-page";
import { montreal } from "@/data/city-pages";

export const Route = createFileRoute("/custom-cabinetry-montreal")({
  head: () => cityHead(montreal),
  component: () => <CityCabinetryPage city={montreal} />,
});
