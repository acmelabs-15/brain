---
package: rjm
name: Inheritance vs Composition
slug: inheritance-vs-composition
kind: pattern
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-legacy-code.md, sha256: d99de8d31d31be7e7fed8d46f5f1c203e5a2ca6a83ec54b65fffa6ccff072274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Inheritance vs Composition

## Definition — verbatim
> "## Inheritance vs Composition" — .claude/skills/analyze/references/design-legacy-code.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-legacy-code.md | 33 | defined here | Compares inheritance (IS-A) and composition (HAS-A) tradeoffs in legacy system analysis. |

## Consumes
Class hierarchies, polymorphism requirements, and object relationships.

## Produces
Composition-based architectures favoring object delegation over rigid subclassing.

## When applied
Applied during legacy code evaluation to dismantle brittle class hierarchies.

## Sub-concepts
none

## Part of
design-legacy-code

## Implementation status
defects: missing-path

## Design notes
Inheritance vs Composition evaluates the coupling risks of class inheritance (IS-A) against the flexibility of object composition (HAS-A). Following the Gang of Four adage to favor delegation over class inheritance, rjm encourages replacing rigid inheritance trees with modular object composition to minimize blast radius when evolving legacy systems.
