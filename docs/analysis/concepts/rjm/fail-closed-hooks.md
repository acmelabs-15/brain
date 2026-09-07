---
package: rjm
name: Fail-closed hooks
slug: fail-closed-hooks
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/incident-history.md, sha256: f0eec48d7b0b37bd1748187e54e63be89cbd45466ca6e4857eb0b179822bfee3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Fail-closed hooks

## Definition — verbatim
> "The policy reversed: prevention at generation time, then fail closed and loud at runtime." — .claude/skills/ai-agents-change-control/references/incident-history.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/incident-history.md | 7 | defines | Incident history section recounting the #2205 incident and subsequent reversal to fail-closed hook policy. |

## Consumes
Generated hook configurations and runtime hook execution environments.

## Produces
Loud, immediate runtime failures and generation-time validation checks for broken hook launchers.

## When applied
Applied when generating hook scripts and configuring runtime error handling in agent harnesses.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
clean

## Design notes
An architectural policy adopted following incident #2205, where silent fail-open shims allowed a wedged launcher bug to persist undetected across customer environments for 33 days. The fail-closed doctrine mandates preventing defects at generation time and failing loudly and immediately at runtime if a hook cannot execute.
