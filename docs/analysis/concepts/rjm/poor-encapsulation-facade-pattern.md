---
package: rjm
name: Poor Encapsulation → Facade Pattern
slug: poor-encapsulation-facade-pattern
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

# Poor Encapsulation → Facade Pattern

## Definition — verbatim
> "## Poor Encapsulation → Facade Pattern" — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/refactoring-patterns.md | 131 | defined here | Remediation recipe consolidating sprawling public methods into a single entry point while hiding private details. |

## Consumes
Classes exposing numerous public methods that reveal internal implementation details (e.g., validation, fraud checking, gateway calls).

## Produces
A simplified facade exposing a concise public interface (e.g. `charge()`), hiding implementation mechanics behind private methods.

## When applied
Applied when code assessment identifies low encapsulation scores (score ≤ 4/10) due to exposed internal mechanics.

## Sub-concepts
- facade-pattern

## Part of
refactoring-patterns

## Implementation status
clean

## Design notes
Poor Encapsulation → Facade Pattern addresses architectural leakage where internal workflow steps are exposed as public methods. By wrapping detailed subsystem operations behind a single intentional entry point and privatizing internal mechanics, encapsulation improves from 4/10 to 9/10 and cohesion rises from 6/10 to 8/10.
