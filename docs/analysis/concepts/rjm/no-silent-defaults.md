---
package: rjm
name: No silent defaults
slug: no-silent-defaults
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/incident-history.md, sha256: f0eec48d7b0b37bd1748187e54e63be89cbd45466ca6e4857eb0b179822bfee3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# No silent defaults

## Definition — verbatim
> "## No silent defaults: FM-10 and PR #1965" — .claude/skills/ai-agents-change-control/references/incident-history.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/incident-history.md | 23 | defined here | Section heading defining the rule that missing or unknown signals must never silently default to a passing status. |

## Consumes
Parser outputs, telemetry streams, and gate evaluation signals.

## Produces
Explicit fail-safe error handling and blocking UNKNOWN states when signals are absent.

## When applied
Applied when designing and implementing verdict aggregation, parsers, and gate logic across all workflows.

## Sub-concepts
none

## Part of
fm-10

## Implementation status
clean

## Design notes
No silent defaults is an architectural design principle established under FM-10 and PR #1965, requiring that missing, unparseable, or absent signals default to blocking states rather than silently succeeding.
