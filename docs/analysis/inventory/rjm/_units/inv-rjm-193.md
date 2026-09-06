---
unit: inv-rjm-193
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-193

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/search-dont-load.md (2758 bytes)
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/SKILL-AUTHORING.md (14860 bytes)
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/skill-reference.md (9268 bytes)
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/spec-quality/hedge-phrases.md (9252 bytes)
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/task-classification-guide.md (9276 bytes)

## Outputs produced
- docs/analysis/inventory/rjm/docs-search-dont-load-md.md (3291 bytes)
- docs/analysis/inventory/rjm/docs-skill-authoring-md.md (5899 bytes)
- docs/analysis/inventory/rjm/docs-skill-reference-md.md (7271 bytes)
- docs/analysis/inventory/rjm/docs-spec-quality-hedge-phrases-md.md (4392 bytes)
- docs/analysis/inventory/rjm/docs-task-classification-guide-md.md (6500 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `docs/search-dont-load.md`: Documents the memory-first evidence protocol requiring selective loading from `memory-index` to avoid 30% efficiency penalty (`init-003-memory-first-monitoring-gate`). It is an orphan document not directly referenced by in-scope lifecycle commands.
- `docs/SKILL-AUTHORING.md`: Establishes progressive disclosure for skill authoring (< 500 lines for `SKILL.md`), ADR-080 model-pin policy (prohibiting versioned model IDs and requiring rationale for bare `haiku` cost alias), and portable script execution shims (`${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}`). Invoked by `slashcommandcreator` and `skillforge`.
- `docs/skill-reference.md`: Catalogs 42 skills across 10 functional domains. Discovered defect at line 112 where `.claude/skills/incoherence/scripts/incoherence.py` is referenced, but the `incoherence` skill was retired in session 2594 and the script exists at `scripts/incoherence.py`.
- `docs/spec-quality/hedge-phrases.md`: Published mirror of the 21-phrase blocklist for the `/spec` Step 0 First Principles Gate. Explains RFC 2119 requirement keyword exemptions and technical suffix exemptions (`eventually consistent`).
- `docs/task-classification-guide.md`: Establishes the 3D task classification framework (Task Type [9], Complexity [3], Risk [4]) used for agent routing, referenced by `when-to-use.md`, `orchestrator-routing-algorithm.md`, and `routing-flowchart.md`.

## Blocked or uncertain
none

## Time and size
Approximate source read: 45,414 bytes (~11,350 tokens); approximate output written: 27,353 bytes (~6,840 tokens).
