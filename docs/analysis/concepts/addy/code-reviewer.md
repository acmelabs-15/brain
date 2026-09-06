---
package: addy
name: code-reviewer
slug: code-reviewer
kind: role
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: commands/ship.toml, sha256: a067c5c4ea484609ceb530b908c7fb707f184abae839826012ddca653517c1c5}
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# code-reviewer

## Definition — verbatim
> "Senior code reviewer that evaluates changes across five dimensions — correctness, readability, architecture, security, and performance." — agents/code-reviewer.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/ship.toml | 10 | references | Specialist persona tool dispatched concurrently during pre-launch review |
| commands/ship.toml | 10 | references | Specialist persona tool dispatched concurrently during pre-launch review |
| docs/agents.md | 7 | defines | Agent roster entry documenting Senior Staff Engineer role and five-axis review |
| README.md | 292 | applies | Catalog table listing code-reviewer persona and approval standard |
| skills/doubt-driven-development/SKILL.md | 110 | references | Cites code-reviewer persona when discussing overriding default balanced feedback |

## Consumes
Code diff, specification requirements, and codebase conventions.

## Produces
Five-axis review report with categorized findings and an explicit approval verdict.

## When applied
Invoked directly for thorough PR reviews or dispatched via `/ship` pre-launch orchestration.

## Sub-concepts
five-axis-review, five-axis-code-review

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
`code-reviewer` is an autonomous specialist subagent modeled as an experienced Senior Staff Engineer. Operating with isolated context, it evaluates code changes against rigorous quality bars across correctness, readability, architecture, security, and performance, delivering structured, actionable feedback and explicit merge verdicts.
