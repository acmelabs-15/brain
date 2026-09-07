---
unit: cc-rjm-82
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-82

## Files assigned
- [x] sources/rjm/.claude/agents/security.md
- [x] sources/rjm/.claude/agents/security/references/dependency-risk-scoring.md
- [x] sources/rjm/.claude/agents/security/references/threat-model-template.md
- [x] sources/rjm/.claude/skills/review/references/analyst.md
- [x] sources/rjm/.claude/skills/review/references/roadmap.md
- [x] sources/rjm/templates/agents/devops.shared.md
- [x] sources/rjm/templates/agents/qa.shared.md
- [x] sources/rjm/templates/agents/security.shared.md
- [x] docs/analysis/inventory/rjm/claude-agents-security-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-security-references-dependency-risk-scoring-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-security-references-threat-model-template-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-references-analyst-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-references-roadmap-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-devops-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-qa-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-security-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/asi02-cwe-22-tool-misuse.md
- docs/analysis/concepts/rjm/asi03-cwe-522-identity-abuse.md
- docs/analysis/concepts/rjm/asi04-cwe-426-supply-chain.md
- docs/analysis/concepts/rjm/asi05-cwe-94-code-execution.md
- docs/analysis/concepts/rjm/asi06-cwe-502-memory-poisoning.md
- docs/analysis/concepts/rjm/asi07-inter-agent-communication.md
- docs/analysis/concepts/rjm/asi08-cwe-703-cascading-failures.md
- docs/analysis/concepts/rjm/asi09-cwe-346-trust-exploitation.md
- docs/analysis/concepts/rjm/asi10-cwe-284-rogue-agents.md
- docs/analysis/concepts/rjm/secret-detection-environment-leak-scanning.md
- docs/analysis/concepts/rjm/code-quality-audit.md
- docs/analysis/concepts/rjm/architecture-boundary-security-audit.md
- docs/analysis/concepts/rjm/best-practices-enforcement.md
- docs/analysis/concepts/rjm/impact-analysis.md
- docs/analysis/concepts/rjm/security-relevant-change-triggers.md
- docs/analysis/concepts/rjm/post-implementation-verification-piv-protocol.md
- docs/analysis/concepts/rjm/piv-checklist.md
- docs/analysis/concepts/rjm/ci-environment-security-testing.md
- docs/analysis/concepts/rjm/piv-report-template.md
- docs/analysis/concepts/rjm/impact-analysis-deliverable.md
- docs/analysis/concepts/rjm/security-checklist.md
- docs/analysis/concepts/rjm/powershell-security-review.md
- docs/analysis/concepts/rjm/threat-model-format.md
- docs/analysis/concepts/rjm/security-report-length-bounds.md
- docs/analysis/concepts/rjm/security-report-format.md
- docs/analysis/concepts/rjm/dependency-risk-scoring.md
- docs/analysis/concepts/rjm/maintenance.md
- docs/analysis/concepts/rjm/popularity.md
- docs/analysis/concepts/rjm/security-history.md
- docs/analysis/concepts/rjm/lock-in-risk.md
- docs/analysis/concepts/rjm/_units/cc-rjm-82.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/asi02-cwe-22-tool-misuse.md docs/analysis/concepts/rjm/asi03-cwe-522-identity-abuse.md docs/analysis/concepts/rjm/asi04-cwe-426-supply-chain.md docs/analysis/concepts/rjm/asi05-cwe-94-code-execution.md docs/analysis/concepts/rjm/asi06-cwe-502-memory-poisoning.md docs/analysis/concepts/rjm/asi07-inter-agent-communication.md docs/analysis/concepts/rjm/asi08-cwe-703-cascading-failures.md docs/analysis/concepts/rjm/asi09-cwe-346-trust-exploitation.md docs/analysis/concepts/rjm/asi10-cwe-284-rogue-agents.md docs/analysis/concepts/rjm/secret-detection-environment-leak-scanning.md docs/analysis/concepts/rjm/code-quality-audit.md docs/analysis/concepts/rjm/architecture-boundary-security-audit.md docs/analysis/concepts/rjm/best-practices-enforcement.md docs/analysis/concepts/rjm/impact-analysis.md docs/analysis/concepts/rjm/security-relevant-change-triggers.md docs/analysis/concepts/rjm/post-implementation-verification-piv-protocol.md docs/analysis/concepts/rjm/piv-checklist.md docs/analysis/concepts/rjm/ci-environment-security-testing.md docs/analysis/concepts/rjm/piv-report-template.md docs/analysis/concepts/rjm/impact-analysis-deliverable.md docs/analysis/concepts/rjm/security-checklist.md docs/analysis/concepts/rjm/powershell-security-review.md docs/analysis/concepts/rjm/threat-model-format.md docs/analysis/concepts/rjm/security-report-length-bounds.md docs/analysis/concepts/rjm/security-report-format.md docs/analysis/concepts/rjm/dependency-risk-scoring.md docs/analysis/concepts/rjm/maintenance.md docs/analysis/concepts/rjm/popularity.md docs/analysis/concepts/rjm/security-history.md docs/analysis/concepts/rjm/lock-in-risk.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-82 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 cards stamped)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-82 authors 30 concept cards covering security engineering, agent vulnerability taxonomy, post-implementation verification, threat modeling, and dependency risk management in the `rjm` package:
  1. OWASP Agentic Top 10 vulnerability taxonomy entries (`asi02-cwe-22-tool-misuse` through `asi10-cwe-284-rogue-agents`), mapped to security audit rules and marked as `kind: name-only` per D-023.
  2. Security review capabilities (`secret-detection-environment-leak-scanning`, `code-quality-audit`, `architecture-boundary-security-audit`, `best-practices-enforcement`, `impact-analysis`, `security-checklist`, `powershell-security-review`).
  3. Post-Implementation Verification gates and artifacts (`security-relevant-change-triggers`, `post-implementation-verification-piv-protocol`, `piv-checklist`, `ci-environment-security-testing`, `piv-report-template`).
  4. Cross-role planning deliverables (`impact-analysis-deliverable`) shared across security, DevOps, and QA.
  5. Threat modeling and report formatting standards (`threat-model-format`, `security-report-length-bounds`, `security-report-format`).
  6. Quantitative dependency evaluation framework and component factors (`dependency-risk-scoring`, `maintenance`, `popularity`, `security-history`, `lock-in-risk`).
- All 52 occurrences recorded in `facts/cc-rjm-82.txt` across 8 source files and 8 inventory cards are populated in the respective concept cards' `Where used` tables.
- All 30 concept cards pass byte-exact quotation verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~40,000 tokens across 8 source files and 8 inventory cards.
Approximate tokens of output written: ~15,000 tokens across 30 concept cards and 1 unit report.
