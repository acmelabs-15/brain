# Routing

## Skills invoked, in order

1. **`diagnosing-bugs`** (local, Lineage B) — the only skill I commit to now.

That is the whole committed list. Everything below is conditional on what Phase 1 produces.

## Why

The routing table matches this directly: *"Something is broken and you don't know why" → `diagnosing-bugs`.* The user has a symptom (`cannot read property 'id' of undefined`), no cause, and no reproduction they control.

`diagnosing-bugs` runs six phases, and Phase 1 *is* the skill: build a **tight loop** that goes **red** on this specific bug. Its completion criterion is one command already run at least once — red-capable, deterministic, fast, agent-runnable. No red-capable command, no Phase 2.

The gate is on the **hypothesis**, not on the fix. The tempting failure here is to defer only the patch while opening with "this is almost always a race between auth state and render" plus a ranked list of four candidates. That has already lost the phase — the loop then exists to confirm a theory rather than to find one. So the reply names candidate mechanisms only as things the loop should *force*, never as a likelihood ordering.

The intermittency sharpens this rather than loosening it. A one-in-five failure is a **rate to drive to certainty**: `diagnosing-bugs` treats a 50% flake as workable and 1% as not, so the Phase 1 work is driving the rate up, not catching one failure and reasoning from a single capture. At 20%, a wrong fix looks correct four times out of five.

And where the environment cannot be driven, the skill's instruction is to say so and stop — not to fall back on reading the code and reasoning about ordering. That fallback is the exact failure the phase exists to prevent, wearing a fallback's clothes. Since there is no repo or running app in hand, the reply asks for the repo and the local/staging run path, and states the stop condition explicitly.

## Skills deliberately not invoked

- **`debugging-and-error-recovery`** (Lineage A, ~180–500 lines) — a name collision in spirit with `diagnosing-bugs`. Lineage A skills are encyclopedic reference you *consult*, strong on what to consider and weak on what to do next. Consulting it at a symptom yields a list of things that commonly cause undefined-property errors, which is hypothesis-first reasoning wearing a checklist for cover. May be worth a targeted section read *after* the loop localises the problem.
- **`browser-testing-with-devtools` / `chrome-devtools-mcp:chrome-devtools`** — plausible instruments for *building* the loop (repeated loads, console capture, network throttling, stack trace at the throw). Not invoked as a route: they are tooling I'd pull in inside `diagnosing-bugs` Phase 1 once I know how the app runs, not a decision made before that.
- **`test-driven-development` / `/test` (Prove-It)** — the right home for a regression test, but only once a red loop exists and a cause is identified. Reaching for it now would mean writing a test against a guessed mechanism.
- **`performance-optimization`, `frontend-ui-engineering`, `security-and-hardening`** — no measurement or localisation yet says the problem lives in any of their territory.
- **`/spec`, `/plan`, `/build`, `grilling` → `to-spec` → `to-tickets`** — ceremony. This is a bug with an unknown cause, not a feature with an unclear spec. Skipping a skill is a normal decision.
- **`interview-me` / clarifying-question skills** — the reply asks for exactly two operational facts (repo, how it runs) needed to start the loop. That is not an interview and does not warrant a skill.

## Conditional next steps

Stated to the user as conditional, not as commitments:

- Loop goes red reliably → continue `diagnosing-bugs` Phases 2–6 to localise and confirm the cause.
- Cause confirmed → `test-driven-development` for a regression test that goes red on the bug, then the fix, then commit.
- Loop localises the fault into a specific area → consult the relevant Lineage A section (`debugging-and-error-recovery`, or `security-and-hardening` if it lands in auth/session handling) as reference, not as a workflow.
- Environment cannot be driven → report that and stop; do not substitute code reading and ordering arguments for a reproduction.
