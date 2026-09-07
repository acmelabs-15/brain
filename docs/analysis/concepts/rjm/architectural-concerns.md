---
package: rjm
name: Architectural Concerns
slug: architectural-concerns
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

# Architectural Concerns

## Definition — verbatim
> "### Architectural Concerns" — .claude/skills/review/references/architect.md:132

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/architect.md | 132 | defined here | Section heading for the structured findings table detailing architectural severity, concerns, locations, and recommendations. |

## Consumes
Specific architectural flaws, boundary violations, or anti-patterns discovered in the diff.

## Produces
A markdown table documenting each concern with Severity (Critical/High/Medium/Low), Concern summary, Location (file:line), and actionable Recommendation.

## When applied
When reporting discovered architectural issues and anti-patterns during architectural review.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: doc-drift, missing-path, other

## Design notes
A structured findings table in rjm's architecture review report that enumerates design flaws, coupling issues, and boundary violations by severity alongside exact source locations and recommended fixes.
