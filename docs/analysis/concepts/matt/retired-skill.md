---
package: matt
name: retired skill
slug: retired-skill
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: true
memo_inputs:
  - {path: skills/deprecated/README.md, sha256: 8b2009e31b7353f318a4321901b1141377e4d395f092934bacde7e9c5b070e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# retired skill

## Definition — verbatim
> "Skills I no longer use. This bucket is currently empty: a retired skill is deleted, and the changeset that removes it names whatever replaced it." — skills/deprecated/README.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecated/README.md | 3 | defined here | Defines the retirement policy where obsolete skills are deleted and documented in changesets. |

## Consumes
An obsolete skill designated for removal.

## Produces
Deletion of the skill from the repository and a changeset entry specifying its replacement.

## When applied
When a skill is no longer used and is retired from active maintenance.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Represents Matt's deprecation and retirement lifecycle policy. Instead of accumulating unmaintained files in an in-tree deprecation folder, retired skills are deleted immediately with release changelogs documenting replacements.
