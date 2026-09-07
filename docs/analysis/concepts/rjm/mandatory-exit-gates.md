---
package: rjm
name: Mandatory Exit Gates
slug: mandatory-exit-gates
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/build.md, sha256: 29d6811b2eb2712273cae310f4addb615187cc2a8746c35bc1bfc99c262234c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Mandatory Exit Gates

## Definition — verbatim
> "## Mandatory Exit Gates" — .claude/commands/build.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/build.md | 61 | defined here | Defined as the four non-negotiable exit gates (quality, lints, doc accuracy, orphan refs) required to complete `/build`. |

## Consumes
Completed code changes, diffs, and staged commits produced during the build cycle.

## Produces
Pass/fail exit gate verdicts that block task completion if any gate returns findings.

## When applied
At the end of every `/build` run before declaring the task finished.

## Sub-concepts
none

## Part of
build-command

## Implementation status
clean

## Design notes
Mandatory Exit Gates transform automated quality verification from advisory suggestions into hard completion blockers for the implementer agent. By requiring clean results across code quality metrics, taste lints, documentation accuracy, and orphan reference scans before declaring a build complete, it prevents incomplete or substandard code from polluting downstream PR reviews.
