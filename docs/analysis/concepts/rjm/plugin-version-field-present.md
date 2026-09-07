---
package: rjm
name: "Plugin version field present"
slug: plugin-version-field-present
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-generation-and-release/SKILL.md, sha256: f21f81ca99b028e049733f4a75da58c62b2603d0c74e74bfd6a88459ae76272d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Plugin version field present

## Definition — verbatim
> "a manifest or marketplace entry carries `version`" — .claude/skills/ai-agents-generation-and-release/SKILL.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 111 | used here | Drift gate checking whether a plugin manifest or marketplace entry carries a `version` field. |

## Consumes
Plugin manifests (`.claude/.claude-plugin/plugin.json`, etc.) and `marketplace.json` entries.

## Produces
Validation verdict blocking PRs or commits if a version field is present.

## When applied
Triggered during pre-pr validation (`scripts/validation/pre_pr.py` via lefthook) and CI (`validate-plugin-version-bump.yml`).

## Sub-concepts
none

## Part of
adr-092

## Implementation status
defects: doc-drift, unfailable-gate

## Design notes
A deterministic drift gate enforcing ADR-092 across plugin manifests and marketplace entries. By failing whenever any manifest embeds a version key, the gate eliminates merge conflict hotspots on version lines and ensures Claude Code and Copilot CLI resolve plugin freshness solely via Git commit SHAs.
