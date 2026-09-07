---
package: rjm
name: Boy Scout fix
slug: boy-scout-fix
kind: technique
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/quality-boy-scout-rule.md, sha256: fe632e02d3b667f3f21fe6336aefb6747e671955e195820dc4a6bca764b4a6aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Boy Scout fix

## Definition — verbatim
> "| Boy Scout fix | Include with current work | Rename misleading variable |" — .claude/skills/analyze/references/quality-boy-scout-rule.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/quality-boy-scout-rule.md | 54 | defined here | Defined in the scope classification table as a minimal improvement included directly with current work (e.g. renaming a misleading variable). |

## Consumes
Touching existing source code during primary task execution.

## Produces
Minor inline cleanups (such as variable renames or comment fixes) bundled into the current PR.

## When applied
Applied when an engineer or agent notices a tiny, trivial improvement directly related to touched files during normal work.

## Sub-concepts
none

## Part of
quality-boy-scout-rule

## Implementation status
defects: missing-path

## Design notes
Boy Scout fix represents the smallest tier in rjm's scope classification hierarchy, authorizing engineers and agents to include immediate, trivial cleanups directly in their current commit or PR without creating separate tasks or tickets.
