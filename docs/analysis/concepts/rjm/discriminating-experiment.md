---
package: rjm
name: discriminating experiment
slug: discriminating-experiment
kind: technique
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

# discriminating experiment

## Definition — verbatim
> "A \"discriminating experiment\" is one cheap action whose outcome splits the hypothesis space in two." — .claude/skills/ai-agents-debugging-playbook/SKILL.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-debugging-playbook/SKILL.md | 13 | defined here | Defines discriminating experiment as one cheap action whose outcome splits the hypothesis space in two. |

## Consumes
A debugging symptom and multiple competing failure hypotheses.

## Produces
An empirical observation that decisively eliminates half of the hypothesis space.

## When applied
Executed as the first action during failure triage before applying any code fixes.

## Sub-concepts
empirical-probe

## Part of
ai-agents-debugging-playbook

## Implementation status
defects: missing-path, unfailable-gate

## Design notes
A core scientific debugging technique in rjm designed to prevent shotgun-fixing. Instead of speculatively applying fixes based on hunches, the debugger formulates a cheap, targeted experiment (such as testing whether an error reproduces on main) that bifurcates the hypothesis space and pinpoints the actual root cause.
