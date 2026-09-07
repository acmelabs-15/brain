---
package: rjm
name: Detection-neutral craft techniques
slug: detection-neutral-craft-techniques
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md, sha256: 51df9b36a717cc5e44165fbb2928f27609494f6c5d6ec05165224a3f300d6b27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Detection-neutral craft techniques

## Definition — verbatim
> "Detection-neutral craft techniques (concrete-first writing, naming, human-moment anchoring, aphoristic destinations) improve quality without moving the AI score." — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md | 53 | defined here | Defined as writing methods that elevate prose quality without triggering higher detection scores or degrading tone. |

## Consumes
Writing objectives requiring human voice without triggering the anti-correlated penalties of detection evasion prompts.

## Produces
Authentic, concrete text improvements (concrete-first writing, human-moment anchoring, naming) that maintain quality.

## When applied
When engineering prompts for voice, tone, and long-form written output where quality is paramount.

## Sub-concepts
structural-unpredictability

## Part of
none

## Implementation status
clean

## Design notes
Detection-neutral craft techniques represent the only safe improvement vector identified in detection cliff research. Instead of attempting to manipulate detector metrics, these techniques focus on concrete storytelling, human-moment anchoring, and clear phrasing that genuinely improve readability while leaving detector scores unaffected.
