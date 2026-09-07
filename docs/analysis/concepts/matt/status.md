---
package: matt
name: Status
slug: status
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/domain-modeling/ADR-FORMAT.md, sha256: 944c92aa790e8fbdc9199640b170979abb8a34ba8d0fe18c2a01a63bce140ca0}
  - {path: skills/productivity/teach/LEARNING-RECORD-FORMAT.md, sha256: 701fa34b6748aa89e6c960ffb815257f481a7d77fb2900f9028f7edf3fdd6052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Status

## Definition — verbatim
> "- **Status** frontmatter (`proposed | accepted | deprecated | superseded by ADR-NNNN`): useful when decisions are revisited" — skills/engineering/domain-modeling/ADR-FORMAT.md:21

> "- **Status** frontmatter (`active | superseded by LR-NNNN`): useful when an earlier understanding turns out to be wrong and is replaced." — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/domain-modeling/ADR-FORMAT.md | 21 | defined here | Defined as an optional frontmatter metadata field for tracking ADR lifecycle states. |
| skills/productivity/teach/LEARNING-RECORD-FORMAT.md | 21 | defined here | Defined as an optional frontmatter metadata field for tracking learning record validity and supersession. |

## Consumes
An ADR or learning record subject to revision, supersession, or retirement.

## Produces
Frontmatter metadata explicitly recording the record's lifecycle state.

## When applied
When an architectural decision or pedagogical learning record is created, revised, deprecated, or superseded.

## Sub-concepts
none

## Part of
adr-format, learning-record-format

## Implementation status
clean

## Design notes
An optional frontmatter metadata field defined in both ADRs and learning records that captures the current lifecycle and validity status of a record without destroying historical knowledge.
