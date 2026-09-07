---
package: rjm
name: Validation scripts
slug: validation-scripts
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-019-script-organization.md, sha256: 2ab5f297286e665054fbf02d023135e98f2ffd172494a4c2ff32fc3e5e224292}
  - {path: scripts/README.md, sha256: 551daff8daf63618ebc955fce182f2eddd5e1bc7d87ee330de6f523d06fed2c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Validation scripts

## Definition — verbatim
> "- **Validation scripts**: `Validate-*.ps1` - Protocol, consistency, session end validation" — .agents/architecture/ADR-019-script-organization.md:46

> "The repository includes validation scripts for enforcing protocol compliance and code quality. These implement the technical guardrails from Issue #230." — scripts/README.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-019-script-organization.md | 46 | defined here | Defined as a developer-facing script category for protocol and consistency validation. |
| scripts/README.md | 34 | defined here | Section heading documenting protocol and code quality validation scripts. |

## Consumes
Session logs, git commit history, pull request descriptions, and workflow YAML files.

## Produces
Deterministic exit codes (0 for success, non-zero for failure) and actionable validation failure reports.

## When applied
Invoked in pre-commit hooks, at session termination, and during CI pipeline checks to ensure repository integrity.

## Sub-concepts
none

## Part of
intended-audience-and-execution-context

## Implementation status
defects: doc-drift, missing-path, internal-contradiction (scripts/README.md retains legacy PowerShell syntax and references non-existent test files)

## Design notes
Automated validation scripts enforcing technical guardrails, protocol adherence, and code quality standards across developer and agent workflows prior to commit or pull request creation.
