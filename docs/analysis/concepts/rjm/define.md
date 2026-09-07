---
package: rjm
name: DEFINE
slug: define
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DEFINE

## Definition — verbatim
> "  DEFINE          PLAN           BUILD          VERIFY         REVIEW          SHIP" — README.md:306

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| README.md | 306 | defined here | First phase in rjm's primary six-phase lifecycle diagram covering idea refinement and specification. |

## Consumes
User automation request, problem statement, or feature idea.

## Produces
Functional specification, PRD, CVA matrix, and testable acceptance criteria.

## When applied
Triggered at the start of feature development or enhancement workflows via `/spec`.

## Sub-concepts
spec

## Part of
lifecycle

## Implementation status
defects: missing-path, doc-drift

## Design notes
DEFINE represents the initial lifecycle phase in rjm's workflow diagram, preceding PLAN and implemented via the `/spec` slash command to transform informal feature ideas into structured requirements.
