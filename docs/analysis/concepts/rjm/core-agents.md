---
package: rjm
name: core-agents
slug: core-agents
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-feasibility-analysis.md, sha256: fabe8278f52716f18b7a1e30350ec8ff0c55d155dcc91000ec5ab6940cdebfab}
  - {path: .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md, sha256: 9010d2ac17b09423f0d984afeafdbbbc5144f1a5b43452dcd80d9936ac6dab5d}
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# core-agents

## Definition — verbatim
> "26 agent definitions, 18 shared templates, build/generation system, governance templates" — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-feasibility-analysis.md | 15 | used here | Listed as one of four extracted framework plugins representing core agent definitions. |
| .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md | 79 | defined here | Specified in plugin extraction inventory covering agent definitions, templates, and build generators. |
| .agents/projects/v0.4.0/PLAN.md | 133 | defined here | Scheduled as Phase 1 delivery unit in v0.4.0 extraction milestone. |

## Consumes
Agent markdown definitions, shared templates, and generator scripts.

## Produces
A standalone Claude Code plugin providing specialized agent personas and generation tooling.

## When applied
Installed by consumer repositories to gain access to the specialized multi-agent catalog.

## Sub-concepts
none

## Part of
framework-extraction, plugin-marketplace

## Implementation status
defects: missing-path, doc-drift

## Design notes
core-agents is a packaged plugin artifact within the awesome-ai marketplace architecture. It encapsulates the system's agent definitions (such as architect, implementer, reviewer, and qa) and their underlying template generation system, enabling consumers to import agent personas without inheriting unrelated domain skills.
