---
package: rjm
name: Plan Validation Protocol
slug: plan-validation-protocol
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Plan Validation Protocol

## Definition — verbatim
> "Before writing a single line of code, work through these four questions in order:" — .claude/agents/implementer.md:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 102 | defined here | Mandatory pre-implementation gate requiring answers to four structured questions before modifying code. |
| templates/agents/implementer.shared.md | 110 | defined here | Shared implementer template defining the plan validation gate and acceptance criteria checks. |

## Consumes
Approved plan files, acceptance criteria, and target repository code.

## Produces
Documented answers to four validation questions (plan criteria, adjacent code, top two failure modes, minimal implementation).

## When applied
Mandatory blocking gate applied before writing a single line of code for any planned task.

## Sub-concepts
none

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
A pre-implementation checklist ensuring agents do not execute speculative or misaligned code. By requiring verbatim quotation of acceptance criteria, adjacent code inspection, identification of failure modes, and determination of the smallest sufficient implementation, it halts plan drift at the threshold of execution.
