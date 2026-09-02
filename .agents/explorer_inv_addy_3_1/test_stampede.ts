const inFlight = new Map<string, Promise<unknown>>();

export function loadOnce<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
  const existing = inFlight.get(key) as Promise<T> | undefined;
  if (existing) return existing;
  const p = fetcher().finally(() => inFlight.delete(key));
  inFlight.set(key, p);
  return p;
}

// Test execution
let callCount = 0;
const testFetcher = async () => {
  callCount++;
  await new Promise((r) => setTimeout(r, 10));
  return "result";
};

const [res1, res2] = await Promise.all([
  loadOnce("test-key", testFetcher),
  loadOnce("test-key", testFetcher),
]);

console.log("res1:", res1, "res2:", res2, "callCount:", callCount);
if (res1 === "result" && res2 === "result" && callCount === 1) {
  console.log("Stampede coalescing test PASSED");
  process.exit(0);
} else {
  console.log("Stampede coalescing test FAILED");
  process.exit(1);
}
