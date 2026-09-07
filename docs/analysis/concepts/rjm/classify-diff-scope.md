---
package: rjm
name: classify_diff_scope
slug: classify-diff-scope
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-074-security-review-quick-pass-mode.md, sha256: c2b4a02348c862ed3899605ae5d2efbda035194ef3e8e2c32062b67584b82ba4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# classify_diff_scope

## Definition — verbatim
(used, not defined)

> "A pure function `classify_diff_scope(file_count, lines_changed) -> tier` maps a diff to one of four tiers." — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-074-security-review-quick-pass-mode.md | 76 | defined here | Pure function signature mapping diff file count and lines changed to an evaluation tier. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
diff-scope-classifier

## Implementation status
clean

## Design notes
A function identifier and signature defined in ADR-074 representing the algorithmic implementation of the diff-scope classifier rather than an operational lifecycle concept.
