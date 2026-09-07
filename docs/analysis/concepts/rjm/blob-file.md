---
package: rjm
name: blob file
slug: blob-file
kind: artifact
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

# blob file

## Definition — verbatim
> "finds nothing rather than expanding) to a blob file," — .claude/skills/reviewer-findings/SKILL.md:246

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reviewer-findings/SKILL.md | 246 | defined here | Target file receiving git show output for multi-line literal whole-block comparisons. |

## Consumes
Git blob content retrieved via git show for a specific commit and path.

## Produces
A temporary file containing the verbatim file contents used for multi-line string containment checks.

## When applied
Generated during multi-line claim verification in the reviewer-findings protocol.

## Sub-concepts
none

## Part of
premise-verification

## Implementation status
defects: orphan, missing-path

## Design notes
A temporary file artifact storing commit blob contents retrieved without pathspec magic, enabling newline-safe literal containment comparison against needle files.
