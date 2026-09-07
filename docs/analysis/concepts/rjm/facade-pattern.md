---
package: rjm
name: Facade Pattern
slug: facade-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/refactoring-patterns.md, sha256: d3daeaa70210b68f3628a5fc26b44747c50453a7ac8e915e023306a4d4c9c560}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Facade Pattern

## Definition — verbatim
> "## Poor Encapsulation → Facade Pattern" — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/refactoring-patterns.md | 131 | defined here | Structural design pattern providing a simplified, unified interface to a complex set of subsystem operations. |

## Consumes
Complex subsystems with multiple interdependent classes, operations, or protocols.

## Produces
A unified high-level interface that simplifies client usage and encapsulates internal subsystem complexity.

## When applied
Applied when designing interfaces for complex subsystems or refactoring classes that leak operational details.

## Sub-concepts
none

## Part of
refactoring-patterns

## Implementation status
clean

## Design notes
The Facade Pattern provides a higher-level interface that makes a subsystem easier to use and harder to misuse. In rjm's quality remediation patterns, applying a facade conceals low-level orchestration details behind an intentional public method, insulating clients from internal evolution and significantly boosting encapsulation.
