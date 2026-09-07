---
unit: cc-rjm-218
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-218

## Files assigned
- [x] sources/rjm/.claude/skills/spec-generator/SKILL.md
- [x] sources/rjm/.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py
- [x] sources/rjm/.claude/skills/steering-matcher/SKILL.md
- [x] sources/rjm/.claude/skills/steering-matcher/get_applicable_steering.py
- [x] sources/rjm/.claude/skills/steering-matcher/scripts/get_applicable_steering.py
- [x] sources/rjm/.claude/skills/steering-matcher/steering-matcher.skill
- [x] sources/rjm/.claude/skills/stuck-detection/SKILL.md
- [x] sources/rjm/.claude/skills/stuck-detection/stuck_detection.py
- [x] sources/rjm/scripts/external_signals/acceptance_criteria.py
- [x] sources/rjm/scripts/validate_workflows.py
- [x] sources/rjm/scripts/validation/instruction_budget_globs.py
- [x] sources/rjm/templates/agents/roadmap.shared.md
- [x] docs/analysis/inventory/rjm/claude-skills-spec-generator-scripts-validate-spec-frontmatter-py.md
- [x] docs/analysis/inventory/rjm/scripts-validate-workflows-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-spec-generator-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-steering-matcher-get-applicable-steering-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-steering-matcher-scripts-get-applicable-steering-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-instruction-budget-globs-py.md
- [x] docs/analysis/inventory/rjm/templates-agents-roadmap-shared-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-steering-matcher-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-steering-matcher-steering-matcher-skill.md
- [x] docs/analysis/inventory/rjm/claude-skills-stuck-detection-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-stuck-detection-stuck-detection-py.md
- [x] docs/analysis/inventory/rjm/scripts-external-signals-acceptance-criteria-py.md

