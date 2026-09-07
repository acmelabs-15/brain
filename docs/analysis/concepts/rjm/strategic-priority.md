---
package: rjm
name: strategic priority
slug: strategic-priority
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py, sha256: f8f1d7b0e29c9d8ce64daf97e8f81f34057384309203ba9ef1eecbb73eda1afb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# strategic priority

## Definition — verbatim
> "Strategic priority drift (from current state only)" — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py | 78 | used here | Reassessment trigger condition evaluating shifts between core capability and context commodity. |

## Consumes
Updated organization strategy documentation, market positioning changes, or board priority shifts.

## Produces
Triggered reassessment warning when a previously context capability becomes core (or vice-versa), altering sourcing logic.

## When applied
Checked by `check_reassessment_triggers.py` during periodic decision audits.

## Sub-concepts
none

## Part of
reassessment-plan

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path

## Design notes
A critical governance gate in rjm's reassessment playbook that fires when an organization's strategic priorities invert (shifting a system between core differentiator and commodity context), requiring an immediate re-evaluation of the original build/buy determination.
