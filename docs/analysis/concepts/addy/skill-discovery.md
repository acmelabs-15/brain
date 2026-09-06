---
package: addy
name: Skill Discovery
slug: skill-discovery
kind: technique
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

# Skill Discovery

## Definition — verbatim
> "When a task arrives, identify the development phase and apply the corresponding skill:" — skills/using-agent-skills/SKILL.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/using-agent-skills/SKILL.md | 12 | defined here | Core routing decision tree mapping incoming tasks across six development phases to 24 specialized engineering skills. |

## Consumes
Incoming task descriptions, user prompts, problem domain signals, current development phase.

## Produces
Selection and invocation of the appropriate specialized skill or multi-skill workflow.

## When applied
At session start or whenever a new task, feature request, or problem arrives.

## Sub-concepts
none

## Part of
using-agent-skills

## Implementation status
defects: cross-file-contradiction, internal-contradiction, doc-drift

## Design notes
The central dispatch mechanism in Addy's meta-skill architecture, matching incoming requests and current development phases against a structured decision tree to select the right skill from the 24-skill library.
