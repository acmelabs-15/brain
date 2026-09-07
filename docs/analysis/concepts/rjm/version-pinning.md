---
package: rjm
name: Version Pinning
slug: version-pinning
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-code-plugin-marketplaces.md, sha256: 7bf3c4c5147775914422c77a5ab9b7f61a348c3a0584fd947ec2959316ddfd8b}
  - {path: .claude/skills/skillforge/references/evolution-scoring.md, sha256: 7e5b7f9e76ce28a7545f65dc038b5e24a9820dd515183e5dbef0a06e8045c4cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Version Pinning

## Definition — verbatim
(used, not defined)

> "**Version Pinning**:" — .agents/analysis/claude-code-plugin-marketplaces.md:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-code-plugin-marketplaces.md | 103 | defined here | Specifies pinning plugin dependencies via Git ref and commit sha in marketplace catalog definitions. |
| .claude/skills/skillforge/references/evolution-scoring.md | 217 | defined here | Documents hardcoding specific model versions or tool versions as an evolution anti-pattern that reduces timelessness. |

## Consumes
Dependency declarations, Git repository references, or model configuration settings.

## Produces
Immutable dependency specifications or anti-pattern flags during skill evolution scoring.

## When applied
Applied when declaring external plugin sources in marketplace manifests, or evaluated during Phase 4 evolution synthesis of new skills.

## Sub-concepts
none

## Part of
claude-code-plugin-marketplaces, evolution-scoring

## Implementation status
defects: missing-path, doc-drift

## Design notes
Version Pinning serves two contrasting roles in rjm: in distribution architecture, it is a recommended security and reproducibility practice pinning plugin dependencies by Git ref and SHA; in skill authoring, it is treated as an evolution anti-pattern where hardcoding ephemeral model versions degrades the skill's longevity.
