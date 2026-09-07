---
package: rjm
name: recompute_counts
slug: recompute-counts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/skillbook.py, sha256: d3a3b4d3968e777b381293bc4908848793a537383691422565cf5965f6b25f89}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# recompute_counts

## Definition — verbatim
(used, not defined)

> "def recompute_counts(policy: dict[str, Any]) -> None:" — scripts/skillbook.py:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 141 | defined here | Recomputes derived policy projection fields confirms, contradicts, and application count from the evidence array. |

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
defects: doc-drift

## Design notes
recompute_counts is a Python function identifier projecting derived counts from evidence arrays rather than an SDLC lifecycle concept, classified as name-only per D-023.
