---
package: addy
name: vertical slicing
slug: vertical-slicing
kind: technique
package_phase: addy:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/planning-and-task-breakdown/SKILL.md, sha256: ed0f90cc5951ddd4bcab7f871f64efec93a49af9279ef93bc470da77ad8da3f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# vertical slicing

## Definition — verbatim
> "Each vertical slice delivers working, testable functionality." — skills/planning-and-task-breakdown/SKILL.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/planning-and-task-breakdown/SKILL.md | 69 | defined here | Prescribed as the core planning technique to decompose features into complete, testable end-to-end paths |

## Consumes
Functional requirements, user stories, subsystem dependency graphs.

## Produces
Incrementally deliverable tasks containing corresponding schema, API, and UI changes that work end-to-end upon task completion.

## When applied
During Step 3 of planning, when decomposing a specification into implementable tasks.

## Sub-concepts
none

## Part of
planning-and-task-breakdown

## Implementation status
clean

## Design notes
Vertical slicing is addy's foundational decomposition discipline for autonomous agents. Instead of building isolated layers, each task delivers a complete vertical pathway through the stack (database schema, API handler, and user interface) that is immediately functional and testable, ensuring the repository remains in a continuously buildable and verifiable state.
