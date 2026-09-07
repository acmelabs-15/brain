---
package: rjm
name: RECONCILE FORMAT
slug: reconcile-format
kind: name-only
package_phase: none
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

# RECONCILE FORMAT

## Definition — verbatim
(used, not defined)

> "RECONCILE FORMAT [SUB-AGENT]" — scripts/incoherence.py:748

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 748 | defined here | Action guidance heading for step 19 instructing sub-agents to format reconciliation results as structured markdown blocks. |

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
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
An action guidance step heading in `scripts/incoherence.py` directing sub-agents on formatting reconciliation output blocks rather than an independent lifecycle concept.
