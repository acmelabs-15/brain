---
package: rjm
name: literal whole-block comparison
slug: literal-whole-block-comparison
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

# literal whole-block comparison

## Definition — verbatim
> "literal whole-block comparison instead: using the same `$PATH_SPEC`" — .claude/skills/reviewer-findings/SKILL.md:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reviewer-findings/SKILL.md | 145 | defined here | Technique for settling multi-line current-state claims by comparing needle and blob files without newline splitting. |

## Consumes
A multi-line needle file and a target commit blob file.

## Produces
Definitive verification of whether a multi-line code block currently exists in the codebase.

## When applied
Applied when verifying review findings that quote multi-line blocks of code.

## Sub-concepts
none

## Part of
premise-verification

## Implementation status
defects: orphan, missing-path

## Design notes
A verification technique that reads full file contents into memory to perform exact substring containment checks, avoiding line-splitting anomalies in multi-line code reviews.
