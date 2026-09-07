---
package: matt
name: UI Prototype
slug: ui-prototype
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

# UI Prototype

## Definition — verbatim
> "Generate **several radically different UI variations** on a single route, switchable from a floating bottom bar. The user flips between variants in the browser, picks one (or steals bits from each), then throws the rest away." — skills/engineering/prototype/UI.md:3

## Also called — verbatim
`UI variations` — skills/engineering/prototype/UI.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/prototype/UI.md | 1 | defined here | Documented as an exploratory prototype shape generating multiple structurally distinct UI variants on a route switchable via a floating bar. |

## Consumes
A visual layout question or user interface dilemma, along with an existing host route or new throwaway route.

## Produces
3 to 5 structurally distinct UI variant components switchable via URL parameters and a floating bottom bar.

## When applied
When exploring what a user interface should look like before committing to production design and implementation.

## Sub-concepts
floating-bottom-bar, sub-shape-a, sub-shape-b, throwaway-route, variants, prototypeswitcher

## Part of
prototype

## Implementation status
clean

## Design notes
An exploratory prototyping approach that generates multiple radically different UI layouts on a single route with a floating switcher bar, enabling rapid user evaluation in realistic context before committing to final UI design.
