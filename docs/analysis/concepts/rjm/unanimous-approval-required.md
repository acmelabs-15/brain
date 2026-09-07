---
package: rjm
name: Unanimous Approval Required
slug: unanimous-approval-required
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Unanimous Approval Required

## Definition — verbatim
> "**Unanimous Approval Required**: All 4 agents must approve." — .claude/skills/slashcommandcreator/SKILL.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/SKILL.md | 94 | defined here | Gate rule establishing that all four validation agents must approve before command implementation proceeds. |

## Consumes
Review verdicts from Security, Architect, Independent-Thinker, and Critic agents.

## Produces
Unanimous go/no-go verdict authorizing progression to Phase 4 implementation.

## When applied
Evaluated at the conclusion of Phase 3 multi-agent validation.

## Sub-concepts
none

## Part of
multi-agent-validation, slashcommandcreator

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A strict consensus gate requiring explicit, unanimous sign-off across all four validation agents, ensuring that no single security risk, architectural defect, unnecessary complexity, or documentation omission is overlooked.
