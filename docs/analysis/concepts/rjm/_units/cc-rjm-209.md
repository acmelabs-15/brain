---
unit: cc-rjm-209
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-209

## Files assigned
- [x] sources/rjm/.claude/skills/software-engineering-library/references/clean-architecture.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/data-intensive-applications.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/domain-driven-design.md
- [x] sources/rjm/scripts/eval/software_engineering_library_activation_ci.py
- [x] sources/rjm/scripts/eval/software_engineering_library_activation_gate.py
- [x] sources/rjm/scripts/metrics/kill_criteria.py
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-clean-architecture-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-data-intensive-applications-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-domain-driven-design-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval-software-engineering-library-activation-ci-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-software-engineering-library-activation-gate-py.md
- [x] docs/analysis/inventory/rjm/scripts-metrics-kill-criteria-py.md

## Outputs produced
- docs/analysis/concepts/rjm/pattern-selection.md (1328 bytes)
- docs/analysis/concepts/rjm/anemic-domain-model-with-thick-services.md (1660 bytes)
- docs/analysis/concepts/rjm/smart-ui-smart-skill-smart-hook.md (1698 bytes)
- docs/analysis/concepts/rjm/reverse-import.md (1594 bytes)
- docs/analysis/concepts/rjm/leaky-type-at-the-boundary.md (1665 bytes)
- docs/analysis/concepts/rjm/ambient-configuration.md (1664 bytes)
- docs/analysis/concepts/rjm/cross-aggregate-transaction-stretched-across-layers.md (1747 bytes)
- docs/analysis/concepts/rjm/framework-decorators-on-entities.md (1655 bytes)
- docs/analysis/concepts/rjm/layer-for-its-own-sake.md (1546 bytes)
- docs/analysis/concepts/rjm/boundaries-with-the-ai-agents-codebase.md (1171 bytes)
- docs/analysis/concepts/rjm/boundary-guardian.md (1488 bytes)
- docs/analysis/concepts/rjm/quick-self-review.md (1973 bytes)
- docs/analysis/concepts/rjm/data-intensive-applications.md (2087 bytes)
- docs/analysis/concepts/rjm/designing-data-intensive-applications.md (1637 bytes)
- docs/analysis/concepts/rjm/system-of-record.md (1719 bytes)
- docs/analysis/concepts/rjm/sor.md (1510 bytes)
- docs/analysis/concepts/rjm/derived-data.md (1495 bytes)
- docs/analysis/concepts/rjm/idempotent.md (1505 bytes)
- docs/analysis/concepts/rjm/at-least-once-delivery.md (1416 bytes)
- docs/analysis/concepts/rjm/at-most-once-delivery.md (1345 bytes)
- docs/analysis/concepts/rjm/exactly-once-semantics.md (1638 bytes)
- docs/analysis/concepts/rjm/backward-compatible.md (1425 bytes)
- docs/analysis/concepts/rjm/forward-compatible.md (1417 bytes)
- docs/analysis/concepts/rjm/causal-order.md (1529 bytes)
- docs/analysis/concepts/rjm/source-of-truth-ownership.md (1165 bytes)
- docs/analysis/concepts/rjm/last-writer-wins.md (1476 bytes)
- docs/analysis/concepts/rjm/crdt-merge.md (1400 bytes)
- docs/analysis/concepts/rjm/compare-and-set.md (1384 bytes)
- docs/analysis/concepts/rjm/versioned-write.md (1350 bytes)
- docs/analysis/concepts/rjm/consistency-model-per-boundary.md (1151 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-209.md (this report)

## Scripts executed
- scripts/synthesis/quote-check.ts, `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/pattern-selection.md docs/analysis/concepts/rjm/anemic-domain-model-with-thick-services.md docs/analysis/concepts/rjm/smart-ui-smart-skill-smart-hook.md docs/analysis/concepts/rjm/reverse-import.md docs/analysis/concepts/rjm/leaky-type-at-the-boundary.md docs/analysis/concepts/rjm/ambient-configuration.md docs/analysis/concepts/rjm/cross-aggregate-transaction-stretched-across-layers.md docs/analysis/concepts/rjm/framework-decorators-on-entities.md docs/analysis/concepts/rjm/layer-for-its-own-sake.md docs/analysis/concepts/rjm/boundaries-with-the-ai-agents-codebase.md docs/analysis/concepts/rjm/boundary-guardian.md docs/analysis/concepts/rjm/quick-self-review.md docs/analysis/concepts/rjm/data-intensive-applications.md docs/analysis/concepts/rjm/designing-data-intensive-applications.md docs/analysis/concepts/rjm/system-of-record.md docs/analysis/concepts/rjm/sor.md docs/analysis/concepts/rjm/derived-data.md docs/analysis/concepts/rjm/idempotent.md docs/analysis/concepts/rjm/at-least-once-delivery.md docs/analysis/concepts/rjm/at-most-once-delivery.md docs/analysis/concepts/rjm/exactly-once-semantics.md docs/analysis/concepts/rjm/backward-compatible.md docs/analysis/concepts/rjm/forward-compatible.md docs/analysis/concepts/rjm/causal-order.md docs/analysis/concepts/rjm/source-of-truth-ownership.md docs/analysis/concepts/rjm/last-writer-wins.md docs/analysis/concepts/rjm/crdt-merge.md docs/analysis/concepts/rjm/compare-and-set.md docs/analysis/concepts/rjm/versioned-write.md docs/analysis/concepts/rjm/consistency-model-per-boundary.md`, exit code 0 (33 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts in this unit derive from the `software-engineering-library` reference suite (`clean-architecture.md`, `data-intensive-applications.md`, `domain-driven-design.md`) and related evaluation and telemetry scripts (`software_engineering_library_activation_ci.py`, `software_engineering_library_activation_gate.py`, `kill_criteria.py`).
- Four structural section headings (`Pattern Selection`, `Boundaries with the ai-agents Codebase`, `Source of Truth Ownership`, `Consistency Model per Boundary`) were classified as `kind: name-only` per D-023.
- Citing inventory card `claude-skills-software-engineering-library-references-data-intensive-applications-md.md` carried a `doc-drift` defect (cites removed `reinforce_memories` in reflection.py), which is propagated to `Implementation status` for concepts citing that reference.
- Concepts such as `System of record`, `SoR`, `Idempotent`, `At-least-once delivery`, `Exactly-once semantics`, and `Causal order` establish distributed data architecture contracts referenced broadly across rjm's multi-agent session protocols.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across 6 source files and 6 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and this unit report.
