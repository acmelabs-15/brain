---
package: rjm
name: _contained_realpath
slug: contained-realpath
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/quick_validate.py, sha256: 579d5fb466abe33bebdd9997f39953776bfe932e972df0d57e2051864c060214}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _contained_realpath

## Definition — verbatim
(used, not defined)

> "def _contained_realpath(target: Path, root: str) -> str | None:" — .claude/skills/skillforge/scripts/quick_validate.py:172

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/quick_validate.py | 172 | defined here | Resolves target paths and returns realpath only if the target remains contained within the root boundary. |

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
defects: doc-drift, exit-code-mismatch

## Design notes
Private helper function resolving realpaths with boundary containment validation to guard against symlink escapes, classified as name-only per D-023.
