---
package: addy
name: TUI slash menu
slug: tui-slash-menu
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/commandcode-setup.md, sha256: 6305e672cd15c1dd709d7a2b307dca4bbf2704328654f8b3a5f37c495d3cf31c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# TUI slash menu

## Definition — verbatim
(used, not defined)
> "Installed skills are discovered automatically and appear in the TUI slash menu, tagged `[skill]`:" — docs/commandcode-setup.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/commandcode-setup.md | 49 | defines | Text-based user interface popup menu displaying installed commands and skills |

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
TUI slash menu is an interactive terminal UI widget in Command Code for selecting commands rather than a lifecycle concept.
