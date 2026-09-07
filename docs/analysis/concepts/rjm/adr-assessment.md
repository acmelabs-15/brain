---
package: rjm
name: ADR Assessment
slug: adr-assessment
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR Assessment

## Definition — verbatim
> "### ADR Assessment" — .claude/skills/review/references/architect.md:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/architect.md | 151 | defined here | Output section header documenting architectural decisions identified, ADR necessity, and existing records. |

## Consumes
Identified architectural decisions, pattern introductions, or dependency choices compared against existing ADR directories.

## Produces
Structured metadata indicating ADR requirement (Yes/No), identified decisions, existing ADR references, and concrete recommendations.

## When applied
When outputting architectural review results to verify decision recording compliance.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: doc-drift, missing-path, other

## Design notes
An output section in rjm's architecture review report that checks whether significant architectural choices in the PR require authoring a new Architecture Decision Record or updating an existing one.
