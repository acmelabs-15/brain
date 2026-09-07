---
package: rjm
name: Detection Heuristics
slug: detection-heuristics
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

# Detection Heuristics

## Definition — verbatim
> "**Detection Heuristics**:" — .claude/skills/security-scan/SKILL.md:160

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/SKILL.md | 160 | defined here | Header for core heuristics used to identify dynamic command injection patterns without full taint analysis. |

## Consumes
Source code statements in Python, PowerShell, Bash, and C#.

## Produces
High-signal indicators of potential command injection vulnerabilities.

## When applied
Applied during pre-PR security scanning to evaluate dynamic command execution constructs.

## Sub-concepts
none

## Part of
security-scan

## Implementation status
defects: doc-drift, orphan

## Design notes
Heuristic rules targeting high-risk code patterns (string interpolation, shell=True, unquoted variables) to reliably catch command injection vulnerabilities without requiring whole-program data flow analysis.
