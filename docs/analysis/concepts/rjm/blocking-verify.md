---
package: rjm
name: BLOCKING verify
slug: blocking-verify
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a872352c2c57ff59c7db1238910b6685b800ab8a3e8fa9e37a76418d467df471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BLOCKING verify

## Definition — verbatim
> "**BLOCKING verify**: unrun gen'd artifact -> runtime test|security thread -> code fix or owner|skip validation -> `pre_pr.py`" — AGENTS.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 23 | defined here | Strict boundary rule mandating runtime testing for generated artifacts, security fixes, and pre-PR validation. |

## Consumes
Generated artifacts, security review threads, and pre-PR validation scripts.

## Produces
Enforced boundary compliance preventing shipping of unverified code or unresolved security items.

## When applied
Enforced continuously across all agent workflows whenever code generation, security alerts, or pre-PR gates occur.

## Sub-concepts
none

## Part of
boundaries

## Implementation status
clean

## Design notes
A blocking verification gate and autonomy boundary in rjm that strictly forbids shipping unrun generated code, closing security threads without real fixes, or bypassing pre-PR validation scripts.
