---
package: rjm
name: Analysis Framework
slug: analysis-framework
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
  - {path: .claude/agents/type-design-analyzer.md, sha256: c7df006d7ae08ed703b47924db90819e8eb288d7bef81c9f6386781f8f43b4b3}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
  - {path: templates/agents/type-design-analyzer.shared.md, sha256: 45e5c07a21cf4d2d42f18452b07878272598bcc2a5ade37c490d32d85b325074}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Analysis Framework

## Definition — verbatim
(used, not defined)

> "Look at the situation with:" — .claude/agents/high-level-advisor.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/high-level-advisor.md | 110 | defined here | Section heading introducing strategic analysis lenses for evaluating complex situations. |
| .claude/agents/independent-thinker.md | 158 | defined here | Section heading detailing assumption challenging templates and inquiry steps. |
| .claude/agents/type-design-analyzer.md | 17 | defined here | Section heading outlining structured analysis steps for software type designs. |
| templates/agents/high-level-advisor.shared.md | 90 | defined here | Shared section heading detailing strategic analysis lenses. |
| templates/agents/independent-thinker.shared.md | 131 | defined here | Shared section heading detailing assumption challenge workflows. |
| templates/agents/type-design-analyzer.shared.md | 27 | defined here | Shared section heading outlining type design analysis steps. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, other

## Design notes
Analysis Framework is a standardized markdown section heading across specialist agent definitions specifying diagnostic steps and analytic lenses, classified as kind: name-only per D-023.
