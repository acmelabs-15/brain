---
package: rjm
name: create_consumer_repo
slug: create-consumer-repo
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/materialize_installed_plugin.py, sha256: de098ac790298c060997e8a1fe7fd94a7a19bf0e4762b41d497af93cb7a26c2c}
  - {path: scripts/ci/test_installed_plugin_hooks.py, sha256: 7c14da017765e6ea5df1f3cdac71f1203ffb258520dc2b35b8a50407a2ebf160}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# create_consumer_repo

## Definition — verbatim
(used, not defined)

> "def create_consumer_repo(consumer_cwd: Path) -> None:" — scripts/ci/materialize_installed_plugin.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/materialize_installed_plugin.py | 40 | defined here | Creates and initializes a scratch consumer git repository for plugin installation testing. |
| scripts/ci/test_installed_plugin_hooks.py | 61 | defined here | Initializes an isolated git repository with initial commit to exercise hook execution. |

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
defects: orphan, script-bug, other

## Design notes
`create_consumer_repo` is a Python helper function identifier initializing isolated consumer git repositories for CI hook testing rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
