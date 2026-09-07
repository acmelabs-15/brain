---
package: rjm
name: write_skill_output
slug: write-skill-output
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/output.py, sha256: d440cb852e8bebf189d17d130b5715593516e4ce0a2d71bc303d7cf8357efead}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# write_skill_output

## Definition — verbatim
(used, not defined)

> "Provides write_skill_output, write_skill_error, and get_output_format" — scripts/github_core/output.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/output.py | 3 | defined here | Exported helper function for formatting and emitting standard skill output envelopes. |

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
clean

## Design notes
Python utility function emitting standardized skill success envelopes conforming to ADR-056, classified as name-only per D-023.
