---
package: addy
name: Keeping the Spec Alive
slug: keeping-the-spec-alive
kind: technique
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Keeping the Spec Alive

## Definition — verbatim
> "## Keeping the Spec Alive" — skills/spec-driven-development/SKILL.md:204
> "The spec is a living document, not a one-time artifact:" — skills/spec-driven-development/SKILL.md:206

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/spec-driven-development/SKILL.md | 204 | defined here | Defines disciplines and practices for keeping specifications updated throughout the lifecycle. |

## Consumes
Architectural modifications, data model revisions, and scope adjustments discovered during development.

## Produces
Updated specification files kept under version control and cited in pull requests.

## When applied
Continuously throughout the implementation phase whenever design assumptions or scope boundaries evolve.

## Sub-concepts
none

## Part of
spec-driven-development

## Implementation status
defects: doc-drift

## Design notes
A lifecycle discipline treating specifications as living artifacts, mandating that changes to requirements, data models, or scope update the specification in version control prior to code modification.
