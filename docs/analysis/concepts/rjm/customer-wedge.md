---
package: rjm
name: Customer Wedge
slug: customer-wedge
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Customer Wedge

## Definition — verbatim
> "## Incident 1: #2205 Customer Wedge (the 33-day launcher failure)" — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/references/incidents.md | 10 | defined here | Chronicled as Incident 1 (#2205), detailing the 33-day plugin launch outage caused by bare hook paths. |

## Consumes
Hook generator outputs and plugin launcher specifications executed within foreign user working directories.

## Produces
Catastrophic plugin startup failures and unrecoverable hook errors necessitating plugin uninstallation.

## When applied
Referenced when auditing hook command path resolution, runtime environment assumptions, and launcher generation.

## Sub-concepts
launcher-level-fail-open-wrapper

## Part of
ai-agents-failure-archaeology

## Implementation status
clean

## Design notes
`Customer Wedge` designates the critical 33-day incident (#2205) where relative script paths in hook commands failed against user working directories, disabling all Copilot CLI plugin hooks and requiring uninstallation. It established the binding rule that generated customer-facing artifacts must be executed in real runtime environments before release.
