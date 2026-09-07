---
package: rjm
name: six-agent adr-review
slug: six-agent-adr-review
kind: gate
package_phase: rjm:Review
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

# six-agent adr-review

## Definition — verbatim
(used, not defined)

> "Accepted (2026-06-02, six-agent adr-review: 2 Accept, 4 Disagree-and-Commit, 0" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 16 | used here | Cited as the formal consensus review process and recorded vote tally for accepting ADR-071 |

## Consumes
Draft architectural decision records and debate proposals.

## Produces
A consensus review verdict with explicit vote tallies across Accept, Disagree-and-Commit, and Block.

## When applied
Applied during architectural decision reviews before moving an ADR from proposed to accepted.

## Sub-concepts
none

## Part of
adr-review

## Implementation status
defects: doc-drift, missing-path

## Design notes
The six-agent adr-review is a multi-agent architectural governance consensus process where six distinct reviewer agents (architect, critic, security, analyst, independent-thinker, and high-level-advisor) independently review and vote on architectural decisions. This ensures robust scrutiny, avoids single-agent bias, and formally captures dissenting positions in durable debate logs.
