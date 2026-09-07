---
unit: cc-rjm-214
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-214

## Files assigned
- [x] sources/rjm/.claude/skills/software-engineering-library/references/release-it.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/working-with-legacy-code.md
- [x] sources/rjm/.claude/skills/threat-modeling/references/security-least-privilege.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-release-it-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-security-least-privilege-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-working-with-legacy-code-md.md

## Outputs produced
- docs/analysis/concepts/rjm/stability-anti-pattern.md (1663 bytes)
- docs/analysis/concepts/rjm/blast-radius.md (1633 bytes)
- docs/analysis/concepts/rjm/timeouts-on-every-outbound-call.md (1439 bytes)
- docs/analysis/concepts/rjm/closed.md (1245 bytes)
- docs/analysis/concepts/rjm/open.md (1312 bytes)
- docs/analysis/concepts/rjm/half-open.md (1280 bytes)
- docs/analysis/concepts/rjm/exponential-backoff-with-jitter.md (1405 bytes)
- docs/analysis/concepts/rjm/health-check-integrity.md (1353 bytes)
- docs/analysis/concepts/rjm/liveness.md (1279 bytes)
- docs/analysis/concepts/rjm/readiness.md (1340 bytes)
- docs/analysis/concepts/rjm/bound-every-queue-and-buffer.md (1394 bytes)
- docs/analysis/concepts/rjm/slow-responses-are-failures.md (1385 bytes)
- docs/analysis/concepts/rjm/deadline.md (1434 bytes)
- docs/analysis/concepts/rjm/silent-api-migration-failures.md (1458 bytes)
- docs/analysis/concepts/rjm/behavioral-smoke-test.md (1431 bytes)
- docs/analysis/concepts/rjm/cascading-failure.md (1456 bytes)
- docs/analysis/concepts/rjm/chain-reaction.md (1489 bytes)
- docs/analysis/concepts/rjm/shared-resource-exhaustion.md (1488 bytes)
- docs/analysis/concepts/rjm/unbalanced-capacities.md (1490 bytes)
- docs/analysis/concepts/rjm/capacity-by-hope.md (1456 bytes)
- docs/analysis/concepts/rjm/blocking-i-o-on-a-hot-path.md (1428 bytes)
- docs/analysis/concepts/rjm/self-inflicted-denial-of-service.md (1498 bytes)
- docs/analysis/concepts/rjm/working-effectively-with-legacy-code.md (1545 bytes)
- docs/analysis/concepts/rjm/legacy-code.md (1612 bytes)
- docs/analysis/concepts/rjm/agents-md-floor.md (1557 bytes)
- docs/analysis/concepts/rjm/to-improve-fix-cycle.md (1655 bytes)
- docs/analysis/concepts/rjm/auto-escalation-ladder.md (1969 bytes)
- docs/analysis/concepts/rjm/code-quality-rule.md (1473 bytes)
- docs/analysis/concepts/rjm/seam.md (1553 bytes)
- docs/analysis/concepts/rjm/enabling-point.md (1378 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-214.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/stability-anti-pattern.md docs/analysis/concepts/rjm/blast-radius.md docs/analysis/concepts/rjm/timeouts-on-every-outbound-call.md docs/analysis/concepts/rjm/closed.md docs/analysis/concepts/rjm/open.md docs/analysis/concepts/rjm/half-open.md docs/analysis/concepts/rjm/exponential-backoff-with-jitter.md docs/analysis/concepts/rjm/health-check-integrity.md docs/analysis/concepts/rjm/liveness.md docs/analysis/concepts/rjm/readiness.md docs/analysis/concepts/rjm/bound-every-queue-and-buffer.md docs/analysis/concepts/rjm/slow-responses-are-failures.md docs/analysis/concepts/rjm/deadline.md docs/analysis/concepts/rjm/silent-api-migration-failures.md docs/analysis/concepts/rjm/behavioral-smoke-test.md docs/analysis/concepts/rjm/cascading-failure.md docs/analysis/concepts/rjm/chain-reaction.md docs/analysis/concepts/rjm/shared-resource-exhaustion.md docs/analysis/concepts/rjm/unbalanced-capacities.md docs/analysis/concepts/rjm/capacity-by-hope.md docs/analysis/concepts/rjm/blocking-i-o-on-a-hot-path.md docs/analysis/concepts/rjm/self-inflicted-denial-of-service.md docs/analysis/concepts/rjm/working-effectively-with-legacy-code.md docs/analysis/concepts/rjm/legacy-code.md docs/analysis/concepts/rjm/agents-md-floor.md docs/analysis/concepts/rjm/to-improve-fix-cycle.md docs/analysis/concepts/rjm/auto-escalation-ladder.md docs/analysis/concepts/rjm/code-quality-rule.md docs/analysis/concepts/rjm/seam.md docs/analysis/concepts/rjm/enabling-point.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-214 authored 30 concept cards across production resilience, legacy code refactoring, and security boundaries:
  1. Production stability and resilience patterns from `release-it.md`: `stability-anti-pattern`, `blast-radius`, `timeouts-on-every-outbound-call`, `closed`, `open`, `half-open`, `exponential-backoff-with-jitter`, `health-check-integrity`, `liveness`, `readiness`, `bound-every-queue-and-buffer`, `slow-responses-are-failures`, `deadline`, `silent-api-migration-failures`, `behavioral-smoke-test`.
  2. Stability anti-patterns rejected during review: `cascading-failure`, `chain-reaction`, `shared-resource-exhaustion`, `unbalanced-capacities`, `capacity-by-hope`, `blocking-i-o-on-a-hot-path`, `self-inflicted-denial-of-service`.
  3. Legacy code refactoring and worker escalation patterns from `working-with-legacy-code.md`: `working-effectively-with-legacy-code`, `legacy-code`, `agents-md-floor`, `to-improve-fix-cycle`, `auto-escalation-ladder`, `code-quality-rule`, `seam`, `enabling-point`.
  4. Security boundary containment: `blast-radius` spans both `release-it.md` and `security-least-privilege.md`.
- All 32 occurrences specified in `facts/cc-rjm-214.txt` are represented in the respective `Where used` tables.
- Defect statuses (`missing-path` from `release-it.md` and `security-least-privilege.md`, `clean` from `working-with-legacy-code.md`) were accurately reflected in the cards' `Implementation status` fields.
- All 30 cards pass byte-exact verification via `quote-check.ts` with 0 failures and 0 missing sources.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~9,200 tokens across 3 source files and 3 inventory cards.
Approximate tokens of output written: ~10,800 tokens across 30 concept cards and 1 work-unit report.
