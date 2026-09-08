---
package: rjm
name: Skill SKIP Clause Routing
slug: skill-skip-clause-routing
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

# Skill SKIP Clause Routing

## Definition — verbatim
> "Skill SKIP Clause Routing" — scripts/validation/pre_pr_sequence.py:310

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 310 | defined here | Pre-PR gate verifying that SKIP clauses in multi-member skill families route to existing sibling skills. |

## Consumes
Skill definitions and their conditional SKIP routing directives across skill families.

## Produces
Pass/fail gate verdict ensuring SKIP routing targets are valid and existing skills.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Skill SKIP Clause Routing is a validation gate (Issue #3484) ensuring that when a skill family uses leading-token SKIP clauses to divert execution, every route points to an existing sibling skill, preventing dead-end redirection loops in agent workflows.
