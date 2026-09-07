---
package: rjm
name: Fix Patterns
slug: fix-patterns
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Fix Patterns

## Definition — verbatim
> "## Fix Patterns (From Session 80 Retrospective)" — docs/autonomous-pr-monitor.md:514
> "These patterns were validated during autonomous monitoring and have 90%+ atomicity scores." — docs/autonomous-pr-monitor.md:516

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 514 | defined here | Catalogues verified, high-atomicity remediation recipes for recurring CI and script errors encountered during autonomous monitoring. |

## Consumes
Recurring CI failures, cross-platform path incompatibilities, PowerShell syntax errors, and missing GitHub metadata.

## Produces
Validated, atomic code patches and configuration changes resolving known failure modes without trial-and-error thrashing.

## When applied
Applied when remediating pull requests failing checks that match documented historical failure patterns.

## Sub-concepts
ci-concurrency-race

## Part of
autonomous-pr-monitoring-prompt

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Fix Patterns distills empirical solutions discovered in past retrospectives into verified, atomic recipes, enabling autonomous agents to reliably fix recurring CI and scripting issues without destabilizing repository code.
