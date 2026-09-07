---
package: matt
name: effort
slug: effort
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# effort

## Definition — verbatim
(used, not defined)

> "If a single ticket keeps blowing out, split it rather than raising the [effort](https://www.aihero.dev/ai-coding-dictionary/effort) level." — docs/engineering/implement.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/grill-with-docs.md | 52 | used here | Notes that failure to load skill dependencies correlates with model choice and reasoning effort levels. |
| docs/engineering/implement.md | 71 | used here | Advises splitting oversized tickets upstream rather than artificially raising the model effort level. |
| external/implement.md | 59 | used here | Discusses ticket sizing levers versus increasing effort level when runs blow past token budgets. |

## Consumes
none

## Produces
none

## When applied
Configured during model invocation or agent harness setup to allocate compute/reasoning depth.

## Sub-concepts
none

## Part of
ai-coding-dictionary

## Implementation status
clean

## Design notes
Effort represents the reasoning effort level allocated to the language model. Matt Pocock treats effort level as an inferior lever compared to architectural scoping: when tasks fail or blow past token limits, the appropriate remedy is upstream ticket decomposition in to-tickets rather than simply dialing up inference effort.
