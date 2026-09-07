---
package: rjm
name: secure path allocator
slug: secure-path-allocator
kind: technique
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/push-pr.md, sha256: 9383f9915870dc023605e1632ffa9176982dd1f47a60894138b4ba6c16f67418}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# secure path allocator

## Definition — verbatim
> "4. Run the secure path allocator:" — .claude/commands/push-pr.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/push-pr.md | 26 | defined here | Step instruction executing `new_pr.py --prepare-body-file` to safely allocate a temporary PR body file. |

## Consumes
Pull request template and target repository context.

## Produces
Deterministic, collision-safe file path in `.agents/scratch/` containing the PR body template placeholder.

## When applied
During pull request preparation in `/push-pr` before editing the PR body.

## Sub-concepts
none

## Part of
push-pr-command

## Implementation status
clean

## Design notes
A helper script utility that prevents shell injection and escaping hazards when preparing pull request bodies. Rather than passing multi-line text directly through shell arguments or temporary environment variables across fresh shells, it allocates a dedicated scratch file that the agent edits in place.
