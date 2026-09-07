---
package: rjm
name: MARKER_TRAILER_KEY
slug: marker-trailer-key
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/scripts/validate_review_marker.py, sha256: 544dafe1234d93afd9cba8b65d80c67fd198918f7a44838a56528ed5256afd11}
  - {path: scripts/validation/validate_review_marker.py, sha256: 544dafe1234d93afd9cba8b65d80c67fd198918f7a44838a56528ed5256afd11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MARKER_TRAILER_KEY

## Definition — verbatim
(used, not defined)

> "MARKER_TRAILER_KEY" — .claude/skills/review/scripts/validate_review_marker.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/scripts/validate_review_marker.py | 54 | defined here | Constant defining the standard Git trailer key name used for review markers. |
| .claude/skills/review/SKILL.md | 160 | used here | Quoted in review skill documentation to define the contract between marker writers and readers. |
| scripts/validation/validate_review_marker.py | 54 | defined here | Canonical validator copy defining the trailer key string. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A Python constant identifier defining the Git trailer key `"Reviewed-By"` used across review and shipping scripts, classified as name-only per D-023.
