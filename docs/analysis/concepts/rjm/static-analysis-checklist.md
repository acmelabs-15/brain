---
package: rjm
name: Static Analysis Checklist
slug: static-analysis-checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/static-analysis-checklist.md, sha256: ab56a82fcd6d0938a1e9fbb5a75223cddc0110ffccfab3802e2d0166f6720c8f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Static Analysis Checklist

## Definition — verbatim
> "This checklist guides security agent static analysis for vulnerability detection. It focuses on common vulnerability patterns defined by CWE (Common Weakness Enumeration)." — .agents/security/static-analysis-checklist.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/static-analysis-checklist.md | 1 | defines | Checklist guiding security agent static analysis for vulnerability detection based on CWE patterns. |

## Consumes
Source code files across multiple languages (Shell, Python, Java, .NET, Node.js, PHP, React, Vue, Angular) and pull request diffs.

## Produces
Pre-Analysis, Core Analysis, and Post-Analysis checklists alongside categorized vulnerability findings with concrete remediations.

## When applied
Applied by security agents and static scanners during code reviews and pre-push verification to identify common weakness patterns.

## Sub-concepts
cwe, os-command-injection, cross-site-scripting, sql-injection, exposure-of-sensitive-information

## Part of
security

## Implementation status
clean

## Design notes
A reference checklist providing concrete code detection patterns across multiple programming languages and frameworks to detect priority CWE vulnerability classes during static code analysis.
