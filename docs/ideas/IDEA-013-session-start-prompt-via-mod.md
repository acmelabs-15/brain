---
id: IDEA-013
status: define # define | specced | done | parked
result: # with status: done, the DEC-NNN or the commit SHA this idea produced
---
# IDEA-013: Session start prompt via mod

## Intent
- Outcome: a new Claude Code session opens with a multiple-choice prompt shown by a mod, and the answer goes to the router.
- User: Peter, and anyone who starts a session with brain.
- Why now: 0.13.0 gives each session a report and a router, but no opening prompt, and Peter wants one through a mod.
- Success: a new session shows the prompt before the first word, built from `brain status`, and the answer reaches `using-brain`.
- Constraint: a mod runs on Claude Code only, so other hosts wait for the first prompt (DEC-010).
- Out of scope: a prompt on other hosts.

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A spec for the mod and its prompt.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

Peter split this scope out of IDEA-003 on 2026-11-05. The Intent is a draft, and no row here is decided.

DEC-010, DEC-020, RES-038 and RES-040 are the sources. They name IDEA-003, DEC-007 and DEC-008, which stay on branch `docs/workflow-audit-main`.

RES-040's runs used fixed labels and `--plugin-dir`, so reading `brain status` first and a marketplace install are unproven.

- Row 01 was IDEA-003#98.
<!-- Save partial answers and pending questions here as they arrive, under Row NN: Settled, Source, Conditions, Open and Next. Link in-progress RES records and record waits with their retry condition. Replace settled notes with the resulting DEC/RES link. -->

## Map
<!-- Write one row per question right under the table's header, numbered from 01: | 01 | <question> | <interview, prototype, ideate, research or task> | open | — | — | -->

| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Which session sources show the opening question, and how does it avoid opening in the middle of a task? | interview | open | — | — |

## Not yet specified
None.

## Out of scope
None yet.
