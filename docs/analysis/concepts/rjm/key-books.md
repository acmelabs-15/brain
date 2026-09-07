---
package: rjm
name: Key Books
slug: key-books
kind: reference
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-legacy-code.md, sha256: d99de8d31d31be7e7fed8d46f5f1c203e5a2ca6a83ec54b65fffa6ccff072274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Key Books

## Definition — verbatim
> "## Key Books" — .claude/skills/analyze/references/design-legacy-code.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-legacy-code.md | 52 | defined here | Bibliographic reference listing foundational literature on legacy code and refactoring. |

## Consumes
Software engineering literature and foundational methodologies.

## Produces
Curated bibliography grounding legacy code analysis in established engineering texts.

## When applied
Cited when establishing theoretical lineage and authoritative references for legacy code practices.

## Sub-concepts
none

## Part of
design-legacy-code

## Implementation status
defects: missing-path

## Design notes
A bibliographic reference section in design-legacy-code.md cataloging canonical texts—Feathers' Working Effectively with Legacy Code, Fowler's Refactoring, and Kerievsky's Refactoring to Patterns. These literature anchors ground rjm's legacy code analysis techniques in established industry standards.
