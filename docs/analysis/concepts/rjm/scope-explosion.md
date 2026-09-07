---
package: rjm
name: scope explosion
slug: scope-explosion
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-043-scoped-tool-execution.md, sha256: 9a4be43328cc6530b1b24cac28beba3ffa57f0eb559fbaa872864d8f002798a4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# scope explosion

## Definition — verbatim
> "This approach causes scope explosion when tools reformat files unrelated to the session's stated objective." — .agents/architecture/ADR-043-scoped-tool-execution.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-043-scoped-tool-execution.md | 30 | defined here | Defines the anti-pattern where repository-wide tool invocations bundle unrelated file changes into pull requests. |

## Consumes
Repository-wide automated tool runs across uncommitted working trees.

## Produces
Polluted git history, large pull requests, elevated merge conflict risk, and review overhead.

## When applied
Occurs when tools like linters or formatters run without git-diff filters during session protocol completion.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Scope explosion is an operational anti-pattern where automated agent session tools introduce collateral modifications to files unrelated to the session's primary objective.
