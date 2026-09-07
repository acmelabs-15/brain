---
package: rjm
name: No Encapsulation
slug: no-encapsulation
kind: name-only
package_phase: none
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

# No Encapsulation

## Definition — verbatim
(used, not defined)

> "### Score: 1/10 (No Encapsulation)" — .claude/skills/code-qualities-assessment/references/calibration-examples.md:206

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/calibration-examples.md | 206 | defined here | Section heading and calibration tier defining the 1/10 no encapsulation benchmark with shared public class state. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
encapsulation-examples

## Implementation status
clean

## Design notes
A calibration score tier heading and rubric example in calibration-examples.md illustrating global shared mutable class state rather than an operational lifecycle concept.
