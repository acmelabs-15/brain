---
package: rjm
name: Security posture
slug: security-posture
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/ship.md, sha256: a48916b477bcd72450de9594242e726b876b09389b0774a465785d70e92074a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Security posture

## Definition — verbatim
> "2. **Security posture** - Invoke Skill(skill=\"security-scan\"). No new CWE findings? No secrets in diff?" — .claude/commands/ship.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/ship.md | 78 | defined here | Pre-flight check 2 running static security scanning across the git diff to detect CWE patterns and leaked secrets. |

## Consumes
Git diff of the branch against its base branch.

## Produces
Security scan report confirming zero new Common Weakness Enumerations (CWEs) and no exposed secrets or API credentials.

## When applied
Evaluated unconditionally during `/ship` pre-flight checks across all hosts and operational modes.

## Sub-concepts
none

## Part of
pre-flight-checks, ship

## Implementation status
clean

## Design notes
Security posture acts as an automated security boundary immediately before shipping code. By invoking `security-scan` over the repository diff, it performs static regex-based analysis to detect credentials, tokens, injection vulnerabilities, and known weakness patterns, ensuring that high-risk flaws are caught and remediated locally before commits leave the developer workspace.
