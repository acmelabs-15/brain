---
package: rjm
name: eol=lf
slug: eol-lf
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-029-skill-file-line-ending-normalization.md, sha256: 4091b5d7ea04f98e821d7a3921be5979436e4d460c86b2baf14113c85cdc0001}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# eol=lf

## Definition — verbatim
(used, not defined)

> "*.skill text eol=lf" — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-029-skill-file-line-ending-normalization.md | 43 | used here | Specifies gitattributes setting to force Unix-style line endings for skill files. |

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
defects: missing-path, doc-drift

## Design notes
A Git configuration attribute directive specifying that working tree files should be checked out with line feed (`\n`) characters, not a lifecycle methodology concept.
