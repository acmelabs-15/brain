---
package: rjm
name: FLAT_RHYTHM_CV_THRESHOLD
slug: flat-rhythm-cv-threshold
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/scripts/burstiness.py, sha256: c6c1c60b5f3e1cdf84bf8d1c3615c8ab4a6d7334a8ba082e1d73db85a5096b06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FLAT_RHYTHM_CV_THRESHOLD

## Definition — verbatim
(used, not defined)

> "FLAT_RHYTHM_CV_THRESHOLD = 0.35" — .claude/skills/prose-self-check/scripts/burstiness.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/burstiness.py | 31 | defined here | Constant defining the numerical coefficient of variation cutoff (0.35) below which prose is flagged for flat rhythm. |

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
clean

## Design notes
`FLAT_RHYTHM_CV_THRESHOLD` is a configuration constant in `burstiness.py` establishing the statistical cutoff for flat sentence rhythm warnings, classified as `kind: name-only` per D-023.
