---
package: rjm
name: build_index
slug: build-index
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/extract_and_index.py, sha256: 6d3e638453dc07f7586b49315c8539b2d9eaa0aad91b14e53cac345e8a0fcde4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# build_index

## Definition — verbatim
(used, not defined)

> "def build_index(sections: list[Section], detail_dir: str) -> str:" — .claude/skills/context-optimizer/scripts/extract_and_index.py:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/extract_and_index.py | 186 | defined here | Function constructing a pipe-delimited index table referencing extracted detail files. |

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
defects: doc-drift, script-bug

## Design notes
build_index is a Python function identifier in extract_and_index.py generating the markdown table index rather than an operational lifecycle concept, classified as name-only per D-023.
