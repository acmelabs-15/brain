---
package: rjm
name: Shipped Skill Routes
slug: shipped-skill-routes
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

# Shipped Skill Routes

## Definition — verbatim
> "Shipped Skill Routes" — scripts/validation/pre_pr_sequence.py:331

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 331 | defined here | Pre-PR gate checking that routing tables in shipped skill trees point only to skills that tree ships. |

## Consumes
Routing tables within shipped distributions and the set of shipped skill definitions.

## Produces
Pass/fail gate verdict preventing dangling skill route references in distributions.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Shipped Skill Routes is a distribution consistency gate (Issue #2026) that prevents coordination drift across packaging targets. It verifies that skill routing tables bundled into release packages reference only skills that are shipped in that package.
