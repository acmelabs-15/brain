---
package: rjm
name: QA Validation
slug: qa-validation
kind: gate
package_phase: rjm:session-end
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
  - {path: .agents/architecture/ADR-047-plugin-mode-hook-behavior.md, sha256: 3434f27ef9056e9a72836805fcc30dbb43f5447d14e4fe406330014c02503491}
  - {path: .agents/architecture/ASSESSMENT-session-qa-validation-options.md, sha256: aa0addafd86d94a96103609af0a4d8879cbe3b4ef76eb51d8d89b36ae6d138c4}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# QA Validation

## Definition — verbatim
> "The pre-commit hook validates that QA has been performed for sessions involving code changes. There are two exemptions:" — CONTRIBUTING.md:707

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 42 | used here | Listed as Phase End-2.5 BLOCKING gate requiring a QA report before git commit. |
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 82 | defined here | Defined as Gate G2 in the PreToolUse hook layer architecture diagram. |
| .agents/architecture/ADR-047-plugin-mode-hook-behavior.md | 38 | used here | Cited as one of the core enforcement product hooks that must run in plugin mode. |
| .agents/architecture/ASSESSMENT-session-qa-validation-options.md | 18 | used here | Analyzed as Phase 2.5 protocol requirement mandating routing to QA agent after feature implementation. |
| CONTRIBUTING.md | 705 | defined here | Section heading defining pre-commit hook validation and exemption policies (docs-only and investigation-only). |
| docs/customization.md | 155 | used here | Listed as default quality gate 2 executing after implementation. |

## Consumes
Implemented feature code, test results, or exemption declarations (docs-only, investigation-only).

## Produces
A QA report artifact matching the session or an explicit exemption evidence value.

## When applied
Applied after completing code implementation prior to commit or merge; enforced via pre-commit hooks and Session State MCP.

## Sub-concepts
none

## Part of
session-protocol, quality-gates

## Implementation status
defects: missing-path, doc-drift, orphan

## Design notes
A critical blocking quality gate in rjm's lifecycle requiring an independent QA validation pass (or explicit docs-only / investigation-only exemption) after any code implementation before changes can be committed or merged. It ensures implementation work is independently evaluated against requirements rather than accepted solely on implementer assertion.
