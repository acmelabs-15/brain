---
package: rjm
name: State Management
slug: state-management
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/integration-patterns.md, sha256: d72997e89254016a87b70f528048433e30c877de4c478453118bb91f5743a667}
  - {path: .claude/skills/skillforge/assets/templates/script-template.py, sha256: 50af05ade0055f329c89815a126c5ff43f3dd21ff959c8ce8d674a32b660e9a0}
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
  - {path: .claude/skills/skillforge/scripts/discover_skills.py, sha256: 54678530ba1813bb24971e1d38b689c5eae3dc0c7c16217436e119074ea3f4ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# State Management

## Definition — verbatim
> "Track progress, persist data" — .claude/skills/skillforge/references/script-integration-framework.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/integration-patterns.md | 148 | defined here | Subsection heading illustrating client-side persistent store configuration using Zustand. |
| .claude/skills/skillforge/assets/templates/script-template.py | 74 | defined here | Code section implementing atomic state file persistence, caching, and corruption recovery. |
| .claude/skills/skillforge/references/script-integration-framework.md | 78 | defined here | Script category defining persistent state tracking for multi-session agent workflows. |
| .claude/skills/skillforge/scripts/discover_skills.py | 381 | defined here | Code section handling the serialization and saving of discovered skill indexes to disk. |

## Consumes
Transient workflow state, project cache directories, or store schemas.

## Produces
Atomic persisted JSON files or state management stores across agent sessions.

## When applied
Applied when agent workflows or scripts require tracking progress and preserving data across sessions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: exit-code-mismatch, doc-drift, missing-path

## Design notes
State Management is an architectural pattern in rjm spanning both application-level state stores (e.g. Zustand) and agentic script persistence (atomic JSON read/writes with corruption recovery), enabling workflows to survive context boundaries and resume progress reliably.
