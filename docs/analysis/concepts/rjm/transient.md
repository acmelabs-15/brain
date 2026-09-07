---
package: rjm
name: Transient
slug: transient
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/matrix-building-examples.md, sha256: b35b45be548e503e2ead370599be57167c7ff1d6100a3eef5378be3977052b69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Transient

## Definition — verbatim
(used, not defined)

> "| Operation | Transient | Scoped | Singleton |" — .claude/skills/cva-analysis/references/matrix-building-examples.md:201

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/matrix-building-examples.md | 201 | used here | Column header in the Dependency Injection lifetime scopes CVA matrix modeling fresh instance resolution per request. |

## Consumes
Dependency injection container registration and service configuration.

## Produces
Stateless service instances created anew upon each resolution request and disposed immediately after use.

## When applied
Applied when registering lightweight, non-thread-safe, or stateless components that should not share state across operations.

## Sub-concepts
none

## Part of
cva-matrix-building-examples-net-focus

## Implementation status
clean

## Design notes
A core service lifetime pattern in .NET dependency injection where components are instantiated anew each time they are requested, captured in rjm's CVA matrix example to demonstrate how runtime lifetime management maps to interchangeable resolution strategies.
