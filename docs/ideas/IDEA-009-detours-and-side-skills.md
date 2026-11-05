---
id: IDEA-009
status: define # define | specced | done | parked
result: # with status: done, the DEC-NNN or the commit SHA this idea produced
---
# IDEA-009: Detours and side skills follow the shared rules

## Intent
- Outcome: ideate and prototype detours, and secondary skills, follow the shared question, approval and state rules.
- User: Peter, and the agents that run a detour or a secondary skill.
- Why now: the RES-069 audit found this gap, and PR 28 left it open.
- Success: a detour saves and returns its state, and no skill fixes question counts, repeats an approval or assumes root files.
- Constraint: a vendored file changes only upstream, and the interview stays the only writer of its map.
- Out of scope: the other findings from IDEA-004.

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A spec or a change for the three rows.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

Split from IDEA-004 by Peter on 2026-11-05 (DEC-025). RES-069 holds the evidence for each finding. The work runs in idea-number order. The Intent is a draft, and no row here is decided.

- Row 01 was IDEA-004#03, finding K5. Ideation and prototype detours lack explicit mode and continuous partial-state returns, so partial answers and pending questions have no clear way back to the parent interview. Pass the parent row, scope, mode and saved answers; return progress to the sole map writer.
- Row 02 was IDEA-004#04, finding K6. Idea-refine fixes question counts, requests oversized multi-select lists, and promotes tentative preferences to constraints. Use the shared question procedure and preserve uncertainty.
- Row 03 was IDEA-004#14, finding U4. Secondary skills can reintroduce fixed question counts, repeated approval, root edits and host-specific assumptions. Reconcile their interfaces with Brain's current owners.
<!-- Save partial answers and pending questions here as they arrive, under Row NN: Settled, Source, Conditions, Open and Next. Link in-progress RES records and record waits with their retry condition. Replace settled notes with the resulting DEC/RES link. -->

## Map
<!-- Write one row per question right under the table's header, numbered from 01: | 01 | <question> | <interview, prototype, ideate, research or task> | open | — | — | -->

| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | What state must ideation and prototype detours save and return throughout an exchange? | research | open | — | — |
| 02 | Which idea-refine instructions and examples must change to obey the shared question rules? | research | open | — | — |
| 03 | Which secondary-skill interfaces reintroduce conflicting approval, root-file or host rules? | research | open | — | — |

## Not yet specified
None.

## Out of scope
None yet.
