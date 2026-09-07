---
package: rjm
name: Re-running a probe
slug: re-running-a-probe
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/references/probe-evidence.md, sha256: 4f51c58a5c559556cf9521e7d4887e065d7557204a3ab1ecd981b4fa923e0284}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Re-running a probe

## Definition — verbatim
> "Use `ai-agents-empirical-probe-toolkit` recipe 1." — .claude/skills/agent-harness-reference/references/probe-evidence.md:319

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/references/probe-evidence.md | 317 | defines | Defines the minimum evidence requirements and procedural checklist for re-running empirical runtime probes. |

## Consumes
Isolated environment prefix, target CLI binary version, deliberately wrong negative control, and documented recipe.

## Produces
Versioned runtime observations, captured stdin/environment logs, and updated empirical evidence sidecars.

## When applied
Applied when updating host CLI versions or verifying disputed runtime hook behaviors.

## Sub-concepts
none

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift, missing-path

## Design notes
A standardized empirical investigation checklist in rjm defining the minimum evidence criteria needed to re-run host harness probes. Without this rigorous protocol, agent harness findings risk drifting into speculation or capturing unrepeatable local quirks rather than binding runtime contracts.
