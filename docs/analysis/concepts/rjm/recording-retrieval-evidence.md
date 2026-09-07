---
package: rjm
name: Recording Retrieval Evidence
slug: recording-retrieval-evidence
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: docs/search-dont-load.md, sha256: 336e01aa25edeeac39b428a68a91fc7b2928cc4855f38298f46850304eb88665}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Recording Retrieval Evidence

## Definition — verbatim
> "Record loaded memory names in the transcript, pull request, per-issue handoff, Serena memory, or an optional session log:" — docs/search-dont-load.md:55-56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/search-dont-load.md | 53 | defined here | Defined in section heading as the protocol requirement for recording loaded memory names. |

## Consumes
Names of selected and loaded memory files.

## Produces
Logged retrieval evidence in pull requests, transcripts, or session handoffs.

## When applied
> "The evidence must show which task-relevant memories you selected and loaded." — docs/search-dont-load.md:63-64

## Sub-concepts
none

## Part of
search-don-t-load

## Implementation status
defects: orphan

## Design notes
Recording Retrieval Evidence is the verification procedure in rjm that enforces memory accountability. By requiring agents to record exact memory artifact names in transcripts or PR descriptions, it provides auditability that historical context was actively consulted.
