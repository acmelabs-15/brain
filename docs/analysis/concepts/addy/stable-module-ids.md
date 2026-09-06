---
package: addy
name: Stable module ids
slug: stable-module-ids
kind: pattern
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

# Stable module ids

## Definition — verbatim
> "Kebab-case, chosen once, never renamed mid-initiative. Specs, plans, and downstream commands select work by these ids instead of guessing which spec is active." — skills/spec-driven-development/SKILL.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/spec-driven-development/SKILL.md | 59 | defined here | Defines naming and stability constraints for module identifiers in capability maps. |

## Consumes
Decomposed capabilities from Phase 0 capability mapping.

## Produces
Immutable kebab-case identifiers used across specs, plans, filenames (`SPEC-<id>.md`), and downstream commands.

## When applied
When proposing and approving a capability map during Phase 0: Scope Check.

## Sub-concepts
none

## Part of
phase-0-scope-check

## Implementation status
defects: doc-drift

## Design notes
An identification convention establishing immutable kebab-case module identifiers during capability decomposition, ensuring that downstream commands and specifications reference unambiguous, persistent targets.
