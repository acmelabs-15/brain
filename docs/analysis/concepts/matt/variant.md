---
package: matt
name: ?variant=
slug: variant
kind: technique
package_phase: matt:Shaping
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ?variant=

## Definition — verbatim
> "several <strong class=\"ah-prose-strong\">radically different</strong> UI variations on one route, switchable from a floating bottom bar and a <code class=\"ah-code-inline\">?variant=</code> URL param." — external/prototype.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/prototype.md | 35 | defined here | URL query parameter mechanism for switching between distinct UI layout prototypes on a live route. |

## Consumes
Multiple competing visual or structural layouts for a specific application screen.

## Produces
Interactive URL-switchable variants allowing side-by-side comparative evaluation in a realistic browser context.

## When applied
When investigating layout and presentation questions on existing application routes with live data.

## Sub-concepts
none

## Part of
the-prototype-skill, two-branches

## Implementation status
defects: orphan (external/prototype.md:1), doc-drift (external/prototype.md:44)

## Design notes
A query-parameter switching technique that enables rapid switching between radically different UI layout prototypes on a single production route, ensuring variants are evaluated against real layout density and live data rather than in an isolated vacuum.
