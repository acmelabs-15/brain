---
package: rjm
name: Build Command Exit Gates
slug: build-command-exit-gates
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Build Command Exit Gates

## Definition — verbatim
> "Build Command Exit Gates" — scripts/validation/pre_pr_sequence.py:271

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 271 | defined here | Pre-PR validation gate enforcing that build command invocations inspect and propagate exit codes per PR #1887 Layer 2. |
| scripts/validation/pre_pr.py | 13 | used here | Documented as step 6 in the pre-PR validation sequence docstring. |

## Consumes
Build scripts, workflow command invocations, and build pipeline definitions.

## Produces
Pass/fail gate verdict ensuring build commands propagate non-zero exit codes upon failure.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
defects: doc-drift

## Design notes
Build Command Exit Gates was introduced as Layer 2 of the PR #1887 retrospective to eliminate silent failures in build pipelines. It enforces that build scripts and generator invocations explicitly handle and propagate non-zero exit codes rather than allowing broken compilations to pass unnoticed.
