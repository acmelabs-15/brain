---
package: matt
name: scripts/link-skills.sh
slug: scripts-link-skills-sh
kind: name-only
package_phase: none
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

# scripts/link-skills.sh

## Definition — verbatim
(used, not defined)

> "The only robust ways to give Codex a single promoted-only path are (a) **restructure** so `skills/` contains only promoted skills (moving the non-promoted buckets out, a large blast radius across `CLAUDE.md`, `scripts/link-skills.sh`, the bucket READMEs, and the local dev workflow that relies on `in-progress/` and `personal/`), or (b) **commit duplicate copies** of promoted skills into a flat directory (a sync burden and a second source of truth)." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0002-ship-as-a-claude-code-plugin.md | 17 | used here | Cited as part of the repository infrastructure affected if skills/ were restructured for Codex. |

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
clean

## Design notes
scripts/link-skills.sh is an internal maintainer script for symlinking repository skills into local harness directories rather than an operational lifecycle concept.
