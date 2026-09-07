---
package: rjm
name: MutationRunner
slug: mutationrunner
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/testing/mutation_harness.py, sha256: 4a358071a44d214624a13c240c270f7c41c84e78d36caabcde41d075a9bba262}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MutationRunner

## Definition — verbatim
(used, not defined)

> "class MutationRunner:" — scripts/testing/mutation_harness.py:197

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_harness.py | 197 | defined here | Class orchestrating the application, subprocess test execution, and safe restoration of code mutations. |

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
MutationRunner is a Python class identifier executing mutation tests within isolated workspaces rather than a lifecycle concept.
