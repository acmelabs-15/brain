---
package: rjm
name: Boxing Value Types
slug: boxing-value-types
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

# Boxing Value Types

## Definition — verbatim
> "### Boxing Value Types (Encapsulation: 4/10)" — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md | 95 | defined here | Highlights value type boxing as an encapsulation anti-pattern scoring 4/10, recommending generic constraints. |

## Consumes
Value type declarations, primitive types, and method signatures accepting `object` or raw interfaces.

## Produces
Diagnostic encapsulation score reduction (4/10) and refactoring recommendations to use generic constraints (`where T : struct`).

## When applied
Applied during code quality review when evaluating type representations and object conversions in .NET.

## Sub-concepts
none

## Part of
patterns-that-reduce-quality-scores

## Implementation status
defects: missing-path, doc-drift

## Design notes
Boxing value types into `object` wrappers allocates heap memory and discards compile-time type safety. In rjm's quality framework, boxing is scored as an encapsulation failure (4/10) because it obscures the true underlying type and permits invalid runtime type conversions, which should instead be prevented via generic type constraints.
