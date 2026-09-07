---
package: rjm
name: Auto-updating without review
slug: auto-updating-without-review
kind: pattern
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/dependency-auditor.md, sha256: bba28af9880dc67233b35d0e739ae8f8702158713d097d177a2034fd605cf51e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Auto-updating without review

## Definition — verbatim
> "- **Auto-updating without review.** Dependency updates can break API contracts," — .claude/agents/dependency-auditor.md:147

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/dependency-auditor.md | 147 | defined here | Anti-pattern definition establishing that the auditor reports and prioritizes while maintainers decide updates. |

## Consumes
Vulnerability reports, changelogs, and available dependency update versions.

## Produces
Enforcement of human review before updating dependencies, prohibiting automated unreviewed upgrades.

## When applied
When planning remediation actions following a dependency audit.

## Sub-concepts
none

## Part of
dependency-auditor

## Implementation status
clean

## Design notes
An anti-pattern and governance guardrail in rjm. It enforces the rule that dependency-auditor surfaces vulnerabilities and recommends versions, but must never perform automated package updates or auto-merges without human review, preventing broken API contracts and unexpected behavior changes.
