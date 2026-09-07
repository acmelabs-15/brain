---
package: rjm
name: SAST
slug: sast
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SAST

## Definition — verbatim
(used, not defined)

> "- Running comprehensive SAST analysis (30-60s full scan)" — .claude/skills/security-scan/SKILL.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/SKILL.md | 51 | used here | Cited when distinguishing lightweight regex scanning from comprehensive static analysis in codeql-scan. |

## Consumes
Complete source code tree, dependencies, build configurations, and static analysis rule suites.

## Produces
Comprehensive SARIF reports, vulnerability findings, data flow traces, and compliance assessments.

## When applied
Applied during CI workflows, scheduled nightly runs, or in-depth security audits before software releases.

## Sub-concepts
taint-analysis

## Part of
none

## Implementation status
defects: doc-drift, orphan

## Design notes
Static Application Security Testing is a broad static code analysis technique that inspects source code for security vulnerabilities without executing the software, distinguished in rjm from rapid pre-commit regex scanners.
