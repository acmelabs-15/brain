---
package: rjm
name: Pre-commit hook
slug: pre-commit-hook
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
  - {path: .claude/skills/ai-agents-change-control/references/gate-ladder.md, sha256: b22eb897c2009931a8bf5edb70e02644174f0bf5d79605ada991fbd4b2a765d8}
  - {path: .claude/skills/code-qualities-assessment/README.md, sha256: 7986954754bee5447b0a744ceccd2c0272ecf1966dd9dd85bc8df21031887d5e}
  - {path: .claude/skills/security-detection/SKILL.md, sha256: d30a2af5f4760055052ffa9f61d5f440df2538d1d34761b0367dd6b48d33ec9b}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: .claude/skills/style-enforcement/SKILL.md, sha256: b9ecc0242fe04b599b23d64edacb59ecfbf55b0b8e9b0d7e78bb338a2d7d9da7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-commit hook

## Definition — verbatim
> "Pre-commit hook**: Validate session log format, check for uncommitted memories" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 202 | used here | Cites pre-commit hook validation as confirmation check for session log compliance. |
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 48 | defined here | Establishes automated hook validating session log formatting and checking uncommitted memories. |
| .claude/skills/ai-agents-change-control/references/gate-ladder.md | 14 | used here | Mapped as Layer 2 in the gate ladder running named Lefthook validators on staged files. |
| .claude/skills/code-qualities-assessment/README.md | 78 | used here | Documents integration example for invoking code quality assessment during pre-commit. |
| .claude/skills/security-detection/SKILL.md | 109 | used here | Outlines configuration adding security detection validator jobs to Lefthook. |
| .claude/skills/security-scan/SKILL.md | 171 | used here | Instructs adding security vulnerability scanning validator jobs before commits occur. |
| .claude/skills/style-enforcement/SKILL.md | 219 | defined here | Details Lefthook configuration enforcing repository styling standards on staged files. |

## Consumes
Staged git changes, commit metadata, and configured validator scripts in `lefthook.yml`.

## Produces
A pass/fail gate verdict blocking or permitting `git commit` operations.

## When applied
Automatically triggered by Lefthook whenever `git commit` is invoked in the local repository.

## Sub-concepts
none

## Part of
lifecycle-hooks

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
An automated shift-left quality gate triggered on `git commit` through Lefthook. It filters staged files and runs named validator scripts (e.g. style enforcement, security checks, and memory consistency) to catch regressions and specification breaches before changes reach the repository history.
