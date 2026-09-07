---
package: rjm
name: Matchers
slug: matchers
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Matchers

## Definition — verbatim
> "### Matchers" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 130 | defined here | Subsection header defining regex compilation semantics and targets for native hook matchers. |

## Consumes
Tool names, agent names, notification types, and trigger patterns.

## Produces
Filtering criteria determining whether a registered hook handler executes for a given event.

## When applied
Applied during event dispatching to filter hook execution based on matching criteria.

## Sub-concepts
claude-format-matchers

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
Filtering mechanisms in agent harness hooks that compile regular expressions against event metadata (e.g. toolName, agentName) to selectively trigger specialized handlers without unnecessary invocation overhead.
