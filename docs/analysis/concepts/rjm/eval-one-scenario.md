---
package: rjm
name: eval_one_scenario
slug: eval-one-scenario
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md, sha256: 3b2836c032a358fad40abda517f2abf08797f77014d08c8f2cf00b4b52a01c7b}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# eval_one_scenario

## Definition — verbatim
(used, not defined)

> "def eval_one_scenario(" — scripts/eval/eval-rule-activation.py:1039

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 386 | used here | Cited in parser forensics as catching RuntimeError during scenario execution. |
| scripts/eval/eval-rule-activation.py | 1039 | defined here | Function evaluating a single rule activation scenario across model and judge interactions. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
eval_one_scenario is a Python evaluation execution function in eval-rule-activation.py that evaluates a single scenario against model providers and parses judge outcomes rather than an operational lifecycle concept, classified as name-only per D-023.
