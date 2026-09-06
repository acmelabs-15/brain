---
package: rjm
path: .claude/skills/context-optimizer/references/model-context-doctrine.md
type: reference
bytes: 17556
unit: inv-rjm-105
in_scope_via: .claude/skills/context-optimizer/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/model-context-doctrine.md, sha256: 5a2eaa014a39bd72096176f55872704d4ec5cb4a145785484cf6a615ae5b0be6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/context-optimizer/references/model-context-doctrine.md

## Purpose — required, verbatim
> "Read this before you argue about what belongs in always-on context. It exists so nobody has to re-derive the argument from primary sources every time." — .claude/skills/context-optimizer/references/model-context-doctrine.md:5-6

## Design intent — required
Synthesizes Anthropic's "Context Engineering for Claude 5" (Shihipar) and Vercel's "AGENTS.md outperforms skills in our agent evals" research into a unified doctrine governing always-on prompt budgeting and rule admission. It reconciles an apparent contradiction between Vercel's 100% pass rate for passive context and Anthropic's prompt minimization findings: Vercel measured knowledge injection of post-cutoff Next.js 16 APIs that the model lacked, whereas Shihipar measured behavioral overconstraint from restating principles (SOLID, Clean Code) the model already knows. It defines a 3-part admission test for always-on content (model cannot know it, cannot be retrieved on demand, costly failure), shows that arbitration between principles (tiebreakers) acts as local repo knowledge rather than generic restatement, documents model-specific behavioral levers (Opus 5 prompt minimization vs Sol 5.6 effort tiers), and details the growth and measurement of rjm's ~70KB always-on corpus. Without this document, engineers would repeatedly re-litigate prompt contents, bloating always-on context with redundant guidelines that degrade model performance.

## Phase — required
cross-phase

## Inputs — required
- Anthropic, "Context Engineering for Claude 5", 2026-07-24 (Shihipar) — .claude/skills/context-optimizer/references/model-context-doctrine.md:18
- Vercel, "AGENTS.md outperforms skills in our agent evals", 2026-01-27 (Jude Gao) — .claude/skills/context-optimizer/references/model-context-doctrine.md:53-54
- METR evaluation of GPT-5.6 Sol (2026) — .claude/skills/context-optimizer/references/model-context-doctrine.md:169, 321
- Instruction budget gate output (`scripts/validation/instruction_budget.py`) — .claude/skills/context-optimizer/references/model-context-doctrine.md:188
- Platform generation config (`templates/platforms/copilot-cli.yaml`) — .claude/skills/context-optimizer/references/model-context-doctrine.md:248

## Outputs — required
none

## Invokes — required
- reference rule-audit-procedure.md — .claude/skills/context-optimizer/references/model-context-doctrine.md:107

## Invoked by — required
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:118
- skill slashcommandcreator — .claude/skills/slashcommandcreator/SKILL.md:223
- skill skillforge — .claude/skills/skillforge/SKILL.md:248
- reference rule-audit-procedure.md — .claude/skills/context-optimizer/references/rule-audit-procedure.md:16

## Concepts named — required, verbatim
- `Shihipar` — .claude/skills/context-optimizer/references/model-context-doctrine.md:19 — used here
- `overconstraint` — .claude/skills/context-optimizer/references/model-context-doctrine.md:22 — defined here
- `Progressive disclosure` — .claude/skills/context-optimizer/references/model-context-doctrine.md:31 — used here
- `Passive context` — .claude/skills/context-optimizer/references/model-context-doctrine.md:59 — used here
- `Knowledge injection` — .claude/skills/context-optimizer/references/model-context-doctrine.md:65 — defined here
- `Clean Code` — .claude/skills/context-optimizer/references/model-context-doctrine.md:71 — used here
- `Pragmatic Programmer` — .claude/skills/context-optimizer/references/model-context-doctrine.md:72 — used here
- `SOLID` — .claude/skills/context-optimizer/references/model-context-doctrine.md:72 — used here
- `Admission test` — .claude/skills/context-optimizer/references/model-context-doctrine.md:86 — defined here
- `tiebreaker` — .claude/skills/context-optimizer/references/model-context-doctrine.md:120 — defined here
- `DRY` — .claude/skills/context-optimizer/references/model-context-doctrine.md:122 — used here
- `YAGNI` — .claude/skills/context-optimizer/references/model-context-doctrine.md:122 — used here
- `Claude Opus 5` — .claude/skills/context-optimizer/references/model-context-doctrine.md:150 — used here
- `Prompt minimization` — .claude/skills/context-optimizer/references/model-context-doctrine.md:152 — defined here
- `GPT-5.6 Sol` — .claude/skills/context-optimizer/references/model-context-doctrine.md:155 — used here
- `effort tier` — .claude/skills/context-optimizer/references/model-context-doctrine.md:164 — defined here
- `METR` — .claude/skills/context-optimizer/references/model-context-doctrine.md:169 — used here
- `always-on corpus` — .claude/skills/context-optimizer/references/model-context-doctrine.md:178 — defined here
- `effective context` — .claude/skills/context-optimizer/references/model-context-doctrine.md:179 — defined here
- `Always-on status` — .claude/skills/context-optimizer/references/model-context-doctrine.md:227 — defined here

## Structure
- # Model Context Doctrine
- ## Why this document exists
- ## The doctrine
- ### What is not vendor-sanctioned
- ## The result that looks like a contradiction
- ## The admission test
- ### Arbitration is not restatement
- ## Per-model levers
- ### Claude Opus 5
- ### GPT-5.6 Sol
- ## Where this repo stands
- ## The 8KB story, so nobody re-investigates
- ## Updating this document
- ## Sources

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Resolves the tension between Vercel's passive-context findings and Anthropic's system prompt minimization by identifying the core distinction between injecting unlearned knowledge vs restating pre-trained behavioral constraints.
- Formulates a 3-part gate for always-on placement: (1) model cannot know it, (2) cannot be retrieved on demand, and (3) costly failure mode.
- Hypothesizes and empirically demonstrates that "arbitration" between competing principles (e.g. prioritizing DRY over YAGNI) provides actionable local policy that models cannot infer, unlike redundant restatements of principles.
- Details the budget ceiling ratchet vulnerability: CI checks verified adherence to constants in `instruction_budget_constants.py`, but those constants were bumped alongside measured growth, expanding from 4.5KB to over 70KB always-on context.
- Discovers a generator failure mode where `generate_rules.py` stripped internal path globs for external plugin trees, causing path-scoped rules to silently expand to universal `applyTo: "**"` always-on rules in consumer installations.

## Context cost
17556 bytes (326 lines), approximately 4400 tokens. When following invoked references (`rule-audit-procedure.md`, `rule-audit-instrument.md`, `rule-audit-evidence.md`), total transitive context reaches ~82KB (~20500 tokens).
