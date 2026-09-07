---
package: rjm
name: support
slug: support
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
  - {path: .claude/agents/code-simplifier.md, sha256: 143d7143d73e79244f789421c37577a0d0fd4ef4b2384975a28e8935ec98c87c}
  - {path: .claude/agents/comment-analyzer.md, sha256: be14b44b239e3c4e96cea9b3999ddecf9202d3609fd442d96f24e8c9255b34fa}
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
  - {path: templates/agents/janitor.shared.md, sha256: d341d17755611a3c50912455dba61ca3418780bf4584785f2f7a3d69b68a66d8}
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# support

## Definition — verbatim
> "| `support` | Supplies research, documentation, and context to any caller | analyst, explainer, task-decomposer, skillbook, retrospective |" — .agents/AGENT-SYSTEM.md:838

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 838 | defined here | Defined in Agent Roles table as agents supplying research, documentation, and context to any caller. |
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 104 | defined here | Defined in ADR-098 as the closed role metadata value replacing the former integration tier. |
| .claude/agents/code-simplifier.md | 6 | used here | Declared in frontmatter metadata as the role value for code-simplifier. |
| .claude/agents/comment-analyzer.md | 6 | used here | Declared in frontmatter metadata as the role value for comment-analyzer. |
| .claude/agents/retrospective.md | 6 | used here | Declared in frontmatter metadata as the role value for retrospective. |
| docs/agent-catalog.md | 16 | used here | Listed as the role classification for analyst in the generated agent catalog table. |
| templates/agents/code-simplifier.shared.md | 2 | used here | Declared in frontmatter metadata for shared code-simplifier agent template. |
| templates/agents/comment-analyzer.shared.md | 2 | used here | Declared in frontmatter metadata for shared comment-analyzer agent template. |
| templates/agents/janitor.shared.md | 2 | defined here | Declared in frontmatter metadata for shared janitor agent template. |
| templates/agents/negotiation.shared.md | 2 | defined here | Declared in frontmatter metadata for shared negotiation agent template. |
| templates/agents/retrospective.shared.md | 2 | defined here | Declared in frontmatter metadata for shared retrospective agent template. |

## Consumes
Research questions, code snippets, execution histories, or documentation requests.

## Produces
Analysis documents, PRD specifications, work breakdown structures, and retrospective reports.

## When applied
> "Supplies research, documentation, and context to any caller" — .agents/AGENT-SYSTEM.md:838

## Sub-concepts
none

## Part of
- agent-roles
- multi-agent-orchestration-system

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
In rjm, `support` characterizes specialized agents that empower other agents and human developers with research, documentation, context, and institutional learnings. Encompassing `analyst`, `explainer`, `task-decomposer`, `skillbook`, and `retrospective`, support agents maintain clarity and consistency across the repository without modifying production code or issuing authoritative verdicts.
