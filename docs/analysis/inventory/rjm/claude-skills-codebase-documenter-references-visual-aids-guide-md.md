---
package: rjm
path: .claude/skills/codebase-documenter/references/visual_aids_guide.md
type: reference
bytes: 3229
unit: inv-rjm-103
in_scope_via: .claude/skills/codebase-documenter/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/codebase-documenter/references/visual_aids_guide.md, sha256: 51f928f58f93c32a8d7f109f0f0e4adf9b6f10f33af838b3bbd56873e10785ba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/codebase-documenter/references/visual_aids_guide.md

## Purpose — required, verbatim
> "Visuals exist to reduce ambiguity. If a sentence already says it clearly, a diagram adds noise. Apply the rules below to decide what helps and what does not." — .claude/skills/codebase-documenter/references/visual_aids_guide.md:3

## Design intent — required
Establishes a principled framework for the inclusion, design, and formatting of visual artifacts (diagrams, tables, callout blocks, and formatted code samples) in technical documentation. It mandates that visual aids must earn their keep by strictly reducing cognitive ambiguity—such as when tracking complex multi-party interactions (> 3 relationships) or asynchronous sequence ordering—while actively discouraging decorative diagrams, redundant tables, and 1-2 node trivials. It standardizes Mermaid sequence diagrams, caps table width at 3 to 4 attribute columns, fixes markdown code fence syntax rules to protect parsers, restricts callouts to three canonical types (Note, Warning, Tip), and categorically rejects unsearchable terminal screenshots.

## Phase — required
cross-phase

## Inputs — required
- Technical explanations, system architectures, API workflows, and comparison matrices requiring visual aid or formatting decisions.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill codebase-documenter — .claude/skills/codebase-documenter/SKILL.md:55
- reference documentation_guidelines.md — .claude/skills/codebase-documenter/references/documentation_guidelines.md:61

## Concepts named — required, verbatim
- `Visual Aids Guide` — .claude/skills/codebase-documenter/references/visual_aids_guide.md:1 — defined here
- `When to Use a Diagram` — .claude/skills/codebase-documenter/references/visual_aids_guide.md:5 — defined here
- `Mermaid Sequence Example` — .claude/skills/codebase-documenter/references/visual_aids_guide.md:19 — defined here
- `Tables` — .claude/skills/codebase-documenter/references/visual_aids_guide.md:40 — defined here
- `Comparison Example` — .claude/skills/codebase-documenter/references/visual_aids_guide.md:47 — defined here
- `Code Samples` — .claude/skills/codebase-documenter/references/visual_aids_guide.md:57 — defined here
- `Callouts` — .claude/skills/codebase-documenter/references/visual_aids_guide.md:64 — defined here
- `Anti-Patterns` — .claude/skills/codebase-documenter/references/visual_aids_guide.md:74 — defined here
- `Self-Review` — .claude/skills/codebase-documenter/references/visual_aids_guide.md:84 — defined here

## Structure
- # Visual Aids Guide — .claude/skills/codebase-documenter/references/visual_aids_guide.md:1
- ## When to Use a Diagram — .claude/skills/codebase-documenter/references/visual_aids_guide.md:5
- ## Mermaid Sequence Example — .claude/skills/codebase-documenter/references/visual_aids_guide.md:19
- ## Tables — .claude/skills/codebase-documenter/references/visual_aids_guide.md:40
- ### Comparison Example — .claude/skills/codebase-documenter/references/visual_aids_guide.md:47
- ## Code Samples — .claude/skills/codebase-documenter/references/visual_aids_guide.md:57
- ## Callouts — .claude/skills/codebase-documenter/references/visual_aids_guide.md:64
- ## Anti-Patterns — .claude/skills/codebase-documenter/references/visual_aids_guide.md:74
- ## Self-Review — .claude/skills/codebase-documenter/references/visual_aids_guide.md:84

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Outlaws terminal screenshots as an anti-pattern (line 80), emphasizing that bitmap screenshots cannot be searched, copied, or diffed, and rapidly become stale as CLI UIs evolve.
- Requires bare closing code fences without language tags (line 62) to prevent markdown syntax tree parsing bugs across different renderers.

## Context cost
3229 bytes (approx. 807 tokens).
