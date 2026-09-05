---
unit: inv-matt-34
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-34

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/writing-for-agents.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-writing-for-agents-md.md` (12622 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-34 covers the external documentation snapshot `sources/matt-external/writing-for-agents.md` (manifest path `external/writing-for-agents.md`, 345,577 bytes, 74 lines).
- `external/writing-for-agents.md` is an HTML snapshot of `https://aihero.dev/skills-writing-for-agents` fetched 2026-09-05T01:31:49.435Z. It corresponds to the in-repo documentation file `sources/matt/docs/productivity/writing-for-agents.md` and the skill definition at `sources/matt/skills/productivity/writing-for-agents/SKILL.md`.
- Key lifecycle architecture insights:
  - Establishes the foundational principles for authoring agent-facing documents: deletion over explanation, the behavioral "no-op test", and balancing "context load" (cost of always-loaded text on the model window) against "cognitive load" (human effort to remember which documents exist).
  - Outlines five primary authoring levers:
    1. Context pointers: wording in context that triggers reaching out-of-context documents.
    2. Information hierarchy: the ladder from in-file steps to in-file reference to disclosed reference.
    3. Completion criteria: demanding done-conditions that force required legwork and defend against premature completion.
    4. Leading words: pre-trained concept anchors (*tight*, *tracer bullet*) that guide execution in the body and invocation in pointers.
    5. Pruning: sentence-by-sentence elimination of duplication, sediment, and sprawl.
  - Classifies `/writing-for-agents` as a standalone cross-cutting reference sitting underneath the entire skill catalog rather than beside a single lifecycle step, governing the text created by other skills (`CONTEXT.md`, ADRs, specs, tickets).
  - Details the v1.1 renaming from `/writing-great-skills` to `/writing-for-agents` without aliases, reflecting that these writing rules apply to all agent-read text, not skills alone.
- Defects recorded:
  - `orphan`: External web documentation snapshot is an orphan not referenced or linked by relative filesystem path by any in-scope file in `sources/matt/` (only referenced by external URL in `docs/engineering/ask-matt.md:76`).
  - `doc-drift`: Rendered HTML includes H1 heading ("The /writing-for-agents Skill") and interactive install block ("npx skills@latest add mattpocock/skills --skill=writing-for-agents"), both omitted from repo source `docs/productivity/writing-for-agents.md`.
  - `doc-drift`: Documents v1.1 rename from `/writing-great-skills` with no alias, breaking backwards compatibility for legacy callers.
  - `doc-drift`: Documents model failure mode where agents instructed to streamline optimize for length rather than behavior, cutting necessary instructions.
  - `doc-drift`: Documents exemplar over-indexing defect where skills drafted from single runs produce overly specific exemplars.
- Duplication ledger: None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~86,000 tokens (345,577 bytes); approximate tokens of output written: ~2,500 tokens (12,622 bytes in inventory card).
