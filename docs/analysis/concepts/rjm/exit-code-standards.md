---
package: rjm
name: Exit Code Standards
slug: exit-code-standards
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-041-codeql-integration.md, sha256: 6ccbe8a2a535418e33f8f759b7511e36df157bb78c387180d7c6edb35839810a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Exit Code Standards

## Definition — verbatim
(used, not defined)

> "### Exit Code Standards (ADR-035)" — .agents/architecture/ADR-041-codeql-integration.md:314

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-041-codeql-integration.md | 314 | used here | Section heading asserting adherence to ADR-035 exit code semantics in CodeQL scripts. |

## Consumes
Process exit points across all repository automation and validator scripts.

## Produces
Deterministic exit codes (0 for success, 1 for scan failure, 2 for config error, 3 for external tool failure) that allow calling harnesses to interpret outcomes.

## When applied
Enforced on all Python and bash utility scripts and CLI tools across the repository.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
A repository-wide standard originating in ADR-035 mandating uniform process exit codes so automated orchestrators, CI runners, and agent tools can reliably distinguish between successful runs, test failures, configuration errors, and environment issues.
