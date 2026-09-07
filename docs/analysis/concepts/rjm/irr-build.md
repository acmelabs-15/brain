---
package: rjm
name: "irr_build"
slug: irr-build
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py, sha256: 12d5e6321feed9b98ac6602cf514da5d873e188dcfd268dad4e556513febe92b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# irr_build

## Definition — verbatim
(used, not defined)

> "irr_build: float" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py | 31 | defined here | Dataclass field definition recording the calculated internal rate of return for building. |

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
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
A Python dataclass field identifier in `calculate_tco.py` storing the calculated internal rate of return for in-house development rather than an operational lifecycle concept, authored with kind name-only per D-023.
