---
package: rjm
name: Programming by Intention Pattern
slug: programming-by-intention-pattern
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

# Programming by Intention Pattern

## Definition — verbatim
> "## Programming by Intention Pattern" — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:338

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/refactoring-patterns.md | 338 | defined here | Structural pattern mandating that public sergeant methods direct focused private methods. |

## Consumes
Methods mixing high-level domain orchestration with fine-grained implementation mechanics (e.g. inline SQL, low-level network calls, validation).

## Produces
Methods structured at consistent abstraction levels, with public coordinator methods delegating steps to dedicated private helper methods.

## When applied
Applied when refactoring procedures that suffer from mixed abstraction levels to improve cohesion, readability, and testability.

## Sub-concepts
- sergeant-methods
- private-methods

## Part of
refactoring-patterns

## Implementation status
clean

## Design notes
The Programming by Intention Pattern enforces uniform abstraction levels within methods. By structuring public functions as high-level "sergeant" methods that read like clean domain outlines and delegating concrete mechanics to private "soldier" methods, cohesion rises from 5/10 to 9/10 while readability and component testability improve dramatically.
