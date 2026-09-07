---
package: rjm
name: Python 3.10+
slug: python-3-10
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-042-python-migration-strategy.md, sha256: cfab3df343cee127a80f7dc1fb5e9cedc7052c9abe8e684d5f1f9693c0a45e2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Python 3.10+

## Definition — verbatim
> "**Establishes Python 3.10+** as the project language standard" — .agents/architecture/ADR-042-python-migration-strategy.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-042-python-migration-strategy.md | 65 | defined here | Established as the minimum language runtime version standard for the repository. |

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
Python 3.10+ is an external programming language runtime version standard rather than an agent lifecycle concept per D-023.
