---
id: IDEA-012
status: parked # define | specced | done | parked
result: # with status: done, the DEC-NNN or the commit SHA this idea produced
---
# IDEA-012: Model output checks

## Intent
- Outcome: users see the restored status, and a recommendation's claims stay within their evidence.
- User: anyone who resumes work with brain.
- Why now: the RES-069 audit found this gap, and PR 28 left it open.
- Success: an eval proves each behaviour from what the user sees, not from what the model received.
- Constraint: keep source, model and native-client evidence apart.
- Out of scope: the other findings from IDEA-004.

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A change and an observable check for each row.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

Split from IDEA-004 by Peter on 2026-11-05 (DEC-025). RES-069 holds the evidence for each finding. The work runs in idea-number order. The Intent is a draft, and no row here is decided.

Peter did not pick these rows for now. This idea waits until he evaluates it.

- Row 01 was IDEA-004#16, finding E1. Evaluated resumes often omit the required user-visible status report. Verify what the user sees, separately from context delivered to the model.
- Row 02 was IDEA-004#17, finding E2. Evaluated recommendations include unsupported compatibility, scheduling and data-loss claims. Verify the basis of option claims and retain qualifications.
<!-- Save partial answers and pending questions here as they arrive, under Row NN: Settled, Source, Conditions, Open and Next. Link in-progress RES records and record waits with their retry condition. Replace settled notes with the resulting DEC/RES link. -->

## Map
<!-- Write one row per question right under the table's header, numbered from 01: | 01 | <question> | <interview, prototype, ideate, research or task> | open | — | — | -->

| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | What change and observable check make restored status visible to the user? | research | open | — | — |
| 02 | What change and evidence check keep recommendation claims within their support? | research | open | — | — |

## Not yet specified
None.

## Out of scope
None yet.
