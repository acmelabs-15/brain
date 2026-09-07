---
package: rjm
name: Related
slug: related
kind: artifact
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/execution-plans/SKILL.md, sha256: 5fce18066fe388549f310b14e86f36e023853679c1954c76d5b4400fe0c1c472}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Related

## Definition — verbatim
> "| Related | Links to issues, PRs, ADRs |" — .claude/skills/execution-plans/SKILL.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/execution-plans/SKILL.md | 49 | defined here | Required plan section linking the execution plan to external issues, pull requests, and architectural decisions. |

## Consumes
Issue identifiers, pull request URLs, and ADR citations relevant to the plan's scope.

## Produces
Hyperlinked cross-references connecting the plan to broader repository tracking systems.

## When applied
Populated during initial plan creation and updated as pull requests or ADRs are produced.

## Sub-concepts
none

## Part of
execution-plans

## Implementation status
clean

## Design notes
The Related section anchors an execution plan within the broader repository governance ecosystem. By maintaining explicit links to issues, PRs, and ADRs, it provides two-way traceability between low-level task execution and high-level architectural mandates.
