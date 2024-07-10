"use client";

import { Button } from "@nextui-org/react";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-10">
      <Button
        size="lg"
        isIconOnly
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className="bg-custom1 dark:bg-secondary"
      >
        <ChevronUp className="stroke-white" />
      </Button>
    </div>
  );
}
