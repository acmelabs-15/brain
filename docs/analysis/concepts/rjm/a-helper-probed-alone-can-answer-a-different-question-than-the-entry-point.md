---
package: rjm
name: A helper probed alone can answer a different question than the entry point
slug: a-helper-probed-alone-can-answer-a-different-question-than-the-entry-point
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md, sha256: f4d18d9ff8942cccc310f26dbf6a33f6473a8cf65d03c3e1b681be91d680227e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# A helper probed alone can answer a different question than the entry point

## Definition — verbatim
> "## A helper probed alone can answer a different question than the entry point" — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md | 100 | defined here | Section heading and principle mandating verification through outer entry points rather than internal helpers. |

## Consumes
Behavioral claims, module entry points, internal helper functions.

## Produces
Accurate end-to-end verification results reflecting actual system behavior.

## When applied
Applied when designing test fixtures or verifying behavioral claims about subsystem capabilities.

## Sub-concepts
recovery-helper, strict-parser

## Part of
rule-audit-measurement-discipline

## Implementation status
clean

## Design notes
An architectural testing principle warning that testing private helper functions in isolation can produce misleading results that contradict the behavior of the public entry point orchestrating them.
