---
package: rjm
name: merge-resolver
slug: merge-resolver
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .claude/skills/merge-resolver/SKILL.md, sha256: 88f9d20e41d105ded6fc9244d9035c51fb0130fbaf4c9cb430d8fbe1840a90b1}
  - {path: .claude/skills/orphan-ref-validator/scripts/counts.py, sha256: 086ca656c2ab398e7f5ca5d88143b1ad092a965e3bc2757d6816c055f0da8213}
  - {path: .github/scripts/invoke_pr_maintenance.py, sha256: 8dd50236d9f75e15ad2d420781c4ac4c220c25edfbbe428b53a2d8044ad449b3}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# merge-resolver

## Definition — verbatim
> "Resolves git merge conflicts by analyzing commit history and code intent" — .agents/AGENT-SYSTEM.md:311

## Also called — verbatim
> "Resolve git/PR merge conflicts" — README.md:417

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 307 | defined here | Agent catalog entry detailing inputs, outputs, conflict analysis, and heuristic resolution. |
| .claude/skills/merge-resolver/SKILL.md | 2 | defined here | Skill frontmatter declaring automated git merge conflict resolution capabilities. |
| .claude/skills/merge-resolver/SKILL.md | 15 | defined here | Heading and overview documenting conflict resolution strategies. |
| .claude/skills/orphan-ref-validator/scripts/counts.py | 19 | used here | Validation script referencing merge-resolver invocation counts. |
| .github/scripts/invoke_pr_maintenance.py | 433 | used here | PR maintenance automation script routing merge conflict resolution. |
| docs/agent-catalog.md | 32 | used here | Catalog summary detailing git conflict resolution and confidence scoring. |
| README.md | 417 | defined here | Agent table entry documenting role for resolving git and PR merge conflicts. |
| scripts/validation/check_shipped_skill_routes.py | 21 | used here | Validation script verifying shipped routes for merge-resolver skill. |
| src/claude/AGENTS.md | 162 | used here | Claude Code agent catalog mapping merge-resolver role. |

## Consumes
PR branches or git trees with merge conflicts, base and head branch references, commit histories.

## Produces
Resolved conflict files, resolution reports with confidence scores, clean merge commits with documented rationale.

## When applied
Applied when a PR branch has diverged from its base branch and automated or manual rebase encounters conflicting edits.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
Specialized agent for reconciling divergent git branches and merge conflicts. By analyzing commit intent, AST differences, and historical change context rather than performing blind three-way text merges, merge-resolver resolves conflicts systematically while ensuring semantic consistency and test suite integrity.
