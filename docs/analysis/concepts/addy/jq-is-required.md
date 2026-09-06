---
package: addy
name: jq is required
slug: jq-is-required
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: hooks/session-start-test.sh, sha256: db35bb3e69a98900dddb0c5b1c9ceb8e738cdeb17613ed50177fff7924d350d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# jq is required

## Definition — verbatim
(used, not defined)
> "if (!payload.message.includes('jq is required')) {" — hooks/session-start-test.sh:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/session-start-test.sh | 40 | used here | Diagnostic substring asserted when jq dependency is absent |

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
defects: script-bug, doc-drift (test crashes earlier on line 24 due to payload schema mismatch)

## Design notes
Diagnostic error message substring asserted in fallback test scenarios when jq is missing, rather than an agent lifecycle concept.
