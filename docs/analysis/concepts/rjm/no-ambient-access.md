---
package: rjm
name: No ambient access
slug: no-ambient-access
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# No ambient access

## Definition — verbatim
> "- **No ambient access**: no module reaches a global database handle, environment variable, or singleton client to do its work. Dependencies arrive as constructor or function parameters." — .claude/skills/software-engineering-library/references/clean-architecture.md:123

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 123 | defined here | Boundary protection rule prohibiting global state, ambient singletons, or direct environment variable reads. |

## Consumes
Module dependencies and configuration values passed explicitly.

## Produces
Pure, parameter-driven functions and components free of hidden dependencies.

## When applied
Applied across all module implementations and dependency wiring.

## Sub-concepts
none

## Part of
boundary-protection

## Implementation status
clean

## Design notes
No ambient access forbids modules from reaching out to global variables, thread-locals, or environment variables to retrieve state or clients. In rjm, requiring explicit dependency injection prevents hidden side effects and state contamination during concurrent agent runs.
