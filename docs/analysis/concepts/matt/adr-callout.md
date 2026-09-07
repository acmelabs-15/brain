---
package: matt
name: ADR callout
slug: adr-callout
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

# ADR callout

## Definition — verbatim
> "- **ADR callout** (if applicable): one line in an amber-tinted box." — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 53 | defined here | Specified as an optional candidate card component consisting of one line in an amber-tinted box flagging ADR relevance. |

## Consumes
An architectural decision candidate that meets ADR criteria.

## Produces
A visually prominent one-line callout linking a candidate refactoring to an ADR.

## When applied
When an architectural candidate in the HTML report impacts or contradicts an architectural decision record.

## Sub-concepts
none

## Part of
html-report

## Implementation status
clean

## Design notes
An optional visual element within an architecture review candidate card that highlights decisions meeting ADR criteria in an amber-tinted box, prompting the team to record or review an architectural decision record during the grilling loop.
