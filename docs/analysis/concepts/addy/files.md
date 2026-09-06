---
package: addy
name: files
slug: files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/source-driven-development.json, sha256: df9c000800d1c7e3f46012ee7b6de07b67d1af8e98917921130cc3accc072464}
  - {path: evals/cases/spec-driven-development.json, sha256: e6e637aad5de3e7dcec37ba6a3ae4ccf5f4394057a5a2266efb3e5f224ca719c}
  - {path: evals/cases/test-driven-development.json, sha256: b038011ea007a91aee8b92cb0fca7493c92f4027e2a6560d674bb4977fe4bf56}
  - {path: evals/cases/using-agent-skills.json, sha256: 19a914ca18cc5881fb1f89eb4e16b2ccdfb7cbd4e26db03f598a7819b3b80f2f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# files

## Definition — verbatim
(used, not defined)
> "files" — evals/cases/source-driven-development.json:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/source-driven-development.json | 34 | defines | Specifies the JSON array property key enumerating fixture files for source-driven development evaluation. |
| evals/cases/spec-driven-development.json | 46 | defines | Specifies the JSON array property key enumerating fixture files for spec-driven development evaluation. |
| evals/cases/test-driven-development.json | 34 | defines | Specifies the JSON array property key enumerating fixture files for test-driven development evaluation. |
| evals/cases/using-agent-skills.json | 33 | defines | Specifies the JSON array property key enumerating fixture files for using-agent-skills evaluation. |

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
files is a JSON property name in evaluation case schemas defining fixture file dependencies rather than a lifecycle concept.
