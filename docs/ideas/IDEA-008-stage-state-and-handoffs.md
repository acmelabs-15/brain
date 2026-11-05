---
id: IDEA-008
status: define # define | specced | done | parked
result: # with status: done, the DEC-NNN or the commit SHA this idea produced
---
# IDEA-008: Stage state and handoffs

## Intent
- Outcome: work at every stage stays visible and resumable, including a spec that waits for approval or a plan.
- User: Peter, and the agents that resume work.
- Why now: the RES-069 audit found this gap, and PR 28 left it open.
- Success: `brain status` shows a spec with no plan yet, and each stage names where its result sits and what comes next.
- Constraint: reuse the existing records, and add no second status note.
- Out of scope: the other findings from IDEA-004.

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A decision or a spec for how each stage saves and hands back its work.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

Split from IDEA-004 by Peter on 2026-11-05 (DEC-025). RES-069 holds the evidence for each finding. The work runs in idea-number order. The Intent is a draft, and no row here is decided.

Row 02 waits on IDEA-007 row 01, because it must say where a review verdict goes. A Blocked by cell names rows in its own file only, so this wait sits here.

- Row 01 was IDEA-004#01, finding K3. A spec with an empty plan disappears from active work. Define durable preparation and approval state so it remains visible and resumable.
- Row 02 was IDEA-004#10, finding K12. Planning approvals, review verdicts, performance experiments and long deployment monitoring lack consistent recovery handoffs. Define state destinations, evidence, approvals and next actions.
<!-- Save partial answers and pending questions here as they arrive, under Row NN: Settled, Source, Conditions, Open and Next. Link in-progress RES records and record waits with their retry condition. Replace settled notes with the resulting DEC/RES link. -->

## Map
<!-- Write one row per question right under the table's header, numbered from 01: | 01 | <question> | <interview, prototype, ideate, research or task> | open | — | — | -->

| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | How does a spec awaiting approval or planning remain visible and resumable? | interview | open | — | — |
| 02 | What durable handoff does each planning, review, performance and shipping stage return? | research | open | — | — |

## Not yet specified
None.

## Out of scope
None yet.
