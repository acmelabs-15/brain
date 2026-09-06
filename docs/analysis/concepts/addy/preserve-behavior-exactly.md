---
package: addy
name: Preserve Behavior Exactly
slug: preserve-behavior-exactly
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-simplification/SKILL.md, sha256: f0c5ed754057eb0c1e027e2587f59de816651feb5e837242296c43ea21cf621d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Preserve Behavior Exactly

## Definition — verbatim
> "Don't change what the code does — only how it expresses it. All inputs, outputs, side effects, error behavior, and edge cases must remain identical." — skills/code-simplification/SKILL.md:32-34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-simplification/SKILL.md | 32 | defined here | First core principle of code simplification mandating exact behavior preservation. |

## Consumes
Target code undergoing simplification and its associated test cases and behavioral specifications.

## Produces
Refactored code whose inputs, outputs, error handling, side effects, and execution ordering are strictly identical to the original.

## When applied
Before, during, and after every individual refactoring edit.

## Sub-concepts
none

## Part of
code-simplification

## Implementation status
clean

## Design notes
The cardinal invariant of code refactoring dictating that simplification only alters the clarity of expression while leaving runtime semantics, input-output mappings, and edge-case behaviors completely unchanged.
