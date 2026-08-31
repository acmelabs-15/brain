# Routing

## Decision

**`diagnosing-bugs` — alone, and that is the only commitment made.**

Nothing else is invoked up front. What comes after depends on what Phase 1 produces.

## Why

The routing table maps "Something is broken and you don't know why" straight to
`diagnosing-bugs`. That is exactly the shape of this request: a reported error, no
known cause, intermittent. There is no spec to write, no feature to plan, no module
to restructure — reaching for anything from those chains would be ceremony on a bug
report.

`diagnosing-bugs` is Lineage B, so it is a **workflow to execute step by step**, not
a reference to consult. Its six phases run in order and Phase 1 *is* the skill: build
a **tight loop** that goes **red** on this specific bug. Its completion criterion is a
single command already run at least once — red-capable, deterministic, fast,
agent-runnable. No red-capable command, no Phase 2.

## The trap this case is built around

The pull here is to open with a mechanism. "Cannot read property 'id' of undefined,
intermittently, on page load" has an obvious-feeling family of causes — a race between
an async fetch and first render, an unguarded destructure of a response, session or
cache state present on some loads and not others. Naming those as a ranked list of
likely culprits, even while politely deferring the *patch*, has already lost the phase.
The skill is explicit that **the gate is on the hypothesis, not on the fix**: once a
favourite exists, the loop stops being an instrument for finding the cause and becomes
one for confirming a theory, and every later observation is read through it.

So candidate mechanisms appear in the reply only as **things the loop must be able to
force** — framed as varying inputs the loop should be able to control (timing, request
ordering, cold vs cached state, session/account shape, entry route) — not as a
likelihood ordering, and not as a shortlist to test in order.

## Why the intermittency tightens the rule rather than loosening it

One-in-five is a **rate to drive to certainty**, not evidence for a mechanism. Two
consequences, both stated in the reply rather than kept in notes:

1. A fix that looks right has roughly an **80% chance of appearing to work on the next
   load**. Without a loop that fails reliably, "fixed" and "got lucky" are
   indistinguishable, so verification is impossible even if the patch happens to be
   correct.
2. The job in Phase 1 is therefore to **drive the failure rate up** until the loop is
   debuggable — the skill treats a 50% flake as workable and 1% as not — rather than
   catching a single failure and reasoning from that one capture.

## The stop condition, declared in advance

If the environment cannot actually be driven — no way to load the page repeatedly, vary
conditions, and read the error — the correct move is to **say so and stop**, not to fall
back on reading the source and reasoning about probable ordering. That fallback is
precisely the failure Phase 1 exists to prevent, wearing a fallback's clothes, so it is
ruled out explicitly in the opening reply rather than left as an unstated escape hatch.

## Skills considered and not routed to

- **`debugging-and-error-recovery`** (Lineage A) — a real name collision with
  `diagnosing-bugs`, and the closer-sounding match on the words "systematic root-cause
  debugging". But Lineage A is an encyclopedic checklist to *consult*, not a workflow to
  *run at a symptom*. Reaching for it first yields a list of things that commonly cause
  undefined-property errors, which is hypothesis-first reasoning wearing a checklist for
  cover — the same failure the performance-regression entry warns about. Its relevant
  section can be consulted later, once the loop has localised the problem.
- **`test-driven-development`** — its Prove-It pattern for bugs is genuinely part of
  finishing this, and `/test` fronts it. But it presumes you know what behaviour to
  assert. Here the failing behaviour cannot yet be reproduced on demand, so the red test
  it wants to write *is* the deliverable of `diagnosing-bugs` Phase 1. It comes after,
  not instead.
- **`frontend-ui-engineering`** — matches "login page" on topic only. The deliverable is
  a diagnosis, not UI work.
- **`browser-testing-with-devtools` / `chrome-devtools-mcp:chrome-devtools`** — plausible
  *instruments* for building the loop if the page can be driven in a real browser, and
  fine to pick up inside Phase 1. Not a route in their own right: they say how to
  observe, not what the phase requires. Mentioned here, not committed to in the reply,
  because whether they apply depends on what the environment turns out to allow.
- **`performance-optimization`, `security-and-hardening`** — no measurement and no threat
  model points here yet. Both are hypotheses in disguise at this stage.
- **`grilling` → `to-spec` → `to-tickets` → `implement-spec`, `spec-driven-development`,
  `planning-and-task-breakdown`** — feature-sized chains. Ceremony on a bug report.
- **`code-review` / `code-review:code-review`** — nothing has been changed to review.

## Conditional next steps (not commitments)

Stated as conditional in the reply, deliberately, so one skill plus "the next steps
depend on what this shows" reads as a plan rather than five simultaneous commitments:

- Loop goes red reliably → continue `diagnosing-bugs` Phases 2–6 to localise and fix.
- Cause localised, fix in hand → `test-driven-development` (or `/test`) to lock the red
  loop in as a regression test before the patch lands.
- Environment cannot be driven → stop and report that, with what would be needed to
  proceed. Do not substitute source reading for the loop.
