---
package: rjm
name: Asymmetric Verification
slug: asymmetric-verification
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Asymmetric Verification

## Definition — verbatim
> "### Asymmetric Verification" — .claude/skills/doc-accuracy/SKILL.md:60

> "Code compiles and runs. Documentation describes what code does. When they disagree, the code is right. This skill reads code first, builds a verified model, then checks documentation claims against that model." — .claude/skills/doc-accuracy/SKILL.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 60 | defined here | Core architectural design principle declaring code compiles and runs, making code the source of truth over documentation. |

## Consumes
Source code repository, public symbols, and documentation files.

## Produces
Grounded truth model and verified documentation claim assessments.

## When applied
Applied as the foundational architectural posture throughout all documentation verification phases.

## Sub-concepts
none

## Part of
doc-accuracy

## Implementation status
defects: doc-drift

## Design notes
Asymmetric Verification is the central governing design principle of the `doc-accuracy` scanner. By establishing that code compiles and runs while documentation merely describes what code does, it mandates that when docs and code disagree, the code is definitively right. The scanner reads implementation code first to construct a verified model of reality, then evaluates documentation claims against that model, preventing subjective interpretations or documentation-first biases.
