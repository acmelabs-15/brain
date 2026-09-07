---
package: rjm
name: Hedge Phrase List
slug: hedge-phrase-list
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md, sha256: bada92fac80c619ad829da39e28a6a11b87601aa8487d5f8cfd46edbb0d7637b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Hedge Phrase List

## Definition — verbatim
> "WHEN any Step 0 answer contains a hedge phrase from the canonical list (Section: Hedge Phrase List) as a case-insensitive **word-boundary** match" — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 60 | defines | Canonical blocklist of vague, aspirational, and speculative phrases that trigger Step 0 gate halts. |

## Consumes
Proposer answers to Step 0 questions.

## Produces
Word-boundary match detections or validation pass.

## When applied
During Step 0 validation in `/spec`.

## Sub-concepts
none

## Part of
step-0-first-principles-gate

## Implementation status
defects: doc-drift, missing-path

## Design notes
A curated blocklist of vague, speculative, and ungrounded phrases used in the Step 0 gate to automatically halt specifications driven by unvalidated assumptions.
