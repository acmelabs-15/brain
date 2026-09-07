---
package: rjm
name: String Concatenation in Loops
slug: string-concatenation-in-loops
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md, sha256: 0b223c840ad1051c81c6326a132fc2e72a4d804a891b97a192498b253061cf89}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# String Concatenation in Loops

## Definition — verbatim
> "### String Concatenation in Loops (Non-Redundancy: 2/10)" — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md | 106 | defined here | Flags repeated string concatenation in loops as a severe non-redundancy violation (2/10), prescribing StringBuilder. |

## Consumes
Loop routines constructing aggregate strings via repeated `+` or `+=` concatenation operators.

## Produces
Severe non-redundancy penalty (2/10) accompanied by prescriptive remediation using `StringBuilder`.

## When applied
Applied during code quality scoring when scanning loop structures for string mutation and allocation patterns.

## Sub-concepts
none

## Part of
patterns-that-reduce-quality-scores

## Implementation status
defects: missing-path, doc-drift

## Design notes
Because strings are immutable in .NET, concatenating them inside loops produces O(n^2) transient object allocations and triggers garbage collector pauses. The assessment reference penalizes this anti-pattern with a 2/10 non-redundancy score, directing developers to instantiate a single `StringBuilder` buffer outside the loop.
