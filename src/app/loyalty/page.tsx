"use client";

import LoyaltyProgram from "@/components/LoyaltyProgram";
import { Page } from "@/components/Page";
import TableSection from "@/Pages/loyalty/TableSection/TableSection";
import clsx from "clsx";

export default function LoyaltyPage() {
  return (
    <Page>
      <div
        className={clsx(
          "max-w-container mx-auto flex flex-col bg-background transition-padding duration-300 ease-in-out"
        )}
      >
        <LoyaltyProgram showBtn={false} />
        <TableSection />
      </div>
    </Page>
  );
}
