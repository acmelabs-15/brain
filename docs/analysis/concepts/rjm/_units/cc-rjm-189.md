---
unit: cc-rjm-189
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-189

## Files assigned
- [x] sources/rjm/.claude/skills/review/SKILL.md
- [x] sources/rjm/.claude/skills/review/references/qa.md
- [x] sources/rjm/.claude/skills/review/references/reliability.md
- [x] sources/rjm/.claude/skills/review/references/roadmap.md
- [x] sources/rjm/.claude/skills/review/references/security.md
- [x] sources/rjm/.claude/skills/review/references/spec-compliance.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/data-intensive-applications.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/release-it.md
- [x] sources/rjm/templates/agents/negotiation.shared.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-references-qa-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-references-reliability-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-references-spec-compliance-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-references-roadmap-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-references-security-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-data-intensive-applications-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-release-it-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-negotiation-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/quality-concerns.md (954 bytes)
- docs/analysis/concepts/rjm/regression-risk-assessment.md (992 bytes)
- docs/analysis/concepts/rjm/evidence-requirements.md (936 bytes)
- docs/analysis/concepts/rjm/reliability.md (1791 bytes)
- docs/analysis/concepts/rjm/production-survivability.md (1516 bytes)
- docs/analysis/concepts/rjm/when-this-axis-applies.md (1493 bytes)
- docs/analysis/concepts/rjm/reference-material.md (1234 bytes)
- docs/analysis/concepts/rjm/analysis-focus-areas.md (1840 bytes)
- docs/analysis/concepts/rjm/timeouts-on-outbound-calls.md (1220 bytes)
- docs/analysis/concepts/rjm/retries.md (1212 bytes)
- docs/analysis/concepts/rjm/exponential-backoff-and-jitter.md (1255 bytes)
- docs/analysis/concepts/rjm/idempotency-key.md (1967 bytes)
- docs/analysis/concepts/rjm/circuit-breakers-and-bulkheads.md (1270 bytes)
- docs/analysis/concepts/rjm/bounded-queues-and-buffers.md (1235 bytes)
- docs/analysis/concepts/rjm/slow-responses-and-deadlines.md (1274 bytes)
- docs/analysis/concepts/rjm/graceful-degradation-and-health.md (1280 bytes)
- docs/analysis/concepts/rjm/reliability-assessment.md (943 bytes)
- docs/analysis/concepts/rjm/findings.md (1483 bytes)
- docs/analysis/concepts/rjm/feature-scope.md (1214 bytes)
- docs/analysis/concepts/rjm/user-value.md (1222 bytes)
- docs/analysis/concepts/rjm/business-impact.md (1241 bytes)
- docs/analysis/concepts/rjm/technical-investment.md (1284 bytes)
- docs/analysis/concepts/rjm/documentation-communication.md (1322 bytes)
- docs/analysis/concepts/rjm/output-requirements.md (1641 bytes)
- docs/analysis/concepts/rjm/strategic-alignment-assessment.md (1058 bytes)
- docs/analysis/concepts/rjm/feature-completeness.md (995 bytes)
- docs/analysis/concepts/rjm/concerns.md (950 bytes)
- docs/analysis/concepts/rjm/note-on-verdict-selection.md (1027 bytes)
- docs/analysis/concepts/rjm/expected-patterns-do-not-flag.md (1100 bytes)
- docs/analysis/concepts/rjm/vulnerability-scanning-owasp-top-10.md (1336 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-189.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/quality-concerns.md docs/analysis/concepts/rjm/regression-risk-assessment.md docs/analysis/concepts/rjm/evidence-requirements.md docs/analysis/concepts/rjm/reliability.md docs/analysis/concepts/rjm/production-survivability.md docs/analysis/concepts/rjm/when-this-axis-applies.md docs/analysis/concepts/rjm/reference-material.md docs/analysis/concepts/rjm/analysis-focus-areas.md docs/analysis/concepts/rjm/timeouts-on-outbound-calls.md docs/analysis/concepts/rjm/retries.md docs/analysis/concepts/rjm/exponential-backoff-and-jitter.md docs/analysis/concepts/rjm/idempotency-key.md docs/analysis/concepts/rjm/circuit-breakers-and-bulkheads.md docs/analysis/concepts/rjm/bounded-queues-and-buffers.md docs/analysis/concepts/rjm/slow-responses-and-deadlines.md docs/analysis/concepts/rjm/graceful-degradation-and-health.md docs/analysis/concepts/rjm/reliability-assessment.md docs/analysis/concepts/rjm/findings.md docs/analysis/concepts/rjm/feature-scope.md docs/analysis/concepts/rjm/user-value.md docs/analysis/concepts/rjm/business-impact.md docs/analysis/concepts/rjm/technical-investment.md docs/analysis/concepts/rjm/documentation-communication.md docs/analysis/concepts/rjm/output-requirements.md docs/analysis/concepts/rjm/strategic-alignment-assessment.md docs/analysis/concepts/rjm/feature-completeness.md docs/analysis/concepts/rjm/concerns.md docs/analysis/concepts/rjm/note-on-verdict-selection.md docs/analysis/concepts/rjm/expected-patterns-do-not-flag.md docs/analysis/concepts/rjm/vulnerability-scanning-owasp-top-10.md` (exit code 0, 30 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-189 covers 30 concepts spanning the review skill axes (`reliability`, `roadmap`, `security`, `qa`, and `spec-compliance`), architectural resilience patterns, and agent output specifications:
  1. The `reliability` canonical review axis and its evaluation lens (`production-survivability`).
  2. The six numbered reliability analysis focus areas (`timeouts-on-outbound-calls`, `retries`, `circuit-breakers-and-bulkheads`, `bounded-queues-and-buffers`, `slow-responses-and-deadlines`, `graceful-degradation-and-health`), along with supporting techniques (`exponential-backoff-and-jitter`, `idempotency-key`).
  3. The roadmap review focus areas (`feature-scope`, `user-value`, `business-impact`, `technical-investment`, `documentation-communication`).
  4. Security review checklist focus area (`vulnerability-scanning-owasp-top-10`).
  5. Structural headings across review reference prompts and agent output schemas (`quality-concerns`, `regression-risk-assessment`, `evidence-requirements`, `when-this-axis-applies`, `reference-material`, `analysis-focus-areas`, `reliability-assessment`, `findings`, `output-requirements`, `strategic-alignment-assessment`, `feature-completeness`, `concerns`, `note-on-verdict-selection`, `expected-patterns-do-not-flag`), correctly classified as `kind: name-only` per D-023.
- All 45 occurrences recorded in `facts/cc-rjm-189.txt` were mapped as exact rows in the respective `Where used` tables.
- Defect annotations from citing inventory cards were systematically propagated into each card's `Implementation status` field.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~32,000 tokens across 9 source files and 9 inventory cards.
Approximate tokens of output written: ~15,000 tokens across 30 authored concept cards and 1 unit report.
