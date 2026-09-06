---
package: addy
name: User scope
slug: user-scope
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

# User scope

## Definition — verbatim
(used, not defined)
> "**User scope** (installs into `~/.commandcode/skills/`, available in every project):" — docs/commandcode-setup.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/commandcode-setup.md | 23 | defines | Installation directory boundary scoping skills globally across user projects |

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
User scope designates a global user-level directory installation location for CLI tooling rather than a software development lifecycle concept.
