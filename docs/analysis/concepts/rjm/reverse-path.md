---
package: rjm
name: reverse path
slug: reverse-path
kind: pattern
package_phase: rjm:sync
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/sync.md, sha256: f6e8579a330acaa0c1fad9b84a0e10fae41cdd63122e9d9becd65564f3727019}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# reverse path

## Definition — verbatim
> "The forward path (`/spec` -> `/plan` -> `/build`) turns intent into code. There is no clean reverse path." — .claude/commands/sync.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/sync.md | 11 | used here | Explains the structural gap in the engineering lifecycle where code updates lack an automated path back to specs. |

## Consumes
Hand-edited code modifications, refactorings, and hotfixes.

## Produces
Synchronized specification updates reflecting retroactive code modifications.

## When applied
Exercised via `/sync` to close the feedback loop when code modifications precede specification updates.

## Sub-concepts
none

## Part of
sync

## Implementation status
defects: orphan, missing-path

## Design notes
While forward engineering proceeds systematically from requirements to code (`/spec` -> `/plan` -> `/build`), real-world engineering routinely requires hotfixes, quick refactorings, and prototype adjustments directly in source code. Without a defined reverse path, specifications drift and become untrustworthy. The reverse path concept articulates the necessity of `/sync` to reflect code reality back into architectural artifacts.
