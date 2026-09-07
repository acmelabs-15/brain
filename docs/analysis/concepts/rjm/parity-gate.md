---
package: rjm
name: parity gate
slug: parity-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
  - {path: .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md, sha256: f4d18d9ff8942cccc310f26dbf6a33f6473a8cf65d03c3e1b681be91d680227e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parity gate

## Definition — verbatim
> "6. **The parity gate is unchanged.** `check_plugin_manifest_parity.py` continues to" — .agents/architecture/ADR-091-post-merge-version-bot.md:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 158 | defines | Quality gate verifying that manifest files across Claude Code and Copilot CLI roots remain synchronized. |
| .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md | 97 | used here | Cites parity gate as the authoritative invariant owning manifest structural anchors. |

## Consumes
Working-tree copies of `.claude/.claude-plugin/plugin.json` and `src/copilot-cli/.claude-plugin/plugin.json`.

## Produces
Gate verdict ensuring identical version strings and core plugin fields.

## When applied
Enforced in CI on all PRs and post-merge validation workflows.

## Sub-concepts
check_plugin_manifest_parity.py

## Part of
ci-validation

## Implementation status
clean

## Design notes
Invariant verification gate ensuring dual-platform distribution parity, verifying that Claude Code and Copilot CLI plugin manifests publish identical configurations and versions without drift.
