---
package: rjm
name: Quick
slug: quick
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/codeql-scan/SKILL.md, sha256: 8a6c6ef93c8eec0a5ec66fa0c367185ac6f166ca9f3bdfc9d2e8f6daae3ae0d6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Quick

## Definition — verbatim
> "| **Quick** | <$50K | Low | Easy | 1-2 hours | Core vs Context + Simple TCO + Go/No-go |" — .claude/skills/buy-vs-build-framework/SKILL.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 56 | defined here | XML decision matrix tier prescribing 1-2 hours of evaluation for low-budget, low-impact decisions. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 65 | defined here | Depth tier matrix row specifying criteria (<$50K, low impact, easily reversible) and required deliverables. |
| .claude/skills/codeql-scan/SKILL.md | 53 | defined here | Scan mode in CodeQL running fast 10-20 second iterative security scans during local development. |

## Consumes
Low-budget decision parameters in buy-vs-build, or changed source files during iterative CodeQL security scanning.

## Produces
Rapid Go/No-go decision artifacts in buy-vs-build, or concise console SARIF output in CodeQL scanning.

## When applied
Applied during low-stakes sourcing assessments, or during rapid iterative coding cycles requiring security verification.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-doc, missing-path

## Design notes
A cross-cutting execution tier pattern in rjm denoting fast, low-overhead workflows. In the buy-vs-build framework, Quick restricts analysis to 1 to 2 hours for minor purchasing choices; in codeql-scan, it executes rapid 10-20 second security checks to maintain developer flow state without compromising security baselines.
