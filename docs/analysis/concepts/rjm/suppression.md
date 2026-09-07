---
package: rjm
name: Suppression
slug: suppression
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: .claude/skills/style-enforcement/SKILL.md, sha256: b9ecc0242fe04b599b23d64edacb59ecfbf55b0b8e9b0d7e78bb338a2d7d9da7}
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Suppression

## Definition — verbatim
> "## Suppression" — .claude/skills/security-scan/SKILL.md:238

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/SKILL.md | 238 | defined here | Section detailing inline comment suppression syntax and audit tracking for false positive security findings. |
| .claude/skills/style-enforcement/SKILL.md | 324 | defined here | Section detailing inline comment suppression syntax for style rule violations. |
| .claude/skills/taste-lints/SKILL.md | 117 | defined here | Section detailing inline comment suppression syntax for taste lint rules. |

## Consumes
Flagged lint violation or security vulnerability and developer justification comments.

## Produces
Suppression record excluding the finding from blocking exit codes while tracking justification for audit visibility.

## When applied
Applied when a flagged violation is a known false positive or justified exception in the code.

## Sub-concepts
is-line-suppressed

## Part of
none

## Implementation status
defects: doc-drift, orphan, missing-path, other

## Design notes
A cross-cutting code-level exception mechanism allowing engineers and agents to suppress specific linter, style, or vulnerability rules with inline justification comments without losing auditability.
