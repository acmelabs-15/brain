---
package: rjm
name: SKIP_PUSH_LOCK_COMMIT_GUARD
slug: skip-push-lock-commit-guard
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-config-catalog/SKILL.md, sha256: fed89f32f1de6d65bf43c3fb654fb87b277603f2714c917bd36f52b15ba4a7fc}
  - {path: scripts/validation/check_push_lock_before_commit.py, sha256: 539d0cd22f8e575f3f1c1f6b32d9b19b5d499c93288c944020b6b69e026b1e44}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SKIP_PUSH_LOCK_COMMIT_GUARD

## Definition — verbatim
> "regardless), set ``SKIP_PUSH_LOCK_COMMIT_GUARD=1`` to bypass this one check," — scripts/validation/check_push_lock_before_commit.py:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-config-catalog/SKILL.md | 64 | used here | Documented in the config catalog as a production escape hatch bypassing the push-lock-commit-guard pre-commit check. |
| scripts/validation/check_push_lock_before_commit.py | 45 | defined here | Module docstring defines the bypass environment variable semantics for unblocking commits when a push lock is stuck. |

## Consumes
Push lock contention scenarios where a stale or crashed push lock prevents commit creation.

## Produces
Explicit, observable bypass of the push-lock pre-commit guard with printed console notice.

## When applied
Set to 1 when a developer needs to bypass the commit lock check due to a crashed or stuck push process.

## Sub-concepts
none

## Part of
escape-hatches

## Implementation status
clean

## Design notes
An emergency escape hatch in rjm that allows developers to commit changes even when a branch push lock is active. Adhering to the escape hatch design policy, it requires an exact value (SKIP_PUSH_LOCK_COMMIT_GUARD=1), announces its bypass visibly on stdout/stderr, and is strictly scoped to a single pre-commit check rather than disabling git hooks globally.
