---
unit: cc-rjm-210
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-210

## Files assigned
- [x] sources/rjm/.claude/skills/software-engineering-library/references/data-intensive-applications.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/domain-driven-design.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/enterprise-patterns.md
- [x] sources/rjm/scripts/ci/ruleset_required_contexts.py
- [x] sources/rjm/scripts/eval/_e2e_delivery_core.py
- [x] sources/rjm/scripts/eval/_oneshot_bench_core.py
- [x] sources/rjm/scripts/eval/eval-oneshot-vs-shipped.py
- [x] sources/rjm/scripts/eval/eval-rule-activation.py
- [x] sources/rjm/scripts/external_signals/gate_aggregator.py

## Outputs produced
- docs/analysis/concepts/rjm/read-your-writes.md (1627 bytes)
- docs/analysis/concepts/rjm/monotonic-reads.md (1527 bytes)
- docs/analysis/concepts/rjm/bounded-staleness.md (1548 bytes)
- docs/analysis/concepts/rjm/eventual.md (1542 bytes)
- docs/analysis/concepts/rjm/strict-serializable.md (1648 bytes)
- docs/analysis/concepts/rjm/event-ordering-and-delivery.md (1021 bytes)
- docs/analysis/concepts/rjm/vector-clock.md (1359 bytes)
- docs/analysis/concepts/rjm/logical-timestamp.md (1370 bytes)
- docs/analysis/concepts/rjm/no-exactly-once-wishful-thinking.md (1095 bytes)
- docs/analysis/concepts/rjm/claim-then-execute.md (1621 bytes)
- docs/analysis/concepts/rjm/application-to-ai-agents.md (1057 bytes)
- docs/analysis/concepts/rjm/two-writers-no-policy.md (1477 bytes)
- docs/analysis/concepts/rjm/cache-as-sor-by-accident.md (1514 bytes)
- docs/analysis/concepts/rjm/retry-without-idempotency.md (1421 bytes)
- docs/analysis/concepts/rjm/schema-by-accident.md (1414 bytes)
- docs/analysis/concepts/rjm/total-order-fantasy.md (1486 bytes)
- docs/analysis/concepts/rjm/exactly-once-labels.md (1411 bytes)
- docs/analysis/concepts/rjm/wall-clock-causality.md (1439 bytes)
- docs/analysis/concepts/rjm/repository.md (1718 bytes)
- docs/analysis/concepts/rjm/service-layer.md (1648 bytes)
- docs/analysis/concepts/rjm/subdomain.md (1508 bytes)
- docs/analysis/concepts/rjm/supporting.md (1519 bytes)
- docs/analysis/concepts/rjm/generic.md (1469 bytes)
- docs/analysis/concepts/rjm/bounded-context.md (1769 bytes)
- docs/analysis/concepts/rjm/ubiquitous-language.md (1738 bytes)
- docs/analysis/concepts/rjm/entity.md (1349 bytes)
- docs/analysis/concepts/rjm/value-object.md (1306 bytes)
- docs/analysis/concepts/rjm/aggregate.md (2304 bytes)
- docs/analysis/concepts/rjm/aggregate-root.md (1389 bytes)
- docs/analysis/concepts/rjm/domain-event.md (1356 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, `bun scripts/synthesis/quote-check.ts <cards>`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The concept `aggregate` spans both Domain-Driven Design modeling concepts (`domain-driven-design.md`) and evaluation score aggregation routines across multiple eval scripts (`_e2e_delivery_core.py`, `_oneshot_bench_core.py`, `eval-oneshot-vs-shipped.py`, `eval-rule-activation.py`, and `gate_aggregator.py`).
- The concept `repository` spans the architectural repository pattern (`enterprise-patterns.md`, `domain-driven-design.md`) and repository naming constants in GitHub ruleset verification scripts (`ruleset_required_contexts.py`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~48,000 tokens. Approximate tokens of output written: ~12,000 tokens.
