---
package: rjm
name: pickaxe
slug: pickaxe
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reviewer-findings/SKILL.md, sha256: 04e77c280908ff452996e9cc7874985d34475f7fae25d2a49f1c2f4a2403b9b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pickaxe

## Definition — verbatim
(used, not defined)

> "-- "$PATH_SPEC"`, which pickaxe-searches the whole string as one block;" — .claude/skills/reviewer-findings/SKILL.md:162

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reviewer-findings/SKILL.md | 162 | used here | Describes using git log -S to search repository commit history for exact string additions or deletions. |

## Consumes
A search string needle and a bounded commit range.

## Produces
Commit history identifying when a specific string was introduced or removed.

## When applied
Applied when resolving provenance or historical claims in review findings.

## Sub-concepts
none

## Part of
premise-verification

## Implementation status
defects: orphan, missing-path

## Design notes
Pickaxe search (`git log -S`) is a Git history inspection technique utilized in review verification to settle provenance claims about when a code pattern was introduced or modified.
