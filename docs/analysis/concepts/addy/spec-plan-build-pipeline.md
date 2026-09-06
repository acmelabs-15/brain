---
package: addy
name: spec -> plan -> build pipeline
slug: spec-plan-build-pipeline
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate-artifact-paths.js, sha256: 689a1c9b12391bdfe92b0102fb0f09278f5e4f07b2340a694f443b139d20c0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# spec -> plan -> build pipeline

## Definition — verbatim
(used, not defined)

> "Guards the spec -> plan -> build pipeline against silent artifact-path drift." — scripts/validate-artifact-paths.js:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-artifact-paths.js | 5 | used here | Describes the three-stage feature delivery pipeline guarded by artifact path validation. |

## Consumes
Product specifications, requirements, architecture decisions

## Produces
SPEC.md, tasks/plan.md, tasks/todo.md, implemented code changes

## When applied
Applied across the end-to-end development cycle from initial specification through planning to autonomous implementation.

## Sub-concepts
spec, plan, build

## Part of
none

## Implementation status
clean

## Design notes
The sequential development workflow in Addy connecting specification authoring (`/spec`), task breakdown and planning (`/plan`), and autonomous implementation (`/build`). The pipeline establishes strict artifact dependencies (`SPEC.md` -> `tasks/plan.md` -> implementation) to ensure alignment between agent commands.
