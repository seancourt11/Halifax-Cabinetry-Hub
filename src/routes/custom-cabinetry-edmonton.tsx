import { createFileRoute } from "@tanstack/react-router";
import { CityCabinetryPage, cityHead } from "@/components/city-cabinetry-page";
import { edmonton } from "@/data/city-pages";

export const Route = createFileRoute("/custom-cabinetry-edmonton")({
  head: () => cityHead(edmonton),
  component: () => <CityCabinetryPage city={edmonton} />,
});
