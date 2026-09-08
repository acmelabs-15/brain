---
package: rjm
name: YAML Style Validation
slug: yaml-style-validation
kind: gate
package_phase: rjm:ship
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

# YAML Style Validation

## Definition — verbatim
> "YAML Style Validation" — scripts/validation/pre_pr_sequence.py:353

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 353 | defined here | Pre-PR validation gate enforcing YAML style conventions across repository files using yamllint. |

## Consumes
Repository YAML files (`.yml`, `.yaml`).

## Produces
Pass/fail validation verdict on YAML formatting and schema structure.

## When applied
Run during pre-PR validation sequence; skipped when the `--quick` flag is provided.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
A pre-PR validation gate in `pre_pr_sequence.py` that executes `validate_yaml_style` to enforce formatting and syntax consistency across YAML files in the repository using yamllint. It is configured with `skip_when_quick=True` to allow rapid local feedback loops.
