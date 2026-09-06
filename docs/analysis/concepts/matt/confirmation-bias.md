---
package: matt
name: confirmation bias
slug: confirmation-bias
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# confirmation bias

## Definition — verbatim
> "Same context reviewing itself isn't review, it's confirmation bias with a slash command." — docs/engineering/code-review.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/code-review.md | 60 | used here | Quoted by a reader to warn against running code reviews in the same session that authored code. |
| external/code-review.md | 51 | used here | Quoted in web documentation to emphasize using fresh sessions for independent reviews. |

## Consumes
Authoring session context containing unexamined implementation assumptions.

## Produces
Operational rule mandating that code reviews run in fresh, unpolluted sessions.

## When applied
Considered when invoking `/code-review` after code generation or modification.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other (running reviews within authoring sessions reproduces author bias; implement workflow invokes review pre-commit)

## Design notes
Cognitive and architectural hazard where an agent reviewing its own recent code output shares all the assumptions that produced the defects. Mandates running reviews in clean sessions with independent sub-agents.
