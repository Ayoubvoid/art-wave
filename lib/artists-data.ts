import type { Translations } from "@/lib/i18n/types";

export type ArtistProfile = {
  name: string;
  location: string;
  bio: string;
};

export function getArtistProfile(
  artistName: string,
  artists: Translations["artists"]
): ArtistProfile {
  const profile = artists[artistName];

  if (profile) {
    return {
      name: artistName,
      location: profile.location,
      bio: profile.bio,
    };
  }

  return {
    name: artistName,
    location: "International",
    bio: `${artistName} — contemporary painter curated exclusively for Art Wave.`,
  };
}
