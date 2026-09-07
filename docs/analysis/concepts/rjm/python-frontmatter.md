---
package: rjm
name: python-frontmatter
slug: python-frontmatter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md, sha256: 753b2079b2f8ad0d65f9142ba030eab785afdf790b91d3a5283898c887b66458}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# python-frontmatter

## Definition — verbatim
(used, not defined)

> "Using the repo's existing Python frontmatter dependency (`python-frontmatter`, per ADR-042 Python-first; `yq` is not in the toolchain):" — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md | 111 | used here | Named as the Python library dependency used for parsing markdown YAML frontmatter |

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
defects: missing-path

## Design notes
python-frontmatter is the package identifier for an external Python library dependency used to parse document frontmatter; categorized as name-only per D-023.
