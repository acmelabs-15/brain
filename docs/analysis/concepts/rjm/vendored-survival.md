---
package: rjm
name: Vendored survival
slug: vendored-survival
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Vendored survival

## Definition — verbatim
> "- **Vendored survival**. `/review` works in a `.claude/`-only checkout. No axis or skill references `.agents/` or `.github/`." — .claude/skills/review/SKILL.md:189

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 189 | defined here | Architectural principle requiring the review skill to function self-contained within .claude without external dependencies. |

## Consumes
Self-contained skill assets and local references under .claude/.

## Produces
Standalone portability of the review skill in minimal plugin installations.

## When applied
Enforced in review skill design and packaging across multi-harness distributions.

## Sub-concepts
none

## Part of
review-principles

## Implementation status
defects: missing-path, doc-drift

## Design notes
Vendored survival ensures that the review skill operates autonomously in vendored checkouts without depending on repository-specific directories like .agents/ or .github/.
