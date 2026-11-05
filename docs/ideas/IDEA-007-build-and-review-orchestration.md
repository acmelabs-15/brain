---
id: IDEA-007
status: define # define | specced | done | parked
result: # with status: done, the DEC-NNN or the commit SHA this idea produced
---
# IDEA-007: Build and review orchestration

## Intent
- Outcome: one clear owner schedules build tasks and reviews within each host's real limits, and a review honors the scope the user named.
- User: Peter, and the agents that build and review.
- Why now: the RES-069 audit found this gap, and PR 28 left it open.
- Success: spec, build and review say the same thing about parallel work, who runs a review, and which diff it reads.
- Constraint: a vendored file changes only upstream.
- Out of scope: the other findings from IDEA-004.

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A decision or a spec for who schedules build tasks and reviews.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

Split from IDEA-004 by Peter on 2026-11-05 (DEC-025). RES-069 holds the evidence for each finding. The work runs in idea-number order. The Intent is a draft, and no row here is decided.

- Row 01 was IDEA-004#05, finding K7. Spec, build and review disagree about parallel work and who runs review. Workers can receive review duties they cannot delegate; Claude Code's docs allow nested sub-agents (https://code.claude.com/docs/en/sub-agents), so check that claim first. Give a capable coordinator clear ownership within actual host limits.
- Row 02 was IDEA-004#06, finding K8. Review can prefer inferred issue context over explicit user scope, and its diff examples mix comparison meanings. Honor explicit scope and define each comparison correctly.
- Row 03 was IDEA-004#12, finding U2. Upstream orchestration examples conflict with Brain's coordinator and writable research records. Bound their use or correct the owning source.
<!-- Save partial answers and pending questions here as they arrive, under Row NN: Settled, Source, Conditions, Open and Next. Link in-progress RES records and record waits with their retry condition. Replace settled notes with the resulting DEC/RES link. -->

## Map
<!-- Write one row per question right under the table's header, numbered from 01: | 01 | <question> | <interview, prototype, ideate, research or task> | open | — | — | -->

| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Who schedules build tasks and independent reviews within each host's actual capacity? | interview | open | — | — |
| 02 | What review lookup and diff rules preserve the user's explicit scope? | research | open | — | — |
| 03 | Which orchestration references or caller boundaries must change to match Brain's workflow? | research | open | 01 | — |

## Not yet specified
None.

## Out of scope
None yet.
