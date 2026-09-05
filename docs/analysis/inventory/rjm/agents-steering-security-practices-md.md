---
package: rjm
path: .agents/steering/security-practices.md
type: agent
bytes: 7163
unit: inv-rjm-63
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/steering/security-practices.md, sha256: de8c639a9cd6f34b9f787dc4c2b581ca5a1d314e8956cf87d6c0412e430a0d84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/steering/security-practices.md

## Purpose — required, verbatim
> "This steering file provides security guidance for security-sensitive code in the ai-agents repository." — .agents/steering/security-practices.md:11

## Design intent — required
Defines security rules, patterns, and anti-patterns that are dynamically injected as steering context into agent sessions when working with security-sensitive files (authentication, credentials, environment files, GitHub Actions workflows, Lefthook configuration, and git hook policies). It establishes mandatory immutable commit SHA pinning for GitHub Actions, token permission minimization, defenses against code injection and `pull_request_target` risks, regex patterns for pre-commit secret detection, and strict validation of AI-generated output. Without it, agents modifying workflows or scripts would risk introducing mutable action tags, overly broad repository write permissions, untrusted variable interpolation in shell blocks, or unescaped command injection vulnerabilities.

## Phase — required
cross-phase

## Inputs — required
- File path matching `applyTo` glob: `"**/Auth/**,*.env*,**/*.secrets.*,.github/workflows/**,lefthook.*,scripts/validation/git_hook_policy.py"` — .agents/steering/security-practices.md:3
- Pre-commit secret detection regex patterns — .agents/steering/security-practices.md:107
- AI-generated output strings to validate — .agents/steering/security-practices.md:125

## Outputs — required
- Steering guidance dynamically injected into agent working memory — .agents/steering/security-practices.md:11
- Staged action pin validation command `scripts/validation/git_hook_policy.py staged-action-pins` — .agents/steering/security-practices.md:49

## Invokes — required
- script git_hook_policy.py — .agents/steering/security-practices.md:49
- config lefthook.yml — .agents/steering/security-practices.md:119

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `applyTo` — .agents/steering/security-practices.md:3 — defined here
- `Action SHA Pinning` — .agents/steering/security-practices.md:28 — defined here
- `Token Permission Minimization` — .agents/steering/security-practices.md:60 — defined here
- `pull_request_target` — .agents/steering/security-practices.md:86 — used here
- `Secret Scanning` — .agents/steering/security-practices.md:101 — defined here
- `Pre-commit Detection Patterns` — .agents/steering/security-practices.md:103 — defined here
- `AI Output Validation` — .agents/steering/security-practices.md:123 — defined here
- `Input Validation First` — .agents/steering/security-practices.md:182 — defined here
- `Secure Credential Handling` — .agents/steering/security-practices.md:198 — defined here
- `Defense in Depth` — .agents/steering/security-practices.md:210 — defined here
- `Hardcoded Secrets` — .agents/steering/security-practices.md:221 — defined here
- `Missing Input Validation` — .agents/steering/security-practices.md:229 — defined here
- `Trusting AI Output` — .agents/steering/security-practices.md:242 — defined here
- `Insufficient Error Handling` — .agents/steering/security-practices.md:256 — defined here

## Structure
- `# Security Practices Steering` — .agents/steering/security-practices.md:9
- `## Scope` — .agents/steering/security-practices.md:13
- `## Guidelines` — .agents/steering/security-practices.md:24
- `### GitHub Actions Security` — .agents/steering/security-practices.md:26
- `#### Action SHA Pinning (BLOCKING)` — .agents/steering/security-practices.md:28
- `#### Token Permission Minimization` — .agents/steering/security-practices.md:60
- `#### Avoiding Code Injection` — .agents/steering/security-practices.md:72
- "#### Avoiding `pull_request_target` Risks" — .agents/steering/security-practices.md:86
- `### Secret Scanning` — .agents/steering/security-practices.md:101
- `#### Pre-commit Detection Patterns` — .agents/steering/security-practices.md:103
- `#### Pre-commit Security Carrier` — .agents/steering/security-practices.md:117
- `### AI Output Validation` — .agents/steering/security-practices.md:123
- `### Error Handling` — .agents/steering/security-practices.md:143
- `### Security Event Logging` — .agents/steering/security-practices.md:161
- `## Patterns` — .agents/steering/security-practices.md:180
- `### Input Validation First` — .agents/steering/security-practices.md:182
- `### Secure Credential Handling` — .agents/steering/security-practices.md:198
- `### Defense in Depth` — .agents/steering/security-practices.md:210
- `## Anti-Patterns` — .agents/steering/security-practices.md:219
- `### Hardcoded Secrets` — .agents/steering/security-practices.md:221
- `### Missing Input Validation` — .agents/steering/security-practices.md:229
- `### Trusting AI Output` — .agents/steering/security-practices.md:242
- `### Insufficient Error Handling` — .agents/steering/security-practices.md:256
- `## References` — .agents/steering/security-practices.md:271

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/steering/security-practices.md:273 · References external Serena memory keys (`security-secret-detection`, `powershell-security-ai-output`, `security-003-secure-error-handling`, `security-004-security-event-logging`) that cannot be resolved as repository file paths.
- doc-drift · .agents/steering/security-practices.md:127 · Contains PowerShell code snippets despite repository-wide migration towards Python and shell policy enforcement (ADR-042).

## Observations
- Defines a hardened regex pattern for AI output validation (`^(?=.{1,50}$)[A-Za-z0-9](?:[A-Za-z0-9 _\.-]*[A-Za-z0-9])?$`) and an explicit blocklist of metacharacters (`;`, `|`, `` ` ``, `$`, `(`, `)`, `&`, `<`, `>`, newlines).
- Requires immutable commit SHA pinning for third-party GitHub Actions, backed by pre-commit hook enforcement (`lefthook.yml` and `git_hook_policy.py staged-action-pins`).

## Context cost
7163 bytes (~1790 tokens).
