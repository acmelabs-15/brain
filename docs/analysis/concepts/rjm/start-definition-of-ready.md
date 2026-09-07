---
package: rjm
name: START Definition of Ready
slug: start-definition-of-ready
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# START Definition of Ready

## Definition — verbatim
> "Verify the decision passes the [START Definition of Ready](references/ad-quality-frameworks.md): Stakeholders known, Time (Most Responsible Moment) has come, Alternatives exist, Requirements understood, Template will be determined in G2." — .claude/skills/adr-generator/SKILL.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/SKILL.md | 74 | used here | Readiness gate in Phase G1 verifying stakeholders, timing, alternatives, requirements, and template readiness. |

## Consumes
Initial decision proposal and problem context.

## Produces
Go/no-go readiness assessment before entering Phase G2 research.

## When applied
During Phase G1 of ADR generation.

## Sub-concepts
none

## Part of
adr-generator

## Implementation status
clean

## Design notes
A pre-generation readiness gate enforcing the START criteria (Stakeholders known, Time has come, Alternatives exist, Requirements understood, Template determined). It prevents premature or ill-conceived ADR authoring by ensuring all necessary contextual foundations are established before proceeding to research and drafting.
