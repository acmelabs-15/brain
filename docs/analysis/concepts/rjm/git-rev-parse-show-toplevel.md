---
package: rjm
name: git rev-parse --show-toplevel
slug: git-rev-parse-show-toplevel
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_resolver_anchoring.py, sha256: 8013b916e0028b1191d0d6f89083dfc8030d317c22fc705a4fb159522f950e46}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# git rev-parse --show-toplevel

## Definition — verbatim
(used, not defined)

> "The fix is to anchor the repo-relative rung on ``git rev-parse --show-toplevel`` so it resolves from anywhere inside the worktree." — scripts/validation/check_skill_resolver_anchoring.py:15-16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_resolver_anchoring.py | 15 | used here | Shell command used to anchor candidate paths to git repository root. |

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
defects: orphan

## Design notes
A git command invocation cited in `check_skill_resolver_anchoring.py`, classified as name-only per D-023.
