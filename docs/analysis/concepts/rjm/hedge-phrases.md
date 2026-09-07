---
package: rjm
name: hedge phrases
slug: hedge-phrases
kind: pattern
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

# hedge phrases

## Definition — verbatim
> "hedge phrases: vague, aspirational, or speculative language that masks the absence of a concrete demand signal." — docs/spec-quality/hedge-phrases.md:5-7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/spec-quality/hedge-phrases.md | 5 | defined here | Defined as the speculative, vague, or aspirational language patterns that trigger blocking failures in the Step 0 First Principles Gate. |

## Consumes
Author responses to the six demand-validation questions in `/spec` Step 0.

## Produces
Blocking gate failures that stop specification progression when speculative language is detected without supporting evidence.

## When applied
During Step 0 of `/spec` when scanning author answers for speculative phrasing before permitting requirements creation.

## Sub-concepts
none

## Part of
step-0-hedge-phrase-blocklist

## Implementation status
clean

## Design notes
Linguistic anti-patterns in rjm that signal the absence of real user demand or concrete operational evidence, mechanically blocked during the `/spec` Step 0 gate to prevent speculative features from consuming engineering bandwidth.
