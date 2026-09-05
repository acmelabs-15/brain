---
unit: inv-matt-22
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-22

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/research.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-research-md.md` (8997 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-22 covers the external documentation snapshot `sources/matt-external/research.md` (manifest path `external/research.md`, 347,558 bytes, 62 lines).
- `external/research.md` is an HTML snapshot of `https://aihero.dev/skills-research` fetched 2026-09-05T01:31:44.202Z. It corresponds to the in-repo documentation file `sources/matt/docs/engineering/research.md` and the skill definition at `sources/matt/skills/engineering/research/SKILL.md`.
- Key lifecycle architecture insights:
  - Categorized under `matt:Shaping` (series item 3.3; following `/wayfinder` at 3.1 and `/prototype` at 3.2), and described as a "reach-for-it-anytime standalone" feeding upstream thinking skills.
  - Defines `/research` as delegated factual discovery: reading is offloaded to a background agent so the primary developer session continues uninterrupted and context stays clean.
  - Enforces primary-source discipline: only official documentation, source code, specifications, or first-party APIs are consulted; blog posts, tutorials, and unverified agent summaries are rejected.
  - Artifact permanence: findings are written to a cited Markdown file in the repository (where notes already live) with direct links on each claim, rather than ephemeral conversation answers.
  - Distinguishes research from related skills:
    - `/research` produces short-lived facts for immediate decisions (short shelf life).
    - `grill-with-docs` produces durable architecture decisions saved to `CONTEXT.md` and ADRs (long shelf life).
    - `grilling` produces decisions made interactively with the user via interview.
    - `prototype` tests feasibility in-codebase.
    - `wayfinder` plans large multi-session initiatives and spawns background `/research` subagents to burn down research tickets in parallel.
  - Documents key failure modes and bugs:
    - Recursive agent nesting (issue #530): caller spins up an unrestricted `general-purpose` agent holding the `Agent` tool, which spawns duplicates costing 450k+ tokens across overlapping runs.
    - Absence of stopping criteria: agents can read far too deeply or miss narrow details without explicit user question scoping.
    - Branch drift with wayfinder (issue #576): background subagents on throwaway `research/<name>` branches can inadvertently open draft PRs, and branch deletion breaks ticket context pointers.
- Defects recorded:
  - `orphan`: External documentation page snapshot is an orphan not referenced or linked by any in-scope file in `sources/matt/`.
  - `other`: Unrestricted agent delegation bug (issue #530) where background agent spawns nested duplicate research tasks.
  - `other`: Missing stopping criteria in skill design leads to agents reading too deeply or missing narrow facts.
  - `other`: Throwaway research branch subagent execution can trigger draft PR creation (issue #576) and branch deletion breaks context pointers.
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~87,000 tokens (347,558 bytes); approximate tokens of output written: ~1,900 tokens (8,997 bytes in inventory card).
