---
package: rjm
name: PLAN
slug: plan
kind: phase
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: scripts/sync/detect_spec_drift.py, sha256: 4dc1517b2ead41c00958be4f3f4986ed5e2fa73971a79bac8c20a143afd635f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PLAN

## Definition — verbatim
> "  DEFINE          PLAN           BUILD          VERIFY         REVIEW          SHIP" — README.md:306

## Also called — verbatim
> "   /spec          /plan          /build        /test         /review       /ship" — README.md:311

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| README.md | 306 | defined here | Second phase in rjm's six-phase lifecycle diagram representing specification breakdown. |
| README.md | 311 | defined here | Lifecycle command table mapping `/plan` to milestone planning, task estimation, and dependency graph generation. |
| scripts/sync/detect_spec_drift.py | 4 | used here | Docstring cites the forward development lifecycle path (`/spec` -> `/plan` -> `/build`). |

## Consumes
Approved specification, PRD, requirements documentation, or architectural decision records.

## Produces
Implementation plan, sized atomic tasks (S/M/L), dependency graph, risk register, and execution milestones.

## When applied
Executed after specification approval and prior to code implementation via the `/plan` command.

## Sub-concepts
slash-plan

## Part of
lifecycle

## Implementation status
defects: missing-path, doc-drift

## Design notes
PLAN is the second stage in rjm's core software development lifecycle, bridging high-level specification and code construction by producing structured, bite-sized tasks, dependency models, and execution milestones.
