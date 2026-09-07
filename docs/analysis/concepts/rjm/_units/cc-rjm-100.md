---
unit: cc-rjm-100
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-100

## Files assigned
- [x] sources/rjm/.claude/skills/ai-agents-failure-archaeology/SKILL.md
- [x] sources/rjm/.claude/skills/ai-agents-generation-and-release/SKILL.md
- [x] sources/rjm/.claude/skills/ai-agents-research-frontier/SKILL.md
- [x] sources/rjm/.claude/skills/skillforge/references/architecture-patterns.md
- [x] sources/rjm/scripts/validation/check_generated_staleness.py
- [x] docs/analysis/inventory/rjm/claude-skills-ai-agents-failure-archaeology-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-ai-agents-generation-and-release-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-ai-agents-research-frontier-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-references-architecture-patterns-md.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-generated-staleness-py.md

## Outputs produced
- docs/analysis/concepts/rjm/drift-gate-failures.md (1698 bytes)
- docs/analysis/concepts/rjm/frictionless-escape-hatches.md (1568 bytes)
- docs/analysis/concepts/rjm/guards-shipped-without-self-application.md (1557 bytes)
- docs/analysis/concepts/rjm/cli-subcommands-proposed-from-analogy.md (1489 bytes)
- docs/analysis/concepts/rjm/failure-mode-catalog.md (1521 bytes)
- docs/analysis/concepts/rjm/fm-contract.md (1137 bytes)
- docs/analysis/concepts/rjm/fm-1.md (1700 bytes)
- docs/analysis/concepts/rjm/fm-2.md (1397 bytes)
- docs/analysis/concepts/rjm/fm-3.md (1401 bytes)
- docs/analysis/concepts/rjm/fm-4.md (1402 bytes)
- docs/analysis/concepts/rjm/fm-5.md (1286 bytes)
- docs/analysis/concepts/rjm/fm-6.md (1355 bytes)
- docs/analysis/concepts/rjm/fm-7.md (1353 bytes)
- docs/analysis/concepts/rjm/fm-8.md (1348 bytes)
- docs/analysis/concepts/rjm/auto-retros.md (1331 bytes)
- docs/analysis/concepts/rjm/ai-agents-generation-and-release.md (1684 bytes)
- docs/analysis/concepts/rjm/generator.md (1682 bytes)
- docs/analysis/concepts/rjm/drift.md (1371 bytes)
- docs/analysis/concepts/rjm/canonical.md (1451 bytes)
- docs/analysis/concepts/rjm/semver.md (1351 bytes)
- docs/analysis/concepts/rjm/phase-1-know-the-seam-before-you-edit.md (1415 bytes)
- docs/analysis/concepts/rjm/adr-072.md (1601 bytes)
- docs/analysis/concepts/rjm/req-003-010.md (1723 bytes)
- docs/analysis/concepts/rjm/owned-prefixes.md (1177 bytes)
- docs/analysis/concepts/rjm/phase-2-regenerate-after-editing-a-canonical-surface.md (1545 bytes)
- docs/analysis/concepts/rjm/phase-3-run-the-drift-gates-locally-before-pushing.md (1546 bytes)
- docs/analysis/concepts/rjm/agent-template-drift.md (1469 bytes)
- docs/analysis/concepts/rjm/full-pipeline-staleness.md (1456 bytes)
- docs/analysis/concepts/rjm/lib-mirror-drift.md (1402 bytes)
- docs/analysis/concepts/rjm/manifest-description-parity.md (1450 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-100.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/drift-gate-failures.md docs/analysis/concepts/rjm/frictionless-escape-hatches.md docs/analysis/concepts/rjm/guards-shipped-without-self-application.md docs/analysis/concepts/rjm/cli-subcommands-proposed-from-analogy.md docs/analysis/concepts/rjm/failure-mode-catalog.md docs/analysis/concepts/rjm/fm-contract.md docs/analysis/concepts/rjm/fm-1.md docs/analysis/concepts/rjm/fm-2.md docs/analysis/concepts/rjm/fm-3.md docs/analysis/concepts/rjm/fm-4.md docs/analysis/concepts/rjm/fm-5.md docs/analysis/concepts/rjm/fm-6.md docs/analysis/concepts/rjm/fm-7.md docs/analysis/concepts/rjm/fm-8.md docs/analysis/concepts/rjm/auto-retros.md docs/analysis/concepts/rjm/ai-agents-generation-and-release.md docs/analysis/concepts/rjm/generator.md docs/analysis/concepts/rjm/drift.md docs/analysis/concepts/rjm/canonical.md docs/analysis/concepts/rjm/semver.md docs/analysis/concepts/rjm/phase-1-know-the-seam-before-you-edit.md docs/analysis/concepts/rjm/adr-072.md docs/analysis/concepts/rjm/req-003-010.md docs/analysis/concepts/rjm/owned-prefixes.md docs/analysis/concepts/rjm/phase-2-regenerate-after-editing-a-canonical-surface.md docs/analysis/concepts/rjm/phase-3-run-the-drift-gates-locally-before-pushing.md docs/analysis/concepts/rjm/agent-template-drift.md docs/analysis/concepts/rjm/full-pipeline-staleness.md docs/analysis/concepts/rjm/lib-mirror-drift.md docs/analysis/concepts/rjm/manifest-description-parity.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-100 completes 30 concept cards spanning failure archaeology, failure modes taxonomy, generator mechanics, and generation drift gates:
  1. Failure archaeology and settled battle principles (`drift-gate-failures`, `frictionless-escape-hatches`, `guards-shipped-without-self-application`, `cli-subcommands-proposed-from-analogy`, `auto-retros`) from `ai-agents-failure-archaeology`.
  2. The canonical failure mode taxonomy (`failure-mode-catalog`, `fm-contract`, and `fm-1` through `fm-8`) mapping empirical failure modes against incidents and baseline research metrics.
  3. Generation and release architecture runbook (`ai-agents-generation-and-release`, `generator`, `drift`, `canonical`, `semver`, `phase-1-know-the-seam-before-you-edit`, `adr-072`, `req-003-010`, `owned-prefixes`, `phase-2-regenerate-after-editing-a-canonical-surface`).
  4. Local pre-push drift gate verification matrix (`phase-3-run-the-drift-gates-locally-before-pushing`, `agent-template-drift`, `full-pipeline-staleness`, `lib-mirror-drift`, `manifest-description-parity`).
- Non-lifecycle concepts representing identifiers and constants (`fm-contract`, `owned-prefixes`) were authored with `kind: name-only` per D-023.
- All 34 occurrences recorded in `facts/cc-rjm-100.txt` are mapped in the respective Where used tables.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (`defects: doc-drift`, `defects: unfailable-gate, doc-drift`, `defects: doc-drift, missing-path, internal-contradiction`, and `clean` where appropriate).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~25,000 tokens across 5 source files and 5 inventory cards.
Approximate tokens of output written: ~14,000 tokens across 30 authored concept cards and 1 unit report.
