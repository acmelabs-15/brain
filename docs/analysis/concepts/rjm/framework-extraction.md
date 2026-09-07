---
package: rjm
name: Framework Extraction
slug: framework-extraction
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-feasibility-analysis.md, sha256: fabe8278f52716f18b7a1e30350ec8ff0c55d155dcc91000ec5ab6940cdebfab}
  - {path: .agents/architecture/ADR-072-jtbd-plugin-architecture.md, sha256: dd3585a127093a7612362aaf1737c13379ef32d464af6f14b6151f87364c8052}
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Framework Extraction

## Definition — verbatim
> "extracting the multi-agent framework from rjmurillo/ai-agents into rjmurillo/awesome-ai as a Claude Code plugin marketplace." — .agents/analysis/adr-045-feasibility-analysis.md:5

## Also called — verbatim
v0.4.0 Framework Extraction — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:19

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-feasibility-analysis.md | 1 | defined here | Analyzed in title and scope as the architectural process of separating the reusable framework from repo-specific code. |
| .agents/architecture/ADR-072-jtbd-plugin-architecture.md | 19 | used here | Referenced as parent milestone epic #1072 refining plugin taxonomies based on jobs-to-be-done. |
| .agents/critique/ADR-045-debate-log.md | 1 | defined here | Debated across two rounds of critique focusing on security risks, coupling, and migration feasibility. |

## Consumes
Co-located multi-agent framework files, agent definitions, shared templates, and lifecycle skills.

## Produces
Standalone plugin marketplace packages and clean consumer reference implementation.

## When applied
Governs the v0.4.0 architectural restructuring to distribute ai-agents to broad organizational consumers.

## Sub-concepts
plugin-marketplace, core-agents, framework-skills, path-parameterization, namespace-migration

## Part of
none

## Implementation status
defects: missing-path, cross-file-contradiction

## Design notes
Framework Extraction is an architectural decomposition strategy that disentangles a reusable, generic multi-agent system from project-specific business code. By decoupling shared agents, workflow skills, and quality gates into standalone plugins distributed via a marketplace, framework extraction allows external consumer repositories to install the system with a single command while preserving clean architectural boundaries.
