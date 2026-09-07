---
package: rjm
name: needs-split
slug: needs-split
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
  - {path: .claude/skills/ai-agents-debugging-playbook/SKILL.md, sha256: 6a89af761d6faee8cc94834dcbe783cacdb47279071838e83a0fa0416eb3da11}
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: scripts/ci/update_needs_split_label.py, sha256: 3d780d84f7cfe2159df2510cb32a9f3f547d69615c5f073d678d5fb3e174dd03}
  - {path: scripts/validation/pr_commit_count.py, sha256: cb5a32b3515c33d1b879c79b391d4c3df5a688b7ab3d8933c89c30cbaa1eac3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# needs-split

## Definition — verbatim
> "Warning notice in PR" — CONTRIBUTING.md:845

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 71 | used here | Cited in PR #4846 review history as an advisory label signaling oversized PRs. |
| .claude/skills/ai-agents-debugging-playbook/SKILL.md | 87 | used here | Referenced in debugging playbook as an advisory label indicating PR split opportunities. |
| .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md | 133 | used here | Described as an advisory label applied when commit thresholds reach warning/alert levels. |
| .claude/skills/autoplan/SKILL.md | 69 | used here | Evaluated during autoplan PR reconnaissance to gauge task scope without blocking. |
| CONTRIBUTING.md | 845 | defined here | Documented in contributor table as an advisory label applied at 10 and 15 commits. |
| scripts/ci/update_needs_split_label.py | 12 | used here | Target label managed by CI script to dynamically add or remove based on commit count. |
| scripts/validation/pr_commit_count.py | 15 | used here | Retained as a purely advisory label indicating large commit counts without blocking PRs. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path, orphan, other, unfailable-gate

## Design notes
An advisory GitHub PR label applied when commit counts reach warning or alert thresholds, classified as name-only per D-023 as an issue tracker label identifier.
