---
package: addy
name: .constraintsignore
slug: constraintsignore
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: skills/constraint-driven-development/references/floor-guard.md, sha256: dba15dad8f5a5cbae464ec8457e6dd014a7bcb3ad13a360a6908d54991a5415e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .constraintsignore

## Definition — verbatim
> "lets you exempt a path the guard would otherwise flag; check each added line's file against it before flagging, so a genuine exception is a tracked file rather than a loosened rule." — skills/constraint-driven-development/references/floor-guard.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 98 | defines | Ignore file specifying file path glob patterns exempted from floor guard checks |

## Consumes
File glob patterns identifying repository paths legitimately exempted from floor checks.

## Produces
A path-level ignore list evaluated by the floor guard before flagging rule violations.

## When applied
Consulted during diff-scoped floor guard execution to bypass false positives or intentional legacy exceptions.

## Sub-concepts
none

## Part of
floor-guard, constraint-driven-development

## Implementation status
clean

## Design notes
A repository configuration artifact that allows teams to exempt specific paths from floor guard checks using glob patterns. By maintaining exemptions in a tracked git file rather than altering automated check scripts or relaxing global constraints, exceptions remain transparent, auditable, and version-controlled.
