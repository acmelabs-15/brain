---
package: rjm
name: silent-failure anti-pattern
slug: silent-failure-anti-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# silent-failure anti-pattern

## Definition — verbatim
(used, not defined)

> "silently lost protection (the silent-failure anti-pattern). The defense against" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:652

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 652 | used here | Described in hook launcher design rules as trading loud learnable bugs for silently disabled protections |

## Consumes
Error handling implementations and gate exit behaviors.

## Produces
Detection and elimination of silent exit-zero wrapper patterns in scripts and hooks.

## When applied
Evaluated during code review, script authoring, and hook launcher implementation.

## Sub-concepts
none

## Part of
anti-patterns

## Implementation status
defects: doc-drift, missing-path

## Design notes
The silent-failure anti-pattern occurs when an automated tool, hook, or gate encounters a severe error (such as a missing binary or unparseable input) but masks it by emitting a warning and exiting with status 0. In rjm, this anti-pattern is strictly forbidden because it creates false confidence by silently disabling protections; systems must fail closed and loud.
