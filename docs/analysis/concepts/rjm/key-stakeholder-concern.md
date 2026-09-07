---
package: rjm
name: Key stakeholder concern
slug: key-stakeholder-concern
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Key stakeholder concern

## Definition — verbatim
> "Important stakeholder cares deeply" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 12 | defined here | Second criterion of the ASR Test evaluating whether significant organizational stakeholders have strong interest in the decision. |

## Consumes
Stakeholder map, executive priorities, product leadership concerns, organizational governance boundaries.

## Produces
Significance rating determining whether stakeholder visibility necessitates formal ADR documentation and review.

## When applied
Evaluated during initial ASR Test assessment in `adr-generator` Phase G1.

## Sub-concepts
none

## Part of
asr-test

## Implementation status
clean

## Design notes
The second criterion of the ASR Test, Key stakeholder concern evaluates whether a design decision impacts areas of intense interest to influential stakeholders—such as executive sponsors, security officers, or key clients. When an important stakeholder cares deeply about an architectural choice, an ADR provides formal alignment, transparent trade-offs, and an auditable record of consensus.
