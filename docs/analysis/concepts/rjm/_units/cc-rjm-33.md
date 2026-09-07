---
unit: cc-rjm-33
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-33

## Files assigned
- [x] .agents/architecture/ADR-068-consolidated-hook-dispatcher.md
- [x] .agents/architecture/ADR-069-context-corpus-is-the-product.md
- [x] .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md
- [x] .agents/architecture/ADR-097-zero-tool-use-hooks.md
- [x] .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md
- [x] .claude/skills/ai-agents-change-control/SKILL.md
- [x] .claude/skills/ai-agents-portability-campaign/SKILL.md
- [x] .claude/skills/ai-agents-research-frontier/SKILL.md
- [x] .claude/skills/analyze/references/strategy-ooda-loop.md
- [x] .claude/skills/chaos-experiment/references/chaos-engineering-principles.md
- [x] .claude/skills/planner/references/strategy-ooda-loop.md
- [x] .claude/skills/pre-mortem/references/strategy-ooda-loop.md
- [x] .claude/skills/retrospective/references/frameworks.md
- [x] CONTRIBUTING.md
- [x] scripts/ci/test_installed_plugin_hooks.py
- [x] scripts/ci/vanilla_hook_guard.py
- [x] scripts/eval/README.md
- [x] scripts/eval/_optimizer_core.py
- [x] scripts/validation/pre_pr_sequence.py
- [x] scripts/validation/validate_hook_anchoring.py

## Outputs produced
- docs/analysis/concepts/rjm/gate.md (2074 bytes)
- docs/analysis/concepts/rjm/observe.md (2281 bytes)
- docs/analysis/concepts/rjm/advise.md (1369 bytes)
- docs/analysis/concepts/rjm/host-matcher-union.md (1285 bytes)
- docs/analysis/concepts/rjm/per-shim-self-filtering.md (1242 bytes)
- docs/analysis/concepts/rjm/observer-merger.md (1200 bytes)
- docs/analysis/concepts/rjm/hookgenerationtransaction.md (1335 bytes)
- docs/analysis/concepts/rjm/require-subagent-model.md (1382 bytes)
- docs/analysis/concepts/rjm/serena-memory-scope-guard.md (1461 bytes)
- docs/analysis/concepts/rjm/serena-worktree-scope.md (1333 bytes)
- docs/analysis/concepts/rjm/push-pr-script-identity-guard.md (1411 bytes)
- docs/analysis/concepts/rjm/markdownlint-guard.md (1350 bytes)
- docs/analysis/concepts/rjm/markdown-auto-lint.md (1296 bytes)
- docs/analysis/concepts/rjm/additionalcontext.md (1341 bytes)
- docs/analysis/concepts/rjm/adr-097.md (1994 bytes)
- docs/analysis/concepts/rjm/adr-085.md (1249 bytes)
- docs/analysis/concepts/rjm/adr-071.md (1425 bytes)
- docs/analysis/concepts/rjm/adr-082.md (1114 bytes)
- docs/analysis/concepts/rjm/adr-084.md (1365 bytes)
- docs/analysis/concepts/rjm/adr-066.md (929 bytes)
- docs/analysis/concepts/rjm/user.md (1186 bytes)
- docs/analysis/concepts/rjm/curated-context-corpus.md (1598 bytes)
- docs/analysis/concepts/rjm/zettelkasten-atomic-notes.md (1268 bytes)
- docs/analysis/concepts/rjm/llms-as-ghosts-not-animals.md (1281 bytes)
- docs/analysis/concepts/rjm/durability-of-value.md (1033 bytes)
- docs/analysis/concepts/rjm/reproducibility-of-behavior.md (1068 bytes)
- docs/analysis/concepts/rjm/engineering-opportunity-cost.md (1107 bytes)
- docs/analysis/concepts/rjm/risk-of-premature-schema-lock-in.md (1094 bytes)
- docs/analysis/concepts/rjm/need-for-shared-vocabulary.md (1044 bytes)
- docs/analysis/concepts/rjm/corpus-catalog.md (1261 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-33.md (6100 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concept cards assigned in facts/cc-rjm-33.txt were authored in this unit.
- Concept classification highlights:
  - Core execution primitives and modes: `gate` (`kind: gate`), `observe` (`kind: technique`), and `advise` (`kind: pattern`) represent the three execution modes in ADR-068's consolidated hook dispatcher; `gate` and `observe` also serve prominent roles in change control, OODA loops, and evaluations.
  - Dispatcher synthesis and transaction patterns: `host-matcher-union`, `per-shim-self-filtering`, `observer-merger`, and `hookgenerationtransaction` are classified as `kind: pattern`.
  - Specific hook controls and guards: `require-subagent-model`, `markdownlint-guard` (`kind: gate`), and `markdown-auto-lint` (`kind: technique`) were historical in-scope guards later retired under ADR-097; `serena-memory-scope-guard`, `serena-worktree-scope`, and `push-pr-script-identity-guard` are classified as `kind: gate` with `implementation_in_scope: false` due to boundary exclusions (Serena memory and PR tooling).
  - Schema artifacts: `additionalcontext` (`kind: artifact`) and `corpus-catalog` (`kind: artifact`, marked `not-implemented`).
  - Architecture decision records: `ADR-097` and `ADR-071` are classified as `kind: reference` due to their primary contract/policy authority; `ADR-085`, `ADR-082`, `ADR-084`, and `ADR-066` are classified as `kind: name-only` per D-023.
  - Governance and contextual philosophy from ADR-069: `user` (`kind: role`) identifies the human stakeholder decision-maker; `curated-context-corpus` (`kind: artifact`) and `llms-as-ghosts-not-animals` (`kind: pattern`) capture the central architectural philosophy; decision driver headings (`durability-of-value`, `reproducibility-of-behavior`, `engineering-opportunity-cost`, `risk-of-premature-schema-lock-in`, `need-for-shared-vocabulary`) are classified as `kind: name-only` per D-023.
  - Knowledge representation: `zettelkasten-atomic-notes` (`kind: technique`, `implementation_in_scope: false`).
- All 30 cards pass byte-exact quotation verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~85,000 tokens across 20 source files and citing inventory cards; approximate tokens of output written: ~12,000 tokens across 30 concept cards and this unit report.
