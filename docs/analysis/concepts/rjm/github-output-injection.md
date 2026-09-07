---
package: rjm
name: GITHUB_OUTPUT Injection
slug: github-output-injection
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GITHUB_OUTPUT Injection

## Definition — verbatim
> "CRITICAL-NEW-001: GITHUB_OUTPUT Injection" — .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 133 | defined here | Documented as critical vulnerability CRITICAL-NEW-001 where unescaped newlines in PowerShell outputs allow arbitrary workflow variable injection. |

## Consumes
Workflow outputs, multiline strings, and script output pipes writing to `$env:GITHUB_OUTPUT`.

## Produces
Arbitrary environment variable injection, runner manipulation, and potential secret exfiltration when unmitigated.

## When applied
Evaluated during security review of GitHub Actions workflows that append dynamic values to `$env:GITHUB_OUTPUT`.

## Sub-concepts
none

## Part of
vulnerabilities

## Implementation status
defects: cross-file-contradiction, internal-contradiction (.agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:56, 94)

## Design notes
`GITHUB_OUTPUT Injection` represents a critical workflow injection vector where multiline or unescaped strings written directly into `$env:GITHUB_OUTPUT` enable attackers to define arbitrary workflow parameters, requiring newline escaping or delimiter boundaries.
