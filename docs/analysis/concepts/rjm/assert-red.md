---
package: rjm
name: assert_red
slug: assert-red
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/mutation_test_proc_group.py, sha256: 74dd80167b2ade1656564eb8fd46a7aadf2dc51c53bf462d179014270bed8bfc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# assert_red

## Definition — verbatim
(used, not defined)

> "def assert_red(result: subprocess.CompletedProcess[str], mutation_name: str) -> None:" — scripts/mutation_test_proc_group.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mutation_test_proc_group.py | 55 | defined here | Defines assertion helper verifying that a mutated test run produces a non-zero exit code (kills the mutant). |

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
A Python assertion function identifier confirming that tests fail on mutated code rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
