---
package: matt
name: sub-shape B
slug: sub-shape-b
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

# sub-shape B

## Definition — verbatim
> "Sub-shape B: a new page (last resort)" — skills/engineering/prototype/UI.md:24

> "Only use this when the thing being prototyped genuinely has no existing page to live inside (e.g. an entirely new top-level surface, or a flow that can't be embedded anywhere sensible)." — skills/engineering/prototype/UI.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/prototype/UI.md | 24 | defined here | Fallback UI prototype pattern creating a dedicated throwaway route when the feature has no existing host page. |

## Consumes
A new top-level surface or user flow that cannot sensibly be embedded in any existing route.

## Produces
A dedicated throwaway route hosting the variant switcher and candidate components.

## When applied
Last-resort approach for UI prototypes when no suitable existing host page exists.

## Sub-concepts
throwaway-route

## Part of
ui-prototype

## Implementation status
clean

## Design notes
A fallback UI prototyping pattern used only when a feature has no natural existing host page, deploying variants onto a dedicated throwaway route while maintaining the same URL search param and switcher controls.
