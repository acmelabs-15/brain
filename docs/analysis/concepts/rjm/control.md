---
package: rjm
name: Control
slug: control
kind: artifact
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_runtime_parity.py, sha256: a5f463e3d9e5a1b7792aee049f05a40b8f2c14ca3188fbc0f6dab8534d5b1308}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Control

## Definition — verbatim
(used, not defined)

> "class Control:" — scripts/eval/_runtime_parity.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_runtime_parity.py | 39 | defined here | Frozen dataclass defining known response text and files for positive and negative controls. |

## Consumes
Positive and negative control declarations from parity fixture corpora.

## Produces
Baseline control instances used to sanity-check fixture assertion sensitivity and reliability.

## When applied
Validated during fixture loading to confirm positive controls pass and negative controls fail.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A fixture validation artifact in rjm's parity harness holding baseline responses and file states to guarantee assertion integrity before live model runs.
