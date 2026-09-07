---
package: rjm
name: Define Errors Out of Existence
slug: define-errors-out-of-existence
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Define Errors Out of Existence

## Definition — verbatim
> "Define Errors Out of Existence" — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:99

> "Many error cases are products of design choices, not laws of nature. Eliminate them rather than handle them." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 99 | defined here | Defined as an architectural technique aimed at designing interfaces so that potential error conditions are eliminated or made unrepresentable. |

## Consumes
Error modes, exception paths, sentinel return values, and caller retry logic.

## Produces
Idempotent operations and simplified interfaces with fewer distinct failure branches.

## When applied
Applied when exceptions force callers into repetitive wrapping logic, or when defining agent tool boundaries and retry mechanisms.

## Sub-concepts
none

## Part of
deep-module

## Implementation status
clean

## Design notes
An interface design technique in rjm that treats unnecessary error conditions as design flaws rather than inevitable facts. By making operations idempotent or tolerant of natural no-op states, it eliminates defensive boilerplate across calling code.
