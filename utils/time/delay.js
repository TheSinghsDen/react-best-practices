export function delay(ms: number): Promise<number> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
