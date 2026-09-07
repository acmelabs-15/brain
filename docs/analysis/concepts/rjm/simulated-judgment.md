---
package: rjm
name: simulated judgment
slug: simulated-judgment
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# simulated judgment

## Definition — verbatim
(used, not defined)

> "4. Where is it most exposed to simulated judgment?" — .claude/skills/world-model-diagnostic/SKILL.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/world-model-diagnostic/SKILL.md | 21 | used here | Diagnostic vulnerability inquiry identifying where AI generates superficial plausibility without true comprehension. |

## Consumes
Unstructured text, unvalidated model generations, and prompt outputs lacking grounding.

## Produces
Identified exposure points and risk mitigation actions to protect critical operational decisions.

## When applied
Audited during boundary analysis and required as a top-three exposure analysis in the final recommendation.

## Sub-concepts
none

## Part of
world-model-diagnostic

## Implementation status
defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2)

## Design notes
An organizational and technical failure mode highlighted by rjm where generative models produce outputs that superficially resemble expert human judgment but lack factual grounding or causal reasoning. Auditing exposures to simulated judgment protects workflows from brittle automation in high-stakes domains.
