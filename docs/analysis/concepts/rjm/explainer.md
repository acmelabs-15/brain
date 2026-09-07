---
package: rjm
name: explainer
slug: explainer
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md, sha256: 753b2079b2f8ad0d65f9142ba030eab785afdf790b91d3a5283898c887b66458}
  - {path: .claude/skills/codebase-documenter/SKILL.md, sha256: f94be5947e115a61caff598d81516af3606284caa0bb4f4ed4db4fe36973b12a}
  - {path: .claude/skills/planner/references/explainers-and-intents.md, sha256: 0a109a5fb448fd0d0a6b5f6f18e6b4dbd2d6c8aa730ff6ae5d6232de7a88b15d}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# explainer

## Definition — verbatim
> "**Role**: Creates PRDs and technical documentation" — .agents/AGENT-SYSTEM.md:542

## Also called — verbatim
- `Explainer` — .claude/skills/planner/references/explainers-and-intents.md:17

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 538 | defined here | Defined as a documentation specialist agent creating PRDs, explainer documents, and technical specs. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 125 | used here | Assigned to Sonnet 4.5 model tier for cost-optimized documentation generation. |
| .agents/architecture/ADR-073-adr-lifecycle-frontmatter-md.md | 53 | defined here | Defined as an optional ADR frontmatter field linking to a paired living design document. |
| .claude/skills/codebase-documenter/SKILL.md | 39 | used here | Referenced as the designated agent when narrative prose documentation is needed for a component. |
| .claude/skills/planner/references/explainers-and-intents.md | 17 | defined here | Defined as a written design proposal artifact describing problems, solutions, and trade-offs before implementation. |
| docs/agent-catalog.md | 26 | used here | Cataloged as a support role agent specializing in junior-developer-accessible documentation and PRDs. |
| README.md | 257 | defined here, used here | Demonstrated in an example invocation generating developer user guides for a module. |
| src/claude/AGENTS.md | 178 | used here | Listed in support agents catalog table mapped to `explainer.md`. |
| templates/AGENTS.md | 180 | used here | Cataloged in shared agents reference table for documentation and PRDs. |

## Consumes
Feature concepts, architectural designs, API proposals, or user requirements.

## Produces
Product Requirement Documents (PRDs) in `.agents/planning/PRD-*.md`, technical specifications, explainers, and module guides.

## When applied
> "**When to Use**: - Creating feature specifications" — .agents/AGENT-SYSTEM.md:559-560

## Sub-concepts
none

## Part of
- support
- orchestrator

## Implementation status
defects: missing-path, internal-contradiction, doc-drift (from .agents/AGENT-SYSTEM.md broken relative paths, ADR-039 missed verification criteria, and ADR-073 uncreated synchronization script)

## Design notes
In rjm's multi-agent system, `explainer` functions both as a specialized support agent and as a pre-implementation design proposal artifact. As an agent role, it creates unambiguous, junior-developer-friendly specifications and PRDs using explicit acceptance criteria and INVEST guidelines. As an artifact (borrowed from Chromium's Blink process and linked in ADR frontmatter), an explainer serves as the essential pre-implementation consensus document capturing problem space, proposed solutions, and trade-offs before any production code is committed.
