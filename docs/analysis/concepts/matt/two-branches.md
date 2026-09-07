---
package: matt
name: Two branches
slug: two-branches
kind: pattern
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

# Two branches

## Definition — verbatim
> "The question picks the branch, and the branches produce very different artifacts:" — external/prototype.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/prototype.md | 31 | defined here | Section heading dividing prototyping into logic/state demos and UI route variations. |

## Consumes
The nature of the design question being investigated (logic/state behavior vs visual layout).

## Produces
Clear architectural division between standalone HTML logic prototypes and route-integrated UI variants.

## When applied
"The question picks the branch, and the branches produce very different artifacts:" — external/prototype.md:32

## Sub-concepts
free-play-buttons, pure-module, variant

## Part of
the-prototype-skill

## Implementation status
defects: orphan (external/prototype.md:1), doc-drift (external/prototype.md:44), doc-drift (external/prototype.md:46), other (external/prototype.md:48)

## Design notes
Taxonomic pattern that structures prototyping into two distinct execution paths: a logic branch producing a zero-dependency HTML file with state panels and guided walkthroughs, and a UI branch providing switchable layout variations on a live route.
