---
package: rjm
path: .agents/security/code-quality-security.md
type: agent
bytes: 6776
unit: inv-rjm-59
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/security/code-quality-security.md, sha256: 35a09fd8c7118fd127023767411ccbe285e96d88d6061e9eec1563d26b11ebae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/security/code-quality-security.md

## Purpose — required, verbatim
> "This guide identifies code quality issues that have security implications. Poor code quality increases attack surface, makes vulnerabilities harder to detect, and complicates security reviews." — .agents/security/code-quality-security.md:5

## Design intent — required
Establishes complexity thresholds and architectural heuristics (such as lines of code, cyclomatic complexity, nesting depth, and tight coupling) to treat code quality degradation as a security risk, providing actionable detection patterns and refactoring steps for security-critical pathways.

## Phase — required
cross-phase

## Inputs — required
- "Security-critical directories to watch" — .agents/security/code-quality-security.md:36
- "High nesting depth (> 4 levels)" — .agents/security/code-quality-security.md:59
- "Long parameter lists (> 5)" — .agents/security/code-quality-security.md:70
- "Hardcoded environment values" — .agents/security/code-quality-security.md:122

## Outputs — required
- "Security Review Checklist" — .agents/security/code-quality-security.md:213
- "Refactoring for Security" — .agents/security/code-quality-security.md:245

## Invokes — required
- doc static-analysis-checklist.md — .agents/security/code-quality-security.md:264
- doc security-best-practices.md — .agents/security/code-quality-security.md:265
- doc architecture-security-template.md — .agents/security/code-quality-security.md:266

## Invoked by — required
- doc security-best-practices.md — .agents/security/security-best-practices.md:334

## Concepts named — required, verbatim
`Code Quality Security Guide` — .agents/security/code-quality-security.md:1 — defined here
`Lines of Code (LOC)` — .agents/security/code-quality-security.md:13 — used here
`Cyclomatic Complexity` — .agents/security/code-quality-security.md:14 — used here
`guard clauses` — .agents/security/code-quality-security.md:83 — used here
`dependency injection` — .agents/security/code-quality-security.md:103 — used here
`principle of least privilege` — .agents/security/code-quality-security.md:105 — used here
`Path traversal` — .agents/security/code-quality-security.md:116 — used here
`Authentication` — .agents/security/code-quality-security.md:166 — used here
`Authorization` — .agents/security/code-quality-security.md:167 — used here
`Input validation` — .agents/security/code-quality-security.md:168 — used here
`Crypto operations` — .agents/security/code-quality-security.md:169 — used here
`Error handling` — .agents/security/code-quality-security.md:170 — used here
`Security Review Checklist` — .agents/security/code-quality-security.md:213 — defined here

## Structure
# Code Quality Security Guide — .agents/security/code-quality-security.md:1
## Purpose — .agents/security/code-quality-security.md:3
## Complexity Thresholds — .agents/security/code-quality-security.md:7
### File-Level Metrics — .agents/security/code-quality-security.md:9
### Function-Level Metrics — .agents/security/code-quality-security.md:18
## Security-Critical Code Patterns — .agents/security/code-quality-security.md:27
### 1. Large Files Handling Security — .agents/security/code-quality-security.md:29
### 2. Complex Functions — .agents/security/code-quality-security.md:52
### 3. Tight Coupling — .agents/security/code-quality-security.md:85
## Environment Coupling — .agents/security/code-quality-security.md:108
### Dangerous Patterns — .agents/security/code-quality-security.md:110
### Detection — .agents/security/code-quality-security.md:119
### Remediation — .agents/security/code-quality-security.md:134
## Testing Burden — .agents/security/code-quality-security.md:151
### Security Code Must Be Testable — .agents/security/code-quality-security.md:153
### Testing Coverage Requirements — .agents/security/code-quality-security.md:162
## Module Boundary Violations — .agents/security/code-quality-security.md:172
### Cross-Cutting Concerns to Watch — .agents/security/code-quality-security.md:174
### Detection — .agents/security/code-quality-security.md:183
### Proper Boundaries — .agents/security/code-quality-security.md:198
## Security Review Checklist — .agents/security/code-quality-security.md:213
### File-Level Review — .agents/security/code-quality-security.md:215
### Function-Level Review — .agents/security/code-quality-security.md:225
### Coupling Review — .agents/security/code-quality-security.md:235
## Refactoring for Security — .agents/security/code-quality-security.md:245
### When to Refactor — .agents/security/code-quality-security.md:247
### Safe Refactoring Steps — .agents/security/code-quality-security.md:254
## Related Documents — .agents/security/code-quality-security.md:262

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides explicit numerical thresholds for code complexity tied to security risk: > 500 LOC per file, > 20 cyclomatic complexity per file, > 15 imports, > 20 functions per file, > 50 LOC per function, > 5 parameters, > 4 nesting depth, > 10 cyclomatic complexity per function. Also establishes minimum test coverage standards for security components (95% for crypto, 90% for auth/authz). Uses C# (.NET) syntax in examples (`csharp`, `void ProcessPayment`, `ISecurityLogger`, `ISecureTokenCache`).

## Context cost
6776 bytes, approximately 1694 tokens.
