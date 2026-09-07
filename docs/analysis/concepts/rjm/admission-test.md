---
package: rjm
name: Admission test
slug: admission-test
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/model-context-doctrine.md, sha256: 5a2eaa014a39bd72096176f55872704d4ec5cb4a145785484cf6a615ae5b0be6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Admission test

## Definition — verbatim
> "Always-on content earns its slot only if it passes all three:" — .claude/skills/context-optimizer/references/model-context-doctrine.md:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/model-context-doctrine.md | 86 | defined here | Heading and definition of the 3-part gate governing whether content qualifies for always-on prompt placement. |

## Consumes
Candidate always-on prompt instructions, rules, and documentation snippets.

## Produces
Admission verdict: placement in always-on passive context versus progressive disclosure.

## When applied
Applied during rule audits, skill authoring, and system prompt reviews before admitting new always-on content.

## Sub-concepts
tiebreaker

## Part of
model-context-doctrine

## Implementation status
clean

## Design notes
A 3-part quality gate in rjm governing system prompt inclusions: content is admitted only if (1) the model cannot know it, (2) it cannot be retrieved on demand via skills, and (3) getting it wrong causes expensive or irreversible damage.
