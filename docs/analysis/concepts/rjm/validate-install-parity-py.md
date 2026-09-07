---
package: rjm
name: validate_install_parity.py
slug: validate-install-parity-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md, sha256: 14474578a6089b011c08d942a1df83bce2ec03802b99f5f91a2b98a3e10555cd}
  - {path: scripts/validation/run_install_parity_ci.py, sha256: c443c2ac28685dde69d91e626464de2bf4ad209c94b4dc3bcc7c31ceee9a23f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_install_parity.py

## Definition — verbatim
(used, not defined)

> "validate_install_parity.py" — scripts/validation/run_install_parity_ci.py:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 206 | used here | Identified as the validator verifying thin shim and canonical body layout rules. |
| scripts/validation/run_install_parity_ci.py | 70 | used here | Invoked by CI wrapper script to check install tree parity against diff base. |

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
defects: doc-drift, internal-contradiction, missing-path

## Design notes
validate_install_parity.py is a Python validator script path and file name rather than an operational lifecycle concept, classified as name-only per D-023.