## Outputs produced
- docs/analysis/concepts/rjm/validate-file.md (1225 bytes)
- docs/analysis/concepts/rjm/3-tier-specifications.md (1546 bytes)
- docs/analysis/concepts/rjm/schema-compliance.md (1283 bytes)
- docs/analysis/concepts/rjm/requirement-structure.md (1377 bytes)
- docs/analysis/concepts/rjm/spdd-reasons-canvas.md (1296 bytes)
- docs/analysis/concepts/rjm/design-structure.md (1225 bytes)
- docs/analysis/concepts/rjm/task-structure.md (1190 bytes)
- docs/analysis/concepts/rjm/complexity-sizing.md (1117 bytes)
- docs/analysis/concepts/rjm/glob-to-regex.md (1375 bytes)
- docs/analysis/concepts/rjm/file-matches-pattern.md (1032 bytes)
- docs/analysis/concepts/rjm/get-applicable-steering.md (1256 bytes)
- docs/analysis/concepts/rjm/excludefrom.md (1218 bytes)
- docs/analysis/concepts/rjm/priority.md (1288 bytes)
- docs/analysis/concepts/rjm/file-matches-patterns.md (1078 bytes)
- docs/analysis/concepts/rjm/get-applicable-steering-py.md (1008 bytes)
- docs/analysis/concepts/rjm/gen-skills-ps1.md (958 bytes)
- docs/analysis/concepts/rjm/default-max-history.md (1135 bytes)
- docs/analysis/concepts/rjm/default-stuck-threshold.md (1190 bytes)
- docs/analysis/concepts/rjm/default-similarity-threshold.md (1184 bytes)
- docs/analysis/concepts/rjm/min-text-length.md (1122 bytes)
- docs/analysis/concepts/rjm/signature-size.md (1121 bytes)
- docs/analysis/concepts/rjm/stuck-detection-history.md (1179 bytes)
- docs/analysis/concepts/rjm/stuck-detection-session.md (1193 bytes)
- docs/analysis/concepts/rjm/xdg-state-home.md (1125 bytes)
- docs/analysis/concepts/rjm/semantic-hooks.md (986 bytes)
- docs/analysis/concepts/rjm/min-significant-words.md (996 bytes)
- docs/analysis/concepts/rjm/min-word-length.md (978 bytes)
- docs/analysis/concepts/rjm/stop-words.md (1129 bytes)
- docs/analysis/concepts/rjm/default-history-path.md (970 bytes)
- docs/analysis/concepts/rjm/extract-topic-signature.md (1018 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-218.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/validate-file.md docs/analysis/concepts/rjm/3-tier-specifications.md docs/analysis/concepts/rjm/schema-compliance.md docs/analysis/concepts/rjm/requirement-structure.md docs/analysis/concepts/rjm/spdd-reasons-canvas.md docs/analysis/concepts/rjm/design-structure.md docs/analysis/concepts/rjm/task-structure.md docs/analysis/concepts/rjm/complexity-sizing.md docs/analysis/concepts/rjm/glob-to-regex.md docs/analysis/concepts/rjm/file-matches-pattern.md docs/analysis/concepts/rjm/get-applicable-steering.md docs/analysis/concepts/rjm/excludefrom.md docs/analysis/concepts/rjm/priority.md docs/analysis/concepts/rjm/file-matches-patterns.md docs/analysis/concepts/rjm/get-applicable-steering-py.md docs/analysis/concepts/rjm/gen-skills-ps1.md docs/analysis/concepts/rjm/default-max-history.md docs/analysis/concepts/rjm/default-stuck-threshold.md docs/analysis/concepts/rjm/default-similarity-threshold.md docs/analysis/concepts/rjm/min-text-length.md docs/analysis/concepts/rjm/signature-size.md docs/analysis/concepts/rjm/stuck-detection-history.md docs/analysis/concepts/rjm/stuck-detection-session.md docs/analysis/concepts/rjm/xdg-state-home.md docs/analysis/concepts/rjm/semantic-hooks.md docs/analysis/concepts/rjm/min-significant-words.md docs/analysis/concepts/rjm/min-word-length.md docs/analysis/concepts/rjm/stop-words.md docs/analysis/concepts/rjm/default-history-path.md docs/analysis/concepts/rjm/extract-topic-signature.md` (exit code 0: 30 PASS, 0 FAIL, 0 MISSING source, across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-218 authored 30 concept cards spanning spec-generator specification frameworks, steering matcher utilities, and stuck-detection conversation guardrails:
  1. Spec-generator lifecycle concepts: `3-tier specifications` (pattern), `Schema Compliance` (gate), `Requirement Structure` (template), `SPDD REASONS Canvas` (technique), `Design Structure` (template), `Task Structure` (template), and `Complexity Sizing` (technique).
  2. Steering matcher utilities and configuration: `glob_to_regex`, `file_matches_pattern`, `get_applicable_steering`, `excludeFrom`, `priority`, `_file_matches_patterns`, `get_applicable_steering.py`, and `gen-skills.ps1`.
  3. Stuck detection parameters, constants, and helpers: `DEFAULT_MAX_HISTORY`, `DEFAULT_STUCK_THRESHOLD`, `DEFAULT_SIMILARITY_THRESHOLD`, `MIN_TEXT_LENGTH`, `SIGNATURE_SIZE`, `STUCK_DETECTION_HISTORY`, `STUCK_DETECTION_SESSION`, `XDG_STATE_HOME`, `semantic_hooks`, `MIN_SIGNIFICANT_WORDS`, `MIN_WORD_LENGTH`, `STOP_WORDS`, `default_history_path`, and `extract_topic_signature`.
  4. General validation utilities: `validate_file`.
- Non-lifecycle concepts representing identifiers, functions, configuration constants, environment variables, and filenames were classified as `kind: name-only` per D-023.
- All 46 occurrences across cited files from `facts/cc-rjm-218.txt` are faithfully mapped into the Where used tables.
- Defect annotations from inventory entries were transferred to `Implementation status` (including `defects: orphan, other, script-bug, exit-code-mismatch`, `defects: doc-drift`, `defects: missing-path`, and `clean`).
- Every citation was byte-exact verified against the pinned sources using `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 12 source files and 12 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
