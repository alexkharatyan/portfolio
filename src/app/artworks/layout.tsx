import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artworks — Alexandria Kharatyan",
  description:
    "Hand-drawn colored pencil illustrations by Alexandria Kharatyan. Featuring characters from Pixar, Disney, DreamWorks, gaming, and original art.",
  openGraph: {
    title: "Artworks — Alexandria Kharatyan",
    description:
      "Hand-drawn colored pencil illustrations inspired by animation, movies, and original characters.",
    type: "website",
  },
};

export default function ArtworksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
