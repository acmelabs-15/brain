---
package: rjm
name: CWE
slug: cwe
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/static-analysis-checklist.md, sha256: ab56a82fcd6d0938a1e9fbb5a75223cddc0110ffccfab3802e2d0166f6720c8f}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: scripts/security/run_semgrep.py, sha256: f3882d76e96bcd6d0387cf64a87513e15f6defcb7980d09ecc29080ddc024aa4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CWE

## Definition — verbatim
> "It focuses on common vulnerability patterns defined by CWE (Common Weakness Enumeration)." — .agents/security/static-analysis-checklist.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/static-analysis-checklist.md | 5 | used here | Reference taxonomy cited as the foundation for common vulnerability detection patterns. |
| .claude/agents/security.md | 72 | used here | Mandated in evidence-based threat assessment requiring specific CWE references for every finding. |
| scripts/security/run_semgrep.py | 75 | defines | Field attribute in SemgrepFinding dataclass storing associated CWE identifiers for findings. |

## Consumes
Source code, security scanner outputs, pull request diffs, security review comments.

## Produces
Standardized weakness taxonomy identifiers attached to security review findings and automated scan reports.

## When applied
Applied across static analysis, vulnerability scanning, security audits, and retrospective false-negative tracking.

## Sub-concepts
cwe-79, cwe-89, cwe-200, cwe-287

## Part of
security

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
Common Weakness Enumeration (CWE) is the standard taxonomy of software weaknesses and security flaws used across rjm agents and tooling to categorize, score, and remediate vulnerabilities with evidence.
