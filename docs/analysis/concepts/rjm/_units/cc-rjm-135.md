---
unit: cc-rjm-135
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-135

## Files assigned
- [x] sources/rjm/.claude/skills/cva-analysis/SKILL.md
- [x] sources/rjm/.claude/skills/cva-analysis/references/SKILL_SPEC.md
- [x] sources/rjm/.claude/skills/cva-analysis/references/pattern-mapping-guide.md
- [x] sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py
- [x] sources/rjm/.claude/skills/skillforge/references/multi-lens-framework.md
- [x] sources/rjm/.claude/skills/software-engineering-library/SKILL.md
- [x] sources/rjm/.claude/skills/spec-generator/references/spec-prior-art-schema.md
- [x] sources/rjm/README.md
- [x] sources/rjm/scripts/eval/eval-agents.py
- [x] sources/rjm/scripts/eval/eval-knowledge-integration.py
- [x] docs/analysis/inventory/rjm/claude-skills-cva-analysis-references-pattern-mapping-guide-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-cva-analysis-references-skill-spec-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-spec-generator-references-spec-prior-art-schema-md.md
- [x] docs/analysis/inventory/rjm/readme-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-knowledge-integration-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-references-multi-lens-framework-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-cva-analysis-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-cva-analysis-scripts-validate-cva-matrix-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agents-py.md

