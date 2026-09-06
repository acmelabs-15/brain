---
package: matt
name: models
slug: models
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# models

## Definition — verbatim
(used, not defined)

> "The verbosity looks like a property of the current set of [models](https://www.aihero.dev/ai-coding-dictionary/model) rather than of the skill, and no fix has landed." — docs/engineering/wayfinder.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/domain-modeling.md | 9 | used here | Cited in discussion of automatic skill invocation where models frequently load grilling and omit domain-modeling. |
| docs/engineering/wayfinder.md | 81 | used here | Referenced regarding model-inherent verbosity causing decision fatigue during ticket mapping. |
| docs/productivity/grilling.md | 61 | used here | Discussed regarding lower-effort models prematurely breaking confirmation gates and starting implementation. |
| external/wayfinder.md | 66 | used here | Mentioned in external documentation as the parameter engines exhibiting verbose decomposition behaviors. |

## Consumes
Prompts, instructions, repository documentation, and tool outputs.

## Produces
Reasoning tokens, conversational turns, and tool call invocations.

## When applied
Throughout all agent sessions as the core inference engine executing instructions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other (automatic invocation failures where models skip domain-modeling in docs/engineering/domain-modeling.md:9-10; lower-effort models bypassing confirmation gates in docs/productivity/grilling.md:61; excessive verbosity in docs/engineering/wayfinder.md:81)

## Design notes
The underlying foundation large language models (Claude, GPT, etc.) powering coding agents. Matt's lifecycle observes significant variance across models in activation thresholds, verbosity, and willingness to respect human confirmation gates.
