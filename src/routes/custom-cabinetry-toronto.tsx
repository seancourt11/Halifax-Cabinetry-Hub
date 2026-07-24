import { createFileRoute } from "@tanstack/react-router";
import { CityCabinetryPage, cityHead } from "@/components/city-cabinetry-page";
import { toronto } from "@/data/city-pages";

export const Route = createFileRoute("/custom-cabinetry-toronto")({
  head: () => cityHead(toronto),
  component: () => <CityCabinetryPage city={toronto} />,
});
