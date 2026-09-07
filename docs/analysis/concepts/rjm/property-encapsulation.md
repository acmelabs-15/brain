---
package: rjm
name: Property Encapsulation
slug: property-encapsulation
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

# Property Encapsulation

## Definition — verbatim
> "### C#: Property Encapsulation" — .claude/skills/code-qualities-assessment/references/calibration-examples.md:420

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/calibration-examples.md | 420 | defined here | C# calibration example comparing private backing fields and read-only properties (10/10) against public auto-setters (4/10). |

## Consumes
C# classes and data structures managing mutable internal state.

## Produces
Encapsulated domain entities safeguarding internal state with read-only properties and mutation methods.

## When applied
Applied during maintainability audits of C#/.NET code when scoring the encapsulation quality dimension.

## Sub-concepts
none

## Part of
code-qualities-assessment

## Implementation status
clean

## Design notes
Property Encapsulation establishes concrete calibration rules for C# codebases. It ensures evaluators penalize unconstrained public property setters that allow arbitrary mutation from outside callers, while rewarding designs that restrict external mutation through private backing fields and dedicated mutation operations.
