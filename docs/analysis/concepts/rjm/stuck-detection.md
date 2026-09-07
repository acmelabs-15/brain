---
package: rjm
name: stuck-detection
slug: stuck-detection
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-debugging-playbook/SKILL.md, sha256: 6a89af761d6faee8cc94834dcbe783cacdb47279071838e83a0fa0416eb3da11}
  - {path: .claude/skills/stuck-detection/SKILL.md, sha256: 2f9d0a80008c774d8d159505dfd7cc6cd42ffe2eafa704358716f9d12e71b1f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# stuck-detection

## Definition — verbatim
> "Detect agent conversation loops via topic-signature similarity and emit a self-reflection nudge. Use as an orchestrator guard against repetitive responses and token-burning loops." — .claude/skills/stuck-detection/SKILL.md:7-9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-debugging-playbook/SKILL.md | 77 | used here | References stuck-detection as the diagnostic pattern when looping on the same failed fix attempt. |
| .claude/skills/stuck-detection/SKILL.md | 2 | defined here | Skill frontmatter defines stuck-detection as an orchestrator guard against repetitive responses and token-burning loops. |

## Consumes
Agent conversation history and recent response topic signatures.

## Produces
Repetition loop detection verdicts and self-reflection nudges.

## When applied
When an agent exhibits repetitive patterns or loops on the same unsuccessful fix attempts.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, unfailable-gate

## Design notes
An orchestrator guard and diagnostic skill in rjm that prevents agents from burning context tokens in repetitive loops. By comparing recent response topic signatures, it detects thrashing and prompts the agent to halt shotgun-fixing and escalate to systematic investigation.
