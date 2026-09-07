---
package: rjm
name: mutation harness
slug: mutation-harness
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
  - {path: scripts/ci/mutation_harness_ciperms.py, sha256: 814dca7906ebdabba9e13a5f2d72039965f792b5d6f534877b452e5e40084fba}
  - {path: scripts/mutation_test_proc_group.py, sha256: 74dd80167b2ade1656564eb8fd46a7aadf2dc51c53bf462d179014270bed8bfc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# mutation harness

## Definition — verbatim
> "Mutation harness for CI security permission tests." — scripts/ci/mutation_harness_ciperms.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 63 | used here | Cited in pre-push timing analysis as refusing to run when target files are dirty in flight. |
| scripts/ci/mutation_harness_ciperms.py | 2 | defined here | Module docstring defining the mutation harness that validates CI permission test sensitivity against injected AST mutations. |
| scripts/mutation_test_proc_group.py | 2 | defined here \| used here | Implements a dedicated mutation testing harness that injects process-group timeout mutations to confirm test suite kill rates. |

## Consumes
Source implementation files, target test suites, and clean git worktree state.

## Produces
Mutation test outcome reports (DEAD, SURVIVED, DID-NOT-APPLY, NOT-RUN) and exit codes indicating whether all intentional mutations were detected.

## When applied
Run during test suite verification to prove that automated tests actually fail when load-bearing logic or security permissions are removed or broken.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: orphan

## Design notes
A mutation harness is an automated verification framework in rjm that deliberately injects synthetic faults into production code to evaluate test suite sensitivity. By verifying that security-loosening or bug-inducing mutations cause tests to fail (DEAD) while benign changes survive, mutation harnesses guard against false-positive test suites and unfailable assertions.
