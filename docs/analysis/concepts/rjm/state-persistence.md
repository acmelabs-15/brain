---
package: rjm
name: State Persistence
slug: state-persistence
kind: pattern
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# State Persistence

## Definition — verbatim
> "Scripts should maintain state across sessions:" — .claude/skills/skillforge/references/script-integration-framework.md:200

## Also called — verbatim
> "### Pattern 3: State Persistence" — .claude/skills/skillforge/references/script-integration-framework.md:198

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-integration-framework.md | 198 | defined here | Documents the state persistence pattern for maintaining progress and data across multi-session workflows. |

## Consumes
Session state dictionaries, cache directories, and file write locks.

## Produces
Persisted JSON state files (`state.json`) with timestamps and version metadata.

## When applied
When workflows span multiple sessions or require resuming interrupted tasks.

## Sub-concepts
json-state-persistence

## Part of
agentic-script-patterns

## Implementation status
clean

## Design notes
Enables long-running and multi-session workflows by persisting structured state to disk (such as `~/.cache/skill-name/state.json`) with fallback error handling for corrupted files.
