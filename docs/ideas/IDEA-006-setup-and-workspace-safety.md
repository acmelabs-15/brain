---
id: IDEA-006
status: define # define | specced | done | parked
result: # with status: done, the DEC-NNN or the commit SHA this idea produced
---
# IDEA-006: Setup and workspace safety

## Intent
- Outcome: setup and every workspace writer keep a repo's files safe.
- User: anyone who runs setup-brain in a repo.
- Why now: the RES-069 audit found this gap, and PR 28 left it open.
- Success: every writer enforces one layout rule, root cleanup removes no distinct rule, and setup states and tests what a failed write leaves.
- Constraint: normal setup leaves a consumer's root AGENTS.md and CLAUDE.md unchanged.
- Out of scope: the other findings from IDEA-004.

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A decision, a spec or a change for each of the three rows.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

Split from IDEA-004 by Peter on 2026-11-05 (DEC-025). RES-069 holds the evidence for each finding. The work runs in idea-number order. The Intent is a draft, and no row here is decided.

- Row 01 was IDEA-004#07, finding K9. Direct document creation can bypass setup's newer-layout refusal. Establish the compatibility rule for every writer at a shared boundary.
- Row 02 was IDEA-004#08, finding K10. Lexical overlap cannot prove equivalent instructions. Preserve distinct conditions, ordering and permissions during optional root cleanup.
- Row 03 was IDEA-004#09, finding K11. Ordinary setup can leave partial writes after a filesystem failure. Define and verify a recovery or transactional-write guarantee.
<!-- Save partial answers and pending questions here as they arrive, under Row NN: Settled, Source, Conditions, Open and Next. Link in-progress RES records and record waits with their retry condition. Replace settled notes with the resulting DEC/RES link. -->

## Map
<!-- Write one row per question right under the table's header, numbered from 01: | 01 | <question> | <interview, prototype, ideate, research or task> | open | — | — | -->

| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | What supported-layout rule must every workspace writer enforce? | research | open | — | — |
| 02 | How does optional root cleanup preserve rules that only look similar? | research | open | — | — |
| 03 | What recovery guarantee should ordinary setup provide after a partial write failure? | interview | open | — | — |

## Not yet specified
None.

## Out of scope
None yet.
