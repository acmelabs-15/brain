---
package: rjm
name: Buy-vs-Build
slug: buy-vs-build
kind: technique
package_phase: rjm:Spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md, sha256: ead8316b739c0e6a848e73e870d9f16e13f02da7768edf171c5ac50ac6e90633}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Buy-vs-Build

## Definition — verbatim
(used, not defined)

> "Per the buy-vs-build framework analysis (issue #1843), maintaining a custom regex-based CWE-22 detector created false positives" — .claude/skills/security-scan/SKILL.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 321 | used here | Cited as a mandatory Quick Tier precondition evaluating whether external tooling should be adopted over custom implementation. |
| .claude/skills/security-scan/SKILL.md | 19 | used here | Referenced as the evaluation framework that justified delegating CWE-22 detection to CodeQL rather than custom regex. |

## Consumes
Problem statement, architectural requirements, existing commercial or open-source offerings, and differentiation analysis.

## Produces
An architectural decision determining whether to adopt external tooling (BUY) or implement custom internal capabilities (BUILD).

## When applied
Mandatory precondition during specification and architectural design before drafting implementation plans for new capabilities.

## Sub-concepts
buy-vs-build-framework

## Part of
spec-pipeline

## Implementation status
defects: missing-path, doc-drift, orphan

## Design notes
Buy-vs-Build is a mandatory architectural analysis technique in rjm that prevents unnecessary custom code development. Before implementing any significant new capability, the system requires evaluating whether an existing commodity tool, external library, or marketplace plugin satisfies the requirement. This prevents maintenance drag and ensures engineering resources are focused strictly on core differentiating capabilities.
