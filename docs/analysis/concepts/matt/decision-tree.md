---
package: matt
name: decision tree
slug: decision-tree
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/question-limits.md, sha256: a4c7ab33523e8f88b75be6549f657cf086b86d77be48b87d48276311e368cc9d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# decision tree

## Definition — verbatim
> "The point is to keep digging until each branch of the decision tree is resolved: some plans need three questions, some need fifty." — .out-of-scope/question-limits.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/question-limits.md | 7 | defined here | Explains that grilling continues until every branch of the plan's decision tree is resolved. |

## Consumes
An idea, plan, or specification containing unexplored choices or trade-offs.

## Produces
Resolution for each branching architectural or implementation decision.

## When applied
During conversational grilling sessions in `/grill-me`, `/grill-with-docs`, and planning workflows.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The decision tree represents the structural branching of architectural and design choices that a grilling session systematically traverses to ensure all critical ambiguities are resolved before implementation begins.
