# Routing

## Decision

**`diagnosing-bugs` — alone, and nothing else until Phase 1 completes.**

That is the whole plan. Not a numbered list of five skills; one skill, plus the honest
statement that what follows depends on what the loop shows.

## Why

The routing table maps "Something is broken and you don't know why" to `diagnosing-bugs`.
This is exactly that shape: a concrete error (`cannot read property 'id' of undefined`),
no known cause, and a user asking me to sort it out.

`diagnosing-bugs` runs six phases and **Phase 1 is the skill**: build a tight loop that
goes red on this specific bug. Its completion criterion is one command I have already run
at least once — red-capable, deterministic, fast, agent-runnable. No red-capable command,
no Phase 2.

The intermittency makes that stricter, not looser. A one-in-five failure is a **rate to
drive to certainty**, not evidence for a mechanism — a wrong fix has an ~80% chance of
appearing to work on the next load. So the job in Phase 1 is to drive the rate up until
the loop is debuggable (a ~50% flake is workable, 1% is not), rather than catching a
single failure and reasoning from that one capture.

## The trap this case is built around

The gate is on the **hypothesis**, not on the fix. The tempting reply here — "this is
almost always a race condition; here are the four usual suspects, ranked" — has already
lost the phase even if I withhold the patch. Once a ranked theory is on the table, the
loop exists to confirm it rather than to find the cause, and every later observation is
read through it.

So candidate mechanisms (late-resolving fetch, session/auth object arriving after render,
stale cached bundle) appear in my reply only as **things the loop should force** — knobs
for driving the failure rate up — explicitly not as a likelihood ordering. The commitment
is stated to the user in the opening reply, not just held in my notes: an unaided agent
states the rule where it reasons and then breaks it in its first sentence.

## Skills considered and not routed to

- **`debugging-and-error-recovery`** (Lineage A) — near-identical name, genuinely matches
  the words "unexpected error". But Lineage A skills are encyclopedic checklists:
  reference you consult, not a workflow you execute at a symptom. Reaching for it first
  produces a list of things that commonly cause undefined-property errors, which is
  hypothesis-first reasoning wearing a checklist for cover. `diagnosing-bugs` (Lineage B)
  is the workflow. Consult the Lineage A material later, if the loop localises somewhere
  its checklist covers.
- **`test-driven-development`** — routes for "a contained change you already understand".
  I don't understand this one yet. TDD's Prove-It pattern becomes relevant *after* the
  loop is red and the cause is localised; the red test is then the regression guard.
- **`browser-testing-with-devtools` / `chrome-devtools-mcp:chrome-devtools`** — not a
  routing choice, a possible *implement­ation* of the tight loop, if the loop needs a real
  browser to capture the console error and stack. Subordinate to Phase 1, invoked only if
  the loop demands it. I'd try the cheapest red-capable command first.
- **`frontend-ui-engineering`, `performance-optimization`, `security-and-hardening`** —
  keyword bait off "login page". Nothing here is a UI-quality, speed, or auth-hardening
  request. Skipped.
- **`/plan`, `/spec`, `grilling` → `to-spec` → `to-tickets`** — ceremony. This is one bug
  with a known error string, not a feature with an unclear spec. Skipping is a normal
  decision, not a violation.

## Order, and what is conditional

1. **`diagnosing-bugs`, Phase 1.** Get a red-on-demand command; drive the failure rate up
   toward workable. Everything below is conditional on this.
2. *If the loop goes red:* continue `diagnosing-bugs` through localisation and root cause.
3. *If a fix is then identified:* `test-driven-development` to lock the red loop in as a
   regression test before the patch lands.
4. *If the environment cannot be driven at all* — no way to reach a login page I can load
   repeatedly, failure only on production traffic — **say so and stop.** Do not fall back
   on reading the code and reasoning about ordering. That is the precise failure Phase 1
   exists to prevent, wearing a fallback's clothes, and at a one-in-five rate it yields an
   unverifiable fix.

## Questions asked, and why they are not clarifying questions

I ask two things in the reply — how to run the app and reach the login page, and any
correlate for when it fails. Both are inputs to building and driving the loop (the second
is a list of knobs to turn to raise the failure rate), not a request for the user to
diagnose it for me. I do not ask which framework it is or what the code looks like; those
would be invitations to theorise before a reproduction exists.
