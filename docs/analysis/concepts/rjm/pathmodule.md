---
package: rjm
name: _PathModule
slug: pathmodule
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

# _PathModule

## Definition — verbatim
(used, not defined)

> "class _PathModule(Protocol):" — .claude/skills/skillforge/scripts/quick_validate.py:114

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/quick_validate.py | 114 | defined here | Python typing Protocol specifying the structural interface of `os.path` required by `_is_within`. |

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
Python typing Protocol used internally for path module dependency injection and containment testing, classified as name-only per D-023.
