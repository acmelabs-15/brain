---
package: rjm
name: Runtime-Contract Probe
slug: runtime-contract-probe
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md, sha256: d14447496609bc6cf62fac8aa2de0adbde4193a369ed82b27ff463c6f9fbd098}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Runtime-Contract Probe

## Definition — verbatim
> "| You are about to rely on undocumented tool behavior (cwd, env vars, stdin format) | 1. Runtime-contract probe | `agent-harness-reference` for settled contracts |" — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md | 7 | defines | Section heading introducing Recipe 1 and analyzing the #2205 hook cwd failure and #2290 payload casing defects. |
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 29 | defines | Recipe selector entry specifying execution of disposable probes to measure undocumented tool runtime behavior. |

## Consumes
Undocumented or unverified external tool invocation behaviors (working directory, environment variables, stdin schemas).

## Produces
Empirical execution measurements, decision memory documentation, and frozen runtime-contract test suites.

## When applied
probe the runtime contract or before writing code that depends on undocumented external tool execution details.

## Sub-concepts
probe, negative-control, decision-memory

## Part of
empirical-probe-toolkit

## Implementation status
defects: missing-path

## Design notes
Recipe 1 of the empirical probe toolkit. It replaces guesswork regarding external tool behaviors with controlled measurement by running minimal probe scripts against pinned CLI binaries under foreign environments to observe environment variables, working directories, and stdin payloads.
