---
package: addy
name: unfinished work
slug: unfinished-work
kind: gate
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/constraint-driven-development/references/floor-guard.md, sha256: dba15dad8f5a5cbae464ec8457e6dd014a7bcb3ad13a360a6908d54991a5415e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# unfinished work

## Definition — verbatim
> "unfinished work (a stub or empty `catch`)" — skills/constraint-driven-development/references/floor-guard.md:10

## Also called — verbatim
> "if (STUBS.test(text)) flag('unfinished-work', file, text);" — skills/constraint-driven-development/references/floor-guard.md:65

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 10 | used here | Listed in the contract as one of five Step 6 bar-lowering moves detected by floor guard. |
| skills/constraint-driven-development/references/floor-guard.md | 65 | defined here | Rule identifier used when flagging added lines matching placeholder stubs, empty catch blocks, or TODOs. |

## Consumes
Added lines containing stub exceptions (`throw new Error('Not implemented')`), empty catch blocks, TODO comments, or pass stubs.

## Produces
Merge-blocking violation findings that fail floor-guard with exit code 1.

## When applied
During diff-scoped floor verification across all added lines in tracked and untracked files.

## Sub-concepts
stubs

## Part of
floor-guard

## Implementation status
clean

## Design notes
A quality gate check in floor-guard that prevents agents from declaring tasks complete when code still contains stubbed implementations, swallowed errors, or empty catch blocks that simulate completion without doing the work.
