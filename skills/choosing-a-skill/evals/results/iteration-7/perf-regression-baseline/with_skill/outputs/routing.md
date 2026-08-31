# Routing

## The collision to resolve

Two candidates genuinely match "the dashboard feels slow after the last deploy":

- **`performance-optimization`** (Lineage A) — its own description lists "when you suspect performance regressions" as a trigger. This is a real match on the user's words, not a coincidence, so it has to be named and resolved rather than passed over.
- **`diagnosing-bugs`** (Lineage B) — its description covers "performance regressions" and fires on "slow".

Also considered and rejected:

- **`/webperf`** → `web-performance-auditor` persona. Runs in Quick mode absent a Lighthouse or CrUX artifact, labelling everything "potential impact". That is an unmeasured audit of a page in general, not an investigation of a change. It also assumes the slowness is browser-side, which is exactly what I have no evidence for yet.
- **`browser-testing-with-devtools` / `chrome-devtools-mcp:*`** — instrumentation, not a route. These may supply the *measurement* the loop needs, but they don't decide what to investigate. Not a first move.
- **`code-review` (either the local skill or `code-review:code-review`)** on the deploy diff — reading the diff and reasoning about what looks slow is hypothesis-first reasoning; it's the failure mode the diagnosis loop exists to prevent. The diff becomes useful *after* the loop brackets the regression to it.

## Decision

**`diagnosing-bugs`, alone, first.**

The routing file settles this directly: a performance regression is a diagnosis, not an optimisation. `performance-optimization` is Lineage A — a checklist to consult once you know where the time goes, not a workflow to run at a symptom. Reaching for it first yields a list of things that are commonly slow, which is hypothesis-first reasoning wearing a checklist for cover.

Lineage discipline reinforces this: Lineage A skills are reference you consult, Lineage B skills are workflows you execute. At a symptom, with no localisation, the workflow is what's needed.

## What running it means here

Phase 1 *is* the skill. The commitment is a tight loop that goes red on this specific slowness — one command already run at least once, red-capable, deterministic, fast, agent-runnable. No red-capable command, no Phase 2.

The gate is on the **hypothesis**, not on the fix. So no ranked list of likely causes in the opening reply, even a deferred one — that would make the loop confirm a theory rather than find one, and colour every later observation. Candidate mechanisms get named only as things the loop should force.

If it turns out intermittent, the failure rate is a rate to drive to certainty, not evidence for a mechanism. Drive it up until the loop is debuggable rather than catching one slow load and reasoning from that single capture.

The deploy boundary is the bisection axis, not the assumed cause.

If the environment can't be driven — no way to script the dashboard, no pre-deploy build to compare against — say so and stop, rather than falling back on reading the deploy diff and reasoning about what looks expensive. That fallback is the failure the phase exists to prevent.

## Conditional follow-ons

Nothing else is committed to. Only one skill is promised up front; the rest depend on what the loop shows.

- **After the loop localises it** → consult the relevant section of `performance-optimization` (Lineage A, pull one section, don't read all of it) for the fix.
- **If it localises to browser-side rendering/loading** → `chrome-devtools-mcp` tooling or `/webperf`, now with a measurement artifact so it runs in Deep mode instead of labelling findings "potential impact".
- **If the loop brackets the regression to the deploy diff** → read that diff, now with a red loop to test candidates against.
- **Once a cause is found and a fix drafted** → `test-driven-development` to lock the regression in with a test before committing.

## Visibility

The reply itself states the collision, the resolution and the measurement-before-mechanism commitment — not just these notes. It commits to one skill and marks everything after it conditional on what the loop shows.
