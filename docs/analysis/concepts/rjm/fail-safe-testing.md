---
package: rjm
name: Fail-Safe Testing
slug: fail-safe-testing
kind: technique
package_phase: rjm:verify
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Fail-Safe Testing

## Definition — verbatim
> "Validate that scripts fail gracefully in CI mode:" — .claude/agents/devops.md:385

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 383 | defined here | Testing technique validating that PowerShell/Python automation scripts fail gracefully under CI mode with strict error handling and exit code propagation. |

## Consumes
Automation scripts (PowerShell, Python), CI environment configurations.

## Produces
Verified exit code propagation and graceful failure handling during automated CI execution.

## When applied
Applied when writing or validating infrastructure scripts and local CI validation before PR submission.

## Sub-concepts
none

## Part of
devops

## Implementation status
defects: missing-path

## Design notes
Fail-Safe Testing ensures that automation and build scripts do not exit silently with false zero status codes or hang when encountering runtime exceptions in CI environments. By enforcing explicit exit code inspection ($LASTEXITCODE), strict mode, and stop preferences, it guarantees pipeline failures are loud and detectable.
