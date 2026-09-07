---
package: rjm
name: RetentionEntry
slug: retentionentry
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/adr015_workflow_retention.py, sha256: ea1ff3ec4f548f42dcfd873ced6cc7d190001358013923d863745b84b9256325}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RetentionEntry

## Definition — verbatim
(used, not defined)

> "One ``retention-days:`` declaration found in a workflow file." — scripts/ci/adr015_workflow_retention.py:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/adr015_workflow_retention.py | 70 | defined here | Dataclass representing a retention-days declaration found in a workflow YAML file. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
`RetentionEntry` is an AST parser dataclass in `scripts/ci/adr015_workflow_retention.py` holding parsed YAML retention entries rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
