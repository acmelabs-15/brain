---
unit: cc-rjm-201
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-201

## Files assigned
- [x] sources/rjm/.claude/skills/skillforge/SKILL.md
- [x] sources/rjm/.claude/skills/skillforge/references/synthesis-protocol.md
- [x] sources/rjm/.claude/skills/skillforge/scripts/_constants.py
- [x] sources/rjm/.claude/skills/skillforge/scripts/check_docs_safety.py
- [x] sources/rjm/.claude/skills/skillforge/scripts/discover_skills.py
- [x] sources/rjm/.claude/skills/skillforge/scripts/triage_skill_request.py
- [x] sources/rjm/.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py
- [x] sources/rjm/scripts/skill_description_budget.py
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-references-synthesis-protocol-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-scripts--constants-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-scripts-check-docs-safety-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-scripts-discover-skills-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-scripts-triage-skill-request-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-spec-generator-scripts-validate-spec-frontmatter-py.md
- [x] docs/analysis/inventory/rjm/scripts-skill-description-budget-py.md

## Outputs produced
- docs/analysis/concepts/rjm/phase-2-specification-generation.md (1317 bytes)
- docs/analysis/concepts/rjm/phase-3-skill-generation.md (1211 bytes)
- docs/analysis/concepts/rjm/phase-4-synthesis-panel.md (1453 bytes)
- docs/analysis/concepts/rjm/forked-context.md (1281 bytes)
- docs/analysis/concepts/rjm/shared-context.md (1251 bytes)
- docs/analysis/concepts/rjm/frontmatter-properties.md (936 bytes)
- docs/analysis/concepts/rjm/required-properties.md (918 bytes)
- docs/analysis/concepts/rjm/optional-properties.md (919 bytes)
- docs/analysis/concepts/rjm/allowed-properties.md (966 bytes)
- docs/analysis/concepts/rjm/recommended-properties.md (929 bytes)
- docs/analysis/concepts/rjm/validation-constants.md (910 bytes)
- docs/analysis/concepts/rjm/valid-agent-types.md (961 bytes)
- docs/analysis/concepts/rjm/valid-hook-events.md (940 bytes)
- docs/analysis/concepts/rjm/valid-hook-types.md (906 bytes)
- docs/analysis/concepts/rjm/known-tools.md (893 bytes)
- docs/analysis/concepts/rjm/name-max-length.md (892 bytes)
- docs/analysis/concepts/rjm/name-regex.md (895 bytes)
- docs/analysis/concepts/rjm/semver-regex.md (956 bytes)
- docs/analysis/concepts/rjm/frontmatter-regex.md (964 bytes)
- docs/analysis/concepts/rjm/tool-input.md (941 bytes)
- docs/analysis/concepts/rjm/tool-output.md (956 bytes)
- docs/analysis/concepts/rjm/default-targets.md (961 bytes)
- docs/analysis/concepts/rjm/is-unquoted-tool-var.md (982 bytes)
- docs/analysis/concepts/rjm/skillrecommender.md (1148 bytes)
- docs/analysis/concepts/rjm/result-types.md (937 bytes)
- docs/analysis/concepts/rjm/skill-sources.md (1118 bytes)
- docs/analysis/concepts/rjm/universal-domain-classification.md (1023 bytes)
- docs/analysis/concepts/rjm/domain-keywords.md (948 bytes)
- docs/analysis/concepts/rjm/parsing-functions.md (939 bytes)
- docs/analysis/concepts/rjm/extract-frontmatter.md (1361 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-201.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/phase-2-specification-generation.md docs/analysis/concepts/rjm/phase-3-skill-generation.md docs/analysis/concepts/rjm/phase-4-synthesis-panel.md docs/analysis/concepts/rjm/forked-context.md docs/analysis/concepts/rjm/shared-context.md docs/analysis/concepts/rjm/frontmatter-properties.md docs/analysis/concepts/rjm/required-properties.md docs/analysis/concepts/rjm/optional-properties.md docs/analysis/concepts/rjm/allowed-properties.md docs/analysis/concepts/rjm/recommended-properties.md docs/analysis/concepts/rjm/validation-constants.md docs/analysis/concepts/rjm/valid-agent-types.md docs/analysis/concepts/rjm/valid-hook-events.md docs/analysis/concepts/rjm/valid-hook-types.md docs/analysis/concepts/rjm/known-tools.md docs/analysis/concepts/rjm/name-max-length.md docs/analysis/concepts/rjm/name-regex.md docs/analysis/concepts/rjm/semver-regex.md docs/analysis/concepts/rjm/frontmatter-regex.md docs/analysis/concepts/rjm/tool-input.md docs/analysis/concepts/rjm/tool-output.md docs/analysis/concepts/rjm/default-targets.md docs/analysis/concepts/rjm/is-unquoted-tool-var.md docs/analysis/concepts/rjm/skillrecommender.md docs/analysis/concepts/rjm/result-types.md docs/analysis/concepts/rjm/skill-sources.md docs/analysis/concepts/rjm/universal-domain-classification.md docs/analysis/concepts/rjm/domain-keywords.md docs/analysis/concepts/rjm/parsing-functions.md docs/analysis/concepts/rjm/extract-frontmatter.md` (exit code 0, 30 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-201 authored 30 concept cards covering SkillForge phases, multi-agent context architectures, validation schema constants, docs safety guardrails, skill discovery mechanisms, and frontmatter parsing utilities:
  1. Skill creation lifecycle phases and evaluation mechanisms (`phase-2-specification-generation`, `phase-3-skill-generation`, `phase-4-synthesis-panel`) spanning `synthesis-protocol.md` and `SKILL.md`.
  2. Multi-agent execution architectures (`forked-context`, `shared-context`) comparing context isolation vs conversation thread sharing.
  3. Shared frontmatter schema validation constants and regular expressions from `_constants.py` (`frontmatter-properties`, `required-properties`, `optional-properties`, `allowed-properties`, `recommended-properties`, `validation-constants`, `valid-agent-types`, `valid-hook-events`, `valid-hook-types`, `known-tools`, `name-max-length`, `name-regex`, `semver-regex`, `frontmatter-regex`).
  4. Documentation safety and command interpolation parameters from `check_docs_safety.py` (`tool-input`, `tool-output`, `default-targets`, `is-unquoted-tool-var`).
  5. Discovery and indexing routines, domain taxonomy, and upstream skill attribution (`skillrecommender`, `result-types`, `skill-sources`, `universal-domain-classification`, `domain-keywords`, `parsing-functions`).
  6. Shared frontmatter extraction routines (`extract-frontmatter`) spanning `discover_skills.py`, `validate_spec_frontmatter.py`, and `skill_description_budget.py`.
- Non-lifecycle concepts representing identifiers, section headings, functions, and constants were authored with `kind: name-only` per D-023.
- All 35 occurrences listed in `facts/cc-rjm-201.txt` were mapped into the respective `Where used` tables.
- Inventory defects were carried over to `Implementation status` (`clean`, `defects: doc-drift`, `defects: doc-drift, script-bug, missing-path`, or `defects: doc-drift, missing-path`).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~23,000 tokens across 8 source files and 8 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 unit report.
