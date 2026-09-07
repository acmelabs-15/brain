---
package: rjm
name: check_model_pins.py
slug: check-model-pins-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_model_pins.py

## Definition — verbatim
(used, not defined)

> "`scripts/validation/check_model_pins.py` enforces this." — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 22 | used here | Cited as the validator script enforcing ADR-080 model pin justification policies across skills. |
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 179 | used here | Cited as the governance script asserting model pins on agent definition files. |

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
`check_model_pins.py` is a validation script filename rather than an autonomous software lifecycle concept, classified as `name-only` per D-023.
