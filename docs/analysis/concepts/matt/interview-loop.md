---
package: matt
name: interview loop
slug: interview-loop
kind: technique
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# interview loop

## Definition — verbatim
> "`grilling` is the interview loop that stress-tests a plan, a decision, or an idea before anyone acts on it." — docs/productivity/grilling.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/grilling.md | 3 | defined here | Characterizes the iterative questioning mechanism that pressure-tests decisions against a design tree. |

## Consumes
A draft proposal, plan, architectural decision, or vague idea needing rigorous stress-testing.

## Produces
A fully resolved decision tree with explicit trade-offs and verified shared understanding.

## When applied
Invoked via `/grilling` or called by upstream skills prior to drafting specifications or executing implementation.

## Sub-concepts
design-tree, round, primitive

## Part of
grilling

## Implementation status
defects: internal-contradiction, other (sequential vs batched question preferences; weak models skipping confirmation gate)

## Design notes
The interview loop is the core conversational mechanism in Matt's lifecycle that precedes specification and coding. Unlike open-ended brainstorming, the interview loop is structured systematically around a dependency-ordered tree of decisions, uncovering implicit assumptions and forcing trade-offs to be resolved before work is scheduled.
