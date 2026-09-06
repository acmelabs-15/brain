---
package: addy
name: five-axis review
slug: five-axis-review
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
  - {path: commands/ship.toml, sha256: a067c5c4ea484609ceb530b908c7fb707f184abae839826012ddca653517c1c5}
  - {path: docs/adoption-guide.md, sha256: d36695c393ebad379282c090b13f44a7a851ca0ec7c9453883e2fa3307924495}
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# five-axis review

## Definition — verbatim
> "Every review evaluates code across these dimensions:" — skills/code-review-and-quality/SKILL.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/ship.toml | 14 | applies | Review framework executed by code-reviewer subagent on staged changes |
| commands/ship.toml | 14 | applies | Review framework executed by code-reviewer subagent on staged changes |
| docs/adoption-guide.md | 82 | applies | Recommends adopting five-axis review on incoming pull requests |
| docs/agents.md | 7 | applies | Identifies five-axis review as the primary methodology of code-reviewer |
| external/performance-optimization.md | 12 | references | Related skills card citing five-axis review for code-review-and-quality |
| external/security-and-hardening.md | 12 | references | Related skills card citing five-axis review for code-review-and-quality |
| skills/code-review-and-quality/SKILL.md | 22 | defines | Section heading detailing five dimensions of code quality evaluation |

## Consumes
Code diff, specification requirements, and test suites.

## Produces
Multi-dimensional evaluation report covering correctness, readability, architecture, security, and performance.

## When applied
Step 2 in the code-review-and-quality skill and as part of `/ship` pre-launch validation.

## Sub-concepts
correctness, readability, architecture, security, performance

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
`five-axis review` is the standardized evaluation rubric used in code reviews and pre-launch checks. It ensures that every code change is assessed comprehensively across correctness, readability, architecture, security, and performance, preventing reviewers from focusing exclusively on superficial syntax or single-faceted concerns.
