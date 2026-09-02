# Project: Lifecycle Synthesis - inv-addy-4 Inventory Extraction

## Architecture
- Source root: `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy`
- Destination inventory entries: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/`
- Destination work unit report: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-4.md`
- Manifest tracking: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/manifest/addy.md`
- State tracking: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md`

## Feature Inventory
| # | File / Item | Description | Milestone | Source |
|---|-------------|-------------|-----------|--------|
| 1 | `references/security-checklist.md` | Security checklist & vulnerability prevention | inv-addy-4 | sources/addy |
| 2 | `references/accessibility-checklist.md` | Accessibility (a11y) checklist & WCAG standards | inv-addy-4 | sources/addy |
| 3 | `references/definition-of-done.md` | Definition of Done & quality criteria | inv-addy-4 | sources/addy |
| 4 | `.opencode/skills` | OpenCode skills configuration / schema | inv-addy-4 | sources/addy |
| 5 | `.agents/plugins/marketplace.json` | Agent marketplace plugin configuration | inv-addy-4 | sources/addy |
| 6 | `.claude/rules/skills-contributing.md` | Rules for contributing skills | inv-addy-4 | sources/addy |
| 7 | `.claude/commands/ship.md` | Claude Code `/ship` slash command | inv-addy-4 | sources/addy |
| 8 | `.claude/commands/constraints.md` | Claude Code `/constraints` slash command | inv-addy-4 | sources/addy |
| 9 | `.claude/commands/code-simplify.md` | Claude Code `/code-simplify` slash command | inv-addy-4 | sources/addy |
| 10 | `.claude/commands/build.md` | Claude Code `/build` slash command | inv-addy-4 | sources/addy |
| 11 | `.claude/commands/plan.md` | Claude Code `/plan` slash command | inv-addy-4 | sources/addy |
| 12 | `.claude/commands/spec.md` | Claude Code `/spec` slash command | inv-addy-4 | sources/addy |
| 13 | `.claude/commands/review.md` | Claude Code `/review` slash command | inv-addy-4 | sources/addy |
| 14 | `.claude/commands/test.md` | Claude Code `/test` slash command | inv-addy-4 | sources/addy |
| 15 | `.claude/commands/webperf.md` | Claude Code `/webperf` slash command | inv-addy-4 | sources/addy |
| 16 | `agents/code-reviewer.md` | Code reviewer subagent persona | inv-addy-4 | sources/addy |
| 17 | `agents/test-engineer.md` | Test engineer subagent persona | inv-addy-4 | sources/addy |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Exploration & Extraction | Deep analysis of 17 files per METHOD.md §4 | none | IN_PROGRESS |
| 2 | Inventory & Unit Report Generation | Write 17 inventory entries + unit report + update manifest & STATE.md | M1 | PLANNED |
| 3 | Verification & Review Gate | Reviewers, Challengers, and Forensic Auditor verification | M2 | PLANNED |

## Code Layout
- Work metadata: `.agents/`
- Analysis inventory entries: `docs/analysis/inventory/addy/<file-slug>.md`
- Work unit reports: `docs/analysis/inventory/addy/_units/inv-addy-4.md`
- Manifest: `docs/analysis/manifest/addy.md`
- State: `docs/plan/STATE.md`
