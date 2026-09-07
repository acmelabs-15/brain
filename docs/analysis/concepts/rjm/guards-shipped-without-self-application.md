---
package: rjm
name: Guards shipped without self-application
slug: guards-shipped-without-self-application
kind: gate
package_phase: rjm:verify
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

# Guards shipped without self-application

## Definition — verbatim
> "A guard PR must show the guard's output run against its own branch" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 71 | defined here | Settled battle rule requiring any PR introducing a verification guard to demonstrate the guard executing against its own branch. |

## Consumes
New guard implementations, CI scripts, or validation rules in a pull request.

## Produces
Execution evidence proving the newly introduced guard functions properly against its own code.

## When applied
When submitting a pull request that introduces or modifies a validation guard, linter, or quality gate.

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
defects: doc-drift

## Design notes
This concept enforces recursive verification for governance infrastructure in rjm. Rooted in PR #1989's failure where a guard was merged without running against itself, it prevents broken, untested, or non-functional quality gates from landing in the main branch. Without this self-application requirement, defects in guard logic remain hidden until subsequent pull requests fail unexpectedly.
