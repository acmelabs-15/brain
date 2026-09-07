---
package: rjm
name: security-detection
slug: security-detection
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codeql-scan/SKILL.md, sha256: 8a6c6ef93c8eec0a5ec66fa0c367185ac6f166ca9f3bdfc9d2e8f6daae3ae0d6}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# security-detection

## Definition — verbatim
(used, not defined)

> "| `security-detection` | Detect security-critical file changes | Before CodeQL scan to identify high-risk changes |" — .claude/skills/codeql-scan/SKILL.md:187

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codeql-scan/SKILL.md | 187 | used here | Cited in related skills table as a pre-scan check to detect security-critical file changes before running CodeQL. |
| .claude/skills/security-scan/SKILL.md | 3 | used here | Referenced in skill description as the upstream authority for deciding whether deep security review is warranted. |

## Consumes
Changed files in git changeset and path sensitivity classification rules.

## Produces
Security-critical file change alerts and triage decisions for deep SAST analysis.

## When applied
Invoked before comprehensive SAST scanning to prioritize review on high-risk modifications.

## Sub-concepts
none

## Part of
security-review

## Implementation status
clean

## Design notes
A preflight security triage technique in rjm that analyzes git diffs to detect changes to security-sensitive files, establishing whether deep semantic analysis or specialized security review is warranted.
