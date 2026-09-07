---
package: rjm
name: issue #4672
slug: issue-4672
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/test_installed_plugin_hooks.py, sha256: 7c14da017765e6ea5df1f3cdac71f1203ffb258520dc2b35b8a50407a2ebf160}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# issue #4672

## Definition — verbatim
(used, not defined)

> "issue #4672" — scripts/ci/test_installed_plugin_hooks.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/test_installed_plugin_hooks.py | 10 | used here | Cited in docstring describing legacy empty manifest failure rules inverted by ADR-097. |

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
defects: script-bug, other

## Design notes
issue #4672 is a GitHub issue identifier recording the historical rule requiring non-empty test runs in plugin hook testing rather than an operational lifecycle concept.
