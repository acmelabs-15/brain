---
package: matt
name: npx skills add mattpocock/skills
slug: npx-skills-add-mattpocock-skills
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0002-ship-as-a-claude-code-plugin.md, sha256: c8f8f946db9fee714fc55270caf6107e749e30316d43fb80cb3ce2f048dd949d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# npx skills add mattpocock/skills

## Definition — verbatim
(used, not defined)
> "These skills have always been installable via [skills.sh](https://skills.sh/mattpocock/skills) (`npx skills add mattpocock/skills`), which copies editable skill files into a user's project across Claude Code, Codex, and other Agent-Skills-standard harnesses." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0002-ship-as-a-claude-code-plugin.md | 3 | used here | Cited in ADR as the command-line invocation for copying skills via skills.sh |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
skills-sh

## Implementation status
clean

## Design notes
CLI command invocation for installing skills via the `skills.sh` registry; recorded as a name-only card representing a command invocation rather than an engineering lifecycle concept.
