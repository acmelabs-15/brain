---
unit: cc-rjm-64
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-64

## Files assigned
- [x] .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md
- [x] .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md
- [x] .agents/steering/security-practices.md
- [x] .claude/agents/AGENTS.md
- [x] .claude/skills/analyze/references/engineering-complexity-tiers.md
- [x] .claude/skills/spec-generator/references/spec-prior-art-schema.md
- [x] .claude/skills/spec-generator/references/spec-step0-gates.md
- [x] scripts/ci/validate_vendor_provenance.py
- [x] templates/AGENTS.md

## Outputs produced
- docs/analysis/concepts/rjm/tier-5.md (2167 bytes)
- docs/analysis/concepts/rjm/critic-pre-mortem.md (1780 bytes)
- docs/analysis/concepts/rjm/demand-reality-drift.md (2210 bytes)
- docs/analysis/concepts/rjm/desperate-specificity-drift.md (2193 bytes)
- docs/analysis/concepts/rjm/narrowest-wedge-drift.md (2147 bytes)
- docs/analysis/concepts/rjm/step-0-requires-elicitation.md (2273 bytes)
- docs/analysis/concepts/rjm/halt-triggers.md (2165 bytes)
- docs/analysis/concepts/rjm/halt-message-schema.md (1639 bytes)
- docs/analysis/concepts/rjm/ac-traceability-matrix.md (1634 bytes)
- docs/analysis/concepts/rjm/pilot-gate.md (1809 bytes)
- docs/analysis/concepts/rjm/agent-discriminating-fixtures.md (1701 bytes)
- docs/analysis/concepts/rjm/irreversibility-warning.md (1692 bytes)
- docs/analysis/concepts/rjm/scrap-path-archival.md (1756 bytes)
- docs/analysis/concepts/rjm/commit-budget.md (1606 bytes)
- docs/analysis/concepts/rjm/action-sha-pinning.md (1693 bytes)
- docs/analysis/concepts/rjm/token-permission-minimization.md (1686 bytes)
- docs/analysis/concepts/rjm/pull-request-target.md (2009 bytes)
- docs/analysis/concepts/rjm/secret-scanning.md (1503 bytes)
- docs/analysis/concepts/rjm/pre-commit-detection-patterns.md (1589 bytes)
- docs/analysis/concepts/rjm/ai-output-validation.md (1669 bytes)
- docs/analysis/concepts/rjm/input-validation-first.md (1595 bytes)
- docs/analysis/concepts/rjm/secure-credential-handling.md (1594 bytes)
- docs/analysis/concepts/rjm/hardcoded-secrets.md (1439 bytes)
- docs/analysis/concepts/rjm/missing-input-validation.md (1439 bytes)
- docs/analysis/concepts/rjm/trusting-ai-output.md (1447 bytes)
- docs/analysis/concepts/rjm/insufficient-error-handling.md (1479 bytes)
- docs/analysis/concepts/rjm/claude-code-agents.md (1728 bytes)
- docs/analysis/concepts/rjm/bidirectional-synchronization.md (2038 bytes)
- docs/analysis/concepts/rjm/file-naming.md (1436 bytes)
- docs/analysis/concepts/rjm/coordination-agents.md (1499 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-64.md (3850 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0 (74 PASS, 0 FAIL)
- scripts/synthesis/memo.ts, bun scripts/synthesis/memo.ts stamp-unit cc-rjm-64 --model "Gemini 3.8 Flash" --effort high, exit code 0 (30 cards stamped)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concept cards assigned to unit cc-rjm-64 were newly authored from scratch.
- The unit covers four key thematic areas within rjm:
  1. Specification First-Principles Gate (REQ-016, spec-step0-gates, spec-prior-art-schema): `tier-5`, `critic-pre-mortem`, `demand-reality-drift`, `desperate-specificity-drift`, `narrowest-wedge-drift`, `step-0-requires-elicitation`, `halt-triggers`, `halt-message-schema`.
  2. Agent Evaluation Spike & Discipline (TASK-004): `ac-traceability-matrix`, `pilot-gate`, `agent-discriminating-fixtures`, `irreversibility-warning`, `scrap-path-archival`, `commit-budget`.
  3. Security Practices & Hardening (security-practices, validate_vendor_provenance.py): `action-sha-pinning`, `token-permission-minimization`, `pull-request-target`, `secret-scanning`, `pre-commit-detection-patterns`, `ai-output-validation`, `input-validation-first`, `secure-credential-handling`, `hardcoded-secrets`, `missing-input-validation`, `trusting-ai-output`, `insufficient-error-handling`.
  4. Multi-Agent Delivery & Architecture (AGENTS.md, templates/AGENTS.md): `claude-code-agents`, `bidirectional-synchronization`, `file-naming`, `coordination-agents`.
- Non-lifecycle concepts representing identifiers, section headings, triggers, or grouping labels were classified as `kind: name-only` per D-023: `step-0-requires-elicitation`, `pull-request-target`, `file-naming`, and `coordination-agents`.
- Anti-patterns in security steering were classified under `kind: pattern`: `hardcoded-secrets`, `missing-input-validation`, `trusting-ai-output`, and `insufficient-error-handling`.
- All 30 cards pass quote-check with zero failures (74 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~36,000 tokens across 9 source files and 9 citing inventory cards; approximate tokens of output written: ~14,500 tokens across 30 concept cards and this unit report.
