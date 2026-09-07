---
package: rjm
name: Security Scan Workflow
slug: security-scan-workflow
kind: technique
package_phase: rjm:review
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

# Security Scan Workflow

## Definition — verbatim
> "                        Security Scan Workflow" — .claude/skills/security-scan/SKILL.md:194

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/SKILL.md | 194 | defined here | Diagram title illustrating the sequential 5-stage file collection and pattern matching process. |

## Consumes
File sets collected via git staged files, directory scans, or explicit CLI paths.

## Produces
Aggregated, deduplicated, and severity-sorted vulnerability findings formatted as console text or structured JSON.

## When applied
Applied when executing the security-scan CLI prior to PR creation or during pre-commit hooks.

## Sub-concepts
none

## Part of
security-scan

## Implementation status
defects: doc-drift, orphan

## Design notes
The operational 5-stage pipeline (collect files, detect language, apply CWE-78 patterns, aggregate findings, output results) that governs security-scan execution before pull requests.
