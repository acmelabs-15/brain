---
package: rjm
name: Parameterize constructor
slug: parameterize-constructor
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Parameterize constructor

## Definition — verbatim
> "**Parameterize constructor**: a class news up its own collaborator inside the constructor. Move the construction out to a parameter with a sensible default. Tests pass a fake; production passes the default." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 127 | defined here | Defined as moving collaborator construction out of a constructor body into a parameter with a sensible default. |

## Consumes
A class that instantiates its own collaborators inside its constructor.

## Produces
An optional constructor parameter with a default instance, exposing an injection seam.

## When applied
Applied when hard-coded collaborator instantiation inside a constructor prevents unit test isolation.

## Sub-concepts
none

## Part of
dependency-breaking-technique

## Implementation status
clean

## Design notes
A dependency-breaking technique converting hard-coded internal collaborator instantiations into constructor parameters, allowing test injection while preserving production defaults.
