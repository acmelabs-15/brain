---
package: rjm
name: validate_spec_contradiction
slug: validate-spec-contradiction
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_spec.py, sha256: bed5c9c7576b044b78beced69a17d00c1294f53b15b5253669813c66a0120c86}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate_spec_contradiction

## Definition — verbatim
(used, not defined)

> "def validate_spec_contradiction(repo_root: Path) -> bool:" — scripts/validation/checks_spec.py:361

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_spec.py | 361 | defined here | Advisory pre-PR validation function checking for PR description vs linked issue vs code contradictions. |

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
defects: script-bug, exit-code-mismatch

## Design notes
`validate_spec_contradiction` is a Python validation function in `scripts/validation/checks_spec.py` providing advisory contradiction detection rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
