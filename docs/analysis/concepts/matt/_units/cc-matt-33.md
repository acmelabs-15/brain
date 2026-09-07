---
unit: cc-matt-33
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-33

## Files assigned
- [x] sources/matt/skills/in-progress/README.md
- [x] sources/matt/skills/in-progress/implement-spec/SKILL.md
- [x] sources/matt/skills/in-progress/loop-me/SKILL.md
- [x] sources/matt/skills/in-progress/loop-me/agents/openai.yaml
- [x] sources/matt/skills/in-progress/retro/SKILL.md
- [x] sources/matt/skills/in-progress/writing-beats/SKILL.md
- [x] docs/analysis/inventory/matt/skills-in-progress-implement-spec-skill-md.md
- [x] docs/analysis/inventory/matt/skills-in-progress-loop-me-agents-openai-yaml.md
- [x] docs/analysis/inventory/matt/skills-in-progress-loop-me-skill-md.md
- [x] docs/analysis/inventory/matt/skills-in-progress-readme-md.md
- [x] docs/analysis/inventory/matt/skills-in-progress-writing-beats-skill-md.md
- [x] docs/analysis/inventory/matt/skills-in-progress-retro-skill-md.md

## Outputs produced
- docs/analysis/concepts/matt/exploration-subagent.md — 1409 bytes
- docs/analysis/concepts/matt/markdown-notes.md — 1312 bytes
- docs/analysis/concepts/matt/draft-pr.md — 1247 bytes
- docs/analysis/concepts/matt/worktree.md — 1290 bytes
- docs/analysis/concepts/matt/ready-for-review.md — 1196 bytes
- docs/analysis/concepts/matt/loop-me.md — 1769 bytes
- docs/analysis/concepts/matt/workflow.md — 1285 bytes
- docs/analysis/concepts/matt/grilling-discipline.md — 1361 bytes
- docs/analysis/concepts/matt/loop.md — 1211 bytes
- docs/analysis/concepts/matt/delegating.md — 1222 bytes
- docs/analysis/concepts/matt/trigger.md — 1141 bytes
- docs/analysis/concepts/matt/event.md — 1182 bytes
- docs/analysis/concepts/matt/schedule.md — 1128 bytes
- docs/analysis/concepts/matt/checkpoint.md — 1314 bytes
- docs/analysis/concepts/matt/push-right.md — 1324 bytes
- docs/analysis/concepts/matt/brief.md — 1313 bytes
- docs/analysis/concepts/matt/definition-of-done.md — 1320 bytes
- docs/analysis/concepts/matt/workflows-md.md — 920 bytes
- docs/analysis/concepts/matt/beta.md — 918 bytes
- docs/analysis/concepts/matt/writing-beats.md — 1486 bytes
- docs/analysis/concepts/matt/dependency-cruiser.md — 1109 bytes
- docs/analysis/concepts/matt/retro.md — 1690 bytes
- docs/analysis/concepts/matt/stub.md — 921 bytes
- docs/analysis/concepts/matt/retrospective.md — 1287 bytes
- docs/analysis/concepts/matt/navigation.md — 1415 bytes
- docs/analysis/concepts/matt/navigation-pointer.md — 1581 bytes
- docs/analysis/concepts/matt/coding-standards.md — 1551 bytes
- docs/analysis/concepts/matt/reviewer-agent.md — 1569 bytes
- docs/analysis/concepts/matt/global-agents-md.md — 1308 bytes
- docs/analysis/concepts/matt/tool-economy.md — 1537 bytes
- docs/analysis/concepts/matt/_units/cc-matt-33.md — this report

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/exploration-subagent.md docs/analysis/concepts/matt/markdown-notes.md docs/analysis/concepts/matt/draft-pr.md docs/analysis/concepts/matt/worktree.md docs/analysis/concepts/matt/ready-for-review.md docs/analysis/concepts/matt/loop-me.md docs/analysis/concepts/matt/workflow.md docs/analysis/concepts/matt/grilling-discipline.md docs/analysis/concepts/matt/loop.md docs/analysis/concepts/matt/delegating.md docs/analysis/concepts/matt/trigger.md docs/analysis/concepts/matt/event.md docs/analysis/concepts/matt/schedule.md docs/analysis/concepts/matt/checkpoint.md docs/analysis/concepts/matt/push-right.md docs/analysis/concepts/matt/brief.md docs/analysis/concepts/matt/definition-of-done.md docs/analysis/concepts/matt/workflows-md.md docs/analysis/concepts/matt/beta.md docs/analysis/concepts/matt/writing-beats.md docs/analysis/concepts/matt/dependency-cruiser.md docs/analysis/concepts/matt/retro.md docs/analysis/concepts/matt/stub.md docs/analysis/concepts/matt/retrospective.md docs/analysis/concepts/matt/navigation.md docs/analysis/concepts/matt/navigation-pointer.md docs/analysis/concepts/matt/coding-standards.md docs/analysis/concepts/matt/reviewer-agent.md docs/analysis/concepts/matt/global-agents-md.md docs/analysis/concepts/matt/tool-economy.md — exit 0 (38 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The concepts in `cc-matt-33` encompass four core in-progress skill domains in Matt's package:
  1. Multi-agent Implementation Pipeline (`implement-spec`): Defines the multi-agent task execution sequence (`exploration subagent`, `markdown notes`, `draft PR`, `worktree`, `ready for review`), isolating discovery from coding, utilizing git worktrees for parallel implementers, and establishing pull request lifecycle gates.
  2. Recursive Loop & Workflow Specification (`loop-me`): Details stateful grilling workflows extracting personal and professional automation loops (`Loop Me`, `workflow`, `grilling discipline`, `loop`, `delegating`, `Trigger`, `event`, `schedule`, `Checkpoint`, `Push right`, `Brief`, `Definition of done`, `workflows/*.md`).
  3. In-Progress Maturity & Tooling Infrastructure (`README.md`, `dependency-cruiser`, `writing-beats`): Documents maturity flags (`Beta`, `STUB`), dependency boundary enforcement via `dependency-cruiser`, and beat-driven writing techniques (`writing-beats`).
  4. Retrospective Analysis & Environment Tuning (`retro`): Codifies post-session reflection categories and architecture (`retro`, `retrospective`, `Navigation`, `navigation pointer`, `Coding standards`, `reviewer agent`, `Global AGENTS.md`, `Tool economy`). Reviewer agent roles operate under low context pressure on code diffs to enforce coding standards, while root steering files are guarded against bloat by delegating to navigation pointers.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~15,125 bytes (~3,400 tokens) across 6 source files and ~25,000 bytes (~5,500 tokens) across 6 citing inventory cards.
Approximate output written: ~40,000 bytes (~9,200 tokens) across 30 concept cards and this unit report.
