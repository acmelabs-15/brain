---
package: matt
name: blocked
slug: blocked
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh, sha256: 234922b83c0a1737ee7300806c21ac0f389b07aaeb65c2d71ccedafbc5e1ea4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# blocked

## Definition — verbatim
> "echo \"BLOCKED: '$COMMAND' matches dangerous pattern '$pattern'. The user has prevented you from doing this.\" >&2" — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:20

## Also called — verbatim
`blocked` — external/triage.md:56

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 56 | used here | Proposed issue tracker state role for fully specified work that is blocked on another issue closing. |
| skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh | 20 | defined here | Safety guardrail gate message emitted to stderr when an intercepted git command matches a dangerous pattern. |

## Consumes
PreToolUse bash command invocations in git-guardrails-claude-code; or task dependency relationships in issue tracking.

## Produces
An exit code 2 blocking script execution with an explanatory stderr error; or a non-dispatchable issue status preventing premature agent pickup.

## When applied
Triggered when an agent attempts to execute a destructive git command pattern; or applied to issues awaiting resolution of predecessor tasks.

## Sub-concepts
none

## Part of
git-guardrails-claude-code, triage

## Implementation status
clean (in block-dangerous-git.sh); not-implemented (in external/triage.md)

## Design notes
Serves as an operational halt mechanism across two distinct contexts: in git-guardrails-claude-code, it operates as an automated PreToolUse safety gate aborting destructive git actions with exit code 2; in `/triage`, it denotes a frequently requested but un-shipped state role for specified issues that cannot proceed until prerequisite issues close.
