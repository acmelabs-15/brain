---
package: rjm
name: GitHub Copilot CLI Contract
slug: github-copilot-cli-contract
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/SKILL.md, sha256: 14891e17feb0fc88842a48f8d44b570badb38861a40292484adeb6854d22f372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# GitHub Copilot CLI Contract

## Definition — verbatim
> "The full vendor inventory for this harness lives in `references/official-hook-contracts.md`, with the official source cited per row:" — .claude/skills/agent-harness-reference/SKILL.md:84-85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 82 | defines | Details the vendor contract specifications for Copilot CLI configuration schema, hook events, output shapes, and execution timeouts. |

## Consumes
Official GitHub Copilot CLI documentation, release notes, and empirical runtime probe results.

## Produces
Verified hook registration configurations, event payload parsers, and adapter implementations.

## When applied
Applied when building, configuring, or generating plugin hooks and tools for GitHub Copilot CLI.

## Sub-concepts
shipped-registrations, event-policy, adapter-behavior, copilot-plugin-runtime-fields

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift

## Design notes
The authoritative specification for integrating rjm plugins with GitHub Copilot CLI. It documents configuration formats, event lifecycle hooks, payload schemas, and critical operational differences (such as fail-open timeouts and PascalCase event aliases) necessary to prevent plugin crashes.
