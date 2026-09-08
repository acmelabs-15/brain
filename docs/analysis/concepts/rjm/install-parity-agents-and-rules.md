---
package: rjm
name: Install Parity (agents and rules)
slug: install-parity-agents-and-rules
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

# Install Parity (agents and rules)

## Definition — verbatim
> "Install Parity (agents and rules)" — scripts/validation/pre_pr_sequence.py:368

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 368 | defined here | Pre-PR validation gate enforcing co-change parity between agents and installed rules. |

## Consumes
Git change status across agent definitions and installed rule files.

## Produces
Pass/fail verification verdict ensuring agent updates are paired with corresponding rule updates.

## When applied
Run unconditionally during pre-PR validation sequence execution.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
A cheap, always-on gate in `pre_pr_sequence.py` that verifies co-change parity between agents and rule definitions, ensuring changes made to agent templates and instructions are paired with corresponding updates to installed rules before opening a pull request.
