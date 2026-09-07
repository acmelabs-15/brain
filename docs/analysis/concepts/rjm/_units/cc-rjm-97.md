---
unit: cc-rjm-97
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-97

## Files assigned
- [x] .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md
- [x] .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md
- [x] .claude/skills/ai-agents-docs-of-record/SKILL.md
- [x] .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md
- [x] .claude/skills/ai-agents-external-claims/SKILL.md
- [x] .claude/skills/ai-agents-research-frontier/SKILL.md
- [x] .claude/skills/ai-agents-research-methodology/SKILL.md
- [x] .claude/skills/ai-agents-validation-and-qa/SKILL.md
- [x] AGENTS.md
- [x] scripts/ci/parse_drift_results.py
- [x] scripts/validation/pre_pr.py

## Outputs produced
- docs/analysis/concepts/rjm/guard-telemetry-and-maturity-tiers.md (1244 bytes)
- docs/analysis/concepts/rjm/coverage-measurement.md (1546 bytes)
- docs/analysis/concepts/rjm/eval-harness.md (1712 bytes)
- docs/analysis/concepts/rjm/commit-count-monitor.md (1356 bytes)
- docs/analysis/concepts/rjm/instrument.md (1404 bytes)
- docs/analysis/concepts/rjm/instrument-index.md (1350 bytes)
- docs/analysis/concepts/rjm/orphan-refs.md (1394 bytes)
- docs/analysis/concepts/rjm/agent-drift.md (1773 bytes)
- docs/analysis/concepts/rjm/mirror-drift.md (1436 bytes)
- docs/analysis/concepts/rjm/lib-drift.md (1412 bytes)
- docs/analysis/concepts/rjm/coverage.md (1286 bytes)
- docs/analysis/concepts/rjm/eval-a-b.md (1385 bytes)
- docs/analysis/concepts/rjm/phase-1-pick-the-instrument.md (1246 bytes)
- docs/analysis/concepts/rjm/phase-2-run-it-correctly.md (1246 bytes)
- docs/analysis/concepts/rjm/phase-3-read-the-number-against-the-baseline.md (1361 bytes)
- docs/analysis/concepts/rjm/phase-4-act-on-the-reading.md (1273 bytes)
- docs/analysis/concepts/rjm/verification-based-governance.md (2252 bytes)
- docs/analysis/concepts/rjm/per-issue-handoffs.md (1382 bytes)
- docs/analysis/concepts/rjm/resume-verification-checklist.md (1504 bytes)
- docs/analysis/concepts/rjm/failure-canon.md (1372 bytes)
- docs/analysis/concepts/rjm/fix-on-contact.md (1379 bytes)
- docs/analysis/concepts/rjm/broken-windows-rule.md (1329 bytes)
- docs/analysis/concepts/rjm/stop-hook.md (1208 bytes)
- docs/analysis/concepts/rjm/per-branch-handoff.md (1364 bytes)
- docs/analysis/concepts/rjm/verification-on-resume.md (1399 bytes)
- docs/analysis/concepts/rjm/mirror-claims.md (1376 bytes)
- docs/analysis/concepts/rjm/first-fix-defects.md (1375 bytes)
- docs/analysis/concepts/rjm/plugin-root-env-contract.md (1379 bytes)
- docs/analysis/concepts/rjm/payload-casing-contract.md (1326 bytes)
- docs/analysis/concepts/rjm/last-5-prs-rule.md (1414 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-97.md (4852 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/<slug>.md (all 30 cards), exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Concepts from `ai-agents-diagnostics-toolkit` formalize the distinction between non-blocking diagnostic instruments and blocking enforcement gates, organizing measurement scripts by phase and baseline comparison.
- `verification-based governance` represents the central governing doctrine across rjm (cited across 5 files: docs-of-record, external-claims, research-frontier, research-methodology, and validation-and-qa), mandating that all assertions be verified by mechanical gates, test suites, or byte-exact primary citations rather than model claims.
- Continuity artifacts (`per-issue handoffs`, `per-branch handoff`, `resume-verification checklist`, `verification-on-resume`) enforce cold-start resumption protocols that require incoming agents to rerun verification steps prior to code editing, preventing cascading errors and merge conflicts.
- Retired mechanisms (`guard telemetry and maturity tiers` deleted in #5154, `stop hook` deleted in #3349) are documented with implementation status `not-implemented` to preserve historical traceability while recording their decommission.
- Empirical probe toolkit conventions (`first-fix defects`, `plugin-root env contract`, `payload casing contract`, `last-5-PRs rule`) capture hard-won contracts from real retrospectives (#2205, #2290, #1989).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 11 cited source files and 11 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 work unit report.
