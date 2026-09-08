---
package: rjm
name: dataclass
slug: dataclass
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_ratchet.py, sha256: f11eedc4dca23178e7d74dc884946ff7010c35fc54cfc9f35a6bdd3051c79156}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# dataclass

## Definition — verbatim
(used, not defined)

> "from dataclasses import dataclass" — scripts/validation/checks_ratchet.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_ratchet.py | 23 | used here | Standard library decorator imported to declare immutable Ratchet registry records. |

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
A Python standard library decorator identifier imported to define structured data classes rather than an agent lifecycle concept.
