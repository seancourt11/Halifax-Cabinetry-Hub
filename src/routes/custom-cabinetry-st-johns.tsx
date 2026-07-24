import { createFileRoute } from "@tanstack/react-router";
import { CityCabinetryPage, cityHead } from "@/components/city-cabinetry-page";
import { stJohns } from "@/data/city-pages";

export const Route = createFileRoute("/custom-cabinetry-st-johns")({
  head: () => cityHead(stJohns),
  component: () => <CityCabinetryPage city={stJohns} />,
});
