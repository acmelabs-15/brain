---
package: matt
name: vibe coding
slug: vibe-coding
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude-plugin/plugin.json, sha256: e531ddc6560515397ac32d93334fa3eb586b6b6bcc2e472c3646641fd3d2b951}
  - {path: README.md, sha256: 4079d981bc2ac0a52aaf2c76d1c1476f4297937a8ff3a2e2322b6b730dc2d4f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# vibe coding

## Definition — verbatim
(used, not defined)
> "My agent skills that I use every day to do real engineering - not vibe coding." — README.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude-plugin/plugin.json | 4 | defined here | Contrasts the plugin's real engineering tools against undisciplined vibe coding. |
| README.md | 15 | used here | Positions the repository's skills as rigorous workflows rather than vibe coding. |

## Consumes
none

## Produces
none

## When applied
Referenced negatively across the package as the unstructured approach to software development that these skills replace.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`vibe coding` is identified in `matt` as the primary anti-pattern of LLM-assisted development. Characterized by informal prompting, speculative implementation, lack of automated verification, and unchecked model guessing, it is contrasted with the repo's disciplined "real engineering" methodology centered on rigorous upfront grilling, explicit specifications, strict test-driven development, and architectural decision records.
