---
unit: cc-rjm-47
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-47

## Files assigned
- [x] sources/rjm/.agents/architecture/SKILL-STANDARDS-RECONCILED.md
- [x] sources/rjm/.agents/archive/planning/PR-60/001-pr-60-review-gap-analysis.md
- [x] sources/rjm/.claude/agents/code-reviewer.md
- [x] sources/rjm/.claude/agents/silent-failure-hunter.md
- [x] sources/rjm/.claude/skills/codebase-documenter/SKILL.md
- [x] sources/rjm/.claude/skills/dx-review/SKILL.md
- [x] sources/rjm/docs/agent-catalog.md
- [x] sources/rjm/docs/architecture.md
- [x] sources/rjm/scripts/eval/README.md
- [x] sources/rjm/scripts/eval/_model_sweep_core.py
- [x] sources/rjm/scripts/eval/eval-reviewer-asymmetry.py
- [x] sources/rjm/scripts/validation/check_model_pins.py

## Outputs produced
- docs/analysis/concepts/rjm/canonical-reference.md (1056 bytes)
- docs/analysis/concepts/rjm/official-standard.md (1295 bytes)
- docs/analysis/concepts/rjm/ai-agents-project-extensions.md (1471 bytes)
- docs/analysis/concepts/rjm/two-tier-requirement-system.md (1471 bytes)
- docs/analysis/concepts/rjm/portable-skills.md (1474 bytes)
- docs/analysis/concepts/rjm/project-internal-skills.md (1453 bytes)
- docs/analysis/concepts/rjm/progressive-disclosure-model.md (1361 bytes)
- docs/analysis/concepts/rjm/frontmatter-validation.md (1327 bytes)
- docs/analysis/concepts/rjm/conflict-resolution-decision-matrix.md (1457 bytes)
- docs/analysis/concepts/rjm/skillforge-validator.md (1342 bytes)
- docs/analysis/concepts/rjm/modules.md (1016 bytes)
- docs/analysis/concepts/rjm/templates.md (1599 bytes)
- docs/analysis/concepts/rjm/tests.md (976 bytes)
- docs/analysis/concepts/rjm/model-bearing-keys.md (1184 bytes)
- docs/analysis/concepts/rjm/keep-pin.md (1856 bytes)
- docs/analysis/concepts/rjm/portable-skill.md (1404 bytes)
- docs/analysis/concepts/rjm/orchestrator-skill.md (1347 bytes)
- docs/analysis/concepts/rjm/pr-review-toolkit.md (1441 bytes)
- docs/analysis/concepts/rjm/code-reviewer.md (1720 bytes)
- docs/analysis/concepts/rjm/silent-failure-hunter.md (1727 bytes)
- docs/analysis/concepts/rjm/pr-test-analyzer.md (1417 bytes)
- docs/analysis/concepts/rjm/security-gaps.md (1003 bytes)
- docs/analysis/concepts/rjm/gap-sec-001.md (1002 bytes)
- docs/analysis/concepts/rjm/gap-sec-002.md (967 bytes)
- docs/analysis/concepts/rjm/gap-sec-003.md (991 bytes)
- docs/analysis/concepts/rjm/error-handling-gaps.md (1034 bytes)
- docs/analysis/concepts/rjm/gap-err-001.md (972 bytes)
- docs/analysis/concepts/rjm/gap-err-002.md (965 bytes)
- docs/analysis/concepts/rjm/gap-err-003.md (961 bytes)
- docs/analysis/concepts/rjm/gap-err-004.md (1011 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-47.md (5044 bytes)

## Scripts executed
- bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0 (32 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- 30 concept cards authored from scratch for unit cc-rjm-47, covering skill specification standards, model pin governance, PR review agents, and defect classification taxonomies:
  - Standards and extension frameworks: `official-standard` (`kind: reference`), `ai-agents-project-extensions` (`kind: pattern`), `two-tier-requirement-system` (`kind: pattern`), `portable-skills` (`kind: pattern`), `project-internal-skills` (`kind: pattern`), `progressive-disclosure-model` (`kind: pattern`), `portable-skill` (`kind: template`), `orchestrator-skill` (`kind: pattern`).
  - Gating and validation mechanisms: `frontmatter-validation` (`kind: gate`), `conflict-resolution-decision-matrix` (`kind: technique`), `skillforge-validator` (`kind: gate`), `keep-pin` (`kind: gate`).
  - PR review agent roles and patterns: `pr-review-toolkit` (`kind: pattern`), `code-reviewer` (`kind: role`), `silent-failure-hunter` (`kind: role`), `pr-test-analyzer` (`kind: role`).
  - Non-lifecycle concepts classified as `kind: name-only` per METHOD.md R6 and D-023:
    - Status headers, directory paths, and code identifiers: `canonical-reference`, `modules`, `templates`, `tests`, `model-bearing-keys`.
    - Review gap category headings and individual defect tickets from PR-60 review gap analysis: `security-gaps`, `gap-sec-001`, `gap-sec-002`, `gap-sec-003`, `error-handling-gaps`, `gap-err-001`, `gap-err-002`, `gap-err-003`, `gap-err-004`.
- All 30 cards pass byte-exact quotation checking with `bun scripts/synthesis/quote-check.ts` (32 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~62,500 tokens (250,241 bytes across 12 source files and 12 citing inventory cards); approximate tokens of output written: ~10,500 tokens (42,500 bytes across 30 concept cards and this report).
