"use client";
import { Button } from "@/components/ui/button";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl">TakeNote</h1>
      <h3 className="text-base sm:text-x1 md:text-2xl">
        All your notes in one place <br />
        A simple way of staying organized <br />
        Simple is faster
      </h3>
      <Button>Free Demo</Button>
    </div>
  );
};
