---
package: rjm
name: Git hook jobs
slug: git-hook-jobs
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/provenance.md, sha256: 04ccff20a5972dda6a64eea54b0e39b152b0c950046a9924e4f23d856a453cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Git hook jobs

## Definition — verbatim
> "Git hook jobs, filters, and validators" — .claude/skills/ai-agents-change-control/references/provenance.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/provenance.md | 14 | used here | Provenance row identifying lefthook.yml hook jobs, filters, and validators verified via lefthook validate. |

## Consumes
lefthook.yml hook configurations and local working tree diffs.

## Produces
Pre-commit and pre-push automated validation verdicts.

## When applied
Executed automatically by Git on commit and push operations.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Git hook jobs represent the automated pre-commit and pre-push validation scripts managed by Lefthook, enforcing local code quality, formatting, and safety checks before changes are shared.
