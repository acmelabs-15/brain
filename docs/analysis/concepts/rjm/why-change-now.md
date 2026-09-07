---
package: rjm
name: Why Change Now
slug: why-change-now
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Why Change Now

## Definition — verbatim
> "### Why Change Now" — .claude/skills/adr-generator/references/adr-template.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-template.md | 78 | defined here | Subsection of Prior Art Investigation in the ADR template requiring justification for timing, changed conditions, and migration risks. |

## Consumes
Evidence of changed requirements, new technological alternatives, and risk analysis.

## Produces
A documented justification demonstrating why immediate architectural alteration is necessary and viable.

## When applied
Mandatory section under Prior Art Investigation when an ADR proposes modifications to established patterns.

## Sub-concepts
none

## Part of
adr-template

## Implementation status
clean

## Design notes
A vital scrutiny section in rjm's Prior Art Investigation forcing authors to explain why a decision cannot wait or remain unchanged. By requiring explicit evidence on whether the original problem shifted and evaluating blast radius and transition risks, it protects the codebase from churn and unjustified refactoring.
