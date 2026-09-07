---
package: rjm
name: resolve_provider
slug: resolve-provider
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_providers.py, sha256: 2b5fd7d1b39ad5792826f1c4d8ca4f17f8aa5a0fdc07213df29167eba2ee2f5d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# resolve_provider

## Definition — verbatim
(used, not defined)

> "def resolve_provider(name: str | None = None) -> EvalProvider:" — scripts/eval/_providers.py:387

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_providers.py | 387 | defined here | Factory function resolving provider names to configured EvalProvider instances. |

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
defects: doc-drift

## Design notes
resolve_provider is a Python factory function resolving provider strings to EvalProvider instances rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
