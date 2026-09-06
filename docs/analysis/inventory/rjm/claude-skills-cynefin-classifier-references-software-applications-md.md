---
package: rjm
path: .claude/skills/cynefin-classifier/references/software-applications.md
type: reference
bytes: 6427
unit: inv-rjm-113
in_scope_via: .claude/skills/cynefin-classifier/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/references/software-applications.md, sha256: f7e15c1b5144a4af053fd201bf675d5648e67d04787b8e4b24dad09104cdebdc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/cynefin-classifier/references/software-applications.md

## Purpose — required, verbatim
> "Practical applications of the Cynefin Framework for software development teams." — .claude/skills/cynefin-classifier/references/software-applications.md:3

## Design intent — required
Practical translation guide mapping the Cynefin sense-making framework directly into day-to-day software engineering activities. It structures real-world scenarios across requirements and planning, architecture and design, development and debugging, testing, and operations into specific Cynefin domains with actionable approaches. It details high-frequency misclassification traps (e.g. treating flaky tests as Complicated rather than Complex, or active outages as Complex rather than Chaotic), provides ASCII decision trees for triage (bugs, technical decisions, user requests), specifies domain-aligned team practices and quantitative metrics, and integrates Cynefin tagging into Agile rituals (sprint planning, story points with an uncertainty premium, spikes, and domain-variable definitions of done). Without it, engineers and agents would struggle to operationalize abstract Cynefin concepts into concrete software engineering trade-offs and rituals.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill cynefin-classifier — .claude/skills/cynefin-classifier/SKILL.md:367

## Concepts named — required, verbatim
- `Cynefin` — .claude/skills/cynefin-classifier/references/software-applications.md:1 — used here
- `Domain Patterns by Activity` — .claude/skills/cynefin-classifier/references/software-applications.md:5 — defined here
- `Requirements and Planning` — .claude/skills/cynefin-classifier/references/software-applications.md:7 — defined here
- `Architecture and Design` — .claude/skills/cynefin-classifier/references/software-applications.md:17 — defined here
- `Development and Debugging` — .claude/skills/cynefin-classifier/references/software-applications.md:27 — defined here
- `Testing` — .claude/skills/cynefin-classifier/references/software-applications.md:37 — defined here
- `Operations` — .claude/skills/cynefin-classifier/references/software-applications.md:47 — defined here
- `Common Misclassifications` — .claude/skills/cynefin-classifier/references/software-applications.md:57 — defined here
- `Decision Trees` — .claude/skills/cynefin-classifier/references/software-applications.md:91 — defined here
- `Team Practices by Domain` — .claude/skills/cynefin-classifier/references/software-applications.md:128 — defined here
- `Metrics by Domain` — .claude/skills/cynefin-classifier/references/software-applications.md:158 — defined here
- `Integration with Agile` — .claude/skills/cynefin-classifier/references/software-applications.md:184 — defined here
- `Story Classification` — .claude/skills/cynefin-classifier/references/software-applications.md:194 — defined here
- `safe-to-fail experiment culture` — .claude/skills/cynefin-classifier/references/software-applications.md:146 — used here
- `productive failure` — .claude/skills/cynefin-classifier/references/software-applications.md:149 — used here
- `uncertainty premium` — .claude/skills/cynefin-classifier/references/software-applications.md:189 — used here
- `Spikes` — .claude/skills/cynefin-classifier/references/software-applications.md:190 — used here

## Structure
- `## Domain Patterns by Activity` — .claude/skills/cynefin-classifier/references/software-applications.md:5
- `### Requirements and Planning` — .claude/skills/cynefin-classifier/references/software-applications.md:7
- `### Architecture and Design` — .claude/skills/cynefin-classifier/references/software-applications.md:17
- `### Development and Debugging` — .claude/skills/cynefin-classifier/references/software-applications.md:27
- `### Testing` — .claude/skills/cynefin-classifier/references/software-applications.md:37
- `### Operations` — .claude/skills/cynefin-classifier/references/software-applications.md:47
- `## Common Misclassifications` — .claude/skills/cynefin-classifier/references/software-applications.md:57
- `### Architecture Decisions as Complicated` — .claude/skills/cynefin-classifier/references/software-applications.md:59
- `### Debugging as Clear` — .claude/skills/cynefin-classifier/references/software-applications.md:67
- `### Flaky Tests as Complicated` — .claude/skills/cynefin-classifier/references/software-applications.md:75
- `### Outages as Complex` — .claude/skills/cynefin-classifier/references/software-applications.md:83
- `## Decision Trees` — .claude/skills/cynefin-classifier/references/software-applications.md:91
- `### "How Should We Approach This Bug?"` — .claude/skills/cynefin-classifier/references/software-applications.md:93
- `### "How Should We Make This Technical Decision?"` — .claude/skills/cynefin-classifier/references/software-applications.md:105
- `### "How Should We Handle This User Request?"` — .claude/skills/cynefin-classifier/references/software-applications.md:117
- `## Team Practices by Domain` — .claude/skills/cynefin-classifier/references/software-applications.md:128
- `### For Clear Problems` — .claude/skills/cynefin-classifier/references/software-applications.md:130
- `### For Complicated Problems` — .claude/skills/cynefin-classifier/references/software-applications.md:137
- `### For Complex Problems` — .claude/skills/cynefin-classifier/references/software-applications.md:144
- `### For Chaotic Problems` — .claude/skills/cynefin-classifier/references/software-applications.md:151
- `## Metrics by Domain` — .claude/skills/cynefin-classifier/references/software-applications.md:158
- `### Clear Domain Metrics` — .claude/skills/cynefin-classifier/references/software-applications.md:160
- `### Complicated Domain Metrics` — .claude/skills/cynefin-classifier/references/software-applications.md:166
- `### Complex Domain Metrics` — .claude/skills/cynefin-classifier/references/software-applications.md:172
- `### Chaotic Domain Metrics` — .claude/skills/cynefin-classifier/references/software-applications.md:178
- `## Integration with Agile` — .claude/skills/cynefin-classifier/references/software-applications.md:184
- `### Story Classification` — .claude/skills/cynefin-classifier/references/software-applications.md:194

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides ASCII flow decision trees for three common software queries: "How Should We Approach This Bug?", "How Should We Make This Technical Decision?", and "How Should We Handle This User Request?".
- Recommends explicit Cynefin metadata tagging on user stories in sprint planning and story cards (e.g. `[STORY] Improve search relevance / Domain: COMPLEX / Approach: A/B test ranking algorithms`), attaching an uncertainty premium to story points for Complex domain tasks.
- Outlines distinct operational metrics per domain: time to resolution and junior dev self-service rate for Clear; expert utilization and analysis accuracy for Complicated; experiment velocity and pivot frequency for Complex; mean time to stabilize and runbook coverage for Chaotic.

## Context cost
6427 bytes (~1607 tokens). Self-contained reference; invokes no other files.
