---
package: addy
name: Skill Rules
slug: skill-rules
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/using-agent-skills/SKILL.md, sha256: 8bdbecb2f98cff2dbb70b3852c67d8dca179b27d2b1042aac040866d258ad471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Skill Rules

## Definition — verbatim
> "1. **Check for an applicable skill before starting work.** Skills encode processes that prevent common mistakes." — skills/using-agent-skills/SKILL.md:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/using-agent-skills/SKILL.md | 131 | defined here | Four core governance rules establishing that skills are mandatory workflows rather than optional suggestions. |

## Consumes
Skill library, task requirements, execution flow.

## Produces
Ordered execution of relevant skills, starting with specifications when requirements are non-trivial.

## When applied
Before initiating work and throughout workflow progression across tasks.

## Sub-concepts
none

## Part of
using-agent-skills

## Implementation status
defects: cross-file-contradiction, internal-contradiction, doc-drift

## Design notes
Four governing principles establishing skills as mandatory step-by-step processes rather than suggestions, mandating skill discovery before action and spec-driven starts for non-trivial tasks.
