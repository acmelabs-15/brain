# Routing

## Skills invoked, in order

1. **`diagnosing-bugs`** — the only skill I commit to now.
2. *(conditional, later)* **`performance-optimization`** — consulted as reference, not run as a workflow, and only once the loop has localised where the time goes.

Nothing else. One skill plus "the next steps depend on what this shows" is a plan; a numbered list of five skills would be five commitments I can't justify at a symptom.

## Why

**The request is a diagnosis, not an optimisation.** The user has a symptom ("feels slow"), a suspected boundary ("after the last deploy"), and no located cause. `diagnosing-bugs` is the routing-table entry for "something is broken and you don't know why", and it covers performance regressions explicitly. Its Phase 1 — build a **tight loop** that goes **red** on this specific bug — is exactly what's missing here, and its completion criterion (one command already run at least once: red-capable, deterministic, fast, agent-runnable) is the gate before any cause-hunting.

**The collision with `performance-optimization` is real and I resolved it rather than dismissed it.** That skill's description lists performance regressions and suspected regressions as triggers, so it genuinely matches the words in the request. I skipped it because it's Lineage A: a 180–500 line encyclopedic checklist, strong on *what to consider*, weak on *what to do next*. Reaching for it first produces a list of things that are commonly slow — N+1 queries, bundle size, Core Web Vitals — which is hypothesis-first reasoning with a checklist for cover. It becomes valuable after localisation, when I can pull the one relevant section and apply it. So it's deferred, not discarded, and the reply says so.

**The gate is on the hypothesis, not on the fix.** It would be easy to defer only the patch while opening with "this is almost always an N+1" and a ranked list of four candidates. That's already lost the phase — the loop then exists to confirm a theory rather than to find one. So the reply names candidate mechanisms only as things the loop should force, never as a likelihood ordering.

**The deploy boundary is a bisection target, not a cause.** "After the last deploy" is the most useful fact available and the most tempting to over-read. Treating it as the thing to bisect against keeps it as evidence; treating it as the cause turns the whole investigation into a diff review.

**Intermittency handling is carried into the reply.** "Feels slow" is a rate. If it's intermittent, the rate gets driven up until the loop is debuggable rather than reasoning from a single slow capture. And where the environment can't be driven — no staging, no old build to run — the correct move is to say so and stop, not to fall back on reading code and reasoning about what looks expensive, which is the failure the phase exists to prevent.

## Skills considered and rejected

- **`performance-optimization`** — the real collision. Deferred to post-localisation reference, per above.
- **`webperf` / `web-performance-auditor` persona** — a `/webperf` fan-out runs in Quick mode with no Lighthouse or CrUX artifact and labels its findings `potential impact`. Unmeasured findings at a symptom is the same hypothesis-first failure in persona form. Viable *later* if the loop points at the browser and I have a real artifact to feed it.
- **`browser-testing-with-devtools` / chrome-devtools skills** — plausible *instruments* for building the loop if the slowness turns out to be client-side, but they're tooling to be picked up inside Phase 1, not the route. Choosing an instrument before knowing whether the time is in the browser, the network, or the backend is picking a hypothesis.
- **`debugging-and-error-recovery`** — Lineage A's checklist counterpart to `diagnosing-bugs`. The Lineage B workflow is the one worth following literally here; the reference version adds nothing the loop doesn't.
- **`observability-and-instrumentation`** — a fair follow-on if the loop reveals we can't see production behaviour at all, but it's a build-something task, not a diagnosis.
- **`grilling` → `to-spec` → `to-tickets`** and the `/spec` → `/plan` → `/build` lifecycle — ceremony. This is a symptom to localise, not a feature to specify.
- **`interview-me` / clarifying-question skills** — the two facts I need (repro steps, access to the previous build) belong in the reply as what's needed to start the loop, not as a separate interview phase.
