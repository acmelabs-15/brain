---
package: addy
name: skill-driven execution model
slug: skill-driven-execution-model
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skill-driven execution model

## Definition — verbatim
> "OpenCode uses a **skill-driven execution model** powered by the `skill` tool and this repository's `/skills` directory." — AGENTS.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 13 | defines | Defines the execution model where OpenCode agents discover and load skills via the `skill` tool from the `/skills` directory |

## Consumes
The `/skills` directory and the runtime `skill` tool invocation capability.

## Produces
Structured skill execution without requiring slash command support.

## When applied
Applied across all agent interactions in OpenCode and tool-driven execution platforms.

## Sub-concepts
skills, intent-skill-mapping

## Part of
execution-model

## Implementation status
clean

## Design notes
Defines the execution architecture in addy where coding agents dynamically invoke modular skills from disk via tools rather than relying on interactive slash commands, enabling portability across environments that lack native command routing.
