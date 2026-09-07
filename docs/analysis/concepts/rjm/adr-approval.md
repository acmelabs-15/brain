---
package: rjm
name: ADR approval
slug: adr-approval
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security/references/dependency-risk-scoring.md, sha256: 71b73a602dca1c8e9757c348e746a5f0cb27e8ea23a2a488c4247118b1d8e219}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ADR approval

## Definition — verbatim
(used, not defined)

> "| >3.5 | High | Require ADR approval |" — .claude/agents/security/references/dependency-risk-scoring.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/dependency-risk-scoring.md | 19 | used here | Action requirement in dependency risk matrix mandating architectural decision record approval for dependencies scoring higher than 3.5. |

## Consumes
dependency-risk-scoring

## Produces
adr

## When applied
> "| >3.5 | High | Require ADR approval |" — .claude/agents/security/references/dependency-risk-scoring.md:19

## Sub-concepts
none

## Part of
dependency-risk-scoring

## Implementation status
clean

## Design notes
A governance gate requiring formal Architectural Decision Record (ADR) approval before adopting high-risk third-party dependencies into the repository. This prevents unvetted libraries with poor maintenance, licensing risks, or vulnerability histories from compromising the project without deliberate architectural consensus.
