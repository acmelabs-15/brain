---
package: matt
name: --force
slug: force
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/git-guardrails-claude-code/SKILL.md, sha256: 69b291d655626a01602b998a1836fcb93c058ede68dfafddfd71e87f17074764}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# --force

## Definition — verbatim
(used, not defined)

> "- `git push` (all variants including `--force`)" — skills/misc/git-guardrails-claude-code/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/git-guardrails-claude-code/SKILL.md | 12 | used here | Listed as an example variant of git push blocked by the guardrail hook. |

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
A command-line flag for git push indicating forced overwrite of remote refs, classified as name-only because it is a CLI parameter rather than an agent lifecycle concept.
