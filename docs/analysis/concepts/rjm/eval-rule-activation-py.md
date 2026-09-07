---
package: rjm
name: eval-rule-activation.py
slug: eval-rule-activation-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/_optimizer_adapters.py, sha256: 41bb89c726d7372ef9bfea77b9eb57e3e2123c801358598ee13bfdab276a20b2}
  - {path: scripts/validation/check_rule_activation_coverage.py, sha256: c96ae7b997afbdf46f31e2f2a2eff29415af0f5694b3719d32d6afe0a576dab2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# eval-rule-activation.py

## Definition — verbatim
> "| `eval-rule-activation.py` | `.claude/rules/*.md` activation across baseline / description / full mechanisms. | Complementary |" — scripts/eval/README.md:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_adapters.py | 9 | used here | Adapter documentation notes rule evaluations feed `{task_id: bool}` gate inputs from scenarios. |
| scripts/eval/README.md | 93 | defined here | Documented as script evaluating `.claude/rules/*.md` activation across baseline, description, and full mechanisms. |
| scripts/validation/check_rule_activation_coverage.py | 4 | used here | Documented as dynamic activation evaluator whose coverage ratchet is enforced statically. |

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
defects: doc-drift, missing-path, other, script-bug

## Design notes
`eval-rule-activation.py` is an evaluation script filename in `scripts/eval/` that evaluates prompt rule activation across mechanisms, classified as `name-only` per D-023.
