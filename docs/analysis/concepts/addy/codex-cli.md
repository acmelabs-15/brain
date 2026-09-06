---
package: addy
name: Codex CLI
slug: codex-cli
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: hooks/session-start.sh, sha256: 2ea42e7077f606f793f5e7704f593d26ea9bcf231c6f32a7ed17df5c727a63ef}
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Codex CLI

## Definition — verbatim
(used, not defined)
> "Hosts that validate hook output (Codex CLI, Claude Code) reject other shapes." — hooks/session-start.sh:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/session-start.sh | 7 | used here | Identified as an execution host validating SessionStart JSON hook schemas |
| skills/doubt-driven-development/SKILL.md | 122 | used here | Offered as an external CLI candidate for cross-model adversarial code review |

## Consumes
Prompt containing ARTIFACT and CONTRACT piped via stdin in doubt-driven-development

## Produces
Adversarial review findings from an alternative model family

## When applied
When the user elects Codex CLI for cross-model second opinion in doubt-driven-development, or when executing under Codex CLI

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, doc-drift (hooks/session-start.sh has defect breaking legacy test; skills/doubt-driven-development/SKILL.md is clean)

## Design notes
External CLI tool and host environment referenced in Addy as a compliant hook execution host and as an optional cross-model adversarial reviewer in doubt-driven-development to catch single-model blindspots.
