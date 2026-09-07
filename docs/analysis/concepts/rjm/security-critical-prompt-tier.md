---
package: rjm
name: Security-Critical Prompt Tier
slug: security-critical-prompt-tier
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Security-Critical Prompt Tier

## Definition — verbatim
(used, not defined)

> "#### Security-Critical Prompt Tier" — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 107 | defined here | Section heading and policy defining strict 5-run, 100% pass rate requirements for security prompts. |

## Consumes
Security prompt files (e.g. security agent, quality gate security prompts) and scenario evaluation suites.

## Produces
High-rigor evaluation results requiring zero failures across 5 repeated runs.

## When applied
Enforced on all prompt files located within security-critical directory paths (`.agents/security/`) or when the `--security-critical` flag is invoked.

## Sub-concepts
security-critical

## Part of
acceptance-gate, prompt-behavioral-evaluation

## Implementation status
defects: missing-path

## Design notes
A high-assurance evaluation tier in rjm that applies heightened verification rigor to security-sensitive prompt definitions. Unlike standard prompts which allow a 40% flakiness ceiling and 2-out-of-3 pass criteria, the security-critical tier mandates a minimum of 5 runs per scenario and requires a strict 100% pass rate across all runs to prevent security vulnerabilities.
