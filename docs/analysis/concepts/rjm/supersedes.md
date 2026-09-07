---
package: rjm
name: supersedes
slug: supersedes
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

# supersedes

## Definition — verbatim
> "supersedes: []            # ADR ids this record supersedes" — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md | 51 | defined here | Defined in frontmatter schema as a list of ADR IDs that the current record supersedes |
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
supersedes is a YAML frontmatter key in ADR documents recording IDs of earlier decisions superseded by the current record; categorized as name-only per D-023.
