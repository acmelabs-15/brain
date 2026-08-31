# Routing

## Order

1. **`diagnosing-bugs`** — primary, invoked first.
2. **`browser-testing-with-devtools`** (or the `chrome-devtools-mcp:chrome-devtools` / `debug-optimize-lcp` skills) — invoked inside step 1, to gather the evidence.
3. **`performance-optimization`** — invoked only after a cause is identified, to write the fix.
4. **`test-driven-development`** or a CI budget via **`ci-cd-and-automation`** — optional tail, to leave a regression guard.

## Why

### `diagnosing-bugs` first, not `performance-optimization`
The skill descriptions overlap here and the tiebreaker is the shape of the request. `diagnosing-bugs` explicitly covers "performance regressions" and fires when the user "reports something broken/throwing/failing/**slow**" — which is verbatim this request. `performance-optimization` is framed around *known* bottlenecks: profiling has revealed something, Core Web Vitals need improving, an N+1 needs fixing. That is the state we want to reach, not the state we're in.

The distinguishing fact is that this is a **regression against a known-good prior state**, not a standing performance target. The user isn't asking "make the dashboard faster," they're asking "what did we break." That's a diagnosis loop — form a hypothesis, bisect against the deploy diff, confirm causally — and jumping straight to an optimization skill would produce a generic list of speedups with no evidence any of them is the actual regression. Optimizing the wrong thing is the dominant failure mode in perf work, and it's exactly what skipping diagnosis causes.

### `browser-testing-with-devtools` as the evidence tool, not a separate route
The symptom is user-perceived UI slowness, so the measurement has to come from a real browser: performance trace, network waterfall, console. That's a tool the diagnosis loop *uses*, not a parallel workflow — it doesn't get its own turn, it gets pulled in under step 1. If the trace points at server or query time rather than the client, this drops out and the investigation moves to the backend instead.

### `performance-optimization` second, once there's a suspect
Once diagnosis names a cause, this skill is exactly right for the fix — it's the one that knows bundle splitting, query patterns, caching, and CWV remediation. Running it second means it's aimed at a confirmed target rather than fishing.

### `/webperf` considered and deliberately not run first
The `/webperf` command fans out to the `web-performance-auditor` persona for a broad audit. That's the right instrument for "our dashboard has never been fast, do a sweep" — it's a survey. Here we have a much narrower question with a much cheaper answer available (diff the deploy, diff two traces). A broad audit would surface ten true-but-irrelevant findings and bury the one that regressed. Worth running *later* if the bisect comes up empty and it turns out the dashboard was always slow and someone just noticed.

### Deliberately not routed
- **`interview-me` / `ask-user-question` / `grilling`** — the request is underspecified ("slow" is ambiguous), which would normally argue for an interview. But the ambiguity here is resolvable by measurement rather than by asking: a trace tells us which phase regressed more reliably than the user's recollection does. Asking three clarifying questions before touching anything is the wrong opening move when the answers are observable. The response states what's needed but offers to start regardless.
- **`code-review` / `code-review-and-quality`** — reading the deploy diff is part of diagnosis, but the goal is one specific regression, not a quality verdict on the change. A full review is the wrong altitude and much more expensive.
- **`debugging-and-error-recovery`** — overlaps `diagnosing-bugs` but is framed at failing tests and broken builds. Nothing is erroring; it's slow. `diagnosing-bugs` names performance regressions explicitly and wins the collision.
- **`observability-and-instrumentation`** — a good follow-up if the trace shows we're blind in production, but adding instrumentation before we've looked at what we already have is premature.
- **`spec-driven-development` / `planning-and-task-breakdown`** — no new capability is being built.
