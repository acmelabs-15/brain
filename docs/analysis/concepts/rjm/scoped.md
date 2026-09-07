---
package: rjm
name: Scoped
slug: scoped
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

# Scoped

## Definition — verbatim
(used, not defined)

> "| Operation | Transient | Scoped | Singleton |" — .claude/skills/cva-analysis/references/matrix-building-examples.md:201

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/matrix-building-examples.md | 201 | used here | Column header in the Dependency Injection lifetime scopes CVA matrix modeling instance caching per lifetime scope. |

## Consumes
Dependency injection container and request or transaction scope boundaries.

## Produces
Service instances that are reused throughout a specific request or unit-of-work scope and disposed at scope termination.

## When applied
Applied in web request pipelines and transactional workflows where state must be consistent within a single request but isolated across requests.

## Sub-concepts
none

## Part of
cva-matrix-building-examples-net-focus

## Implementation status
clean

## Design notes
A dependency injection lifetime pattern in .NET service containers where an object is instantiated once per logical request scope and shared across all resolutions within that scope, analyzed in rjm as a distinct column variability in dependency resolution strategy.
