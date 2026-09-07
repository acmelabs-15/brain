---
package: rjm
name: Zero Tool-Use Hooks
slug: zero-tool-use-hooks
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Zero Tool-Use Hooks

## Definition — verbatim
> "# ADR-097: Zero Tool-Use Hooks" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 12 | defines | Architectural decision retiring all five tool-use hooks and deleting Copilot dispatcher machinery to eliminate execution latency. |

## Consumes
Tool-use hook manifests (`.claude/hooks/hooks.json`, `.claude/settings.json`).

## Produces
Zero registered tool-call hooks, deleted Copilot dispatcher code, and automated re-accretion ratchet tests.

## When applied
Enforced permanently across plugin and repo-local hook configurations.

## Sub-concepts
none

## Part of
hook-architecture

## Implementation status
defects: missing-path, doc-drift

## Design notes
Architectural doctrine established in ADR-097 forbidding process-spawn hooks on individual tool invocations (`PreToolUse`, `PostToolUse`, `PostToolUseFailure`). Solves severe latency degradation caused by Python process cold starts (~250ms each) and Windows Defender scanning during autonomous agent execution loops.
