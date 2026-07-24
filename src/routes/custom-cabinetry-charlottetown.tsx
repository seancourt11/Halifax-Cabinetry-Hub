import { createFileRoute } from "@tanstack/react-router";
import { CityCabinetryPage, cityHead } from "@/components/city-cabinetry-page";
import { charlottetown } from "@/data/city-pages";

export const Route = createFileRoute("/custom-cabinetry-charlottetown")({
  head: () => cityHead(charlottetown),
  component: () => <CityCabinetryPage city={charlottetown} />,
});
