---
package: rjm
name: VALID_ERROR_TYPES
slug: valid-error-types
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
  - {path: scripts/github_core/output.py, sha256: d440cb852e8bebf189d17d130b5715593516e4ce0a2d71bc303d7cf8357efead}
  - {path: scripts/validate_skill_output.py, sha256: b92bfbfc72a709b2762ae3121e5bbe8d7c78374cf6562003156836754af3ca2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# VALID_ERROR_TYPES

## Definition — verbatim
> "VALID_ERROR_TYPES = (" — scripts/github_core/output.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 245 | defined here | Explains that the error allow-list is now an importable module-level constant synchronized across artifacts. |
| scripts/github_core/output.py | 42 | defined here | Constant tuple defining the canonical eight error type strings accepted by `write_skill_error`. |
| scripts/validate_skill_output.py | 23 | defined here | Frozenset constant specifying the valid error type values permitted in output envelopes. |

## Consumes
Candidate error type strings supplied during error formatting or validation.

## Produces
The canonical set of eight allowable error classification strings: `NotFound`, `ApiError`, `AuthError`, `InvalidParams`, `RateLimitError`, `Timeout`, `General`, `VerificationFailed`.

## When applied
Whenever error envelopes are emitted by skill scripts or verified by output validators.

## Sub-concepts
notfound, apierror, autherror, invalidparams, ratelimiterror, timeout, general, verificationfailed

## Part of
skill-output-format-standardization

## Implementation status
defects: missing-path, doc-drift

## Design notes
The canonical, synchronized set of valid error classification strings maintained identically across helper libraries, JSON schemas, and validators to prevent drift across skill script error payloads.
