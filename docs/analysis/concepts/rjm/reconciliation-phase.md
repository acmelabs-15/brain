---
package: rjm
name: RECONCILIATION PHASE
slug: reconciliation-phase
kind: phase
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/incoherence.py, sha256: 8db97228fdf182875839e2f43c3b7c510a26219f51ed1c1e212e01307cc8ae9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RECONCILIATION PHASE

## Definition — verbatim
> "RECONCILIATION PHASE (Steps 14-22, after user edits report):" — scripts/incoherence.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 20 | defined here | Heading defining steps 14 through 22 of the incoherence reconciliation workflow. |

## Consumes
User-annotated Incoherence Report containing resolution instructions.

## Produces
Target file modifications applied by Developer and Technical Writer agents, updated report status markers, and reconciliation summary.

## When applied
Executed after a user has reviewed the Incoherence Report and provided resolution guidance in steps 14 through 22.

## Sub-concepts
none

## Part of
incoherence-detector

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
The execution half of the incoherence detector workflow that parses human resolutions from the generated report, dispatches wave-based modifications across code and docs, and updates report status markers.
