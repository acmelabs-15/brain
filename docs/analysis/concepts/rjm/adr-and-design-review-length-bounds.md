---
package: rjm
name: ADR and Design Review Length Bounds
slug: adr-and-design-review-length-bounds
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ADR and Design Review Length Bounds

## Definition — verbatim
> "Architecture documents are dense, not exhaustive. Apply these caps:" — templates/agents/architect.shared.md:503

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/architect.shared.md | 501 | defines | Heading and length constraints capping sentence counts, considered options, pros/cons bullets, issues, and recommendations in architectural documents. |

## Consumes
Draft ADRs and design review artifacts.

## Produces
Concise, bounded architecture documents that adhere to strict sentence and bullet limits.

## When applied
Enforced whenever drafting or editing ADRs and DESIGN-REVIEW documents.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
An information density gate designed to prevent cognitive bloat, verbosity, and padding in architectural decision records and design review reports.
