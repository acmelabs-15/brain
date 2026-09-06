---
package: addy
name: one-pager
slug: one-pager
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/idea-refine.json, sha256: 559741e57427aca454ce9546df49771c1929208f5b3a89974ddc76ed0a15a224}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# one-pager

## Definition — verbatim
(used, not defined)
> "Sharpening questions, distinct directions, surfaced assumptions, and a one-pager with MVP scope and a Not Doing list" — evals/cases/idea-refine.json:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/idea-refine.json | 34 | used here | Specified as the expected final deliverable of the idea-refine evaluation case. |

## Consumes
Refined problem statements, explored solution variations, and surfaced assumptions.

## Produces
A concise one-page document capturing product vision, target audience, MVP scope, and explicit non-goals.

## When applied
At the conclusion of the idea-refine process to capture the settled concept before detailed spec authoring.

## Sub-concepts
- mvp-scope
- not-doing-list

## Part of
- idea-refine

## Implementation status
clean

## Design notes
A one-pager serves as the compact handoff artifact from ideation to specification. By constraining product definition to a single page with explicit MVP boundaries and a Not Doing list, it forces prioritization and ensures alignment before engineering resources are committed.
