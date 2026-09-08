---
package: rjm
name: Documented Interpreter Portability
slug: documented-interpreter-portability
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

# Documented Interpreter Portability

## Definition — verbatim
> "Documented Interpreter Portability" — scripts/validation/pre_pr_sequence.py:285

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 285 | defined here | Pre-PR gate verifying that documented execution commands use managed runners (like uv) rather than bare python3. |

## Consumes
Command snippets and execution instructions across repository documentation.

## Produces
Pass/fail gate verdict preventing documentation from commanding bare python3 for scripts with external dependencies.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Documented Interpreter Portability is a validation gate (Issue #3791) ensuring documentation does not instruct users or agents to execute scripts requiring third-party libraries using bare python3. It enforces managed environment commands (such as uv run python) so scripts do not fail with ModuleNotFoundError on clean checkouts.
