---
package: rjm
name: content column
slug: content-column
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/fix-markdown-fences/SKILL.md, sha256: da1471c97fd2ea0fac4de1751c27ff033cd044030c03d44963895917bd55712a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# content column

## Definition — verbatim
> "A list item's content column is not always the marker plus its padding." — .claude/skills/fix-markdown-fences/SKILL.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/SKILL.md | 112 | defined here | Defined as the column offset determining the baseline indentation for child blocks within a list item. |

## Consumes
List marker and following whitespace indentation

## Produces
Base column offset for nested list container contents

## When applied
When calculating the indentation baseline for child blocks inside a markdown list item.

## Sub-concepts
none

## Part of
list-item

## Implementation status
defects: doc-drift, other

## Design notes
The column position established by a list item's marker and subsequent spacing, which serves as the indentation baseline for all nested child blocks. Correctly computing the content column is essential in rjm to distinguish nested code fences from indented code blocks.
