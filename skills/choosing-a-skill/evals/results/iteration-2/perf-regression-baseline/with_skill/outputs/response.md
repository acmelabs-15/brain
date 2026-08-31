"Slow after the last deploy" is a performance regression, and the honest answer is that I don't yet know what changed — so the first job isn't to explain the slowness, it's to make it reproducible on demand.

I'd run this as a `diagnosing-bugs` pass, and Phase 1 is the whole of it: build a **tight loop** that goes **red** on this specific slowness. Concretely, that means one command I've actually run at least once, that is deterministic, fast, and agent-runnable, and that fails on the slow behaviour and passes on the pre-deploy build. For a dashboard that probably looks like a scripted load of the specific view you're calling slow, with a hard threshold on a number we've agreed matters (time to interactive, or the p95 of whichever request dominates), run against both the current deploy and the commit before it. Until that command exists and I've seen it go red, I don't start proposing causes.

I want to be explicit about what I'm *not* going to do, because it's the tempting move here: I'm not going to read the diff, pick the most suspicious-looking change, and tell you it's probably an N+1 or a bundle-size regression. Opening with a ranked list of likely culprits would turn the loop into something that confirms a theory instead of finding one, and every measurement after that gets read through it. Candidate mechanisms are things the loop should force, not a likelihood ordering.

Two things that would change the shape of this, and are worth saying up front:

- **If it's intermittent** — some loads slow, some fine — that gets stricter, not looser. A one-in-five slow load is a rate to drive to certainty, not evidence for a cause: a fix that looks right has an 80% chance of appearing to work on the next load. I'd force the slow path every time (pin the data set, the cold/warm cache state, the concurrency) rather than reloading until it fires.
- **If "feels slow" turns out to be unmeasurable** in the environment I can drive — no way to reproduce it off production, no comparable pre-deploy build to run against — I'll say so and stop rather than fall back on reading code and reasoning about what's probably heavy. That fallback is exactly the failure the phase exists to prevent.

Once the loop is red, the rest is mechanical: bisect the deploy's commits against it, confirm the mechanism by forcing it, then fix and watch the same command go green.

One thing I need from you to build the loop: which dashboard view, and slow at what — first paint, a specific filter or query, the whole page? "The dashboard feels slow" isn't yet a threshold I can put in a command. Once I have that plus access to a pre-deploy build to compare against, I can get to red.

Sidenote on tooling: if this is browser-side and you've got a Lighthouse or CrUX artifact from before the deploy, `/webperf` can run a structural audit alongside — but that's a second opinion on rendering and network shape, not a substitute for the loop. I'd only reach for it after the loop tells us the regression is in the browser rather than behind the API.
