---
package: addy
name: clean-rollback guarantee
slug: clean-rollback-guarantee
kind: gate
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
  - {path: commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# clean-rollback guarantee

## Definition — verbatim
> "Autonomous per-task commits must not absorb unrelated local work, or the clean-rollback guarantee breaks." — .gemini/commands/build.toml:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/build.toml | 31 | defined here | Requires clean baseline verification before autonomous execution to safeguard clean rollbacks. |
| commands/build.toml | 31 | defined here | Claude Code command requirement enforcing git cleanliness to protect rollback guarantees. |

## Consumes
Clean git working directory verified via git status --porcelain.

## Produces
Reversible git history where each task commit can be reverted independently without side effects.

## When applied
Prior to starting autonomous execution in /build auto.

## Sub-concepts
clean-rollback

## Part of
build-auto

## Implementation status
clean

## Design notes
An architectural safety guarantee requiring working tree cleanliness prior to autonomous multi-task execution, ensuring each task's commit is self-contained and cleanly revertible.
