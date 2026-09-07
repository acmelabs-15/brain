---
package: rjm
name: file size limits
slug: file-size-limits
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# file size limits

## Definition — verbatim
> "file size limits, and platform-specific reliability requirements with custom lints." — .claude/skills/taste-lints/SKILL.md:15

## Also called — verbatim
`File Size Limits` — .claude/skills/taste-lints/SKILL.md:40

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/SKILL.md | 15 | defined here | Cited as a primary architectural invariant statically enforced by custom lints to maintain codebase cohesion. |
| .claude/skills/taste-lints/SKILL.md | 40 | defined here | Section heading introducing the line threshold tiers (301-500 warning, 501+ error) for file size limits. |

## Consumes
Source code files being authored, edited, or staged for commit.

## Produces
Lint warnings or blocking violation errors with actionable file splitting remediation recommendations.

## When applied
Applied during file authoring, PR preparation, and build/commit validation whenever source files exceed 300 lines (warning) or 500 lines (error).

## Sub-concepts
none

## Part of
taste-invariants

## Implementation status
defects: other, doc-drift

## Design notes
An architectural guardrail and static threshold enforced in rjm that penalizes oversized files to prevent loss of cohesion and bound agent context consumption during code modification.
