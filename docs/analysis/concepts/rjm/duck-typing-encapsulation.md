---
package: rjm
name: Duck Typing Encapsulation
slug: duck-typing-encapsulation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/calibration-examples.md, sha256: 79f51c12b66cb2543069b1a0239227fcd1e864961d5e6e1b8c386a84645103cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Duck Typing Encapsulation

## Definition — verbatim
> "### Python: Duck Typing Encapsulation" — .claude/skills/code-qualities-assessment/references/calibration-examples.md:391

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/calibration-examples.md | 391 | defined here | Calibration example illustrating Python encapsulation scoring based on underscore conventions. |

## Consumes
Python class implementations utilizing single or double leading underscore conventions for internal state.

## Produces
Calibrated encapsulation quality score reflecting adherence to language conventions rather than strict access enforcement.

## When applied
Applied during code quality evaluation when assessing Python source files for encapsulation maintainability.

## Sub-concepts
none

## Part of
code-qualities-assessment

## Implementation status
clean

## Design notes
Python lacks formal compiler-enforced access modifiers (like `private` or `protected`). The Duck Typing Encapsulation concept formalizes scoring rules so evaluators reward standard underscore naming conventions instead of penalizing dynamic languages for lacking runtime or compiler-level visibility controls.
