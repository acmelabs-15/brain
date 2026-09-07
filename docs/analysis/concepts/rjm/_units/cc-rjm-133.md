---
unit: cc-rjm-133
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-133

## Files assigned
- [x] sources/rjm/.claude/skills/context-optimizer/SKILL.md
- [x] sources/rjm/.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py
- [x] sources/rjm/.claude/skills/cva-analysis/SKILL.md
- [x] sources/rjm/.claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md
- [x] sources/rjm/.claude/skills/cva-analysis/references/gof-pattern-selection.md
- [x] sources/rjm/.claude/skills/planner/references/hybrid-memory-architecture.md
- [x] sources/rjm/scripts/error_classification.py
- [x] docs/analysis/inventory/rjm/claude-skills-context-optimizer-scripts-test-skill-passive-compliance-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-context-optimizer-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-planner-references-hybrid-memory-architecture-md.md
- [x] docs/analysis/inventory/rjm/scripts-error-classification-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-cva-analysis-references-coplien-multi-paradigm-design-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-cva-analysis-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-cva-analysis-references-gof-pattern-selection-md.md

## Outputs produced
- docs/analysis/concepts/rjm/size-exception-audit.md (1724 bytes)
- docs/analysis/concepts/rjm/import.md (1309 bytes)
- docs/analysis/concepts/rjm/command-size-py.md (1689 bytes)
- docs/analysis/concepts/rjm/memory-md.md (2242 bytes)
- docs/analysis/concepts/rjm/always-on-slot.md (1420 bytes)
- docs/analysis/concepts/rjm/imports.md (1337 bytes)
- docs/analysis/concepts/rjm/analyze-skill-placement-py.md (1381 bytes)
- docs/analysis/concepts/rjm/compress-markdown-content-py.md (1412 bytes)
- docs/analysis/concepts/rjm/test-skill-passive-compliance-py.md (1419 bytes)
- docs/analysis/concepts/rjm/extract-and-index-py.md (1383 bytes)
- docs/analysis/concepts/rjm/path-validation-py.md (1359 bytes)
- docs/analysis/concepts/rjm/tiktoken.md (1202 bytes)
- docs/analysis/concepts/rjm/instruction-budget-py.md (1387 bytes)
- docs/analysis/concepts/rjm/model-context-doctrine-md.md (1470 bytes)
- docs/analysis/concepts/rjm/rule-audit-procedure-md.md (1485 bytes)
- docs/analysis/concepts/rjm/rule-audit-instrument-md.md (1424 bytes)
- docs/analysis/concepts/rjm/rule-audit-evidence-md.md (1468 bytes)
- docs/analysis/concepts/rjm/rule-audit-parser-forensics-md.md (1527 bytes)
- docs/analysis/concepts/rjm/rule-audit-measurement-discipline-md.md (1552 bytes)
- docs/analysis/concepts/rjm/vibe-engineering-md.md (1366 bytes)
- docs/analysis/concepts/rjm/claude-code-productivity-patterns-md.md (1434 bytes)
- docs/analysis/concepts/rjm/extract-and-index-pattern.md (1857 bytes)
- docs/analysis/concepts/rjm/size-exceptions.md (1709 bytes)
- docs/analysis/concepts/rjm/multi-paradigm-design.md (2093 bytes)
- docs/analysis/concepts/rjm/commonality-analysis.md (1595 bytes)
- docs/analysis/concepts/rjm/variability-analysis.md (1670 bytes)
- docs/analysis/concepts/rjm/cva-to-pattern-pipeline.md (1746 bytes)
- docs/analysis/concepts/rjm/factory.md (1624 bytes)
- docs/analysis/concepts/rjm/factory-method.md (1976 bytes)
- docs/analysis/concepts/rjm/adapter-facade.md (1726 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-133.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/size-exception-audit.md docs/analysis/concepts/rjm/import.md docs/analysis/concepts/rjm/command-size-py.md docs/analysis/concepts/rjm/memory-md.md docs/analysis/concepts/rjm/always-on-slot.md docs/analysis/concepts/rjm/imports.md docs/analysis/concepts/rjm/analyze-skill-placement-py.md docs/analysis/concepts/rjm/compress-markdown-content-py.md docs/analysis/concepts/rjm/test-skill-passive-compliance-py.md docs/analysis/concepts/rjm/extract-and-index-py.md docs/analysis/concepts/rjm/path-validation-py.md docs/analysis/concepts/rjm/tiktoken.md docs/analysis/concepts/rjm/instruction-budget-py.md docs/analysis/concepts/rjm/model-context-doctrine-md.md docs/analysis/concepts/rjm/rule-audit-procedure-md.md docs/analysis/concepts/rjm/rule-audit-instrument-md.md docs/analysis/concepts/rjm/rule-audit-evidence-md.md docs/analysis/concepts/rjm/rule-audit-parser-forensics-md.md docs/analysis/concepts/rjm/rule-audit-measurement-discipline-md.md docs/analysis/concepts/rjm/vibe-engineering-md.md docs/analysis/concepts/rjm/claude-code-productivity-patterns-md.md docs/analysis/concepts/rjm/extract-and-index-pattern.md docs/analysis/concepts/rjm/size-exceptions.md docs/analysis/concepts/rjm/multi-paradigm-design.md docs/analysis/concepts/rjm/commonality-analysis.md docs/analysis/concepts/rjm/variability-analysis.md docs/analysis/concepts/rjm/cva-to-pattern-pipeline.md docs/analysis/concepts/rjm/factory.md docs/analysis/concepts/rjm/factory-method.md docs/analysis/concepts/rjm/adapter-facade.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-133 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 cards stamped, 36 inputs)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-133 authored 30 concept cards spanning two major domains in package rjm:
  1. Context optimization, prompt governance, and rule evaluation (`size-exception-audit`, `import`, `command-size-py`, `memory-md`, `always-on-slot`, `imports`, `analyze-skill-placement-py`, `compress-markdown-content-py`, `test-skill-passive-compliance-py`, `extract-and-index-py`, `path-validation-py`, `tiktoken`, `instruction-budget-py`, `model-context-doctrine-md`, `rule-audit-procedure-md`, `rule-audit-instrument-md`, `rule-audit-evidence-md`, `rule-audit-parser-forensics-md`, `rule-audit-measurement-discipline-md`, `vibe-engineering-md`, `claude-code-productivity-patterns-md`, `extract-and-index-pattern`, `size-exceptions`) across `test_skill_passive_compliance.py` and `context-optimizer/SKILL.md`.
  2. Multi-Paradigm Design and Commonality/Variability Analysis (`multi-paradigm-design`, `commonality-analysis`, `variability-analysis`, `cva-to-pattern-pipeline`, `factory`, `factory-method`, `adapter-facade`) from Coplien's methodology and Gang of Four pattern selection guides in `cva-analysis`.
  3. Shared memory architecture references (`memory-md`) spanning `planner/references/hybrid-memory-architecture.md`, `error_classification.py`, and `context-optimizer`.
- Non-lifecycle concepts representing identifiers, file names, documentation files, or script filenames were classified as `kind: name-only` per D-023.
- All 36 occurrences across the 30 concepts specified in `facts/cc-rjm-133.txt` are faithfully mapped in the respective Where used tables.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (`defects: doc-drift`, `defects: doc-drift, missing-path`, `defects: missing-path`, `defects: doc-drift, exit-code-mismatch, missing-path, orphan`).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).
- All 30 cards stamped cleanly with `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-133 --model "Gemini 3.8 Flash" --effort high`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~23,000 tokens across 7 source files and 7 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
