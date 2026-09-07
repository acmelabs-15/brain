---
package: rjm
name: Failure Semantics
slug: failure-semantics
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Failure Semantics

## Definition — verbatim
(used, not defined)

> "Failure Semantics" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 111 | defined here | Section heading introducing the failure handling policy and exit-code semantics for lifecycle hooks. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
fail-closed-and-loud

## Part of
lifecycle-hooks

## Implementation status
clean

## Design notes
A section heading in ADR-008 establishing how lifecycle hooks must behave upon encountering operational errors rather than an independent lifecycle concept.
