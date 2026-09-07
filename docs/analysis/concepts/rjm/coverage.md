---
package: rjm
name: Coverage
slug: coverage
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md, sha256: e828ecf0ae117cb6cce4e44b70d490dee5da7418f2129f6801e9f6e9f9513d71}
  - {path: AGENTS.md, sha256: a872352c2c57ff59c7db1238910b6685b800ab8a3e8fa9e37a76418d467df471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Coverage

## Definition — verbatim
> "Coverage: 100% security|80% business|60% docs" — AGENTS.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 33 | used here | Listed in the Instrument Index as the diagnostic check verifying that changed code is exercised by tests. |
| AGENTS.md | 51 | defined here | Defined in repository-level standards as tiered test coverage thresholds across security, business, and docs tiers. |

## Consumes
Test execution runs and instrumented source code.

## Produces
Line and branch coverage percentages measured against tier targets.

## When applied
Enforced during testing and PR reviews across all codebase changes.

## Sub-concepts
coverage-measurement

## Part of
ai-agents-validation-and-qa

## Implementation status
clean

## Design notes
The tiered test coverage standard in rjm defining mandatory coverage thresholds: 100% for security-sensitive logic, 80% for business logic, and 60% for documentation and utility scripts. It prevents untested branches from entering the repository.
