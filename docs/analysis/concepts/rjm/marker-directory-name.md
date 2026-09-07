---
package: rjm
name: MARKER_DIRECTORY_NAME
slug: marker-directory-name
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/testing/mutation_workspace_git.py, sha256: 57a9d9dfa073c1d628afccce78bde4137748c564d5f6a1f4d9e0eb4720c708d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MARKER_DIRECTORY_NAME

## Definition — verbatim
(used, not defined)

> "MARKER_DIRECTORY_NAME = \"mutation-active\"" — scripts/testing/mutation_workspace_git.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace_git.py | 15 | defined here | Constant defining the subdirectory name within .git for tracking active mutation runs. |

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
MARKER_DIRECTORY_NAME is a Python constant identifier for the git mutation marker directory rather than a lifecycle concept.
