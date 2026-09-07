---
package: rjm
name: inverted-control
slug: inverted-control
kind: technique
package_phase: rjm:test
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

# inverted-control

## Definition — verbatim
> "Exit 0 = all mutations killed, inverted-control green, baseline green." — scripts/mutation_test_proc_group.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mutation_test_proc_group.py | 14 | defined here | used here | Requires verifying that unmutated correct code passes tests as a baseline control during mutation testing. |

## Consumes
Target test suites and unmodified source files.

## Produces
Confirmation that the baseline test suite passes when no mutations are active.

## When applied
Run before, during, and after mutation iterations to verify tests only fail due to injected faults.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
A mutation testing verification technique ensuring that test suites remain green on unmodified code so test failures are accurately attributed to mutants.
