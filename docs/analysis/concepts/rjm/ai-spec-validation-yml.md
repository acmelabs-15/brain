---
package: rjm
name: ai-spec-validation.yml
slug: ai-spec-validation-yml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/AGENTS.md, sha256: 0e2bb069b704651214e2129c6d8b44543bcefe17f3878a3237f16602c4e3cd63}
  - {path: docs/design/external-signal-gating.md, sha256: e2205c9c37e1690af881f70be4867634ecb367f1cbda26948b66209b18e8fa25}
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
  - {path: scripts/ci/spec_load_content.py, sha256: 6dafe22d03081ee7038326083af675e4e75eb8f3d8db3165a2cc6b466442665c}
  - {path: scripts/ci/spec_prepare_context.py, sha256: 6f1d8dd7c64d6ef089d7e00f067f880addbeeaee5a2e4d99a60ff76c42202a9b}
  - {path: scripts/external_signals/__init__.py, sha256: 5a166b38cfca8b73e0d5f6c531345bdf1466bc01eaf5d61acd3b2d85adbf1447}
  - {path: scripts/external_signals/acceptance_criteria.py, sha256: f11417815ba57aa29786c3c9c962fd0a811cb2ac651b9b466992e482bb8883e8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ai-spec-validation.yml

## Definition — verbatim
(used, not defined)

> "SV[ai-spec-validation.yml]" — .github/AGENTS.md:25

## Also called — verbatim
"ai-spec-validation" — docs/design/external-signal-gating.md:8

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/AGENTS.md | 25 | defined here | Diagram node representing the AI-powered spec validation workflow. |
| docs/design/external-signal-gating.md | 8 | used here | Documented as the primary consumer of deterministic external signals in CI. |
| scripts/ci/spec_extract_refs.py | 5 | used here | Cited as the CI workflow whose inline bash step was replaced by spec_extract_refs.py under ADR-006. |
| scripts/ci/spec_load_content.py | 5 | used here | Cited as the CI workflow whose inline bash step was replaced by spec_load_content.py under ADR-006. |
| scripts/ci/spec_prepare_context.py | 5 | used here | Cited as the CI workflow whose inline bash step was replaced by spec_prepare_context.py under ADR-006. |
| scripts/external_signals/__init__.py | 6 | used here | Cited as the CI workflow gated on deterministic non-LLM signals per issue #1855. |
| scripts/external_signals/acceptance_criteria.py | 4 | used here | Cited as the target workflow that must gate on mechanical acceptance criteria checkboxes. |

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
defects: missing-path, orphan

## Design notes
ai-spec-validation.yml is a GitHub Actions workflow configuration filename identifier orchestrating automated specification validation rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
