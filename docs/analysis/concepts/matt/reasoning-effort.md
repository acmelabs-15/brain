---
package: matt
name: reasoning effort
slug: reasoning-effort
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# reasoning effort

## Definition — verbatim
(used, not defined)
> "Practitioner mitigations in circulation: run a lower [reasoning effort](https://www.aihero.dev/ai-coding-dictionary/effort), and put a plain-language instruction in your global `CLAUDE.md`." — docs/engineering/wayfinder.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/wayfinder.md | 81 | used here | Recommends tuning reasoning effort down to mitigate model verbosity during grilling. |
| docs/productivity/teach.md | 80 | used here | Notes that higher reasoning effort produces noticeably better interactive lessons. |
| external/teach.md | 60 | used here | External doc noting correlation between reasoning effort level and lesson depth. |
| external/wayfinder.md | 66 | used here | External guide mitigation suggesting lower reasoning effort to combat decision exhaustion. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`reasoning effort` is an LLM inference parameter controlling thinking depth during generation rather than a software lifecycle concept, classified as `kind: name-only` per D-023.
