---
package: addy
name: Full lifecycle, immediately
slug: full-lifecycle-immediately
kind: pattern
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: docs/adoption-guide.md, sha256: d36695c393ebad379282c090b13f44a7a851ca0ec7c9453883e2fa3307924495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Full lifecycle, immediately

## Definition — verbatim
> "| Adoption strategy | **Full lifecycle, immediately** | **Incremental, verification-first** |" — docs/adoption-guide.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/adoption-guide.md | 18 | defines | Prescribes deploying the complete sequence of lifecycle skills from day zero on greenfield projects. |

## Consumes
Greenfield project conditions with clean history and controllable test coverage.

## Produces
End-to-end execution of `/spec`, `/plan`, `/build`, `/review`, and `/ship` across all tasks.

## When applied
Chosen when launching new projects where quality gates compound from the first commit.

## Sub-concepts
none

## Part of
adoption-guide, greenfield

## Implementation status
clean

## Design notes
"Full lifecycle, immediately" is the recommended rollout strategy for greenfield development. By instituting structured specifications, atomic task breakdown, test-driven development, and multi-persona review gates from day zero, projects avoid accumulating technical debt and establish strong engineering habits early.
