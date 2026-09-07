---
unit: cc-rjm-32
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-32

## Files assigned
- [x] .agents/architecture/ADR-064-commands-to-skills-migration.md
- [x] .agents/architecture/ADR-065-orchestrator-as-router.md
- [x] .agents/architecture/ADR-066-hook-fail-open-reconciliation.md
- [x] .agents/architecture/ADR-068-consolidated-hook-dispatcher.md
- [x] .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md
- [x] .agents/architecture/ADR-084-vendored-hook-roi-bar.md
- [x] .agents/architecture/ADR-097-zero-tool-use-hooks.md
- [x] .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md
- [x] .claude/skills/agent-harness-reference/references/official-hook-contracts.md
- [x] .claude/skills/ai-agents-docs-of-record/SKILL.md
- [x] .claude/skills/ai-agents-portability-campaign/SKILL.md
- [x] .claude/skills/analyze/references/context-budget-management.md
- [x] .claude/skills/skillforge/references/output-structure.md
- [x] .claude/skills/skillforge/scripts/validate-skill.py
- [x] .claude/skills/software-engineering-library/references/release-it.md
- [x] CONTRIBUTING.md
- [x] docs/customization.md
- [x] scripts/eval/eval-knowledge-integration.py
- [x] scripts/validation/hook_contracts.py

## Outputs produced
- docs/analysis/concepts/rjm/file-cap.md (1351 bytes)
- docs/analysis/concepts/rjm/skill-frontmatter-standardization.md (1074 bytes)
- docs/analysis/concepts/rjm/supervision-loop.md (1252 bytes)
- docs/analysis/concepts/rjm/context-concatenation.md (1472 bytes)
- docs/analysis/concepts/rjm/success-criterion.md (1492 bytes)
- docs/analysis/concepts/rjm/deterministic-router.md (1421 bytes)
- docs/analysis/concepts/rjm/retry-policy.md (1397 bytes)
- docs/analysis/concepts/rjm/machine-checkable.md (1348 bytes)
- docs/analysis/concepts/rjm/human-judgment-with-rationale.md (1432 bytes)
- docs/analysis/concepts/rjm/routing-decisions.md (1294 bytes)
- docs/analysis/concepts/rjm/prompt-behavioral-evaluation.md (1329 bytes)
- docs/analysis/concepts/rjm/deterministic-gates.md (1277 bytes)
- docs/analysis/concepts/rjm/prevention-first-fail-closed-and-loud.md (1566 bytes)
- docs/analysis/concepts/rjm/generation-time-anchoring.md (1443 bytes)
- docs/analysis/concepts/rjm/runtime-contract-test.md (1490 bytes)
- docs/analysis/concepts/rjm/invariant-policy-gate.md (1599 bytes)
- docs/analysis/concepts/rjm/integration-point.md (1731 bytes)
- docs/analysis/concepts/rjm/advisory-steering-precondition-hook.md (1527 bytes)
- docs/analysis/concepts/rjm/prevention-contract.md (1417 bytes)
- docs/analysis/concepts/rjm/break-glass.md (1459 bytes)
- docs/analysis/concepts/rjm/consolidated-per-event-hook-dispatcher.md (1498 bytes)
- docs/analysis/concepts/rjm/six-role-adr-review.md (1366 bytes)
- docs/analysis/concepts/rjm/sessionstart.md (2903 bytes)
- docs/analysis/concepts/rjm/userpromptsubmit.md (2402 bytes)
- docs/analysis/concepts/rjm/posttoolusefailure.md (2719 bytes)
- docs/analysis/concepts/rjm/sessionend.md (2609 bytes)
- docs/analysis/concepts/rjm/precompact.md (3039 bytes)
- docs/analysis/concepts/rjm/permissionrequest.md (2475 bytes)
- docs/analysis/concepts/rjm/stop.md (2744 bytes)
- docs/analysis/concepts/rjm/subagentstop.md (2457 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-32.md (4677 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-32 encompasses 30 concept cards spanning foundational architecture decision records (ADR-064, ADR-065, ADR-066, ADR-068), software engineering resilience patterns (release-it.md), and official lifecycle hook events (SessionStart, UserPromptSubmit, PostToolUseFailure, SessionEnd, PreCompact, PermissionRequest, Stop, SubagentStop).
- Concepts representing filenames/identifiers (`skill-frontmatter-standardization`) were authored with `kind: name-only` per D-023.
- All 30 concept cards pass byte-exact quotation verification with `bun scripts/synthesis/quote-check.ts` (37 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~85,000 tokens across 19 assigned source files and citing inventory cards; approximate tokens of output written: ~15,000 tokens across 30 concept cards and this unit report.
