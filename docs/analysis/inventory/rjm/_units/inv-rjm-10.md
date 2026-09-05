---
unit: inv-rjm-10
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-10

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-021-model-routing-strategy.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-022-architecture-governance-split-criteria.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-023-quality-gate-prompt-testing.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-024-github-actions-runner-selection.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-025-github-actions-arm-runners.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-021-model-routing-strategy-md.md` (7090 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-022-architecture-governance-split-criteria-md.md` (9628 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-023-quality-gate-prompt-testing-md.md` (5933 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-024-github-actions-runner-selection-md.md` (5873 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-025-github-actions-arm-runners-md.md` (5396 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-10 covers five architecture decision records in `rjm` focused on AI review routing, architectural decision governance, quality gate prompt validation, and CI runner infrastructure.
- Core architectural insights:
  - `ADR-021`: Formulates the Evidence Sufficiency Principle (forbidding PASS verdicts when PR diff context is missing or truncated to summary-only mode) and pairs it with tiered model routing (`gpt-5-mini`, `claude-sonnet-4.5`, `claude-opus-4.5`, `gpt-5.1-codex-max`) to minimize false PASS verdicts while reducing cost by 36%.
  - `ADR-022`: Sets explicit criteria for distinguishing immutable architectural design records (`.agents/architecture/`) from evolving operational governance policies (`.agents/governance/`), establishing a hybrid three-tier placement workflow (ADR-only, Governance-only, Split).
  - `ADR-023`: Distinguishes prompt structural validation (tested deterministically in CI via Pester) from runtime AI behavioral evaluation, identifying the critical boundary where structural tests cannot prevent runtime AI interpretation errors.
  - `ADR-024` & `ADR-025`: Detail the 37.5% cost optimization shift to GitHub Actions `ubuntu-24.04-arm` runners, provenance tracking (accepted as ADR-014, renumbered to ADR-024, migration executed in ADR-025, and both later superseded by ADR-055), and compliance comment conventions (`# ADR-024:`, `# ADR-024 Exception:` retired for `# ADR-055 Exception:`).
- None of this unit's files appear in `docs/analysis/manifest/rjm-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,200 tokens (48,839 bytes across 5 files); approximate tokens of output written: ~8,500 tokens (33,920 bytes across 5 inventory cards).
