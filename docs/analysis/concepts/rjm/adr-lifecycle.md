---
package: rjm
name: ADR Lifecycle
slug: adr-lifecycle
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-best-practices.md, sha256: 62f0e939ebf8455bdf6f0ff1d882d21e551b1d1bcfc532a863ef80f68a0675f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ADR Lifecycle

## Definition — verbatim
> "ADRs progress through stages:" — .claude/skills/adr-generator/references/adr-best-practices.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-best-practices.md | 65 | defined here | Section heading introducing the formal five-stage lifecycle progression model for architectural decisions. |

## Consumes
Draft architectural decisions and stakeholder reviews.

## Produces
Validated lifecycle state progression across Proposed, Accepted, Deprecated, Superseded, and Rejected stages.

## When applied
Governs an ADR from initial inception through review, implementation, and eventual deprecation or replacement.

## Sub-concepts
proposed, superseded, rejected

## Part of
none

## Implementation status
clean

## Design notes
The standardized lifecycle state progression model in rjm governing how Architectural Decision Records transition across stages. It formally recognizes Proposed, Accepted, Deprecated, Superseded, and Rejected states, ensuring decision evolution remains transparent, auditable, and enforceable by automated tooling.
