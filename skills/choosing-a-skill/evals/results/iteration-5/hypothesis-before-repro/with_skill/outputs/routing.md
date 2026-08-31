# Routing

## Decision

**`diagnosing-bugs` — alone, and now. Nothing else is committed.**

Routing table match: "Something is broken and you don't know why" → `diagnosing-bugs`. That is the whole
of the initial commitment. Everything downstream is conditional on what the loop shows, so it is not
listed as a plan.

## Why this skill

The request is a symptom report with no known cause: a TypeError on the login page, intermittent at
roughly one in five loads. The user does not know why it happens and neither do I. That is the exact
row in the routing table.

`diagnosing-bugs` is Lineage B — a workflow to execute step by step, not a reference to consult. Phase 1
*is* the skill: build a tight loop that goes red on this specific bug, with a completion criterion of one
command already run at least once that is red-capable, deterministic, fast and agent-runnable. No red
loop, no Phase 2.

## What the skill demands be visible in the reply, not just in my notes

1. **The gate is on the hypothesis, not the fix.** Deferring only the patch while opening with "this is
   almost always a race condition" plus a ranked list of four candidates has already lost the phase.
   Candidate mechanisms may be named only as things the loop should force, never as a likelihood
   ordering. My reply names no cause at all and says explicitly why.
2. **An intermittent makes this sharper, not looser.** One-in-five is a *rate to drive to certainty*,
   not evidence for a mechanism. The reply says so in those terms, and commits to driving the rate up
   (loop the load, throttle, vary timing/ordering, clear state between runs) toward the workable band —
   `diagnosing-bugs` treats ~50% as workable and 1% as not — rather than catching one failure and
   reasoning from the single capture.
3. **The 80% trap is stated.** At a one-in-five failure rate, any fix has an 80% chance of appearing to
   work on the next load. Saying this to the user is what makes "I am not patching yet" legible as
   rigour rather than stalling.
4. **The no-repro exit is pre-committed.** If the environment cannot be driven, I say so and stop —
   rather than falling back on reading the code and reasoning about ordering, which is the failure the
   phase exists to prevent wearing a fallback's clothes. Pre-committing to it in the opening reply is
   what stops it becoming a quiet slide later.
5. **One commitment, not a numbered chain.** One skill plus "the next steps depend on what this shows"
   is a plan; five listed skills would read as five commitments.

## Skills deliberately NOT invoked

| Candidate | Why not |
| --- | --- |
| `debugging-and-error-recovery` | Lineage A, ~encyclopedic checklist, closest-named match to "debugging". The routing table's broken-and-don't-know-why row points at `diagnosing-bugs`, and Lineage A skills are reference you consult, not workflows you run at a symptom. Diagnosing a symptom to the right workflow rather than the closest-named skill is the point. |
| `frontend-ui-engineering` | It is a login page, so the topic matches. But the job is diagnosis, not building or modifying an interface. Routing on the surface the bug appears on rather than on the shape of the job. |
| `test-driven-development` | Its row is "a contained change you already understand". I understand nothing yet. It also invites writing a test around a guessed cause. The Prove-It/red-test instinct is real, but here the red signal is Phase 1 of `diagnosing-bugs`, which owns the intermittent-rate discipline TDD does not carry. |
| `browser-testing-with-devtools` / `chrome-devtools-mcp:*` / `claude-in-chrome` | Plausible instruments for driving a browser loop, and I may well use these tools *inside* Phase 1. They are not the routing decision, and reaching for a devtools workflow first would be tooling-first rather than loop-first. Kept as means, not named as the route. |
| `performance-optimization` | Not triggered — this is a correctness error, not slowness. Noted only because the skill flags the analogous collision: a performance regression is also a diagnosis, and also routes to `diagnosing-bugs`. Same principle, different symptom. |
| `security-and-hardening` | "Login page" pattern-matches to auth/security. The reported defect is a TypeError, not a vulnerability. Would be routing on the noun. |
| `code-review` / `code-review:code-review` | Name-collision pair, and both are wrong here regardless — reviewing a diff finds defects in a change, it does not localise an intermittent runtime failure. Named in qualified form only to record that the fork was seen and neither side taken. |
| `/build`, `/plan`, `/spec`, `grilling` → `to-spec` → `to-tickets` | Ceremony. This is not a feature with an unclear spec. Skipping is a normal decision, not a violation. |
| `interview-me` / `grilling` | The user asked a clear question. The one thing that would genuinely help — an existing stack trace or a correlation pattern — I offer as an accelerant in the reply without blocking on it. |

## Conditional next steps (explicitly not commitments)

Named here for the record only; the reply states only that next steps depend on what the loop shows.

- Loop goes red reliably → continue `diagnosing-bugs` Phases 2+ (bisect against the loop, localise, then fix).
- Cause localised, fix is contained → `test-driven-development` to lock it with a regression test that
  is red before the fix and green after, then commit.
- Rate cannot be driven up → stop and report. Do not substitute code reading for reproduction.
