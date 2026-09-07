---
package: matt
name: UI variations
slug: ui-variations
kind: artifact
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: skills/engineering/prototype/UI.md, sha256: 723211e878acbc7b6ff09755263f3295cde724ba902ff0064da41eed51d45ad3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# UI variations

## Definition — verbatim
> "Generate **several radically different UI variations** on a single route, switchable from a floating bottom bar." — skills/engineering/prototype/UI.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/prototype.md | 20 | defined here | Defines UI variations as radically different structural designs switchable on a single route. |
| external/prototype.md | 35 | defined here | Recommends generating distinct UI variations switchable via floating bar when resolving appearance questions. |
| skills/engineering/prototype/UI.md | 3 | defined here | Instructs generating several radically different UI variations on a single route. |

## Consumes
A question regarding visual layout, density, or UI structure.

## Produces
Multiple contrasting layout variants implemented on a single route with switchable controls.

## When applied
Invoked when answering 'What should this look like?' prior to committing to a frontend design.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
UI variations are contrasting visual prototypes implemented concurrently on a single route. Rather than presenting subtle cosmetic differences ('wallpaper'), variations must explore radically different information architectures and densities, switchable in real time with production data.
