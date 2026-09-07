---
package: rjm
name: "Validate-SkillFrontmatter.ps1"
slug: validate-skillfrontmatter-ps1
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Validate-SkillFrontmatter.ps1

## Definition — verbatim
(used, not defined)

> "1. **Pre-commit validation**: `scripts/Validate-SkillFrontmatter.ps1` (blocking gate)" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:362

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 362 | used here | Listed as a planned pre-commit blocking gate script for verifying skill frontmatter. |

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
defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path

## Design notes
A PowerShell script filename identifying a planned frontmatter validation pre-commit hook, classified as name-only per D-023.
