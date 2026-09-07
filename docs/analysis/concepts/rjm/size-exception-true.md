---
package: rjm
name: size-exception: true
slug: size-exception-true
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# size-exception: true

## Definition — verbatim
(used, not defined)

> "if \"size-exception: true\" in \"\".join(lines[:20]):" — .claude/skills/taste-lints/scripts/taste_lints.py:827

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/scripts/taste_lints.py | 827 | defined here | Checked within the first 20 lines of a skill file to exempt it from the 500-line skill prompt size limit. |

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
defects: other, doc-drift

## Design notes
`size-exception: true` is a YAML frontmatter attribute enabling skills to exceed the 500-line prompt size threshold without triggering a lint violation, classified as kind: name-only per D-023.
