---
unit: cc-rjm-216
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-216

## Files assigned
- [x] sources/rjm/.claude/skills/software-engineering-library/SKILL.md
- [x] sources/rjm/.claude/skills/spec-generator/references/spec-prior-art-schema.md
- [x] sources/rjm/.claude/skills/spec-generator/references/spec-step0-gates.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-spec-generator-references-spec-prior-art-schema-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-spec-generator-references-spec-step0-gates-md.md

## Outputs produced
- docs/analysis/concepts/rjm/references-release-it-md.md (1089 bytes)
- docs/analysis/concepts/rjm/task-to-reference-router.md (965 bytes)
- docs/analysis/concepts/rjm/direct-prior-art-from-memory.md (1424 bytes)
- docs/analysis/concepts/rjm/connected-context-from-exploring-knowledge-graph.md (1530 bytes)
- docs/analysis/concepts/rjm/coverage-notes.md (1367 bytes)
- docs/analysis/concepts/rjm/step-0-5-halt-criteria.md (1334 bytes)
- docs/analysis/concepts/rjm/step-0-5-halt-block-format.md (1344 bytes)
- docs/analysis/concepts/rjm/redaction-pre-emit.md (1715 bytes)
- docs/analysis/concepts/rjm/step-0-5-supplemental-traversal-hook.md (1527 bytes)
- docs/analysis/concepts/rjm/supplemental-phase-n.md (1427 bytes)
- docs/analysis/concepts/rjm/step-0-5-metrics-tally.md (1331 bytes)
- docs/analysis/concepts/rjm/archival-policy.md (1517 bytes)
- docs/analysis/concepts/rjm/tier-5-operating-model-elicitation.md (1495 bytes)
- docs/analysis/concepts/rjm/step-1-ontology-elicitation.md (1570 bytes)
- docs/analysis/concepts/rjm/o1-entities.md (1331 bytes)
- docs/analysis/concepts/rjm/o2-ubiquitous-language.md (1458 bytes)
- docs/analysis/concepts/rjm/o3-relationships.md (1317 bytes)
- docs/analysis/concepts/rjm/o4-aggregate-boundaries.md (1391 bytes)
- docs/analysis/concepts/rjm/o5-decision-rules.md (1406 bytes)
- docs/analysis/concepts/rjm/o6-bounded-context-boundaries.md (1388 bytes)
- docs/analysis/concepts/rjm/o7-open-ontology-questions.md (1498 bytes)
- docs/analysis/concepts/rjm/adversarial-requirements-interview.md (1466 bytes)
- docs/analysis/concepts/rjm/classify-complexity-tier.md (1499 bytes)
- docs/analysis/concepts/rjm/step-3-problem-domain-classification.md (1359 bytes)
- docs/analysis/concepts/rjm/step-4-provenance-and-dependency-gates.md (1425 bytes)
- docs/analysis/concepts/rjm/ownership-first.md (1479 bytes)
- docs/analysis/concepts/rjm/dependency-scrutiny.md (1491 bytes)
- docs/analysis/concepts/rjm/buy-vs-build-gate.md (1488 bytes)
- docs/analysis/concepts/rjm/observability-section.md (1390 bytes)
- docs/analysis/concepts/rjm/tier-4-5-adr-generation-and-review.md (1381 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-216.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/references-release-it-md.md docs/analysis/concepts/rjm/task-to-reference-router.md docs/analysis/concepts/rjm/direct-prior-art-from-memory.md docs/analysis/concepts/rjm/connected-context-from-exploring-knowledge-graph.md docs/analysis/concepts/rjm/coverage-notes.md docs/analysis/concepts/rjm/step-0-5-halt-criteria.md docs/analysis/concepts/rjm/step-0-5-halt-block-format.md docs/analysis/concepts/rjm/redaction-pre-emit.md docs/analysis/concepts/rjm/step-0-5-supplemental-traversal-hook.md docs/analysis/concepts/rjm/supplemental-phase-n.md docs/analysis/concepts/rjm/step-0-5-metrics-tally.md docs/analysis/concepts/rjm/archival-policy.md docs/analysis/concepts/rjm/tier-5-operating-model-elicitation.md docs/analysis/concepts/rjm/step-1-ontology-elicitation.md docs/analysis/concepts/rjm/o1-entities.md docs/analysis/concepts/rjm/o2-ubiquitous-language.md docs/analysis/concepts/rjm/o3-relationships.md docs/analysis/concepts/rjm/o4-aggregate-boundaries.md docs/analysis/concepts/rjm/o5-decision-rules.md docs/analysis/concepts/rjm/o6-bounded-context-boundaries.md docs/analysis/concepts/rjm/o7-open-ontology-questions.md docs/analysis/concepts/rjm/adversarial-requirements-interview.md docs/analysis/concepts/rjm/classify-complexity-tier.md docs/analysis/concepts/rjm/step-3-problem-domain-classification.md docs/analysis/concepts/rjm/step-4-provenance-and-dependency-gates.md docs/analysis/concepts/rjm/ownership-first.md docs/analysis/concepts/rjm/dependency-scrutiny.md docs/analysis/concepts/rjm/buy-vs-build-gate.md docs/analysis/concepts/rjm/observability-section.md docs/analysis/concepts/rjm/tier-4-5-adr-generation-and-review.md` (exit code 0, 30 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-216 covers 30 concepts spanning the software engineering library router and the `/spec` lifecycle command pipeline:
  1. Software engineering routing: `references/release-it.md`, `Task To Reference Router`.
  2. Step 0.5 Memory-First Gate schema, halts, and telemetry: `Direct prior art from memory`, `Connected context from exploring-knowledge-graph`, `Coverage notes`, `Step 0.5 halt criteria`, `Step 0.5 halt block format`, `Redaction pre-emit`, `Step 0.5 supplemental traversal hook`, `Supplemental (Phase N)`, `Step 0.5 metrics tally`, `Archival policy`.
  3. Step 1 Problem clarification and Domain-Driven Design ontology elicitation: `Tier 5 operating-model elicitation`, `Step 1 Ontology elicitation`, `O1 Entities`, `O2 Ubiquitous language`, `O3 Relationships`, `O4 Aggregate boundaries`, `O5 Decision rules`, `O6 Bounded-context boundaries`, `O7 Open ontology questions`.
  4. Step 2 and Step 3 requirements interview and dual-axis complexity classification: `adversarial requirements interview`, `Classify complexity tier`, `Step 3 problem-domain classification`.
  5. Step 4 and 4a provenance, dependency scrutiny, and buy-vs-build gates: `Step 4 provenance and dependency gates`, `Ownership first`, `Dependency scrutiny`, `Buy-vs-build gate`.
  6. Step 6 formalization sections and blocking gates: `Observability section`, `Tier 4-5 ADR generation and review`.
- All 32 occurrences across 3 source files listed in `facts/cc-rjm-216.txt` are included as rows in `Where used` tables.
- All 30 cards pass `quote-check.ts` with 0 failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 3 source files and 3 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
