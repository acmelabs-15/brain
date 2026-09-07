---
package: matt
name: Top recommendation section
slug: top-recommendation-section
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/improve-codebase-architecture/HTML-REPORT.md, sha256: 581e8bb5a521e46bbda8ca7e19b15948bed882187108092ebb90c62513b77528}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Top recommendation section

## Definition — verbatim
> "One larger card. Candidate name, one sentence on why, anchor link to its card. That's it." — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:104

## Also called — verbatim
`Top recommendation` — skills/engineering/improve-codebase-architecture/SKILL.md:52

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 102 | defined here | Defined as the concluding section of the HTML report highlighting the highest-leverage candidate with an anchor link. |

## Consumes
The evaluated candidate cards and their relative leverage assessments.

## Produces
A prominent summary card identifying the primary recommended refactoring with an anchor link.

## When applied
Rendered at the conclusion of the HTML report to provide an actionable starting point.

## Sub-concepts
none

## Part of
html-report

## Implementation status
clean

## Design notes
The concluding section of an HTML architecture review report that cuts through candidate choices by featuring a single top recommendation card with a one-sentence rationale and direct anchor link to focus discussion.
