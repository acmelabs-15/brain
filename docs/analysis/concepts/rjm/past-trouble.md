---
package: rjm
name: Past trouble
slug: past-trouble
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

# Past trouble

## Definition — verbatim
> "Caused critical situations or budget overruns before" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 17 | defines | Tabulated as the seventh criterion of architectural significance determining when an architectural decision must be documented as an ADR. |

## Consumes
Historical incident reports, post-mortem findings, budget overrun records, and retrospective operational logs.

## Produces
Architectural significance qualification score justifying whether a troublesome design area requires formal ADR documentation.

## When applied
Evaluated during architectural significance triage prior to ADR authoring when deciding whether prior system failure or budget overruns mandate documenting a decision.

## Sub-concepts
none

## Part of
criteria-for-architectural-significance

## Implementation status
clean

## Design notes
Past trouble functions as an empirical risk heuristic within rjm's architectural significance framework. Rather than assessing technical novelty in the abstract, it directs authors to document decisions whenever modifying system components that have previously caused production incidents, budget escalations, or operational friction. This historical grounding prevents recurring architectural mistakes by requiring formal trade-off analysis and review for historically scarred modules.
