---
package: rjm
name: implemented
slug: implemented
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md, sha256: 753b2079b2f8ad0d65f9142ba030eab785afdf790b91d3a5283898c887b66458}
  - {path: .claude/skills/adr-review/scripts/detect_adr_changes.py, sha256: f8916b967a34d2834a234f6223be04d1b04a925ea682850c7b65f2bd63c41805}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# implemented

## Definition — verbatim
> "implemented: false        # flips true at first merged change; gates amend-vs-supersede" — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 53 | defined here | Explains that the frontmatter implemented field gates amend-vs-supersede and remains true despite code reverts |
| .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md | 54 | defined here | Frontmatter boolean field specification that flips to true upon first merged code change |
| .claude/skills/adr-review/scripts/detect_adr_changes.py | 95 | used here | Excluded non-decision frontmatter key in ADR change detection script |

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
ADR frontmatter metadata field that tracks whether a decision's changes have shipped to production, gating amend-vs-supersede rules; categorized as name-only per D-023.
