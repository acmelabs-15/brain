---
package: rjm
name: Extract constants
slug: extract-constants
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-dry-principle.md, sha256: 64a1c4d6a649c8223493fd2ee0bc7df70f1ce45dc32bdd08bb685df531359f0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Extract constants

## Definition — verbatim
> "**Extract constants**: Replace magic values with named constants." — .claude/skills/golden-principles/references/design-dry-principle.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-dry-principle.md | 37 | defined here | Documented remediation technique replacing magic values with named constants. |

## Consumes
Magic numbers, magic strings, configuration literals, and un-named fixed scalar values in expressions.

## Produces
Named constant declarations (`const` fields, immutable variables) with clear domain intent.

## When applied
Applied whenever magic numbers or string literals are identified during coding, code review, or refactoring passes.

## Sub-concepts
none

## Part of
dry-principle

## Implementation status
defects: missing-path

## Design notes
Extract constants is the simplest and most direct refactoring technique for eliminating value duplication under the DRY principle in rjm. By replacing magic literals with descriptive constant identifiers, developers encapsulate semantic meaning, provide IDE autocomplete and compile-time validation, and isolate value changes to a single line of code.
