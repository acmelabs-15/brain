---
package: matt
name: .agents/invocation.md
slug: agents-invocation-md
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/skill-tool-invocation-terminology.md, sha256: 3fb3ccf597c7975987c671483f337a9e4d2804bf595e4bec0d854fbaffc6c8c1}
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .agents/invocation.md

## Definition — verbatim
> "Documents the convention in `.agents/invocation.md` for future skills to follow." — .changeset/skill-tool-invocation-terminology.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/skill-tool-invocation-terminology.md | 9 | defined here | Records establishing the invocation reference document for repo-wide calling conventions. |
| .changeset/user-invoked-skill-invocation.md | 5 | used here | Cites invocation.md invariant that user-invoked skills cannot be called by other skills. |

## Consumes
Skill definitions, harness execution models (Claude Code, Codex), and calling requirements.

## Produces
A canonical repository standard dictating user-invoked vs model-invoked configuration and Skill tool calling syntax.

## When applied
Consulted when authoring new skills, configuring frontmatter and openai.yaml, or establishing cross-skill dependencies.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An internal reference document formalizing the invocation architecture for Matt's skill repository. It defines the strict boundary between user-invoked skills (reachable only by humans) and model-invoked skills (autonomously reachable by agents), and specifies that cross-skill composition must use explicit Skill tool calls rather than prose slash-commands.
