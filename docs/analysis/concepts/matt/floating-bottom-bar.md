---
package: matt
name: floating bottom bar
slug: floating-bottom-bar
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

# floating bottom bar

## Definition — verbatim
> "Generate **several radically different UI variations** on a single route, switchable from a floating bottom bar." — skills/engineering/prototype/UI.md:3

> "A small fixed-position bar at the bottom-centre of the screen with three pieces:" — skills/engineering/prototype/UI.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/prototype/UI.md | 3 | defined here | Defined as the fixed-position bottom navigation control enabling instant cycling across prototype UI variants. |

## Consumes
A set of UI variants and the current variant selection.

## Produces
An on-screen navigation bar allowing instant cycling between prototype variants via buttons and keyboard arrow keys.

## When applied
Mounted on the prototype route to enable interactive evaluation across all variants.

## Sub-concepts
none

## Part of
ui-prototype

## Implementation status
clean

## Design notes
A fixed-position UI navigation component anchored at the bottom-center of the screen during UI prototyping, providing arrow buttons, variant labels, and keyboard bindings to cycle between layout variants without reloading the page.
