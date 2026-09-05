---
package: rjm
path: .agents/security/static-analysis-checklist.md
type: agent
bytes: 6224
unit: inv-rjm-60
in_scope_via: .claude/skills/security-detection/SKILL.md
aliases: []
memo_inputs:
  - {path: .agents/security/static-analysis-checklist.md, sha256: ab56a82fcd6d0938a1e9fbb5a75223cddc0110ffccfab3802e2d0166f6720c8f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/security/static-analysis-checklist.md

## Purpose — required, verbatim
> "This checklist guides security agent static analysis for vulnerability detection. It focuses on common vulnerability patterns defined by CWE (Common Weakness Enumeration)." — .agents/security/static-analysis-checklist.md:5

## Design intent — required
Provides a structured reference checklist of Common Weakness Enumeration (CWE) vulnerability classes, concrete syntax patterns across multiple programming languages (Bash/Shell, Python, Java, .NET/C#, Node.js, PHP, ASP.NET, Laravel Blade, React, Vue, Angular), and recommended remediations for security agents conducting static code analysis. Without it, automated or manual security auditing agents would lack standardized criteria for detecting command injection, XSS, SQL injection, sensitive data leaks, improper authentication, CSRF, and XXE vulnerabilities, leading to inconsistent evaluations and missed vulnerabilities during review gates.

## Phase — required
none

## Inputs — required
- Source code files across various languages (Shell/Bash, Python, Java, .NET/C#, Node.js, PHP, ASP.NET, Laravel Blade, React, Vue, Angular) (.agents/security/static-analysis-checklist.md:15-28, 53-61, 76-87, 102-116, 131-141, 156-165, 179-189)
- Pull request diffs and file changes undergoing static security analysis (.agents/security/static-analysis-checklist.md:5, 41-44)
- Common Weakness Enumeration (CWE) definitions and OWASP Top 10 guidelines (.agents/security/static-analysis-checklist.md:5, 243)

## Outputs — required
- Structured checklists tracking Pre-Analysis, Core Analysis, and Post-Analysis (.agents/security/static-analysis-checklist.md:202-207, 211-219, 223-228)
- Categorized vulnerability findings classified by severity (`Critical`, `High`, `Medium`, `Low`) (.agents/security/static-analysis-checklist.md:232-237)
- Concrete remediation instructions and safe code pattern recommendations (.agents/security/static-analysis-checklist.md:30-35, 63-68, 89-94, 118-123, 143-148, 167-172, 191-196)

## Invokes — required
- doc ./secret-detection-patterns.md — .agents/security/static-analysis-checklist.md:241
- doc ./security-best-practices.md — .agents/security/static-analysis-checklist.md:242

## Invoked by — required
- skill .claude/skills/security-detection/SKILL.md — .claude/skills/security-detection/SKILL.md:190
- skill src/copilot-cli/skills/security-detection/SKILL.md — src/copilot-cli/skills/security-detection/SKILL.md:190

## Concepts named — required, verbatim
- `Static Analysis Checklist` — .agents/security/static-analysis-checklist.md:1 — defined here
- `CWE` — .agents/security/static-analysis-checklist.md:5 — used here
- `Common Weakness Enumeration` — .agents/security/static-analysis-checklist.md:5 — used here
- `CWE-78` — .agents/security/static-analysis-checklist.md:9 — defined here
- `OS Command Injection` — .agents/security/static-analysis-checklist.md:9 — defined here
- `CWE-79` — .agents/security/static-analysis-checklist.md:47 — defined here
- `Cross-Site Scripting` — .agents/security/static-analysis-checklist.md:47 — defined here
- `XSS` — .agents/security/static-analysis-checklist.md:47 — defined here
- `Content Security Policy` — .agents/security/static-analysis-checklist.md:67 — used here
- `CSP` — .agents/security/static-analysis-checklist.md:67 — used here
- `CWE-89` — .agents/security/static-analysis-checklist.md:70 — defined here
- `SQL Injection` — .agents/security/static-analysis-checklist.md:70 — defined here
- `CWE-200` — .agents/security/static-analysis-checklist.md:96 — defined here
- `Exposure of Sensitive Information` — .agents/security/static-analysis-checklist.md:96 — defined here
- `CWE-287` — .agents/security/static-analysis-checklist.md:125 — defined here
- `Improper Authentication` — .agents/security/static-analysis-checklist.md:125 — defined here
- `CWE-352` — .agents/security/static-analysis-checklist.md:150 — defined here
- `Cross-Site Request Forgery` — .agents/security/static-analysis-checklist.md:150 — defined here
- `CSRF` — .agents/security/static-analysis-checklist.md:150 — defined here
- `CWE-611` — .agents/security/static-analysis-checklist.md:174 — defined here
- `XML External Entity` — .agents/security/static-analysis-checklist.md:174 — defined here
- `XXE` — .agents/security/static-analysis-checklist.md:174 — defined here
- `Analysis Checklist` — .agents/security/static-analysis-checklist.md:198 — defined here
- `Pre-Analysis` — .agents/security/static-analysis-checklist.md:200 — defined here
- `Core Analysis` — .agents/security/static-analysis-checklist.md:209 — defined here
- `Post-Analysis` — .agents/security/static-analysis-checklist.md:221 — defined here
- `Severity Classification` — .agents/security/static-analysis-checklist.md:230 — defined here
- `Critical` — .agents/security/static-analysis-checklist.md:234 — defined here
- `High` — .agents/security/static-analysis-checklist.md:235 — defined here
- `Medium` — .agents/security/static-analysis-checklist.md:236 — defined here
- `Low` — .agents/security/static-analysis-checklist.md:237 — defined here
- `OWASP Top 10` — .agents/security/static-analysis-checklist.md:243 — used here

## Structure
- `# Static Analysis Checklist` — .agents/security/static-analysis-checklist.md:1
- `## Purpose` — .agents/security/static-analysis-checklist.md:3
- `## Priority Vulnerabilities` — .agents/security/static-analysis-checklist.md:7
- `### CWE-78: OS Command Injection` — .agents/security/static-analysis-checklist.md:9
- `### CWE-79: Cross-Site Scripting (XSS)` — .agents/security/static-analysis-checklist.md:47
- `### CWE-89: SQL Injection` — .agents/security/static-analysis-checklist.md:70
- `### CWE-200: Exposure of Sensitive Information` — .agents/security/static-analysis-checklist.md:96
- `### CWE-287: Improper Authentication` — .agents/security/static-analysis-checklist.md:125
- `### CWE-352: Cross-Site Request Forgery (CSRF)` — .agents/security/static-analysis-checklist.md:150
- `### CWE-611: XML External Entity (XXE)` — .agents/security/static-analysis-checklist.md:174
- `## Analysis Checklist` — .agents/security/static-analysis-checklist.md:198
- `### Pre-Analysis` — .agents/security/static-analysis-checklist.md:200
- `### Core Analysis` — .agents/security/static-analysis-checklist.md:209
- `### Post-Analysis` — .agents/security/static-analysis-checklist.md:221
- `## Severity Classification` — .agents/security/static-analysis-checklist.md:230
- `## Related Documents` — .agents/security/static-analysis-checklist.md:239

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides actionable code-level detection patterns across eight language/framework environments (Shell/Bash, Python, Java, .NET/C#, Node.js, PHP, ASP.NET, Laravel Blade, React, Vue, Angular).
- Features a concrete historical incident example at lines 37-45 contrasting vulnerable shell variable expansion (`git diff --name-only $MD_FILE_LIST`) with secure array expansion (`git diff --name-only "${MD_FILES[@]}"`).
- Supplies structured checkbox workflows across three review phases (`Pre-Analysis`, `Core Analysis`, `Post-Analysis`) to ensure consistency during automated or manual agent security reviews.

## Context cost
6224 bytes, ~1550 tokens. Loads no external files directly when read as a reference checklist.
