---
package: rjm
name: Memory Usage Workflow
slug: memory-usage-workflow
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Memory Usage Workflow

## Definition — verbatim
> "## Memory Usage Workflow (USE AGGRESSIVELY)" — docs/autonomous-pr-monitor.md:192
> "Your memory capabilities are one of your most powerful features. Use them proactively for nearly every interaction." — docs/autonomous-pr-monitor.md:194

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 192 | defined here | Defines the 4-step workflow (list memories, identify relevant keys, read memories, synthesize) for aggressively leveraging persistent cross-session memory. |

## Consumes
Task parameters and Serena persistent memory keys via `mcp__serena__list_memories`.

## Produces
Retrieved memory content via `mcp__serena__read_memory` incorporated into reasoning and responses.

## When applied
Applied proactively across interactions to leverage accumulated cross-session context, user preferences, and project decisions.

## Sub-concepts
none

## Part of
autonomous-pr-monitoring-prompt

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The Memory Usage Workflow guides agents to systematically discover, retrieve, and synthesize historical knowledge stored in Serena persistent memories, preventing repeated mistakes and preserving institutional knowledge across ephemeral sessions.
