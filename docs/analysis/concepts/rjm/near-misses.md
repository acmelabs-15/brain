---
package: rjm
name: Near Misses
slug: near-misses
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Near Misses

## Definition — verbatim
> "Things that almost failed but recovered" — .claude/skills/retrospective/references/diagnosis-and-actions.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 89 | defined here | Diagnostic category examining errors that almost failed but recovered. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 19 | defined here | Priority 3 diagnostic category uncovering narrow recoveries and latent risks. |

## Consumes
Transient test failures caught by retries, narrowly avoided merge conflicts, and recovered agent errors.

## Produces
Preventative safeguards and early-warning detection rules.

## When applied
Evaluated as third priority in Phase 2 of retrospective diagnosis.

## Sub-concepts
none

## Part of
diagnosis, retrospective

## Implementation status
clean

## Design notes
Near Misses identifies situations where a failure was narrowly avoided by chance, retry loops, or late manual intervention. Analyzing these near-disasters exposes latent system vulnerabilities before they trigger real outages or blocked pipelines in production.
