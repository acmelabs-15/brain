---
package: rjm
name: superseded-by
slug: superseded-by
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md, sha256: 753b2079b2f8ad0d65f9142ba030eab785afdf790b91d3a5283898c887b66458}
  - {path: .claude/skills/adr-review/scripts/detect_adr_changes.py, sha256: f8916b967a34d2834a234f6223be04d1b04a925ea682850c7b65f2bd63c41805}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# superseded-by

## Definition — verbatim
> "superseded-by: null       # ADR id that supersedes this record, or null" — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md | 52 | defined here | Defined in frontmatter schema as the ADR ID that supersedes the current record, or null |
| .claude/skills/adr-review/scripts/detect_adr_changes.py | 90 | used here | Checked in ADR change detection script as authoritative governance metadata |

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
defects: exit-code-mismatch, missing-dependency, missing-path

## Design notes
superseded-by is a YAML frontmatter key in ADR documents indicating which newer decision record supersedes the current record; categorized as name-only per D-023.
