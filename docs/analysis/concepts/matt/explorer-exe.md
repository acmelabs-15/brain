---
package: matt
name: explorer.exe
slug: explorer-exe
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/wizard/template.sh, sha256: 33cbe9dfb1d0e9185b60248a52aabed14bc64785a00cac695e302e739dd6c153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# explorer.exe

## Definition — verbatim
(used, not defined)

> "command -v explorer.exe" — skills/engineering/wizard/template.sh:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wizard/template.sh | 70 | used here | Second fallback command attempted by open_url for opening URLs in Windows/WSL environments. |

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
`explorer.exe` is the Windows operating system shell executable used as a cross-platform URL launcher rather than an operational lifecycle concept.
