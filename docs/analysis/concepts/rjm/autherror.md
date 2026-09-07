---
package: rjm
name: AuthError
slug: autherror
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
  - {path: .claude/skills/doc-accuracy/scripts/pr_snapshot.py, sha256: 141fa122f7859d1b75fe2018204506cc0adb32a4b94573d8f767b871a894cfec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AuthError

## Definition — verbatim
> "Authentication or permission error." — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:196

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 104 | defined here | Enumerated as a valid `Error.Type` value in the standard skill output contract. |
| .claude/skills/doc-accuracy/scripts/pr_snapshot.py | 195 | defined here | Defines the `AuthError` exception class for authentication or permission failures. |

## Consumes
Authentication check failures, missing tokens, or authorization rejections.

## Produces
Exception objects or structured error payloads signaling authentication/permission failure.

## When applied
When an agent or script encounters credential rejection or insufficient API permissions.

## Sub-concepts
none

## Part of
valid-error-types

## Implementation status
defects: missing-path, orphan

## Design notes
Exception class and error classification category representing authentication and permission failures across script invocations and output envelopes.
