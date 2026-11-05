---
id: IDEA-011
status: parked # define | specced | done | parked
result: # with status: done, the DEC-NNN or the commit SHA this idea produced
---
# IDEA-011: Upstream reference fixes

## Intent
- Outcome: correct the vendored references that have defects, at their upstream source.
- User: agents that follow the vendored references.
- Why now: the RES-069 audit found this gap, and PR 28 left it open.
- Success: each defect has a fix in its owning source, or a stated limit in brain.
- Constraint: a vendored file changes only upstream, and each upstream pull request needs Peter's approval.
- Out of scope: the other findings from IDEA-004.

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
An upstream correction for each row, or a decision to accept the defect.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

Split from IDEA-004 by Peter on 2026-11-05 (DEC-025). RES-069 holds the evidence for each finding. The work runs in idea-number order. The Intent is a draft, and no row here is decided.

Peter did not pick these rows for now. This idea waits until he evaluates it.

- Row 01 was IDEA-004#11, finding U1. The upstream sample quality checker misses untracked files and can echo sensitive matching lines. Fix or replace that reference through the proper ownership route.
- Row 02 was IDEA-004#13, finding U3. Upstream testing examples contradict the rules for mocking internal code and preserving tests. Correct the examples without weakening the quality bar.
<!-- Save partial answers and pending questions here as they arrive, under Row NN: Settled, Source, Conditions, Open and Next. Link in-progress RES records and record waits with their retry condition. Replace settled notes with the resulting DEC/RES link. -->

## Map
<!-- Write one row per question right under the table's header, numbered from 01: | 01 | <question> | <interview, prototype, ideate, research or task> | open | — | — | -->

| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Which upstream correction fixes the sample quality checker's missed files and sensitive output? | research | open | — | — |
| 02 | Which testing examples need correction to preserve the agreed test boundaries and quality bar? | research | open | — | — |

## Not yet specified
None.

## Out of scope
None yet.
