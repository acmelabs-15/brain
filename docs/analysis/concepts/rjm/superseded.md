---
package: rjm
name: Superseded
slug: superseded
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-best-practices.md, sha256: 62f0e939ebf8455bdf6f0ff1d882d21e551b1d1bcfc532a863ef80f68a0675f2}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/adr-review/scripts/detect_adr_changes.py, sha256: f8916b967a34d2834a234f6223be04d1b04a925ea682850c7b65f2bd63c41805}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Superseded

## Definition — verbatim
> "Replaced by a newer ADR" — .claude/skills/adr-generator/references/adr-best-practices.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-best-practices.md | 74 | defined here | Defined in the ADR lifecycle table as the stage indicating a decision has been replaced by a newer ADR. |
| .claude/skills/adr-review/scripts/detect_adr_changes.py | 264 | used here | Parsed as a valid frontmatter status enum token in the deterministic ADR review gate. |
| .claude/skills/adr-review/SKILL.md | 222 | used here | Verified as an allowed status value in the post-review validation checklist per ADR-073. |

## Consumes
A newly accepted replacement ADR and the existing implemented ADR.

## Produces
An updated historical record linking forward to the new ADR via `superseded-by`.

## When applied
Applied to an accepted ADR when subsequent requirements or architectural changes render its decisions obsolete and a replacement record is accepted.

## Sub-concepts
none

## Part of
adr-lifecycle

## Implementation status
defects: exit-code-mismatch, doc-drift, missing-path

## Design notes
A lifecycle state in rjm representing an architectural decision that has been formally replaced by a subsequent ADR. In accordance with rjm's bounded mutability rules, superseded ADRs are never deleted; their historical context and trade-offs are permanently retained, linked to the replacing document to maintain full architectural provenance.
