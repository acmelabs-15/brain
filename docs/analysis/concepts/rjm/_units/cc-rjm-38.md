---
unit: cc-rjm-38
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-38

## Files assigned
- [x] .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md
- [x] .agents/architecture/ADR-077-flip-stale-contract-tests.md
- [x] .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md
- [x] .agents/architecture/ADR-079-merge-time-plugin-version-bump.md
- [x] .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md
- [x] .agents/architecture/ADR-TEMPLATE.md
- [x] .agents/critique/ADR-023-debate-log.md
- [x] .agents/governance/agent-consolidation-process.md
- [x] .agents/governance/agent-design-principles.md
- [x] .claude/agents/analyst.md
- [x] .claude/agents/orchestrator.md
- [x] .claude/agents/qa.md
- [x] .claude/skills/adr-generator/references/adr-template.md
- [x] .claude/skills/analyze/references/engineering-complexity-tiers.md
- [x] .claude/skills/cynefin-classifier/SKILL.md
- [x] .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md
- [x] .claude/skills/cynefin-classifier/references/domain-transitions.md
- [x] .claude/skills/cynefin-classifier/references/software-applications.md
- [x] .claude/skills/cynefin-classifier/scripts/classify.py
- [x] .claude/skills/spec-generator/references/spec-prior-art-schema.md
- [x] docs/agent-governance.md
- [x] scripts/ci/combine_pin_coverage.py
- [x] scripts/eval/eval-agents.py
- [x] src/claude/analyst.md
- [x] src/claude/orchestrator.md
- [x] templates/agents/analyst.shared.md
- [x] templates/agents/orchestrator.shared.md
- [x] templates/agents/qa.shared.md

## Outputs produced
- docs/analysis/concepts/rjm/renew-skip-margin.md (1119 bytes)
- docs/analysis/concepts/rjm/noop-fast-path.md (1131 bytes)
- docs/analysis/concepts/rjm/renew-failopen-liveness-margin.md (1171 bytes)
- docs/analysis/concepts/rjm/flip-stale-contract-tests.md (1436 bytes)
- docs/analysis/concepts/rjm/testing-rigor-md.md (1295 bytes)
- docs/analysis/concepts/rjm/mirror-obligation-synthesis.md (1056 bytes)
- docs/analysis/concepts/rjm/observable-contract.md (1505 bytes)
- docs/analysis/concepts/rjm/coverage-targets.md (1329 bytes)
- docs/analysis/concepts/rjm/verification-steps.md (1348 bytes)
- docs/analysis/concepts/rjm/branch-coverage.md (1434 bytes)
- docs/analysis/concepts/rjm/mutation-testing.md (1525 bytes)
- docs/analysis/concepts/rjm/snapshot-testing.md (1313 bytes)
- docs/analysis/concepts/rjm/consumer-driven-contract-tests.md (1392 bytes)
- docs/analysis/concepts/rjm/pure-refactors.md (1407 bytes)
- docs/analysis/concepts/rjm/inverse-tests.md (1308 bytes)
- docs/analysis/concepts/rjm/autoplan-and-orchestrator-router-boundary.md (1407 bytes)
- docs/analysis/concepts/rjm/metadata-role-coordinator.md (1034 bytes)
- docs/analysis/concepts/rjm/metadata-type-router.md (997 bytes)
- docs/analysis/concepts/rjm/cynefin.md (3726 bytes)
- docs/analysis/concepts/rjm/front-door-router.md (1314 bytes)
- docs/analysis/concepts/rjm/session-start-checklist.md (1375 bytes)
- docs/analysis/concepts/rjm/opus-reasoning-tier.md (1062 bytes)
- docs/analysis/concepts/rjm/overlap-analysis.md (1784 bytes)
- docs/analysis/concepts/rjm/entry-criteria.md (1645 bytes)
- docs/analysis/concepts/rjm/explicit-limitations.md (1978 bytes)
- docs/analysis/concepts/rjm/tier-vocabulary-retired.md (1093 bytes)
- docs/analysis/concepts/rjm/review-provenance.md (1646 bytes)
- docs/analysis/concepts/rjm/plugin-version-bump-stays-at-pr-time.md (1434 bytes)
- docs/analysis/concepts/rjm/updateplugin.md (1142 bytes)
- docs/analysis/concepts/rjm/version-bump-gate.md (1651 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-38.md

## Scripts executed
- bun scripts/synthesis/quote-check.ts <all 30 cards>, exit code 0 (30 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts assigned in unit cc-rjm-38 were successfully authored.
- 58 total occurrences across 28 source files and their citing inventory cards were mapped to `Where used` tables.
- Concepts span:
  - ADR-076 PR ownership and lease renewal optimization (`renew-skip-margin`, `noop-fast-path`, `renew-failopen-liveness-margin`).
  - ADR-077 testing rigor and contract test flipping (`flip-stale-contract-tests`, `testing-rigor-md`, `mirror-obligation-synthesis`, `observable-contract`, `coverage-targets`, `verification-steps`, `branch-coverage`, `mutation-testing`, `snapshot-testing`, `consumer-driven-contract-tests`, `pure-refactors`, `inverse-tests`).
  - ADR-078 routing architecture, governance, and the Cynefin sense-making framework (`autoplan-and-orchestrator-router-boundary`, `metadata-role-coordinator`, `metadata-type-router`, `cynefin` [15 occurrences], `front-door-router`, `session-start-checklist`, `opus-reasoning-tier`, `overlap-analysis`, `entry-criteria`, `explicit-limitations`, `tier-vocabulary-retired`, `review-provenance`).
  - ADR-079 release engineering and plugin freshness enforcement (`plugin-version-bump-stays-at-pr-time`, `updateplugin`, `version-bump-gate`).
- Non-lifecycle concepts representing identifiers, constants, file paths, external functions, or section headings were classified as `kind: name-only` per D-023 (`renew-skip-margin`, `noop-fast-path`, `renew-failopen-liveness-margin`, `testing-rigor-md`, `mirror-obligation-synthesis`, `metadata-role-coordinator`, `metadata-type-router`, `opus-reasoning-tier`, `tier-vocabulary-retired`, `updateplugin`).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~72,000 tokens across 28 source files and citing inventory cards; approximate tokens of output written: ~12,500 tokens across 30 concept cards and this unit report.
