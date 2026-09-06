---
package: addy
name: skill discovery flowchart
slug: skill-discovery-flowchart
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: hooks/session-start.sh, sha256: 2ea42e7077f606f793f5e7704f593d26ea9bcf231c6f32a7ed17df5c727a63ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skill discovery flowchart

## Definition — verbatim
(used, not defined)
> "agent-skills loaded. Use the skill discovery flowchart to find the right skill for your task." — hooks/session-start.sh:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/session-start.sh | 22 | used here | Referenced in startup preface to direct agents to the flowchart in using-agent-skills |

## Consumes
User task description or development objective

## Produces
Selection of the appropriate specialized skill or command

## When applied
At session start or whenever an agent needs to determine which skill applies to a user request

## Sub-concepts
none

## Part of
using-agent-skills

## Implementation status
clean

## Design notes
Visual and logical decision diagram in `using-agent-skills` that routes tasks across Addy's skill catalog, ensuring agents load relevant domain procedures rather than guessing.
