---
package: rjm
name: Step 0 Hedge-Phrase Blocklist
slug: step-0-hedge-phrase-blocklist
kind: reference
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/spec-quality/hedge-phrases.md, sha256: 6c4f3bb4682ea4dd9beb248236205588a15cff8ed663225de1b26fea8127b8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Step 0 Hedge-Phrase Blocklist

## Definition — verbatim
> "A reusable reference for spec-quality gates. The `/spec` command runs a Step 0 First Principles Gate before it lets a change proceed to requirements." — docs/spec-quality/hedge-phrases.md:3-4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/spec-quality/hedge-phrases.md | 1 | defined here | Reference document publishing the 21-phrase blocklist, regex matching rules, and technical suffix exemptions used in the Step 0 First Principles Gate. |

## Consumes
Author responses to the six mandatory questions in `/spec` Step 0 First Principles Gate.

## Produces
Deterministic word-boundary phrase matching and pass/fail gate verdicts preventing speculative proposals from proceeding.

## When applied
When `/spec` runs its Step 0 First Principles Gate before generating requirements.

## Sub-concepts
hedge-phrases

## Part of
none

## Implementation status
clean

## Design notes
A published reference specification in rjm documenting the 21-phrase blocklist used by the `/spec` Step 0 gate, enabling external teams and audit tools to inspect, adopt, or verify the exact linguistic checks that prevent speculative and ungrounded software proposals.
