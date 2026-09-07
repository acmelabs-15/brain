---
package: rjm
name: _GH_PR_CREATE_PATTERN
slug: gh-pr-create-pattern
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/hook_utilities/utilities.py, sha256: c8cf18762a2a055c323142ee77d0eeaeb7f4fe66e8d296787e3e6fdf75661060}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _GH_PR_CREATE_PATTERN

## Definition — verbatim
(used, not defined)

> "_GH_PR_CREATE_PATTERN = re.compile(r\"(?:^|\s)gh\s+pr\s+create\b\")" — scripts/hook_utilities/utilities.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/utilities.py | 25 | defined here | Compiled regular expression matching GitHub CLI PR creation commands. |

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
clean

## Design notes
A private regular expression constant identifier used to recognize PR creation commands in hook scripts rather than a lifecycle concept.
