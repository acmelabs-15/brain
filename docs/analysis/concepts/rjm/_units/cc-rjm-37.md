---
unit: cc-rjm-37
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-37

## Files assigned
- [x] .agents/architecture/ADR-075-form-factor-eval-methodology.md
- [x] .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md
- [x] .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md
- [x] .agents/architecture/ADR-090-pr-branch-holder-lease.md
- [x] .claude/skills/analyze/references/strategy-ooda-loop.md
- [x] .claude/skills/planner/references/strategy-ooda-loop.md
- [x] .claude/skills/pre-mortem/references/strategy-ooda-loop.md
- [x] .claude/skills/review/SKILL.md
- [x] docs/WORKFLOW-VALIDATION.md
- [x] scripts/eval/_report_aggregator.py
- [x] scripts/github_core/placeholder_identity.py
- [x] scripts/validate_workflows.py
- [x] scripts/validation/check_skill_contract_tests.py
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-075-form-factor-eval-methodology-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval--report-aggregator-py.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-076-pr-autofix-branch-ownership-lease-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-090-pr-branch-holder-lease-md.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-placeholder-identity-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-contract-tests-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-analyze-references-strategy-ooda-loop-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-planner-references-strategy-ooda-loop-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-pre-mortem-references-strategy-ooda-loop-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-skill-md.md
- [x] docs/analysis/inventory/rjm/docs-workflow-validation-md.md
- [x] docs/analysis/inventory/rjm/scripts-validate-workflows-py.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-083-copilot-dogfood-surface-separation-md.md

## Outputs produced
- docs/analysis/concepts/rjm/content-controlled-skill-variant.md (1640 bytes)
- docs/analysis/concepts/rjm/testcontentcontrolledpromptparity.md (1072 bytes)
- docs/analysis/concepts/rjm/form-factor-min-cost-savings-fraction.md (1138 bytes)
- docs/analysis/concepts/rjm/form-factor-verdict.md (981 bytes)
- docs/analysis/concepts/rjm/anthropic-api-py.md (963 bytes)
- docs/analysis/concepts/rjm/pr-autofix-branch-ownership-lease.md (1760 bytes)
- docs/analysis/concepts/rjm/adr-review-debate.md (1658 bytes)
- docs/analysis/concepts/rjm/pr-autofix.md (2091 bytes)
- docs/analysis/concepts/rjm/force-push-safety-sha-gate.md (1566 bytes)
- docs/analysis/concepts/rjm/verdict-gate-pattern.md (1571 bytes)
- docs/analysis/concepts/rjm/lease.md (1547 bytes)
- docs/analysis/concepts/rjm/pr-comment-backed-advisory-fail-open-branch-ownership-lease.md (1812 bytes)
- docs/analysis/concepts/rjm/lease-storage.md (976 bytes)
- docs/analysis/concepts/rjm/pr-autofix-lease.md (965 bytes)
- docs/analysis/concepts/rjm/latest-marker-comment-wins.md (1571 bytes)
- docs/analysis/concepts/rjm/tombstone.md (1500 bytes)
- docs/analysis/concepts/rjm/lease-ttl.md (1677 bytes)
- docs/analysis/concepts/rjm/concurrency-semantics.md (994 bytes)
- docs/analysis/concepts/rjm/mutual-exclusion.md (1469 bytes)
- docs/analysis/concepts/rjm/acquire-lease.md (942 bytes)
- docs/analysis/concepts/rjm/max-ttl.md (1028 bytes)
- docs/analysis/concepts/rjm/skip.md (1424 bytes)
- docs/analysis/concepts/rjm/self-renewal.md (1697 bytes)
- docs/analysis/concepts/rjm/act.md (2410 bytes)
- docs/analysis/concepts/rjm/push-time-guard.md (1421 bytes)
- docs/analysis/concepts/rjm/release-lease.md (1032 bytes)
- docs/analysis/concepts/rjm/atomic-cas.md (1544 bytes)
- docs/analysis/concepts/rjm/kill-criterion.md (1802 bytes)
- docs/analysis/concepts/rjm/go-no-go.md (1419 bytes)
- docs/analysis/concepts/rjm/lease-collision-blocked.md (1092 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-37.md (6507 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <cards> (all 30 cards), exit code 0 (32 PASS, 0 FAIL)
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts --summary <cards> (all 30 cards), exit code 0
- scripts/synthesis/coverage.ts, bun scripts/synthesis/coverage.ts --quiet, exit code 1 (0 orphan cards, 0 empty required)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `act.md` aggregates occurrences spanning the OODA decision framework across analysis, planning, and pre-mortem skills (`.claude/skills/*/references/strategy-ooda-loop.md`), gate verdict tokens in ADR-076 and review skills (`.claude/skills/review/SKILL.md`), and the GitHub Actions local runner tool `act` in workflow validation documentation and scripts (`docs/WORKFLOW-VALIDATION.md`, `scripts/validate_workflows.py`).
- Concepts from ADR-076 define the branch-ownership lease protocol (`pr-autofix-branch-ownership-lease`, `lease`, `pr-comment-backed-advisory-fail-open-branch-ownership-lease`, `lease-storage`, `pr-autofix-lease`, `latest-marker-comment-wins`, `tombstone`, `lease-ttl`, `concurrency-semantics`, `mutual-exclusion`, `acquire-lease`, `max-ttl`, `skip`, `self-renewal`, `push-time-guard`, `release-lease`, `atomic-cas`, `kill-criterion`, `go-no-go`, `lease-collision-blocked`). ADR-090 extends `lease-ttl` (to 30m) and tightens `self-renewal` to `(verified_actor, holder_id)`.
- `pr-autofix` is marked `implementation_in_scope: false` in accordance with METHOD §1.2 excluding PR automation tooling from the core development lifecycle scope.
- Concrete non-lifecycle identifiers, headings, constants, and tools (`TestContentControlledPromptParity`, `FORM_FACTOR_MIN_COST_SAVINGS_FRACTION`, `form_factor.verdict`, `_anthropic_api.py`, `Lease storage`, `PR-AUTOFIX-LEASE`, `Concurrency semantics`, `acquire_lease`, `MAX_TTL`, `release_lease`, `lease_collision_blocked`) were assigned `kind: name-only` per D-023.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~58,000 tokens across 13 source files and 13 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 work unit report.
