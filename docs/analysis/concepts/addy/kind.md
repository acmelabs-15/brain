---
package: addy
name: kind
slug: kind
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/idea-refine.json, sha256: 559741e57427aca454ce9546df49771c1929208f5b3a89974ddc76ed0a15a224}
  - {path: evals/cases/interview-me.json, sha256: 5fcd623b845d367ac360776008cee6d6bebec60bb2f16c175e5410424794886d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# kind

## Definition — verbatim
(used, not defined)
> "\"kind\": \"dialogue\"" — evals/cases/idea-refine.json:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/idea-refine.json | 32 | defined here | Eval case property defining the dialogue execution type. |
| evals/cases/interview-me.json | 32 | defined here | Eval case property defining the dialogue execution type. |

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
`kind` is a JSON schema configuration key in eval case files indicating the evaluation execution mode (e.g. dialogue vs code execution) rather than a development lifecycle concept.
