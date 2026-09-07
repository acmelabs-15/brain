---
package: rjm
name: Session Log Mechanics
slug: session-log-mechanics
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/rules/session-logs.md, sha256: a4592aa8702246ac5770c118f5e5e3e4c31699ce9fede52273a865384d87208e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Session Log Mechanics

## Definition — verbatim
> "This rule covers the mechanics that still apply to a log that already exists on your branch (carried over from before this change, or cherry-picked from an older one)." — .claude/rules/session-logs.md:13-15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/rules/session-logs.md | 6 | defined here | Title and subject of rule defining operational constraints for legacy session logs on active branches. |

## Consumes
Pre-existing legacy session log files (`.agents/sessions/*.json`), git branch history.

## Produces
Guaranteed git reachability for session log commits, preventing broken pre-commit hooks and lengthy CI test failures.

## When applied
Applied whenever working on or rebasing a git branch carrying a legacy `.agents/sessions/*.json` file.

## Sub-concepts
endingcommit, validate-if-present-gate, episode-extractor, episode-store

## Part of
rules

## Implementation status
defects: doc-drift, missing-path

## Design notes
Session Log Mechanics defines the operational guardrails for handling legacy session logs following the formal deprecation of new session log creation. Because pre-existing logs remain in the repository as immutable historical records for memory and retrospective tools, this rule prevents contributors from corrupting git commit graph reachability by amending commits or failing to re-point endingCommit SHAs after rebasing.
