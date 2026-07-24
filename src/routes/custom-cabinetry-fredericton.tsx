import { createFileRoute } from "@tanstack/react-router";
import { CityCabinetryPage, cityHead } from "@/components/city-cabinetry-page";
import { fredericton } from "@/data/city-pages";

export const Route = createFileRoute("/custom-cabinetry-fredericton")({
  head: () => cityHead(fredericton),
  component: () => <CityCabinetryPage city={fredericton} />,
});
