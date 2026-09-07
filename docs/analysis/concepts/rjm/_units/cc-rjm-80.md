---
unit: cc-rjm-80
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-80

## Files assigned
- [x] .claude/agents/security.md
- [x] .claude/skills/security-review/SKILL.md
- [x] .claude/skills/threat-modeling/references/security-owasp-top-10.md
- [x] docs/agent-governance.md
- [x] scripts/eval/eval-knowledge-integration.py
- [x] templates/agents/code-simplifier.shared.md
- [x] templates/agents/comment-analyzer.shared.md
- [x] templates/agents/critic.shared.md
- [x] templates/agents/security.shared.md
- [x] docs/analysis/inventory/rjm/claude-agents-security-md.md
- [x] docs/analysis/inventory/rjm/docs-agent-governance-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-critic-shared-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-knowledge-integration-py.md
- [x] docs/analysis/inventory/rjm/templates-agents-code-simplifier-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-comment-analyzer-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-security-shared-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-security-review-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-security-owasp-top-10-md.md

## Outputs produced
- docs/analysis/concepts/rjm/approved.md (2621 bytes)
- docs/analysis/concepts/rjm/conditional.md (2358 bytes)
- docs/analysis/concepts/rjm/blocked.md (2903 bytes)
- docs/analysis/concepts/rjm/static-analysis-vulnerability-scanning.md (2347 bytes)
- docs/analysis/concepts/rjm/cwe-699-software-development-view.md (1366 bytes)
- docs/analysis/concepts/rjm/owasp-top-10-2021.md (2426 bytes)
- docs/analysis/concepts/rjm/owasp-top-10-for-agentic-applications.md (1315 bytes)
- docs/analysis/concepts/rjm/owasp-a03-2021.md (1219 bytes)
- docs/analysis/concepts/rjm/cwe-22-path-traversal.md (1298 bytes)
- docs/analysis/concepts/rjm/cwe-23-relative-path-traversal.md (1345 bytes)
- docs/analysis/concepts/rjm/cwe-36-absolute-path-traversal.md (1354 bytes)
- docs/analysis/concepts/rjm/cwe-73-external-control-of-file-name.md (1363 bytes)
- docs/analysis/concepts/rjm/cwe-77-command-injection.md (1340 bytes)
- docs/analysis/concepts/rjm/cwe-78-os-command-injection.md (1351 bytes)
- docs/analysis/concepts/rjm/cwe-89-sql-injection.md (1308 bytes)
- docs/analysis/concepts/rjm/cwe-91-xml-injection.md (1305 bytes)
- docs/analysis/concepts/rjm/cwe-94-code-injection.md (1322 bytes)
- docs/analysis/concepts/rjm/cwe-95-eval-injection.md (1339 bytes)
- docs/analysis/concepts/rjm/cwe-99-resource-injection.md (1348 bytes)
- docs/analysis/concepts/rjm/owasp-a07-2021.md (1231 bytes)
- docs/analysis/concepts/rjm/cwe-287-improper-authentication.md (1334 bytes)
- docs/analysis/concepts/rjm/cwe-798-hard-coded-credentials.md (1383 bytes)
- docs/analysis/concepts/rjm/cwe-640-weak-password-recovery.md (1360 bytes)
- docs/analysis/concepts/rjm/cwe-384-session-fixation.md (1349 bytes)
- docs/analysis/concepts/rjm/cwe-613-insufficient-session-expiration.md (1375 bytes)
- docs/analysis/concepts/rjm/owasp-a01-2021.md (1200 bytes)
- docs/analysis/concepts/rjm/cwe-285-improper-authorization.md (1347 bytes)
- docs/analysis/concepts/rjm/cwe-863-incorrect-authorization.md (1325 bytes)
- docs/analysis/concepts/rjm/cwe-269-improper-privilege-management.md (1377 bytes)
- docs/analysis/concepts/rjm/cwe-284-improper-access-control.md (1345 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-80.md (4868 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0
- scripts/synthesis/memo.ts, bun scripts/synthesis/memo.ts stamp-unit cc-rjm-80 --model "Gemini 3.8 Flash" --effort "high", exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The 30 concept cards in unit cc-rjm-80 span review gate outcomes (`approved`, `conditional`, `blocked`), static security analysis capabilities (`static-analysis-vulnerability-scanning`), external security reference standards (`owasp-top-10-2021`), and specific CWE/OWASP vulnerability taxonomy identifiers classified as `kind: name-only` per METHOD.md R6 and D-023.
- All 30 concept cards were stamped with `memo.ts stamp-unit cc-rjm-80` and verified with `quote-check.ts` resulting in 31 PASS and 0 FAIL across all citations.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~40,000 tokens across 9 source files and 9 citing inventory cards; approximate tokens of output written: ~12,500 tokens across 30 concept cards and this unit report.
