---
package: addy
name: Crash recovery
slug: crash-recovery
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: hooks/SIMPLIFY-IGNORE.md, sha256: a7121b0505c960a8a7a7f09600c9fa81464fc403ab297b95d23f5109b13ea52a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Crash recovery

## Definition — verbatim
(used, not defined)
> "## Crash recovery" — hooks/SIMPLIFY-IGNORE.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/SIMPLIFY-IGNORE.md | 71 | defined here | Documentation section heading and procedure for manual file restoration after host crash |

## Consumes
Backup files in `.claude/.simplify-ignore-cache/` created during earlier PreToolUse events

## Produces
Restored original source files on disk with placeholders replaced by original content

## When applied
Manually invoked via shell when an agent session terminates abnormally before triggering Stop hooks

## Sub-concepts
none

## Part of
simplify-ignore-hook

## Implementation status
clean

## Design notes
Operational recovery technique for the simplify-ignore hook that allows developers to manually reconstitute source code from disk backups if Claude Code terminates abruptly without executing its session cleanup handler.
