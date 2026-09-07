---
package: rjm
name: _is_within
slug: is-within
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

# _is_within

## Definition — verbatim
(used, not defined)

> "def _is_within(child: str, root: str, pathmod: _PathModule = os.path) -> bool:" — .claude/skills/skillforge/scripts/quick_validate.py:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/quick_validate.py | 130 | defined here | Path security function checking whether a child path is within a designated root directory to prevent directory traversal. |

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
Private path traversal guard function in `quick_validate.py` comparing normalized realpaths via `commonpath`, classified as name-only per D-023.
