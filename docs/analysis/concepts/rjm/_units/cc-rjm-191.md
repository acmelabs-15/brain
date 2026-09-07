---
unit: cc-rjm-191
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-191

## Files assigned
- [x] sources/rjm/.claude/skills/review/SKILL.md
- [x] sources/rjm/.github/scripts/generate_spec_report.py
- [x] sources/rjm/README.md
- [x] sources/rjm/docs/getting-started.md
- [x] sources/rjm/scripts/ai_review_common/__init__.py
- [x] sources/rjm/scripts/ai_review_common/issue_triage.py
- [x] sources/rjm/scripts/ai_review_common/quality_gate.py
- [x] sources/rjm/scripts/ai_review_common/verdict.py
- [x] sources/rjm/scripts/quality_gate/check_critical_failures.py
- [x] sources/rjm/scripts/validation/check_skill_md_portability.py
- [x] sources/rjm/scripts/validation/check_skill_portability.py
- [x] docs/analysis/inventory/rjm/claude-skills-review-skill-md.md
- [x] docs/analysis/inventory/rjm/github-scripts-generate-spec-report-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-issue-triage-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-quality-gate-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-verdict-py.md
- [x] docs/analysis/inventory/rjm/scripts-quality-gate-check-critical-failures-py.md
- [x] docs/analysis/inventory/rjm/docs-getting-started-md.md
- [x] docs/analysis/inventory/rjm/readme-md.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-md-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-portability-py.md

## Outputs produced
- docs/analysis/concepts/rjm/stage-2-review-axes.md (1487 bytes)
- docs/analysis/concepts/rjm/canonical-set.md (1320 bytes)
- docs/analysis/concepts/rjm/always-on-axes.md (1383 bytes)
- docs/analysis/concepts/rjm/deep-review.md (1223 bytes)
- docs/analysis/concepts/rjm/15-axis-set.md (1438 bytes)
- docs/analysis/concepts/rjm/review-before-merge.md (923 bytes)
- docs/analysis/concepts/rjm/convergence-contract.md (915 bytes)
- docs/analysis/concepts/rjm/req-008-04.md (863 bytes)
- docs/analysis/concepts/rjm/canonical-axis-prompts.md (1472 bytes)
- docs/analysis/concepts/rjm/local-only-skill-axes.md (1537 bytes)
- docs/analysis/concepts/rjm/self-audit-round-cap.md (1445 bytes)
- docs/analysis/concepts/rjm/hard-stop.md (1297 bytes)
- docs/analysis/concepts/rjm/default-max-rounds.md (915 bytes)
- docs/analysis/concepts/rjm/default-max-hours.md (923 bytes)
- docs/analysis/concepts/rjm/verdict-library.md (1660 bytes)
- docs/analysis/concepts/rjm/get-verdict-emoji.md (1209 bytes)
- docs/analysis/concepts/rjm/fail-verdicts.md (1556 bytes)
- docs/analysis/concepts/rjm/complexity-tiers-reference.md (1611 bytes)
- docs/analysis/concepts/rjm/chained-skill-scripts.md (1634 bytes)
- docs/analysis/concepts/rjm/ship.md (1845 bytes)
- docs/analysis/concepts/rjm/verdict-token.md (1420 bytes)
- docs/analysis/concepts/rjm/structured-findings.md (1444 bytes)
- docs/analysis/concepts/rjm/merged-verdict.md (1415 bytes)
- docs/analysis/concepts/rjm/three-dot-range-syntax.md (900 bytes)
- docs/analysis/concepts/rjm/general-purpose.md (856 bytes)
- docs/analysis/concepts/rjm/short-circuit.md (1431 bytes)
- docs/analysis/concepts/rjm/skipped.md (974 bytes)
- docs/analysis/concepts/rjm/final-verdict.md (1327 bytes)
- docs/analysis/concepts/rjm/validate-findings-scope-py.md (930 bytes)
- docs/analysis/concepts/rjm/req-008-06.md (1174 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-191.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/stage-2-review-axes.md docs/analysis/concepts/rjm/canonical-set.md docs/analysis/concepts/rjm/always-on-axes.md docs/analysis/concepts/rjm/deep-review.md docs/analysis/concepts/rjm/15-axis-set.md docs/analysis/concepts/rjm/review-before-merge.md docs/analysis/concepts/rjm/convergence-contract.md docs/analysis/concepts/rjm/req-008-04.md docs/analysis/concepts/rjm/canonical-axis-prompts.md docs/analysis/concepts/rjm/local-only-skill-axes.md docs/analysis/concepts/rjm/self-audit-round-cap.md docs/analysis/concepts/rjm/hard-stop.md docs/analysis/concepts/rjm/default-max-rounds.md docs/analysis/concepts/rjm/default-max-hours.md docs/analysis/concepts/rjm/verdict-library.md docs/analysis/concepts/rjm/get-verdict-emoji.md docs/analysis/concepts/rjm/fail-verdicts.md docs/analysis/concepts/rjm/complexity-tiers-reference.md docs/analysis/concepts/rjm/chained-skill-scripts.md docs/analysis/concepts/rjm/ship.md docs/analysis/concepts/rjm/verdict-token.md docs/analysis/concepts/rjm/structured-findings.md docs/analysis/concepts/rjm/merged-verdict.md docs/analysis/concepts/rjm/three-dot-range-syntax.md docs/analysis/concepts/rjm/general-purpose.md docs/analysis/concepts/rjm/short-circuit.md docs/analysis/concepts/rjm/skipped.md docs/analysis/concepts/rjm/final-verdict.md docs/analysis/concepts/rjm/validate-findings-scope-py.md docs/analysis/concepts/rjm/req-008-06.md` (exit code 0, 41 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-191 completes 30 concept cards centered on rjm's pre-merge review lifecycle architecture:
  1. The two-stage review pipeline (`stage-2-review-axes`, `canonical-set`, `always-on-axes`, `deep-review`, `15-axis-set`, `canonical-axis-prompts`, `local-only-skill-axes`).
  2. The self-audit loop mitigation mechanics (`self-audit-round-cap`, `hard-stop`, `default-max-rounds`, `default-max-hours`).
  3. The verdict resolution framework (`verdict-library`, `get-verdict-emoji`, `fail-verdicts`, `verdict-token`, `structured-findings`, `merged-verdict`, `final-verdict`, `short-circuit`, `skipped`).
  4. Portability, reference discovery, and scoping invariants (`convergence-contract`, `complexity-tiers-reference`, `chained-skill-scripts`, `three-dot-range-syntax`, `validate-findings-scope-py`, `general-purpose`, `req-008-04`, `req-008-06`).
  5. The terminal delivery phase `/ship` (`ship`) linking review verification to production release.
- Fourteen identifiers, file names, trigger phrases, status tokens, and section headings were authored with `kind: name-only` per D-023 (`review-before-merge`, `convergence-contract`, `req-008-04`, `default-max-rounds`, `default-max-hours`, `get-verdict-emoji`, `fail-verdicts`, `three-dot-range-syntax`, `general-purpose`, `skipped`, `validate-findings-scope-py`, `req-008-06`).
- All 42 occurrences across 11 source files and 11 inventory cards recorded in `facts/cc-rjm-191.txt` were mapped into the respective `Where used` tables.
- Inventory card defects (`missing-path`, `doc-drift`, `orphan`, `script-bug`, `internal-contradiction`, `other`) were propagated into `Implementation status`.
- All 30 cards pass byte-exact quotation verification with `bun scripts/synthesis/quote-check.ts` (exit code 0, 41 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 11 source files and 11 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 work-unit report.
