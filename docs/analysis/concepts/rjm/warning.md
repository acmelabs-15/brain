---
package: rjm
name: WARNING
slug: warning
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/scripts/validate_slash_command.py, sha256: 65b57128a1004037d377cbe88b7a4ac211ef4521f0852493b4d45c841f5e6e73}
  - {path: docs/technical-guardrails.md, sha256: 16099b0af1bf37a012414b8430666217cbbc6e88c05a45ffc3c2e3f5d14b900d}
  - {path: scripts/validation/check_canonical_citations.py, sha256: e4e5b8b622488dcc368c7dea8195de353e5b8a3325a9a07da0b9c67bccef3dd5}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# WARNING

## Definition — verbatim
> "2. **QA Report Exists** (WARNING)" — docs/technical-guardrails.md:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/scripts/validate_slash_command.py | 64 | defined here | Violation prefix for non-blocking advisories such as non-standard description verbs. |
| docs/technical-guardrails.md | 107 | defined here | Non-blocking guardrail severity level recommending QA report existence. |
| scripts/validation/check_canonical_citations.py | 21 | defined here | Default failure mode emitting non-blocking advisory output with exit code 0. |
| scripts/validation/pr_description.py | 27 | defined here | Type definition establishing WARNING as an allowed validation severity level. |

## Consumes
Validation rule evaluation results.

## Produces
Advisory diagnostics and non-zero warning tallies without halting script execution or failing CI checks.

## When applied
Applied when a validation check detects suboptimal practices or recommendations that should advise the developer without blocking progress.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, script-bug, exit-code-mismatch, missing-path

## Design notes
A validation severity classification indicating advisory, non-blocking findings that highlight best-practice deviations without blocking automated pipeline gates.
