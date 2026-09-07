---
package: rjm
name: has_issues
slug: has-issues
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/parse_memory_health_results.py, sha256: 8aabd1dc6bcc49af67108b9fcab14c8d5e3e147a4f6efa7e93eb02c41a516963}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# has_issues

## Definition — verbatim
(used, not defined)

> "``has_issues`` mirrors the producer's own exit-code predicate so the banner and" — scripts/ci/parse_memory_health_results.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/parse_memory_health_results.py | 19 | defined here | Output flag and predicate determining whether memory health results contain stale or broken citations or memories. |

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
`has_issues` is a boolean predicate identifier and workflow output variable in `parse_memory_health_results.py` signaling whether memory health validation encountered issues rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
