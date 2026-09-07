---
package: matt
name: drill
slug: drill
kind: technique
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# drill

## Definition — verbatim
> "A quiz is a gate, not a formality: one user reported saying &quot;thanks a lot&quot; and being told the drill was still live." — external/teach.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/teach.md | 39 | defined here | Defined as an active, mandatory practice exercise that enforces tight feedback and refuses to close until resolved. |

## Consumes
Lesson content, quiz components from assets/, and learner responses.

## Produces
Verifiable learner demonstration of skill retention and updated learning records.

## When applied
Following the conceptual instruction of a lesson to test comprehension through active practice.

## Sub-concepts
none

## Part of
teach

## Implementation status
defects: orphan, doc-drift, missing-path

## Design notes
A drill is an active practice exercise within the teach skill executed via a tight feedback loop where difficulty is utilized as a learning tool. Unlike passive reading, a drill refuses to accept superficial acknowledgment, holding the user accountable until retention and understanding are demonstrated.
