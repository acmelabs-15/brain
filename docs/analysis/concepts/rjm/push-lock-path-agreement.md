---
package: rjm
name: Push Lock Path Agreement
slug: push-lock-path-agreement
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

# Push Lock Path Agreement

## Definition — verbatim
> "Push Lock Path Agreement" — scripts/validation/pre_pr_sequence.py:234

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 234 | defined here | Pre-PR validation gate verifying agreement on push lock filesystem paths across scripts, hooks, and documentation. |

## Consumes
Hook definitions, validation scripts, and documentation referencing push lock locations.

## Produces
Pass/fail validation verdict ensuring all repository components reference the canonical push lock file path.

## When applied
During pre-PR validation sequence execution prior to pull request submission.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Architectural consistency gate preventing synchronization race conditions and hook failures by verifying that all scripts and hooks agree on the canonical path to the push lock.
