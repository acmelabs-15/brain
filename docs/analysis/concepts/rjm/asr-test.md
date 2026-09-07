---
package: rjm
name: ASR Test
slug: asr-test
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ASR Test

## Definition — verbatim
> "Before writing an ADR, assess whether the decision is architecturally significant. Score each criterion H/M/L or Y/N. Takes 1-2 minutes per issue." — .claude/skills/adr-generator/references/ad-quality-frameworks.md:7

## Also called — verbatim
> "Significance check" — .claude/skills/adr-generator/SKILL.md:72

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 5 | defined here | Architectural Significance Requirement test evaluating 7 criteria to determine whether an issue warrants a full ADR. |
| .claude/skills/adr-generator/SKILL.md | 72 | used here | Significance check in Phase G1 (Gather) screening out trivially reversible, local decisions lacking stakeholder concern. |

## Consumes
Candidate architectural decision, problem statement, cost/benefit estimates, stakeholder concerns, QoS requirements.

## Produces
Architectural significance score (H/M/L or Y/N across 7 criteria) determining whether an ADR should be created or skipped.

## When applied
Executed at the start of Phase G1 (Gather) in `adr-generator` before investing effort in drafting an ADR.

## Sub-concepts
business-value-risk, key-stakeholder-concern, runtime-qos, external-dependencies, cross-cutting, foak, past-trouble

## Part of
adr-generator

## Implementation status
clean

## Design notes
The ASR (Architectural Significance Requirement) Test provides an objective, lightweight filter based on Olaf Zimmermann's research to decide if a technical choice warrants formal ADR documentation. By evaluating seven criteria in 1-2 minutes, it prevents two common anti-patterns: under-documenting impactful architectural changes and wasting engineering effort on trivial, easily reversible decisions.
