---
package: rjm
name: Over-Abstraction
slug: over-abstraction
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/pattern-mapping-guide.md, sha256: cbc82064f5e347105b11ee8eed31b6f2e1898088c0b52f8723177d2101c339ad}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Over-Abstraction

## Definition — verbatim
> "### Over-Abstraction" — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:279

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/pattern-mapping-guide.md | 279 | defined here | Anti-pattern heading documented in pattern mapping guide where abstractions are introduced without variability. |

## Consumes
CVA matrix showing identical implementations across use cases without variation.

## Produces
Corrective guidance advising against premature interface and pattern creation.

## When applied
When analyzing a CVA matrix where rows and columns exhibit zero or near-zero variability.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
clean

## Design notes
Over-Abstraction is a CVA design anti-pattern warned against in the pattern mapping guide. It occurs when developers create architectural abstractions (such as Strategy or Abstract Factory) despite the CVA matrix demonstrating identical implementations across all use cases. Without this concept, engineers would needlessly add interfaces, indirection, and complexity where concrete implementations would suffice, violating YAGNI and the core principle that abstractions must be justified by variability.
