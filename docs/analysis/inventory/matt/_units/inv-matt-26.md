---
unit: inv-matt-26
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-26

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/teach.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-teach-md.md` (12809 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-26 covers `external/teach.md` (373,585 bytes, 75 lines), the external HTML documentation snapshot for Matt Pocock's `/teach` productivity skill published at `https://aihero.dev/skills-teach` and saved under `sources/matt-external/teach.md`.
- Architectural relationships with other skills in Matt's package:
  - `handoff`: Named composition for learning mid-task: when grilled about unfamiliar material, use `/handoff` to transfer to a dedicated teaching workspace, learn with `/teach`, and return to the main workflow.
  - `research`: Neighboring skill used when the goal is producing a cited report/document rather than interactive lessons and long-term retention.
  - `grill-me` and `wait-what`: Alternative clarity skills used when sharpening existing ideas or re-pitching unclear agent messages rather than acquiring a new domain over time.
  - `ask-matt`: High-level router across the full skill catalog when users are uncertain which flow fits.
- Core pedagogical design:
  - Focuses on storage strength (long-term retention) over fluency (immediate ease), using desirable difficulty, retrieval practice, spacing, and interleaving.
  - Requires mission-grounded lessons within the user's zone of proximal development (ZPD).
  - Enforces grounding against external primary sources in `RESOURCES.md` rather than unverified LLM parametric knowledge.
  - Organizes artifacts into standing workspace files: `MISSION.md`, `RESOURCES.md`, `lessons/*.html`, `reference/*.html`, `learning-records/*.md`, `assets/*`, and `NOTES.md`.
- Operational notes and open issues:
  - Open bug #377: Relative path resolution ambiguities cause agents to install lesson directories into `~/.claude/skills` instead of the local workspace directory.
  - Open bug #335: Quiz answer position bias where models place the correct answer in slot A (33/33 times).
  - Feature request #725: Missing initial knowledge assessment step causes the agent to make unwarranted assumptions about prerequisite knowledge.
  - Doc-drift: External doc notes that `GLOSSARY-FORMAT.md` is shipped by the skill but no longer linked from `SKILL.md` (issue #559).
- Duplication ledger:
  - None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~93,000 tokens (373,585 bytes raw HTML snapshot; ~3,500 tokens core article text); approximate tokens of output written: ~3,500 tokens across inventory card (12,809 bytes) and unit report (2,750 bytes).
