---
package: rjm
name: SARIF
slug: sarif
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-041-codeql-integration.md, sha256: 6ccbe8a2a535418e33f8f759b7511e36df157bb78c387180d7c6edb35839810a}
  - {path: .claude/skills/codeql-scan/SKILL.md, sha256: 8a6c6ef93c8eec0a5ec66fa0c367185ac6f166ca9f3bdfc9d2e8f6daae3ae0d6}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: .codeql/scripts/invoke_codeql_scan.py, sha256: 30320c0a737943365bc714ce2971cc19c58606e46fcd3bc1ac904abe4e693274}
  - {path: docs/codeql-architecture.md, sha256: ff63b856aa506fee02c6d7651e4f059622e7a415a714b9e05b49d4fd081c8b93}
  - {path: docs/codeql-integration.md, sha256: 4db4d2e49e3e741bdb61f24d96a927e180249217611b99e31815ce8838560ac8}
  - {path: docs/codeql-rollout-checklist.md, sha256: 72ef700c707d07c429d84a9776f758a2f8fc5f450b08fedcefe835e8b7376441}
  - {path: scripts/ci/verify_codeql_sarif_structure.py, sha256: bb1ab0941302ba0f029311f469b82725674072a7b4276dfc30a8be4f0c0e61e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SARIF

## Definition — verbatim
(used, not defined)

> "4. Generating SARIF output files for review and upload" — .codeql/scripts/invoke_codeql_scan.py:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-041-codeql-integration.md | 84 | used here | Listed in Tier 1 pros as enabling centralized SARIF upload to GitHub Security tab. |
| .claude/skills/codeql-scan/SKILL.md | 4 | used here | Included in skill description as the standard report output format. |
| .claude/skills/security-scan/SKILL.md | 53 | used here | Cited as the pipeline integration format requiring codeql-scan. |
| .codeql/scripts/invoke_codeql_scan.py | 8 | used here | Documented in docstring as step 4 generating SARIF output files. |
| docs/codeql-architecture.md | 651 | used here | Section heading for SARIF output handling and security practices. |
| docs/codeql-integration.md | 13 | used here | Stated in Tier 1 overview as the format uploaded to the GitHub Security tab. |
| docs/codeql-rollout-checklist.md | 183 | used here | Verification checklist step validating SARIF output upload to workspace. |
| scripts/ci/verify_codeql_sarif_structure.py | 2 | used here | Subject of CI verification script checking version and runs arrays. |

## Consumes
CodeQL query execution results and compiler diagnostic logs.

## Produces
Structured JSON files conforming to the SARIF specification detailing vulnerability paths and locations.

## When applied
Generated at the conclusion of every CodeQL analysis run in CI and local scans for consumption by GitHub Security or CI parsers.

## Sub-concepts
none

## Part of
codeql-integration

## Implementation status
defects: always-failing-gate, doc-drift, internal-contradiction, missing-path, orphan, script-bug

## Design notes
The standard JSON interchange format used across security tooling in the repository to communicate code vulnerability findings, rule IDs, and call-stack trace evidence to GitHub and CI summary gates.
