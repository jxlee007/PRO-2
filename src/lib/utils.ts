/**
 * Prepends the base URL to a path for proper routing in production
 * @param path - The path to prepend the base URL to (e.g., "/images/test.jpg")
 * @returns The full path with base URL (e.g., "/PRO-2/images/test.jpg")
 */
export function withBase(path: string): string {
    const base = import.meta.env.BASE_URL;
    // Remove trailing slash from base and leading slash from path to avoid double slashes
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${cleanBase}${cleanPath}`;
}
