---
package: matt
name: PrototypeSwitcher
slug: prototypeswitcher
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/prototype/UI.md, sha256: 723211e878acbc7b6ff09755263f3295cde724ba902ff0064da41eed51d45ad3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PrototypeSwitcher

## Definition — verbatim
> "<PrototypeSwitcher variants={['A','B','C']} current={variant} />" — skills/engineering/prototype/UI.md:68

> "Put the switcher in a single shared component so both sub-shapes can reuse it. Locate it wherever shared UI lives in the project." — skills/engineering/prototype/UI.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/prototype/UI.md | 68 | defined here | Exemplified as the reusable switcher component wired with variant identifiers and current selection on the route. |

## Consumes
An array of variant keys and the currently selected variant identifier.

## Produces
An interactive switcher component rendering cycling arrows, variant labels, and keyboard navigation.

## When applied
Wired into a route or page to enable switching among prototype UI variants.

## Sub-concepts
none

## Part of
ui-prototype

## Implementation status
clean

## Design notes
A reusable UI component that renders the floating prototype switching bar, managing navigation controls, URL synchronization, and keyboard shortcuts across UI variants.
