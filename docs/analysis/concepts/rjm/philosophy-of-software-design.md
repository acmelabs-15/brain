---
package: rjm
name: philosophy-of-software-design
slug: philosophy-of-software-design
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# philosophy-of-software-design

## Definition — verbatim
(used, not defined)

> "tests/evals/rule-scenarios/philosophy-of-software-design.json" — scripts/eval/software_engineering_library_activation_ci.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_ci.py | 20 | used here | Scenario fixture path registered for CI activation evaluation. |
| scripts/eval/software_engineering_library_activation_gate.py | 26 | used here | Reference identifier in MOVED_REFERENCE_IDS tracked for consecutive activation failures. |

## Consumes
Software engineering scenarios assessing complexity, modularity, and interface design principles.

## Produces
Evaluation scores and activation verification data for John Ousterhout's *A Philosophy of Software Design* reference.

## When applied
Evaluated during scheduled CI runs and PR gates to verify progressive disclosure routing.

## Sub-concepts
none

## Part of
MOVED_REFERENCE_IDS

## Implementation status
clean

## Design notes
One of the eight ADR-088 reference topics moved from always-on rules to progressive disclosure in the software engineering library skill, governed by continuous activation tracking.
