---
package: matt
name: xdg-open
slug: xdg-open
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

# xdg-open

## Definition — verbatim
(used, not defined)

> "command -v xdg-open" — skills/engineering/wizard/template.sh:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wizard/template.sh | 71 | used here | Third fallback command attempted by open_url for opening URLs on standard Linux desktop environments. |

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
`xdg-open` is a standard Linux FreeDesktop command-line utility used by `template.sh` to open URLs in the user's default browser rather than an operational lifecycle concept.