## Outputs produced
- docs/analysis/concepts/rjm/over-abstraction.md (1858 bytes)
- docs/analysis/concepts/rjm/cva-analysis.md (3148 bytes)
- docs/analysis/concepts/rjm/devils-advocate.md (1846 bytes)
- docs/analysis/concepts/rjm/constraint-analysis.md (2191 bytes)
- docs/analysis/concepts/rjm/pareto-analysis.md (2180 bytes)
- docs/analysis/concepts/rjm/comparative-analysis.md (2224 bytes)
- docs/analysis/concepts/rjm/opportunity-cost.md (2185 bytes)
- docs/analysis/concepts/rjm/multi-paradigm-design-expert.md (1948 bytes)
- docs/analysis/concepts/rjm/software-architect.md (1864 bytes)
- docs/analysis/concepts/rjm/pattern-discovery-specialist.md (1924 bytes)
- docs/analysis/concepts/rjm/coplien-multi-paradigm-design.md (2067 bytes)
- docs/analysis/concepts/rjm/identify-commonalities.md (1756 bytes)
- docs/analysis/concepts/rjm/identify-variabilities.md (1796 bytes)
- docs/analysis/concepts/rjm/build-cva-matrix.md (1778 bytes)
- docs/analysis/concepts/rjm/map-to-patterns.md (1776 bytes)
- docs/analysis/concepts/rjm/validation-and-handoff.md (1797 bytes)
- docs/analysis/concepts/rjm/visitor.md (2219 bytes)
- docs/analysis/concepts/rjm/pattern-first-design.md (2244 bytes)
- docs/analysis/concepts/rjm/forcing-abstractions.md (2193 bytes)
- docs/analysis/concepts/rjm/skipping-matrix-visualization.md (2255 bytes)
- docs/analysis/concepts/rjm/ignoring-temporal-dimension.md (2232 bytes)
- docs/analysis/concepts/rjm/using-cva-for-single-use-case.md (2224 bytes)
- docs/analysis/concepts/rjm/cva-matrix-validation-script.md (1355 bytes)
- docs/analysis/concepts/rjm/cvamatrix.md (1288 bytes)
- docs/analysis/concepts/rjm/commonality.md (1314 bytes)
- docs/analysis/concepts/rjm/strategy-pattern.md (2745 bytes)
- docs/analysis/concepts/rjm/abstract-factory-pattern.md (2506 bytes)
- docs/analysis/concepts/rjm/design-philosophy.md (1223 bytes)
- docs/analysis/concepts/rjm/phase-1-identify-commonalities.md (1807 bytes)
- docs/analysis/concepts/rjm/phase-2-identify-variabilities.md (1785 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-135.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/over-abstraction.md docs/analysis/concepts/rjm/cva-analysis.md docs/analysis/concepts/rjm/devils-advocate.md docs/analysis/concepts/rjm/constraint-analysis.md docs/analysis/concepts/rjm/pareto-analysis.md docs/analysis/concepts/rjm/comparative-analysis.md docs/analysis/concepts/rjm/opportunity-cost.md docs/analysis/concepts/rjm/multi-paradigm-design-expert.md docs/analysis/concepts/rjm/software-architect.md docs/analysis/concepts/rjm/pattern-discovery-specialist.md docs/analysis/concepts/rjm/coplien-multi-paradigm-design.md docs/analysis/concepts/rjm/identify-commonalities.md docs/analysis/concepts/rjm/identify-variabilities.md docs/analysis/concepts/rjm/build-cva-matrix.md docs/analysis/concepts/rjm/map-to-patterns.md docs/analysis/concepts/rjm/validation-and-handoff.md docs/analysis/concepts/rjm/visitor.md docs/analysis/concepts/rjm/pattern-first-design.md docs/analysis/concepts/rjm/forcing-abstractions.md docs/analysis/concepts/rjm/skipping-matrix-visualization.md docs/analysis/concepts/rjm/ignoring-temporal-dimension.md docs/analysis/concepts/rjm/using-cva-for-single-use-case.md docs/analysis/concepts/rjm/cva-matrix-validation-script.md docs/analysis/concepts/rjm/cvamatrix.md docs/analysis/concepts/rjm/commonality.md docs/analysis/concepts/rjm/strategy-pattern.md docs/analysis/concepts/rjm/abstract-factory-pattern.md docs/analysis/concepts/rjm/design-philosophy.md docs/analysis/concepts/rjm/phase-1-identify-commonalities.md docs/analysis/concepts/rjm/phase-2-identify-variabilities.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-135 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 cards stamped, 47 inputs)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-135 authors 30 concept cards focused on Commonality-Variability Analysis (CVA), Coplien multi-paradigm design, multi-lens evaluation perspectives, GoF design pattern emergence (Strategy, Abstract Factory, Visitor), and CVA anti-patterns:
  1. Systematic discovery of abstractions and CVA skill architecture (`cva-analysis`, `coplien-multi-paradigm-design`, `visitor`, `strategy-pattern`, `abstract-factory-pattern`).
  2. Multi-lens inquiry techniques and expert evaluation personas (`devils-advocate`, `constraint-analysis`, `pareto-analysis`, `comparative-analysis`, `opportunity-cost`, `multi-paradigm-design-expert`, `software-architect`, `pattern-discovery-specialist`).
  3. Structured lifecycle phases of CVA analysis (`identify-commonalities`, `identify-variabilities`, `build-cva-matrix`, `map-to-patterns`, `validation-and-handoff`, `phase-1-identify-commonalities`, `phase-2-identify-variabilities`).
  4. Design anti-patterns in CVA and abstraction modeling (`over-abstraction`, `pattern-first-design`, `forcing-abstractions`, `skipping-matrix-visualization`, `ignoring-temporal-dimension`, `using-cva-for-single-use-case`).
  5. Code identifiers, script titles, docstring table headers, and document section references classified with `kind: name-only` per D-023 (`cva-matrix-validation-script`, `cvamatrix`, `commonality`, `design-philosophy`).
- All 49 occurrences across the 30 concepts specified in `facts/cc-rjm-135.txt` are mapped in the respective `Where used` tables.
- Defect classes from citing inventory cards were propagated to `Implementation status` (`clean`, `defects: doc-drift`, `defects: doc-drift, script-bug`, `defects: doc-drift, missing-path`, `defects: doc-drift, missing-path, script-bug`).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).
- All 30 cards have been stamped with `memo.ts stamp-unit`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~70,000 tokens across 10 source files and 10 inventory cards.
Approximate tokens of output written: ~17,000 tokens across 30 concept cards and 1 unit report.
