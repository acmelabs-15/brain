---
package: rjm
name: CLAUDE_PROJECT_DIR
slug: claude-project-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-047-plugin-mode-hook-behavior.md, sha256: 3434f27ef9056e9a72836805fcc30dbb43f5447d14e4fe406330014c02503491}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CLAUDE_PROJECT_DIR

## Definition — verbatim
(used, not defined)

> "| `CLAUDE_PROJECT_DIR` | Always (all hooks) | Consumer's project root |" — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-047-plugin-mode-hook-behavior.md | 31 | used here | Specified as the runtime environment variable pointing to the consumer project root |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
CLAUDE_PROJECT_DIR is an environment variable identifier provided by the Claude Code harness pointing to the consumer repository root rather than an operational lifecycle concept.
