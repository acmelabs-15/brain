---
package: addy
name: merge base
slug: merge-base
kind: technique
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

# merge base

## Definition — verbatim
(used, not defined)
> "the diff between the merge base and the working tree (added *and* removed lines, plus untracked files)." — skills/constraint-driven-development/references/floor-guard.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 9 | used here | Specified as the git baseline commit from which feature branch diffs are calculated. |

## Consumes
The target upstream branch reference (`--base <ref>`, default `origin/main`) and current `HEAD`.

## Produces
The common ancestor commit hash defining the starting boundary for change diff inspection.

## When applied
When initializing floor-guard to determine the exact delta introduced on a feature branch.

## Sub-concepts
none

## Part of
floor-guard

## Implementation status
clean

## Design notes
The common ancestor commit between a feature branch and its upstream target branch, used by floor-guard to isolate and evaluate the exact modifications introduced by the current work unit without false positives from upstream main.
