---
package: rjm
name: Plugin Manifest Version Prohibition
slug: plugin-manifest-version-prohibition
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-config-catalog/SKILL.md, sha256: fed89f32f1de6d65bf43c3fb654fb87b277603f2714c917bd36f52b15ba4a7fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Plugin Manifest Version Prohibition

## Definition — verbatim
> "## Plugin Manifest Version Prohibition" — .claude/skills/ai-agents-config-catalog/SKILL.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-config-catalog/SKILL.md | 105 | defined here | Section heading defining the architectural rule prohibiting version fields in packaged plugin manifests and marketplace entries. |

## Consumes
Packaged plugin manifests (plugin.json) and marketplace entries.

## Produces
Manifests stripped of explicit version fields, allowing consumers to resolve freshness via git commit SHAs.

## When applied
During plugin packaging, marketplace updates, and manifest validation.

## Sub-concepts
none

## Part of
config-catalog

## Implementation status
clean

## Design notes
A strict repository architectural constraint established by ADR-092 prohibiting any version field in plugin manifests or marketplace entries. Because Claude Code resolves freshness from the first version string it encounters, committing a static version locks downstream users to a hand-bumped version rather than tracking git commit SHAs.
