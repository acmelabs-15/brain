# Routing decision

## Request classification

User report: a runtime TypeError on the login page, intermittent (~20% of loads), no repro steps, no stack trace, no repo context. The deliverable is **a working fix, root-caused** — not a review, not a spec, not a plan.

Two properties drive the routing:

1. **It is a bug of unknown cause.** The user has a symptom, not a diagnosis. So the first skill must be a diagnosis loop, not an implementation skill. Jumping straight to a fix on an unknown cause produces optional-chaining band-aids that hide the crash rather than remove the race.
2. **It is intermittent and browser-side.** "One in five loads" means the reproduction itself is the hard part, and the evidence lives in a running browser (stack trace, console, network waterfall, timing). That points at real-browser instrumentation rather than static code reading.

## Skills to invoke, in order

### 1. `diagnosing-bugs` — primary, invoke first
The description is a direct match: "Diagnosis loop for hard bugs... Use when the user says 'diagnose'/'debug this', or reports something broken/throwing/failing/slow." The user reports something throwing. This is the skill that owns the request end-to-end and sets the shape of the work (reproduce → isolate → root-cause → fix → verify).

Chosen over `debugging-and-error-recovery`, which is a near-neighbour with overlapping scope ("Use when tests fail, builds break, behavior doesn't match expectations"). `diagnosing-bugs` is the tighter match on two counts: it names the user's exact trigger phrasing (a *reported* broken/throwing thing, rather than a failure the agent just hit while working), and it is scoped as a loop for *hard* bugs — which an intermittent one is by definition. If `diagnosing-bugs` turned out to be unavailable, `debugging-and-error-recovery` is the fallback.

### 2. `browser-testing-with-devtools` (or `chrome-devtools-mcp:chrome-devtools`) — invoked inside step 1's reproduce/isolate phase
Nested under the diagnosis loop rather than run alongside it. The reproduce step needs real runtime data — the stack trace naming the offending read, console errors, and the network waterfall showing which request lost the race. The description matches exactly: "Use when you need to inspect the DOM, capture console errors, analyze network requests... verify visual output with real runtime data."

Note this is gated on the chrome-devtools MCP server being configured and on the login page being reachable. If it isn't, the diagnosis loop falls back to reading the auth/session code paths statically and reasoning about mount and fetch ordering — slower and less certain, but not blocked.

The `chrome-devtools-mcp:chrome-devtools` plugin skill is a name-adjacent alternative covering the same tools. Either serves; I'd take whichever resolves, preferring the local `browser-testing-with-devtools` since it is framed around the debugging use case rather than general browser automation.

### 3. `test-driven-development` — invoked at the fix step, once the cause is known
Its description explicitly claims the bug case: "Use when implementing any logic, fixing any bug... when a bug report arrives." The specific value here is the Prove-It pattern (also surfaced via the `/test` command): write a test that fails on the *current* code by forcing the losing side of the race, then fix. On an intermittent bug this is not ceremony — it is the only way to distinguish "fixed" from "failure rate went from 1-in-5 to 1-in-50," which manual reloading cannot tell you.

Ordering matters: TDD comes *after* diagnosis, never before. You cannot write the failing test until you know which race to force.

## Skills deliberately not invoked

- **`interview-me` / `ask-user-question` / `grilling`** — the request is underspecified, but it is underspecified in ways I can resolve by *looking* (stack trace, code) rather than by asking. Blocking on questions here would be slower and would push diagnostic work onto the user. I ask for a stack trace as an accelerant in the reply, while making clear I'll proceed without one. (Also: this eval explicitly forbids clarifying questions, but the judgement holds independently — for a reproducible crash, evidence beats interrogation.)
- **`spec-driven-development` / `planning-and-task-breakdown` / `skills:plan`** — heavyweight lifecycle machinery for new features and multi-session work. A single TypeError is not a spec-shaped problem, and routing it through PRD/ADR/SPEC phases would be a serious over-escalation.
- **`frontend-ui-engineering`** — matches the surface ("login page", "state management") but not the deliverable. Nothing is being built or restyled; something existing is broken.
- **`performance-optimization`** — "intermittent" and "timing" superficially suggest it, but nothing is slow. It crashes. Wrong axis.
- **`security-and-hardening`** — the login page is auth-adjacent, which makes this a tempting reach. But the reported defect is a null-dereference on render, not an authn/authz flaw. If diagnosis reveals the race actually lets an unauthenticated view render before the guard resolves, *then* escalate to it. Not before.
- **`code-review-and-quality` / `code-review` / `simplify`** — review skills operate on a diff. There is no diff yet. Potentially relevant *after* the fix, not now.
- **`observability-and-instrumentation`** — plausible follow-up if the bug proves unreproducible locally and needs production telemetry to catch. Held in reserve as a fallback branch, not part of the primary path.
- **`source-driven-development`** — would earn its place only if the root cause turns out to be framework-specific (a hydration or router-lifecycle contract, say) where the official docs settle the correct pattern. Conditional, not upfront.

## Summary

`diagnosing-bugs` → (`browser-testing-with-devtools` for evidence during reproduce/isolate) → `test-driven-development` at the fix step.

One primary skill owns the request; the other two are tools it reaches for at specific phases. The governing principle: for a reported-symptom bug, diagnosis precedes implementation, and for an *intermittent* one, a deterministic reproduction precedes any claim that it is fixed.
