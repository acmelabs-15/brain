---
package: rjm
name: Commit count
slug: commit-count
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/provenance.md, sha256: 04ccff20a5972dda6a64eea54b0e39b152b0c950046a9924e4f23d856a453cb3}
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md, sha256: e828ecf0ae117cb6cce4e44b70d490dee5da7418f2129f6801e9f6e9f9513d71}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Commit count

## Definition — verbatim
> "Commit count" — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/provenance.md | 13 | used here | Provenance entry confirming commit count is advisory only under ADR-099 without blocking PR merges. |
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 35 | used here | Diagnostics toolkit entry providing the git command to count commits on the current branch ahead of origin/main. |

## Consumes
Git branch commit history relative to origin/main.

## Produces
Advisory warning notifications and PR split recommendations.

## When applied
Computed during PR diagnostics and pre-flight validation.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Commit count tracks the number of commits on a PR branch ahead of main. Under ADR-099, it serves as an advisory metric that warns authors when a branch exceeds 10 or 15 commits without acting as a hard merge blocker.
