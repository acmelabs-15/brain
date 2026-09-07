---
package: rjm
name: FAIL_JUDGE_ERRORS
slug: fail-judge-errors
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# FAIL_JUDGE_ERRORS

## Definition — verbatim
> "return \"FAIL_JUDGE_ERRORS\"" — scripts/eval/eval-rule-activation.py:1738

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 208 | defined here | Explains that non-zero gating judge failures force verdict FAIL_JUDGE_ERRORS overriding scores. |
| scripts/eval/eval-rule-activation.py | 1738 | defined here | Returns FAIL_JUDGE_ERRORS when gating judge failures exceed 0. |
| scripts/eval/README.md | 214 | defined here | Documents FAIL_JUDGE_ERRORS as forced verdict upon any judge/API failure overriding score-based gates. |
| scripts/eval/software_engineering_library_activation_gate.py | 35 | used here | Included in EXTERNAL_VERDICTS set to distinguish infrastructure failures from model quality failures. |

## Consumes
Judge API responses, schema evaluation outcomes, scenario evaluation results, and error logs.

## Produces
Blocking evaluation failure verdict indicating evaluation integrity failure rather than model non-compliance.

## When applied
Triggered when any judge model call fails, times out, or returns unparseable output during evaluation gating (gating_judge_failures > 0).

## Sub-concepts
none

## Part of
rule-audit-procedure

## Implementation status
defects: doc-drift, missing-path

## Design notes
A critical evaluation safety gate and verdict in the rule activation evaluation harness that invalidates an entire evaluation run whenever judge LLM calls encounter API errors, timeouts, or parse failures, preventing flawed or missing judge scores from generating spurious passes.
