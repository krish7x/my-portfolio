"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

import { Highlight } from "../micros";

const components = {
  Image,
  Ht: Highlight,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
