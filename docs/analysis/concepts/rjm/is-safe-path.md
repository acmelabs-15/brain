---
package: rjm
name: is_safe_path
slug: is-safe-path
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

# is_safe_path

## Definition — verbatim
(used, not defined)

> "def is_safe_path(filepath: str) -> bool:" — .claude/skills/taste-lints/scripts/taste_lints.py:187

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/scripts/taste_lints.py | 187 | defined here | Function checking relative paths against directory traversal attacks (CWE-22) by verifying components do not contain "..". |

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
defects: doc-drift, other

## Design notes
is_safe_path is a Python helper function identifier implementing path traversal checks in taste_lints.py rather than a lifecycle concept.
