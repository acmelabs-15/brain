---
package: rjm
name: Probe
slug: probe
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Probe

## Definition — verbatim
> "- **Probe**: a minimal disposable artifact (a hook that dumps its environment, a script that captures stdin) run against the real pinned tool to observe what the tool actually does, instead of what its docs say." — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 14 | defines | Formally defined in the terminology section as a minimal disposable artifact run against pinned tools to observe actual behavior. |

## Consumes
Pinned target binary (e.g. copilot CLI, claude) and an isolated execution environment.

## Produces
Measured runtime telemetry including environment variables, working directory, stdin payloads, and process exit codes.

## When applied
probe the runtime contract or when documentation is missing, contradictory, or unverified.

## Sub-concepts
none

## Part of
empirical-probe-toolkit

## Implementation status
defects: missing-path

## Design notes
A disposable test artifact deployed to measure the runtime behavior of external tools directly. Probes exist because external documentation often omits critical behavioral details (such as working directory context or payload casing), turning unverified assumptions into severe production defects.
