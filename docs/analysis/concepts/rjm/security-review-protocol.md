---
package: rjm
name: SECURITY-REVIEW-PROTOCOL
slug: security-review-protocol
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SECURITY-REVIEW-PROTOCOL

## Definition — verbatim
(used, not defined)

> "| `.agents/governance/SECURITY-REVIEW-PROTOCOL.md` | CONSTRAINT: security review gate |" — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:389

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 389 | used here | Cited in cross-references table as a governance constraint for the security review gate. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`SECURITY-REVIEW-PROTOCOL` is a governance file name and gate identifier (`.agents/governance/SECURITY-REVIEW-PROTOCOL.md`) cited in DESIGN-004 rather than an independent software lifecycle concept, classified as `name-only` per D-023.
