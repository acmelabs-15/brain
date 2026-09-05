---
unit: inv-rjm-4
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-4

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/analysis/vercel-passive-context-vs-skills-research.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-001-markdown-linting.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-002-agent-model-selection-optimization.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-003-agent-tool-selection-criteria.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-004-pre-commit-hook-architecture.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-analysis-vercel-passive-context-vs-skills-research-md.md` (7087 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-001-markdown-linting-md.md` (4472 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-002-agent-model-selection-optimization-md.md` (6741 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-003-agent-tool-selection-criteria-md.md` (7483 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-004-pre-commit-hook-architecture-md.md` (5440 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Assigned files encompass foundational analysis and initial architecture decision records (`ADR-001` through `ADR-004`) in `rjm`.
- `.agents/analysis/vercel-passive-context-vs-skills-research.md` evaluates Vercel's Next.js 16 agent benchmark (pass rate improved from 53% to 100% via passive context), establishing that passive compressed documentation indexes loaded directly in system prompts outperform dynamic skill retrieval by eliminating retrieval decision points and instruction fragility. Directly referenced by `.claude/skills/context-optimizer/` in later units.
- `ADR-001` (`.agents/architecture/ADR-001-markdown-linting.md`) establishes `.markdownlint-cli2.yaml` across 59 initial markdown files, configuring custom rules suitable for agent templates (allowing long tool definitions without line length errors, requiring fenced code languages).
- `ADR-002` (`.agents/architecture/ADR-002-agent-model-selection-optimization.md`) is `status: deprecated`. It originally established a 5-dimension rubric for model tier allocation (Opus vs Sonnet), but was later superseded in methodology by ADR-080, which discarded subjective scoring in favor of default model inheritance and an empirical draining ratchet (`scripts/validation/model_pin_baseline.json`).
- `ADR-003` (`.agents/architecture/ADR-003-agent-tool-selection-criteria.md`) defines role-specific tool allocation across 19 agent personas, reducing tool schemas from ~58 blanket tools to 4-20 per role, enforcing least privilege and drawing clear boundaries between artifact-only writes (`.agents/` directories) and source code modifications (`src/`, `tests/`).
- `ADR-004` (`.agents/architecture/ADR-004-pre-commit-hook-architecture.md`) is `status: superseded` by ADR-086 (`ADR-086-lefthook-local-hook-orchestration.md`). It originally established `.githooks/pre-commit` as a tri-level validation point (blocking, warning, auto-fix), which was later migrated to `lefthook.yml`.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~12,400 tokens (49,959 bytes across 5 files).
Approximate output written: ~7,800 tokens (31,223 bytes across 5 cards plus this unit report).
