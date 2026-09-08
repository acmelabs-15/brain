---
package: rjm
name: Code Simplifier Agent
slug: code-simplifier-agent
kind: role
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Code Simplifier Agent

## Definition — verbatim
> "You simplify recently modified code without changing what it does. You produce either a rewrite diff or a list of refactors, never a vague suggestion." — templates/agents/code-simplifier.shared.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/code-simplifier.shared.md | 19 | defines | Support agent role definition for simplifying recently modified code while preserving observable functionality. |

## Consumes
Recently modified code diffs, named file sets, caller contexts, and project style rules.

## Produces
A rewrite diff or structured list of bounded refactors that enhance clarity and maintainability.

## When applied
Triggered automatically after completing a coding task or writing a logical chunk of code, running after the implementer and before QA.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A post-implementation refinement role that clarifies and standardizes newly written code while strictly preserving observable behavior and public APIs.
