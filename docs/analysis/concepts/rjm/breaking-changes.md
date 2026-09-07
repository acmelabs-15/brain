---
package: rjm
name: Breaking Changes
slug: breaking-changes
kind: checklist
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

# Breaking Changes

## Definition — verbatim
> "### 5. Breaking Changes" — .claude/skills/review/references/architect.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/architect.md | 85 | defined here | Checklist section in architectural review evaluating public API changes, consumer impact, and migration paths. |

## Consumes
Pull request diff touching public APIs, exported interfaces, or shared contracts.

## Produces
Architectural findings classifying breaking changes and documenting migration path requirements.

## When applied
During Stage-2 architectural review when evaluating modifications to public interfaces or component contracts.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: doc-drift, missing-path, other

## Design notes
A review focus area within rjm's architecture review axis that evaluates whether diffs introduce backward-incompatible modifications to public APIs or component contracts, ensuring consumers are accounted for and viable migration paths exist.
