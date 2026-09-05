---
unit: inv-matt-29
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-29

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/to-tickets.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-to-tickets-md.md` (9151 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-29 covers the external documentation snapshot `sources/matt-external/to-tickets.md` (manifest path `external/to-tickets.md`, 368,020 bytes, 80 lines).
- `external/to-tickets.md` is an HTML snapshot of `https://aihero.dev/skills-to-tickets` fetched 2026-09-05T01:31:47.958Z. It corresponds to the in-repo documentation file `sources/matt/docs/engineering/to-tickets.md` (inventoried under `inv-matt-7`) and skill definition `sources/matt/skills/engineering/to-tickets/SKILL.md` (inventoried under `inv-matt-8`).
- Key lifecycle architecture insights:
  - Establishes `to-tickets` as the third step in the main build chain: `grill-with-docs → to-spec → to-tickets → implement → code-review`.
  - Defines the core design principle of vertical slicing: every ticket must be a "tracer bullet" cutting through schema, API, UI, and tests, demoable on its own the moment it lands, sized for a single fresh context window.
  - Documents the failure modes of horizontal layer-based decomposition, citing an empirical post-mortem where 26 layer-sliced tickets required ~20 agent runs per closed ticket (75% rework).
  - Enforces explicit blocking edges to calculate the unblocked execution frontier, enabling parallel agent dispatch or serial dependency-ordered execution across GitHub, Linear, or local markdown files under `.scratch/<feature>/issues/<NN>-<slug>.md`.
  - Specifies the "wide-refactor exception" to the tracer-bullet rule for changes with a large blast radius, mandating the expand-migrate-contract sequence.
  - Mandates a pre-publication interactive quiz step where the model checks for prefactoring ("make the change easy, then make the easy change") and quizzes the operator on ticket granularity and dependencies.
  - Documents operational boundaries: `to-tickets` produces the artifact; dispatching and running sessions is the operator's responsibility; tickets produced by `to-tickets` are agent-ready by construction and must not be fed into `triage`.
- Defects recorded:
  - `orphan`: External documentation snapshot is not directly referenced or linked by any in-scope file in `sources/matt/`.
  - `other`: Model tendency toward over-decomposition into excessive atomic tickets for small changes.
  - `other`: Model tendency to revert to horizontal slicing unless steered during the quiz step.
  - `doc-drift`: GitHub integration creates sub-issues incorrectly or writes dependencies into body text rather than using native `gh issue create --parent` or `--blocked-by`.
  - `doc-drift`: v1.1 write races on single shared `tickets.md` resolved to one file per ticket.
  - `other`: Truncation issues when re-fetching large specs if context was cleared/compacted between `/to-spec` and `/to-tickets`.
  - `doc-drift`: Acceptance criteria lack falsifiability checks.
  - `doc-drift`: No automated dispatch mode, and `/implement` does not reliably close tickets.
- Duplication ledger status:
  - None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~92,000 tokens (368,020 bytes); approximate tokens of output written: ~2,300 tokens (9,151 bytes for inventory card + unit report).
