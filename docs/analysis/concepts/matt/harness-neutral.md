---
package: matt
name: harness-neutral
slug: harness-neutral
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
  - {path: .changeset/skill-tool-invocation-terminology.md, sha256: 3fb3ccf597c7975987c671483f337a9e4d2804bf595e4bec0d854fbaffc6c8c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# harness-neutral

## Definition — verbatim
> "Dropping the leading `/` also keeps this harness-neutral rather than less: a skill name on its own carries no assumption about which harness's trigger syntax it belongs to." — .agents/invocation.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 16 | defined here | Defines the requirement to omit leading slashes from skill names to maintain harness neutrality across agent environments. |
| .changeset/skill-tool-invocation-terminology.md | 7 | defined here | Explains that standardizing on tool calls without leading slashes makes cross-skill instructions harness-neutral rather than tied to Claude Code. |

## Consumes
Cross-skill invocation phrasing, command naming conventions, and agent instructions.

## Produces
Invocation instructions portable across diverse agent harnesses (Claude Code, OpenAI Codex, Gemini CLI).

## When applied
Applied when writing operative steps in skills that direct an agent to invoke auxiliary skills.

## Sub-concepts
none

## Part of
operative

## Implementation status
clean

## Design notes
Establishes that skill invocation instructions must not assume any specific execution harness's command trigger conventions (such as Claude Code's slash commands). By directing models to call the Skill tool with unadorned skill names, skills remain portable across different agent runtime environments.
