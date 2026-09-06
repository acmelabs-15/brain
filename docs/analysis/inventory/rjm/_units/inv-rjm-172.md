---
unit: inv-rjm-172
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-172

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/spec-generator/references/spec-prior-art-schema.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-spec-generator-references-spec-prior-art-schema-md.md (18056 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-172.md (3306 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-172` is part 1 of `.claude/skills/spec-generator`. It covers `references/spec-prior-art-schema.md` (38,288 bytes).
- Sibling units cover the rest of `.claude/skills/spec-generator` (`SKILL.md`, `scripts/validate_spec_frontmatter.py`, and `references/spec-schemas.md`).
- Context reading: `.claude/skills/spec-generator/SKILL.md` was read in full prior to writing the inventory card.
- Lifecycle role: `references/spec-prior-art-schema.md` defines the machine-readable output schema for the Step 0.5 Memory-First Gate (`PriorArtBlock`, halt triggers H6-H11, fenced code blocks with info-string `step0_5-halt`, supplemental traversal trigger formula, and hardened metrics logging to `.agents/sessions/STEP-0.5-METRICS.md` with secret redaction via `scripts/redact_secrets.py`).
- Major pipeline hosting: Following Issue #3632, this reference file also hosts the detailed implementation instructions for `/spec` steps 1 through 9 (domain-driven ontology elicitation O1-O7, adversarial requirements interview, Cynefin problem-domain and engineering-tier classification, provenance and buy-vs-build gates, CVA analysis, formal 3-tier spec generation, ADR generation and review, co-change checklists, and binary drift checks 9a through 9e).
- Direct caller: `.claude/commands/spec.md:131, 133` explicitly delegates the PriorArtBlock schema, halt criteria, metrics tally, supplemental traversal hook, and process steps 1 through 9 to this file.
- Defects noted:
  - `missing-path` at lines 270-272: Worked example in the co-change checklist cites non-existent workflow paths (`.github/actions/pr-quality-gate/action.yml` and `.github/workflows/pr-quality-gate.yml`).
  - `doc-drift` at line 3: Header comment states extraction from `spec-generator/SKILL.md`, while test assertions and git issue #3632 record extraction from `.claude/commands/spec.md`.
  - `doc-drift` at lines 130-315: The entire `/spec` command execution pipeline is stored inside a reference file named `spec-prior-art-schema.md` under `spec-generator`.
- Duplication ledger: None of this unit's files appear in `docs/analysis/manifest/rjm-duplicates.md`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~9,500 tokens (38,288 bytes assigned file) plus ~3,200 tokens context read (`SKILL.md`, 12,931 bytes).
- Approximate tokens of output written: ~4,500 tokens (18,056 bytes inventory card + ~3,100 bytes unit report).
