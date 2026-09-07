---
package: matt
name: single-context
slug: single-context
kind: pattern
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: skills/engineering/domain-modeling/CONTEXT-FORMAT.md, sha256: 17ab16ce783e4d2801ee52fd9acdf550cbf44de65ae76797a93943bbedf22a13}
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# single-context

## Definition — verbatim
> "**Single context (most repos):** One `CONTEXT.md` at the repo root." — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/setup-matt-pocock-skills.md | 37 | defined here | Section heading distinguishing single-context repositories from multi-context architectures. |
| skills/engineering/domain-modeling/CONTEXT-FORMAT.md | 34 | defined here | Defines the standard single-context layout placing a single CONTEXT.md at repository root. |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 59 | used here | Execution branch instructing the agent to write a single docs/domain.md template when selected. |

## Consumes
A codebase where domain terms share a unified, unambiguous meaning across all components.

## Produces
A unified docs/domain.md or CONTEXT.md file without sub-domain folder hierarchies.

## When applied
Applied by default when words do not have contradictory definitions in different subsystems.

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
clean (in repository skills; external documentation notes doc-drift and internal-contradiction)

## Design notes
Single-context is the default structural pattern for domain modeling in Matt's framework. It recognizes that the vast majority of software repositories share a single coherent domain model. By restricting documentation to a single file, it avoids premature modularization and unnecessary cognitive overhead for developers and coding agents.
