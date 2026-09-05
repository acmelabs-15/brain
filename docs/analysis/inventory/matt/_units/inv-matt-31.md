---
unit: inv-matt-31
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-31

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/wait-what.md` (329864 bytes, 46 lines) — read in full

## Outputs produced
- `docs/analysis/inventory/matt/external-wait-what-md.md` (8382 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-31 covers the external documentation snapshot `sources/matt-external/wait-what.md` (manifest path `external/wait-what.md`, 329,864 bytes, 46 lines).
- `external/wait-what.md` is an HTML snapshot of `https://aihero.dev/skills-wait-what` fetched 2026-09-05T01:31:48.396Z. It corresponds to the in-repo documentation file `sources/matt/docs/productivity/wait-what.md` and the skill definition at `sources/matt/skills/productivity/wait-what/SKILL.md`.
- Key lifecycle architecture and conversational design insights:
  - Defines `/wait-what` as an in-flight conversation repair mechanism when comprehension fails due to jargon, stacked acronyms, or unstated premises.
  - Formulates the core distinction between output instructions ("be concise", `/tldr`, `/no-fluff`) which push LLMs into an unhelpful "caveman register", and listener state cues ("wait"), which instruct the model to step back and re-pitch with missing context.
  - Integrates with project documentation assets: pulls domain vocabulary from `CONTEXT.md` (or follows `CONTEXT-MAP.md`) and sets tone via ASD-STE100 Simplified Technical English, as codified in `CLAUDE.md`.
  - Places the skill in relation to proactive alignment: `/wait-what` repairs a single message post-hoc; the preventative solution is upfront shared language via `grill-with-docs` (and `domain-modeling`).
- Defects recorded:
  - `orphan`: External documentation snapshot is not directly referenced by any in-scope file in `sources/matt/`.
  - `doc-drift`: Documentation asserts that "The skill is three lines long." (`external/wait-what.md:26`), whereas the repository implementation in `sources/matt/skills/productivity/wait-what/SKILL.md` is 8 lines (or 1 prompt line following 5 lines of frontmatter).
  - `doc-drift`: Rendered web documentation includes an H1 heading ("The /wait-what Skill") and an interactive CLI installation block (`npx skills@latest add mattpocock/skills --skill=wait-what`) on line 24, both omitted from the internal repo doc `sources/matt/docs/productivity/wait-what.md`.
- Duplication ledger: None of this unit's files appears in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~82,500 tokens (329,864 bytes across 1 file).
- Approximate tokens of output written: ~2,100 tokens (8,382 bytes card + unit report).
