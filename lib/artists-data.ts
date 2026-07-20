export type ArtistProfile = {
  name: string;
  location: string;
  bio: string;
};

export const ARTIST_PROFILES: Record<string, ArtistProfile> = {
  "Elena Vasquez": {
    name: "Elena Vasquez",
    location: "Barcelona, Spain",
    bio: "Elena Vasquez is known for luminous abstract compositions that balance structure with spontaneity. Her work has been exhibited across Europe and is held in private collections worldwide.",
  },
  "Marcus Chen": {
    name: "Marcus Chen",
    location: "Vancouver, Canada",
    bio: "Marcus Chen creates contemplative figurative works rooted in classical technique and contemporary sensibility. His portraits explore identity, memory, and quiet human connection.",
  },
  "Sofia Laurent": {
    name: "Sofia Laurent",
    location: "Provence, France",
    bio: "Sofia Laurent paints expansive landscapes inspired by the light and terrain of southern France. Her atmospheric canvases evoke serenity and timeless natural beauty.",
  },
  "James Okonkwo": {
    name: "James Okonkwo",
    location: "London, UK",
    bio: "James Okonkwo merges urban geometry with expressive texture in modern compositions that reflect the rhythm of contemporary city life.",
  },
  "Marie Dubois": {
    name: "Marie Dubois",
    location: "Normandy, France",
    bio: "Marie Dubois captures the poetry of land and sea through rich color and fluid brushwork. Her nature-inspired paintings invite calm reflection.",
  },
  "David Park": {
    name: "David Park",
    location: "Seoul, South Korea",
    bio: "David Park works in bold abstract forms, drawing on color field traditions while pushing toward dynamic, emotionally charged surfaces.",
  },
  "Anna Kowalski": {
    name: "Anna Kowalski",
    location: "Kraków, Poland",
    bio: "Anna Kowalski specializes in pastoral landscapes that celebrate seasonal change and the subtle drama of natural light.",
  },
  "Thomas Berg": {
    name: "Thomas Berg",
    location: "Copenhagen, Denmark",
    bio: "Thomas Berg creates restrained minimalist paintings where negative space and precise tonal shifts define the emotional core of each piece.",
  },
  "Yuki Tanaka": {
    name: "Yuki Tanaka",
    location: "Kyoto, Japan",
    bio: "Yuki Tanaka explores stillness and balance through minimalist compositions influenced by Japanese aesthetics and modern European painting.",
  },
  "Claire Morrison": {
    name: "Claire Morrison",
    location: "Edinburgh, Scotland",
    bio: "Claire Morrison paints immersive natural scenes with meticulous attention to atmosphere, from woodland light to delicate botanical studies.",
  },
  "Luca Ferretti": {
    name: "Luca Ferretti",
    location: "Milan, Italy",
    bio: "Luca Ferretti produces modern works that combine architectural precision with expressive material experimentation.",
  },
  "Amara Okafor": {
    name: "Amara Okafor",
    location: "Lagos, Nigeria",
    bio: "Amara Okafor is celebrated for powerful portrait work that honors individuality and cultural narrative through refined oil technique.",
  },
};

export function getArtistProfile(artistName: string): ArtistProfile {
  return (
    ARTIST_PROFILES[artistName] ?? {
      name: artistName,
      location: "International",
      bio: `${artistName} is a contemporary painter whose original works are curated exclusively for Art Wave collectors seeking exceptional quality and lasting value.`,
    }
  );
}
