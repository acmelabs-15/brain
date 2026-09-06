---
package: matt
name: trigger syntax
slug: trigger-syntax
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

# trigger syntax

## Definition — verbatim
> "Dropping the leading `/` also makes the instruction harness-neutral rather than less: it no longer assumes Claude Code's trigger syntax." — .changeset/skill-tool-invocation-terminology.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 16 | used here | Contrasts explicit Skill tool calls with assuming a specific harness's trigger syntax. |
| .changeset/skill-tool-invocation-terminology.md | 7 | defined here | Identifies Claude Code's slash trigger syntax as an assumption avoided in standardized cross-skill instructions. |

## Consumes
Harness-specific slash command formats and model prompt conventions.

## Produces
Clear separation between interactive human slash-commands and programmatic agent tool invocations.

## When applied
When writing agent instructions, differentiating human interface triggers from agent-executable tool calls.

## Sub-concepts
none

## Part of
invocation

## Implementation status
clean

## Design notes
Refers to harness-dependent notation (such as leading `/` characters in Claude Code) used to trigger commands interactively. In automated agent execution, relying on trigger syntax causes invocation failures, so explicit tool calls are mandated instead.
