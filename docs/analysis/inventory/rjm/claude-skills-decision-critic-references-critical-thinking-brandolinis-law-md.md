---
package: rjm
path: .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md
type: reference
bytes: 3380
unit: inv-rjm-114
in_scope_via: .claude/skills/decision-critic/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md, sha256: 9b965f79cb3d9306372944d26d89fad405b9479e7515201709191307e45bfa21}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md

## Purpose — required, verbatim
> "The energy needed to refute a claim is an order of magnitude larger than the energy needed to produce it." — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:11

## Design intent — required
Provides a framework for allocating cognitive and review scrutiny based on claim asymmetry. In decision critique, confident but unsupported assertions are cheap to author but disproportionately expensive to disprove; without deliberate review burden allocation, reviews fail by reviewer exhaustion or attrition. This reference equips decision critics and reviewers to push the burden of proof back to the author when refutation cost dwarfs authorship cost.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill decision-critic — .claude/skills/decision-critic/SKILL.md:103
- agent critic — .claude/agents/critic.md:84
- agent critic.agent — src/vs-code-agents/critic.agent.md:89
- agent critic — src/claude/critic.md:84
- template critic.shared — templates/agents/critic.shared.md:88
- agent critic.agent — src/copilot-cli/agents/critic.agent.md:88

## Concepts named — required, verbatim
- `Brandolini's Law` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:7 — defined here
- `bullshit asymmetry principle` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:15 — defined here
- `Verification` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:19 — used here
- `Challenge` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:19 — used here
- `review-burden allocation` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:19 — defined here
- `Review Burden Allocation` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:40 — defined here
- `Contrarian Perspectives` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:53 — used here
- `Inversion Analysis` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:59 — used here
- `VERIFIED` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:68 — used here
- `Survivorship Bias` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:77 — used here
- `Falsifiability` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:78 — used here
- `Systems Thinking` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:79 — used here

## Structure
- `# Brandolini's Law` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:7
- `## Principle` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:9
- `## Decision Critic Application` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:17
- `### Verification Questions` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:21
- `### Red Flags in Decisions` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:30
- `### Review Burden Allocation` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:40
- `### Contrarian Perspectives (Step 5)` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:53
- `### Failure Modes (for Inversion Analysis)` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:59
- `## Practical Checklist` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:66
- `## Related Models` — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:75

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:2 · Frontmatter source `wiki/concepts/Critical Thinking/Brandolinis Law.md` does not exist in the repository (`wiki/` directory is absent).

## Observations
- Identifies 5 red flags in decision assertions: "It is obvious that...", walls of assertions without citations, "Trust me, this is faster", accumulation of small claims, and "Prove me wrong" (lines 34-38).
- Proposes structured estimation of authorship effort vs refutation effort (lines 45-49).

## Context cost
3380 bytes (~845 tokens). Invokes nothing additional.
