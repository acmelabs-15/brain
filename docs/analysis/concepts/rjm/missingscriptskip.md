---
package: rjm
name: MissingScriptSkip
slug: missingscriptskip
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_common.py, sha256: 9aa4472080646e8ab1a6cfd238f27026ec1875b981ba3b251b0b9e2efe3d0897}
  - {path: scripts/validation/checks_plugin.py, sha256: bde1cc8ea22ca4ac213de4ce3b615700be8f0c8bfaaa715f49f58b141094a2f8}
  - {path: scripts/validation/checks_ratchet.py, sha256: f11eedc4dca23178e7d74dc884946ff7010c35fc54cfc9f35a6bdd3051c79156}
  - {path: scripts/validation/checks_spec.py, sha256: bed5c9c7576b044b78beced69a17d00c1294f53b15b5253669813c66a0120c86}
  - {path: scripts/validation/checks_tooling.py, sha256: e2bb66c5604fcd44f1b055a511bef6ebd5e8992ae473bad34d466c74b96ac738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# MissingScriptSkip

## Definition — verbatim
(used, not defined)

> "class MissingScriptSkip(Exception):" — scripts/validation/checks_common.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_common.py | 43 | defined here | Exception class raised when a legacy or expunged validator script is missing on disk. |
| scripts/validation/checks_plugin.py | 26 | used here | Imported to handle expunged validator scripts as non-failing skips. |
| scripts/validation/checks_ratchet.py | 34 | used here | Imported to allow missing ratchet scripts to be treated as skips. |
| scripts/validation/checks_spec.py | 24 | used here | Imported to catch missing validator scripts and skip rather than fail build gates. |
| scripts/validation/checks_tooling.py | 33 | used here | Imported to handle missing tooling scripts gracefully without failing gates. |

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
A Python custom exception class in `scripts/validation/checks_common.py` used as a control-flow signal for missing legacy scripts, classified as name-only per D-023.
