---
package: rjm
name: CI mode
slug: ci-mode
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/README.md, sha256: 7986954754bee5447b0a744ceccd2c0272ecf1966dd9dd85bc8df21031887d5e}
  - {path: .codeql/scripts/invoke_codeql_scan.py, sha256: 30320c0a737943365bc714ce2971cc19c58606e46fcd3bc1ac904abe4e693274}
  - {path: .codeql/scripts/test_codeql_config.py, sha256: 686013d8db319e839f7650cf0fa7eb5503b03c78ed917288c1ecb6db5b4b3aef}
  - {path: .codeql/scripts/test_codeql_rollout.py, sha256: df4acdd40f7657e9b5555ae23cde792405972a61810a7befabd2e5c628576f8d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CI mode

## Definition — verbatim
(used, not defined)

> "CI mode: returns non-zero exit code on failures." — .codeql/scripts/test_codeql_rollout.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/README.md | 11 | used here | Example invocation demonstrating changed-files quality assessment for CI pipeline runs. |
| .codeql/scripts/invoke_codeql_scan.py | 13 | used here | Exit code specification defining exit code 1 when findings or logic errors are detected in CI mode. |
| .codeql/scripts/test_codeql_config.py | 46 | used here | Command-line argument definition enabling non-interactive validation execution in CI environments. |
| .codeql/scripts/test_codeql_rollout.py | 43 | used here | CLI argument definition enabling strict non-zero exit codes upon rollout verification failure. |

## Consumes
CLI flag (--ci or --changed-only), execution environment indicators, and automated tool analysis results.

## Produces
Strict non-zero process exit codes (e.g. exit 1 or exit 11) blocking automated pipeline execution on quality or security failures.

## When applied
Applied in continuous integration workflows to enforce non-interactive execution and convert diagnostic findings into blocking pipeline gate failures.

## Sub-concepts
none

## Part of
ci-cd-pipeline

## Implementation status
defects: doc-drift, other, orphan, missing-path, internal-contradiction, script-bug, exit-code-mismatch, always-failing-gate

## Design notes
CI mode enforces strict automated gating by converting script diagnostics and analysis findings into non-zero exit codes that fail CI/CD build pipelines. Without CI mode, verification tools would format results for interactive human inspection without halting automated integration workflows when issues are detected.
