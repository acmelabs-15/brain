---
package: matt
name: Notes
slug: notes
kind: artifact
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md, sha256: ea175f73d193b3f55819c0ed9bbccf6ee0e70ad8f928e3d7607596c53380acd6}
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Notes

## Definition — verbatim
> "An effort can override this in its **Notes**, carrying execution into the map itself" — skills/engineering/wayfinder/SKILL.md:13

## Also called — verbatim
`comments` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:10

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wayfinder.md | 58 | used here | Documents the vulnerability where an agent overrides wayfinder defaults via the map's Notes section. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md | 10 | used here | Notes that GitLab issue comments are called notes in the glab CLI. |
| skills/engineering/wayfinder/SKILL.md | 13 | defined here | Defines the Notes section of the wayfinder map issue as an override escape hatch for effort-specific guidance. |

## Consumes
Wayfinder map issue creation or issue discussion updates.

## Produces
Standing preferences, domain guidelines, or execution override instructions on a map issue, or issue comments in GitLab.

## When applied
Added to the body of a `wayfinder:map` issue to record standing effort context, or posted to GitLab issues via `glab issue note`.

## Sub-concepts
none

## Part of
wayfinder

## Implementation status
defects: other (Notes override permits agents to self-authorize execution inside the map, creating an escape hatch that bypasses the "plan, don't do" constraint)

## Design notes
Notes operates with two distinct meanings in Matt's package: structurally, it is a key section of a Wayfinder map issue holding standing context and override directives; in GitLab issue tracker integration, it refers to native issue comments managed via `glab issue note`. In Wayfinder, its ability to override the "plan, don't do" invariant creates a noted governance escape hatch.
