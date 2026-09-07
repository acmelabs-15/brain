---
package: rjm
name: public-cve
slug: public-cve
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# public-cve

## Definition — verbatim
(used, not defined)

> "{\"synthetic\", \"public-cve\", \"paraphrased-from-public\"}" — scripts/eval/eval-agent-vs-baseline.py:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agent-vs-baseline.py | 78 | used here | Enumerated member of ALLOWED_PROVENANCE identifying test fixtures drawn directly from public CVE records. |

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
defects: exit-code-mismatch, script-bug

## Design notes
A provenance tag value in evaluation fixture metadata identifying public CVE vulnerability sources, classified as `name-only` per D-023.
