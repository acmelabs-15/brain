---
unit: inv-rjm-29
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-29

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-072-jtbd-plugin-architecture.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-073-adr-lifecycle-frontmatter.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-074-security-review-quick-pass-mode.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-072-jtbd-plugin-architecture-md.md` (7550 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-073-adr-lifecycle-frontmatter-md.md` (6932 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-074-security-review-quick-pass-mode-md.md` (8480 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-29.md` (3272 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-072 establishes the JTBD capability slicing model (`dev-lifecycle`, `quality-gates`, `session-protocol`, `agent-team`, `project-toolkit`) and clarifies the asymmetric generation seam in rjm: canonical agent definitions live in `templates/agents/*.shared.md`, whereas commands, rules, and hooks are authored canonically in `.claude/` and generated into other harness formats (`.github/instructions/`, `.github/prompts/`, `src/copilot-cli/`). It serves across the repository as an example of conditional proposal status ("Proposed... MUST clear the five approval conditions before moving to Accepted").
- ADR-073 defines the standard machine-readable YAML frontmatter schema for ADRs (`id`, `status`, `date`, `decision-makers`, `supersedes`, `superseded-by`, `explainer`, `implemented`). This schema is consumed by downstream tooling (`build/scripts/generate_adr_index.py` and `scripts/validation/check_adr_lifecycle.py`), establishes the rule that frontmatter is authoritative over prose without silently rewriting prose, and requires consensus debate logs under `.agents/critique/` for any transition to `status: accepted`.
- ADR-074 defines bounded quick-pass mode and progress reporting for the `security-review` subagent / skill to address severe latency overhead in continuous PR autofix workflows. It introduces a 4-tier diff-scope classifier (`classify_diff_scope`), caller-enforced deadlines, a 30-second progress heartbeat, and extended verdicts (`QUICK_PASS`, `NEEDS_DEEP_REVIEW`, `budget_exceeded`) while maintaining fail-closed PIV gate enforcement.
- Both ADR-072 and ADR-074 carry `implemented: false`, while ADR-073 has `implemented: true` (for Phase 1 schema adoption, with deferred backfill in Phase 2).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12400 tokens (49441 bytes across 3 source files). Approximate tokens of output written: ~6000 tokens across 3 inventory cards and this unit report.
