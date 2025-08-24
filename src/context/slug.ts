// ✅ Small helper to generate slugs without any package
export function toSlug(text: string): string {
  return text
    .toLowerCase()                 // lowercase
    .trim()                        // remove leading/trailing spaces
    .replace(/[^a-z0-9\s-]/g, "")  // remove special chars
    .replace(/\s+/g, "-")          // spaces → dashes
    .replace(/-+/g, "-");          // collapse multiple dashes
}
