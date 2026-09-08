---
package: rjm
name: CI Dependency Pins
slug: ci-dependency-pins
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CI Dependency Pins

## Definition — verbatim
> "CI Dependency Pins" — scripts/validation/pre_pr_sequence.py:260

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 260 | defined here | Pre-PR validation gate verifying consistency between dependency pins in CI workflow files and pyproject.toml constraints. |

## Consumes
Explicit package version pins in .github/ workflow files and declared constraints in pyproject.toml.

## Produces
Pass/fail gate verdict enforcing alignment between workflow dependency literals and project constraints.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
CI Dependency Pins is a validation gate (Issue #3377) that prevents configuration drift between literal package version pins in GitHub Actions workflows and the official constraints in pyproject.toml. By failing when workflow literals contradict project baselines, it eliminates subtle test-environment divergence and prevents inadvertent dependency downgrades.
