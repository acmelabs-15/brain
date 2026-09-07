---
package: rjm
name: multi-agent validation
slug: multi-agent-validation
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# multi-agent validation

## Definition — verbatim
> "### Phase 3: Multi-Agent Validation" — .claude/skills/slashcommandcreator/SKILL.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/SKILL.md | 3 | used here | Frontmatter description citing multi-agent validation as a core quality mechanism. |
| .claude/skills/slashcommandcreator/SKILL.md | 68 | defined here | Section heading introducing Phase 3 multi-agent validation protocol coordinating 4 specialized agents. |

## Consumes
Slash command design specifications, frontmatter schemas, allowed-tools constraints.

## Produces
Multi-agent validation review verdict with unanimous approval or revision requests.

## When applied
Applied during Phase 3 of slash command creation before code generation or implementation begins.

## Sub-concepts
unanimous-approval-required

## Part of
5-phase-workflow, slashcommandcreator

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A review gate orchestrating parallel critique from four specialized agent personas (Security, Architect, Independent-Thinker, Critic) requiring unanimous consensus to ensure command safety, necessity, and quality before implementation.
