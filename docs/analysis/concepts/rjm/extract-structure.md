---
package: rjm
name: Extract Structure
slug: extract-structure
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Extract Structure

## Definition — verbatim
(used, not defined)

> "\"step_title\": \"Extract Structure\"," — .claude/skills/decision-critic/scripts/decision-critic.py:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/scripts/decision-critic.py | 44 | defined here | Step 1 title and prompt instructions decomposing decisions into claims, assumptions, constraints, and judgments. |

## Consumes
Decision statement (`--decision`) and context background (`--context`).

## Produces
Decomposed decision elements with persistent identifiers: claims (C1..Cn), assumptions (A1..An), constraints (K1..Kn), and judgments (J1..Jn).

## When applied
Executed as Step 1 in the decomposition phase of the structured decision-critic workflow.

## Sub-concepts
claims, assumptions, constraint, judgments

## Part of
decision-critic

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
The foundational decomposition step in decision critique that isolates factual assertions, tacit beliefs, hard boundaries, and subjective trade-offs into stable, addressable IDs so they can be independently verified and challenged in subsequent steps.
