---
package: rjm
name: guard
slug: guard
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-debugging-playbook/SKILL.md, sha256: 6a89af761d6faee8cc94834dcbe783cacdb47279071838e83a0fa0416eb3da11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# guard

## Definition — verbatim
> "a \"guard\" is a PreToolUse or pre-push hook that can block an action (exit 2 blocks, exit 0 allows)." — .claude/skills/ai-agents-debugging-playbook/SKILL.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-debugging-playbook/SKILL.md | 13 | defined here | Defines guard vocabulary as a PreToolUse or pre-push hook that can block an action with exit code 2. |

## Consumes
Tool use invocations or git push events.

## Produces
Binary allow (exit 0) or block (exit 2) execution decisions.

## When applied
Executed automatically prior to tool invocation or git push to enforce invariants and block hazardous operations.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: missing-path, unfailable-gate

## Design notes
In rjm's architecture, a guard is an active enforcement hook (PreToolUse or pre-push) that intercepts operations and returns a binary pass/block verdict (exit 0 allows, exit 2 blocks). Distinct from passive linters or CI reports, guards execute locally to prevent unverified or damaging changes from reaching the tree or remote repository.
