---
package: addy
name: /constraints check
slug: constraints-check
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/constraints.toml, sha256: 149ae460288b1f86487bb842ea5cf3476cdb2766a3f703985d83499cf8f6c817}
  - {path: commands/constraints.toml, sha256: bcc519db853a0ebdf0b07f378e2bc87cb112508d28e41f0d39dd1b17aa68def4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# /constraints check

## Definition — verbatim
> "- `/constraints check` — run the current constraints against this branch and report" — .gemini/commands/constraints.toml:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/constraints.toml | 29 | defined here | Sub-command running active constraints against the current branch and reporting results. |
| commands/constraints.toml | 29 | defined here | Sub-command in Claude Code command definition for evaluating branch constraints. |

## Consumes
Active CONSTRAINTS.md rules and current branch state.

## Produces
A structured report on branch compliance against all configured constraint dimensions.

## When applied
When verifying branch compliance against quality constraints on demand.

## Sub-concepts
none

## Part of
constraint-driven-development

## Implementation status
clean

## Design notes
A command utility that runs all configured project constraints against the current branch on demand, reporting immediate compliance status.
