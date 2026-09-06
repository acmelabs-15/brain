---
package: addy
name: Verify, Don't Assume
slug: verify-don-t-assume
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/using-agent-skills/SKILL.md, sha256: 8bdbecb2f98cff2dbb70b3852c67d8dca179b27d2b1042aac040866d258ad471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Verify, Don't Assume

## Definition — verbatim
> "Every skill includes a verification step. A task is not complete until verification passes. \"Seems right\" is never sufficient — there must be evidence (passing tests, build output, runtime data)." — skills/using-agent-skills/SKILL.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/using-agent-skills/SKILL.md | 110 | defined here | Sixth core operating behavior establishing evidence-based verification (tests, build, runtime data) as mandatory for task completion. |

## Consumes
Test suites, build tools, runtime outputs, Definition of Done.

## Produces
Concrete verification evidence proving correctness and absence of regressions before claiming completion.

## When applied
At the conclusion of every skill execution, task step, and pull request.

## Sub-concepts
none

## Part of
core-operating-behaviors, using-agent-skills

## Implementation status
defects: cross-file-contradiction, internal-contradiction, doc-drift

## Design notes
A non-negotiable verification gate dictating that no task is complete without empirical evidence (passing tests, clean builds, runtime verification), making 'seems right' unacceptable for completion claims.
