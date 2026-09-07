---
package: matt
name: multi-context
slug: multi-context
kind: pattern
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# multi-context

## Definition — verbatim
> "and then it offers a multi-context <code class="ah-code-inline">CONTEXT-MAP.md</code>" — external/setup-matt-pocock-skills.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/setup-matt-pocock-skills.md | 37 | defined here | Heading for guidance governing when to partition a repository into multiple bounded contexts. |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 61 | used here | Decision branch configuring docs/domain/CONTEXT-MAP.md and per-context CONTEXT.md files. |

## Consumes
A system where identical terms possess conflicting meanings across distinct subsystems.

## Produces
docs/domain/CONTEXT-MAP.md and discrete docs/domain/<context>/CONTEXT.md files.

## When applied
When words mean fundamentally different things in different areas of the application.

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
clean (in repository skills; external documentation notes doc-drift and internal-contradiction)

## Design notes
Multi-context is an advanced architectural pattern inspired by Domain-Driven Design for large codebases. In Matt's architecture, multi-context is reached only when domain terminology collides across boundaries. Rather than forcing a global glossary, it separates domains with isolated context files mapped by a central context map.
