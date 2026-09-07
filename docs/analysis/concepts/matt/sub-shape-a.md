---
package: matt
name: sub-shape A
slug: sub-shape-a
kind: pattern
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

# sub-shape A

## Definition — verbatim
> "Sub-shape A: adjustment to an existing page (preferred)" — skills/engineering/prototype/UI.md:18

> "The route already exists. Variants are rendered **on the same route**, gated by a `?variant=` URL search param. The existing data fetching, params, and auth all stay. Only the rendering swaps. This is the default; pick it unless there's a specific reason not to." — skills/engineering/prototype/UI.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/prototype/UI.md | 18 | defined here | Strongly preferred UI prototype pattern rendering variants directly inside an existing application route against real data and headers. |

## Consumes
An existing application page route, along with its live data fetching, routing parameters, and authentication context.

## Produces
In-place variant switching where only the rendered UI subtree changes according to the ?variant parameter.

## When applied
Default approach for UI prototypes whenever an existing host page is available to contextualize the design.

## Sub-concepts
none

## Part of
ui-prototype

## Implementation status
clean

## Design notes
The preferred UI prototyping pattern where experimental variants are embedded directly into an existing application page, ensuring designs are judged against real application chrome, auth states, and data density rather than in an isolated vacuum.
