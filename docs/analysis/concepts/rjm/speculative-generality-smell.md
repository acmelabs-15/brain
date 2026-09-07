---
package: rjm
name: speculative-generality smell
slug: speculative-generality-smell
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md, sha256: 14474578a6089b011c08d942a1df83bce2ec03802b99f5f91a2b98a3e10555cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# speculative-generality smell

## Definition — verbatim
(used, not defined)

> "Per `.claude/rules/philosophy-of-software-design.md`, this is a speculative-generality smell." — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 41 | used here | Identifies the anti-pattern of building infrastructure for hypothetical future use cases |

## Consumes
Proposed generalized architectures lacking active consumers.

## Produces
Defect critiques recommending removal of speculative hooks and unused parameters.

## When applied
During code reviews, architecture debates, and principle scanning.

## Sub-concepts
none

## Part of
premature-abstraction

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The speculative-generality smell (from Fowler and Ousterhout) identifies code and designs that anticipate future requirements that may never materialize. In rjm, it is invoked to reject complex refactoring proposals—such as ADR-061's multi-matcher delegation layer—when fewer than four concrete instances exist in the active codebase.
