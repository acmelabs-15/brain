---
package: rjm
name: "CodeQL"
slug: codeql
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-041-codeql-integration.md, sha256: 6ccbe8a2a535418e33f8f759b7511e36df157bb78c387180d7c6edb35839810a}
  - {path: .agents/architecture/ADR-054-local-security-scanning.md, sha256: 5c14b625368f85810129fb4ebdbe8cb56fa59fa8c8c912e8b21e41f6d1016b97}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: .codeql/scripts/invoke_codeql_scan.py, sha256: 30320c0a737943365bc714ce2971cc19c58606e46fcd3bc1ac904abe4e693274}
  - {path: .codeql/scripts/test_codeql_config.py, sha256: 686013d8db319e839f7650cf0fa7eb5503b03c78ed917288c1ecb6db5b4b3aef}
  - {path: .codeql/scripts/test_codeql_rollout.py, sha256: df4acdd40f7657e9b5555ae23cde792405972a61810a7befabd2e5c628576f8d}
  - {path: docs/codeql-integration.md, sha256: 4db4d2e49e3e741bdb61f24d96a927e180249217611b99e31815ce8838560ac8}
  - {path: scripts/ci/codeql_integration_summary.py, sha256: 8d51bec76ad7dc49f84bf6e81441e25192bd22ddd08eb9cea54f29f69bc6c20b}
  - {path: scripts/ci/verify_codeql_artifacts.py, sha256: abda124f6dbe8089fa9e0659ed6070f298394457ab3a81a9543008035bec8e46}
  - {path: scripts/redact_secrets.py, sha256: def1d7ea6d1ac0b380277b817a9ca13a072d1e076ce59e8513eff753691eba61}
  - {path: scripts/security/run_semgrep.py, sha256: f3882d76e96bcd6d0387cf64a87513e15f6defcb7980d09ecc29080ddc024aa4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CodeQL

## Definition — verbatim
> "CodeQL is a semantic code analysis engine for security findings and code-quality defects. This repository uses it in two live tiers:" — docs/codeql-integration.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-041-codeql-integration.md | 12 | defined here | Subject of the architecture decision establishing multi-tier security analysis. |
| .agents/architecture/ADR-054-local-security-scanning.md | 18 | used here | Referenced in context as the CI-based scanning tool complemented by local pre-push checks. |
| .claude/skills/security-scan/SKILL.md | 3 | used here | Stated as the delegated tool for CWE-22 static analysis. |
| .codeql/scripts/invoke_codeql_scan.py | 2 | used here | Documented in module docstring as the analysis engine orchestrated by the script. |
| .codeql/scripts/test_codeql_config.py | 2 | used here | Documented as the engine whose configuration YAML is validated. |
| .codeql/scripts/test_codeql_rollout.py | 2 | used here | Documented as the integration deployment verified by the rollout script. |
| docs/codeql-integration.md | 11 | defined here | Defined as the semantic code analysis engine used for security findings across two tiers. |
| scripts/ci/codeql_integration_summary.py | 2 | used here | Documented in docstring as the test summary generator for CodeQL CI workflows. |
| scripts/ci/verify_codeql_artifacts.py | 2 | used here | Documented as the scan engine whose database and SARIF artifacts are verified. |
| scripts/redact_secrets.py | 10 | used here | Cited as external repository scanner appropriate for committed code. |
| scripts/security/run_semgrep.py | 26 | used here | Cited as the heavier security scan alternative compared against semgrep. |

## Consumes
Repository source code (Python, GitHub Actions workflows), CLI binaries, and query pack configurations.

## Produces
Compiled query databases, SARIF security reports, and GitHub Security tab vulnerability alerts.

## When applied
Executed automatically on pull requests via GitHub Actions (Tier 1) and on demand by developers or agents via codeql-scan (Tier 2).

## Sub-concepts
none

## Part of
multi-tier-strategy

## Implementation status
defects: always-failing-gate, doc-drift, exit-code-mismatch, internal-contradiction, missing-path, orphan, script-bug

## Design notes
A semantic code analysis engine adopted for SAST vulnerability detection across Python and GitHub Actions workflows. It operates in a multi-tier model spanning blocking CI/CD gates and local on-demand developer scans.
