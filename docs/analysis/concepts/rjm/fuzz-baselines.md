---
package: rjm
name: fuzz baselines
slug: fuzz-baselines
kind: artifact
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

# fuzz baselines

## Definition — verbatim
(used, not defined)

> "reference is measured by the fuzz baselines in the repository's test suite." — .claude/skills/fix-markdown-fences/SKILL.md:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/SKILL.md | 177 | used here | Test suite baseline fixtures used to measure agreement between custom markdown scanners and CommonMark reference parsers. |

## Consumes
Test inputs and reference parser outputs

## Produces
Differential testing assertions and conformance metrics

## When applied
During regression and fuzz testing of custom markdown parsers.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, other

## Design notes
Stored test fixtures and differential test baselines in the repository's test suite comparing custom Python parsers against the official CommonMark reference parser across hundreds of generated edge-case document shapes.
