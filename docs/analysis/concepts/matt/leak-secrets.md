---
package: matt
name: leak secrets
slug: leak-secrets
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# leak secrets

## Definition — verbatim
(used, not defined)

> "**Will the repro output it pastes leak secrets?**" — docs/engineering/diagnosing-bugs.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/diagnosing-bugs.md | 70 | used here | Section heading addressing the defect risk of unredacted credentials and tokens in bug diagnosis artifacts. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
defects: other (unimplemented redaction guardrail allows credentials, tokens, and cookies to leak into public chat or PRs in docs/engineering/diagnosing-bugs.md:70)

## Design notes
A heading phrase discussing the vulnerability where captured bug outputs expose sensitive authentication credentials, classified as name-only because it is a topic heading rather than an agent lifecycle concept.
