---
package: rjm
name: system_fingerprint
slug: system-fingerprint
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_copilot_cli.py, sha256: 42c92fa1b72b6b37bd4b7864b19b8d9987761bdcf034129d7cf2e7a40f70a16c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# system_fingerprint

## Definition — verbatim
(used, not defined)

> "self.system_fingerprint: str | None = None" — scripts/eval/_copilot_cli.py:173

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli.py | 173 | defined here | Provider instance attribute tracking backend model system fingerprints for execution reproducibility. |

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
`system_fingerprint` is a provider class attribute intended for recording backend model configuration hashes, classified as `kind: name-only` per D-023.
