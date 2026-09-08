---
package: rjm
name: validate_orchestrator_citations
slug: validate-orchestrator-citations
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

# validate_orchestrator_citations

## Definition — verbatim
(used, not defined)

> "def validate_orchestrator_citations(repo_root: Path) -> bool:" — scripts/validation/checks_spec.py:337

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_spec.py | 337 | defined here | Pre-PR validation function verifying orchestrator prose path citations in command files resolve to existing paths. |

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
`validate_orchestrator_citations` is a Python validation function in `scripts/validation/checks_spec.py` checking orchestrator command path citations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
