---
package: rjm
name: _run_orphaned_build_deferrals
slug: run-orphaned-build-deferrals
kind: name-only
package_phase: none
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

# _run_orphaned_build_deferrals

## Definition — verbatim
(used, not defined)

> "def _run_orphaned_build_deferrals(repo_root: Path, _args: argparse.Namespace) -> bool:" — scripts/validation/pre_pr_sequence.py:182

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 182 | defined here | Gate wrapper function executing orphaned build deferrals validation with GH_REPO environment override support. |

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
`_run_orphaned_build_deferrals` is a Python gate adapter function identifier wrapping the build deferral validator rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
