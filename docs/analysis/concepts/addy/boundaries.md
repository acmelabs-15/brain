---
package: addy
name: boundaries
slug: boundaries
kind: pattern
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# boundaries

## Definition — verbatim
> "6. **Boundaries** — Three-tier system:" — skills/spec-driven-development/SKILL.md:110

## Also called — verbatim
`Known boundaries` — .gemini/commands/spec.toml:10

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/spec.toml | 10 | defines | Outlines clarifying question prompt regarding three-tier agent boundaries. |
| skills/spec-driven-development/SKILL.md | 110 | defines | Establishes the three-tier boundary model (Always do, Ask first, Never do) in the spec template. |

## Consumes
Project engineering policies, security standards, team conventions, and human constraints

## Produces
The Boundaries section of SPEC.md specifying rules across Always do, Ask first, and Never do tiers

## When applied
Defined during the initial specification phase (Phase 1: Specify) before planning or code generation begins.

## Sub-concepts
none

## Part of
spec-driven-development

## Implementation status
clean

## Design notes
Boundaries provide an explicit three-tier autonomy framework (Always do, Ask first, Never do) embedded in project specifications. By categorizing permissible and prohibited agent actions upfront, it prevents destructive decisions (such as committing secrets or removing failing tests) while granting autonomy for standard workflows.
