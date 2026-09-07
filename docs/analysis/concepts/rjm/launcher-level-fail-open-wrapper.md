---
package: rjm
name: Launcher-level fail-open wrapper
slug: launcher-level-fail-open-wrapper
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Launcher-level fail-open wrapper

## Definition — verbatim
> "REJECTED. Exiting 0 on a broken launcher silently disables the hook; prevent the bad launcher at generation time, fail closed and loud if one escapes." — .claude/skills/ai-agents-failure-archaeology/SKILL.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 63 | defined here | Settled Battles List entry detailing why launcher-level fail-open behavior was rejected. |

## Consumes
Proposals to wrap hook invocation commands in exit-0 catch-all wrappers.

## Produces
Rejection verdict enforcing compile-time prevention and loud runtime failures.

## When applied
Evaluated during hook generator design and runtime reliability reviews.

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
defects: doc-drift

## Design notes
A `Launcher-level fail-open wrapper` was proposed after Incident 1 to prevent broken launchers from crashing Copilot CLI by swallowing launcher errors. It was formally REJECTED because silently disabling hooks hides broken integrations; rjm instead mandates compile-time path validation and loud, fail-closed runtime exits.
