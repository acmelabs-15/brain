---
package: matt
name: issue-template
slug: issue-template
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# issue-template

## Definition — verbatim
> "<issue-template>" — skills/engineering/to-tickets/SKILL.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/to-tickets/SKILL.md | 84 | defined here | Defines the template structure for tickets published to an issue tracker with Parent, What to build, Acceptance criteria, and Blocked by sections. |

## Consumes
A draft vertical slice ticket ready to be published to a remote issue tracker.

## Produces
A structured remote issue with Parent, What to build, Acceptance criteria, and Blocked by sections.

## When applied
Applied when publishing tickets to a configured issue tracker (GitHub, Linear) in step 5 of `/to-tickets`.

## Sub-concepts
none

## Part of
to-tickets

## Implementation status
defects: missing-path

## Design notes
A structured markdown template used by the `to-tickets` skill for publishing decomposed vertical slices to remote issue trackers. It standardizes parent tracking, user-facing behavior, verifiable acceptance criteria, and explicit blocker declarations while omitting transient file paths to prevent premature obsolescence.
