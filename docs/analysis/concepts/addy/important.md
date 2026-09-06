---
package: addy
name: Important
slug: important
kind: name-only
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: hooks/session-start-test.sh, sha256: db35bb3e69a98900dddb0c5b1c9ceb8e738cdeb17613ed50177fff7924d350d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Important

## Definition — verbatim
(used, not defined)
> "Categorize findings as Critical, Important, or Suggestion." — .gemini/commands/review.toml:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/review.toml | 14 | defines | Severity category for significant findings in /review command |
| commands/review.toml | 14 | defines | Severity category for significant findings in /review command |
| hooks/session-start-test.sh | 24 | applies | Test asserting hook JSON payload priority matches IMPORTANT level |

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
defects: script-bug, doc-drift

## Design notes
`Important` is a severity classification label used to mark significant review findings that should be addressed before merge, as well as a priority tag for session-start notifications, rather than a lifecycle concept.
