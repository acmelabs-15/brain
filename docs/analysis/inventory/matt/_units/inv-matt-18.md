---
unit: inv-matt-18
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-18

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/handoff.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-handoff-md.md` (6538 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-18 covers the external documentation snapshot `sources/matt-external/handoff.md` (manifest path `external/handoff.md`, 380,255 bytes, 69 lines).
- `external/handoff.md` is an HTML snapshot of `https://aihero.dev/skills-handoff` fetched 2026-09-05T01:31:42.617Z. It corresponds to the in-repo documentation file `sources/matt/docs/productivity/handoff.md` and the skill definition at `sources/matt/skills/productivity/handoff/SKILL.md`.
- Key lifecycle architecture insights:
  - Defines `/handoff` as a portability mechanism across execution boundaries rather than an in-session compression tool.
  - Distinguishes three phase-boundary options: `/compact` (preserves intent in a fresh window), `/clear` (empties window and starts fresh), and `/handoff` (preserves the work's ability to move across harnesses, directories, colleagues, or parallel forks).
  - Highlights the parallel branching / prototyping pattern: an active session detours through `prototype` by handing off to an isolated session, settling a question with running code, and handing back to the primary thread without burning the main conversation context.
  - Explains the design choice to write handoff documents to the OS temporary directory as transit files rather than workspace artifacts, while noting environment caveats (e.g. Codex wiping temp between sessions, OS clearing `/tmp` on reboot).
  - Warns against prompt mangling when interpolating summaries with backticks or `$()` into shell arguments (`claude "<summary>"`), directing operators to instruct the fresh agent to read the transit file directly.
- Defects recorded:
  - `doc-drift`: Promotional copy on line 68 claims "One command installs all 22 skills, /handoff included.", whereas header metadata indicates 25 skills ("17 / 25" on line 24) and `.claude-plugin/plugin.json` registers 25 active skills.
  - `orphan`: External documentation snapshot is not directly referenced by any in-scope file in `sources/matt/`.
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~95,000 tokens (380,255 bytes); approximate tokens of output written: ~1,600 tokens (6,538 bytes in inventory card).
