---
package: matt
name: grilling loop
slug: grilling-loop
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# grilling loop

## Definition — verbatim
> "Once the user picks a candidate, call the Skill tool with "grilling" to walk the decision tree with them: constraints, dependencies, the shape of the deepened module, what sits behind the seam, what tests survive." — skills/engineering/improve-codebase-architecture/SKILL.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/SKILL.md | 62 | defined here | Defined in step 3 as the conversational phase where the agent and user interrogate candidate choices using the grilling skill. |

## Consumes
A candidate chosen by the user from the HTML report.

## Produces
Refined architectural decisions, updated domain terms in `CONTEXT.md`, and new or updated ADRs.

## When applied
Triggered once the user selects an architectural candidate from the HTML review report.

## Sub-concepts
grilling, domain-modeling

## Part of
improve-codebase-architecture

## Implementation status
clean

## Design notes
An interactive interrogation technique that walks through decision trees, constraints, dependencies, and testing consequences of an architecture candidate, ensuring changes are fully vetted and recorded in `CONTEXT.md` and ADRs before code is written.
