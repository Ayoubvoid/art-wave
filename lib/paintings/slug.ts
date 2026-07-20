export function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function ensureUniqueSlug(
  baseSlug: string,
  existingSlugs: Set<string>,
  excludeSlug?: string
): string {
  let slug = baseSlug || "painting";
  let suffix = 1;

  while (existingSlugs.has(slug) && slug !== excludeSlug) {
    suffix += 1;
    slug = `${baseSlug}-${suffix}`;
  }

  return slug;
}
