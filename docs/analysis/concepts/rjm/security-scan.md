---
package: rjm
name: security-scan
slug: security-scan
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-054-local-security-scanning.md, sha256: 5c14b625368f85810129fb4ebdbe8cb56fa59fa8c8c912e8b21e41f6d1016b97}
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/chaos-experiment/SKILL.md, sha256: 3bebfe39adb559c75a55a96b2ecebb91143bfb2522de30fc96b12606ca2aba03}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# security-scan

## Definition — verbatim
> "Detect CWE-78 (command injection) regex patterns in Python, PowerShell, Bash, and C# files before PR submission." — .claude/skills/security-scan/SKILL.md:3

## Also called — verbatim
- "Security scan" — docs/customization.md:156

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-054-local-security-scanning.md | 22 | used here | Details scope amendment narrowing the skill to CWE-78 while delegating CWE-22 to CodeQL. |
| .claude/skills/analyze/SKILL.md | 4 | used here | Cites security-scan as a complementary vulnerability inspection tool during deep codebase analysis. |
| .claude/skills/chaos-experiment/SKILL.md | 356 | used here | Invoked during chaos experiment cleanup to verify no vulnerability patterns were introduced. |
| .claude/skills/security-scan/SKILL.md | 2 | defined here | Primary skill definition providing proactive regex vulnerability detection for command injection. |
| docs/customization.md | 156 | used here | Recommends running local security scans prior to PR creation to catch security issues early. |

## Consumes
Source files across Python, PowerShell, Bash, and C# staged or submitted for review.

## Produces
Security scan findings identifying command injection vectors (CWE-78) with line citations and remediation advice.

## When applied
Invoked manually or automatically prior to PR submission to detect dangerous command execution patterns before CI evaluation.

## Sub-concepts
- cwe-78

## Part of
none

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path, orphan

## Design notes
`security-scan` is a lightweight, regex-based proactive vulnerability scanning skill designed to catch command injection (CWE-78) vulnerabilities before code is pushed to CI. Amended in ADR-054 to eliminate noisy regex path-traversal (CWE-22) checks in favor of CodeQL's taint analysis, the skill focuses strictly on unambiguous command execution shapes to provide fast local feedback without false positives.
