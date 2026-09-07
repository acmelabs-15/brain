---
package: rjm
name: Planguage
slug: planguage
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-templates-catalog.md, sha256: f239c5d7707d6906f22a240fa99de6825bec6b64aff057c31a75a4e152ebabaa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Planguage

## Definition — verbatim
> "| **Planguage** | Medium | Quality/metrics-oriented decisions | Stakeholders, risks, assumptions as first-class fields |" — .claude/skills/adr-generator/references/adr-templates-catalog.md:15

## Also called — verbatim
Planguage Template — .claude/skills/adr-generator/references/adr-templates-catalog.md:192

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 15 | defined here | Compared in template catalog as a quality- and metrics-oriented format treating stakeholders, risks, and assumptions as first-class fields. |

## Consumes
Measurable quality requirements, stakeholder goals, risks, and architectural assumptions.

## Produces
A metrics-driven decision record based on Tom Gilb's planning language methodology.

## When applied
Selected when decisions require quantifiable quality attributes, metrics, and measurable verification criteria.

## Sub-concepts
none

## Part of
adr-templates-catalog

## Implementation status
clean

## Design notes
An ADR template format cataloged in rjm based on Tom Gilb's Planguage specification. It elevates stakeholders, risks, and measurable quality metrics to first-class fields, making it well-suited for engineering contexts where architectural success is evaluated through quantitative targets rather than purely qualitative prose.
