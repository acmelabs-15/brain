---
package: rjm
name: LOOKUP_TABLE_LINE_RE
slug: lookup-table-line-re
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_memory_tier.py, sha256: 4f87d202ac44cf05d5246d8261c6fc3a501aeb568f36370317b3f1d833e1e6c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# LOOKUP_TABLE_LINE_RE

## Definition — verbatim
(used, not defined)

> "LOOKUP_TABLE_LINE_RE = re.compile(" — scripts/validate_memory_tier.py:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_memory_tier.py | 37 | defined here | Regular expression compiling pattern for valid markdown lookup table lines. |

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
defects: always-failing-gate, doc-drift

## Design notes
A regular expression constant identifier for verifying table structure rather than an agent lifecycle concept.
