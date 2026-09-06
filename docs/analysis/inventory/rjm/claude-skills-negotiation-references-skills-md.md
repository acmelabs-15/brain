---
package: rjm
path: .claude/skills/negotiation/references/skills.md
type: reference
bytes: 11804
unit: inv-rjm-127
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/negotiation/references/skills.md, sha256: ae5055eedea0db85458d74da810803dc4defc1a70e885ad31b738513c4965114}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/negotiation/references/skills.md

## Purpose — required, verbatim
> "Category: Deal Intelligence and Offer Analysis" — .claude/skills/negotiation/references/skills.md:3 (no explicit purpose statement)

## Design intent — required
Comprehensive reference catalog defining 10 crystallized deal intelligence skills and behavioral influence protocols (`Skill-Negotiation-001` through `Skill-Negotiation-010`) for agentic offer evaluation and counter-proposal generation. Solves the problem of sub-optimal deal acceptance, anchoring bias, reactive countering, tactical urgency pressure, and unquantified value leaks by providing rigorous behavioral heuristics and concrete artifacts (e.g. Invisible Disadvantage Check, RADAR protocol sequence, PCP framing pattern, Model Tier Routing rules, written communication signal table, BATNA pre-commitment worksheet, and closing confirmation protocol). It incorporates findings from academic negotiation literature (Fisher & Ury, Cialdini, Galinsky) and empirical AI agent research (Anthropic Project Deal Dec 2025). Without it, agents and human negotiators would rely on unstructured intuition, fall victim to psychological pressure tactics, and fail to quantify uncaptured value.

## Phase — required
cross-phase

## Inputs — required
- Written offer documents, email threads, term sheets, or verbal deal summaries (.claude/skills/negotiation/references/skills.md:8, 122, 146)
- Market data, comparable transaction data, or reservation points (.claude/skills/negotiation/references/skills.md:21, 57, 154)
- Pre-negotiation walkaway terms and non-negotiables (.claude/skills/negotiation/references/skills.md:162, 174)

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill negotiation — .claude/skills/negotiation/SKILL.md:16
- skill negotiation — .claude/skills/negotiation/SKILL.md:48
- skill negotiation — .claude/skills/negotiation/SKILL.md:123

## Concepts named — required, verbatim
- `Skill-Negotiation-001: Always Quantify the Value Gap` — .claude/skills/negotiation/references/skills.md:5 — defined here
- `Skill-Negotiation-002: RADAR Protocol Sequence` — .claude/skills/negotiation/references/skills.md:26 — defined here
- `Skill-Negotiation-003: PCP Framing Before Anchoring` — .claude/skills/negotiation/references/skills.md:45 — defined here
- `Skill-Negotiation-004: Time Control` — .claude/skills/negotiation/references/skills.md:62 — defined here
- `Skill-Negotiation-005: Bundle; Never Trade One Dimension` — .claude/skills/negotiation/references/skills.md:79 — defined here
- `Skill-Negotiation-006: Model Tier Routing for Negotiation Tasks` — .claude/skills/negotiation/references/skills.md:96 — defined here
- `Skill-Negotiation-007: Written Communication Signals` — .claude/skills/negotiation/references/skills.md:119 — defined here
- `Skill-Negotiation-008: Anchor First Only With Information Advantage` — .claude/skills/negotiation/references/skills.md:143 — defined here
- `Skill-Negotiation-009: BATNA Discipline; Pre-Commit the Walkaway` — .claude/skills/negotiation/references/skills.md:160 — defined here
- `Skill-Negotiation-010: Close With Specificity; Reduce Buyer Remorse` — .claude/skills/negotiation/references/skills.md:183 — defined here
- `INVISIBLE DISADVANTAGE CHECK` — .claude/skills/negotiation/references/skills.md:17 — defined here
- `RADAR` — .claude/skills/negotiation/references/skills.md:26 — defined here
- `ZOPA` — .claude/skills/negotiation/references/skills.md:31 — used here
- `BATNA` — .claude/skills/negotiation/references/skills.md:38 — used here
- `PCP framing` — .claude/skills/negotiation/references/skills.md:39 — used here
- `Time Control` — .claude/skills/negotiation/references/skills.md:62 — defined here
- `BATNA WORKSHEET` — .claude/skills/negotiation/references/skills.md:172 — defined here
- `Anthropic Project Deal` — .claude/skills/negotiation/references/skills.md:10 — used here

## Structure
- `# Negotiation Agent Skills` — .claude/skills/negotiation/references/skills.md:1
- `## Skill-Negotiation-001: Always Quantify the Value Gap` — .claude/skills/negotiation/references/skills.md:5
- `## Skill-Negotiation-002: RADAR Protocol Sequence` — .claude/skills/negotiation/references/skills.md:26
- `## Skill-Negotiation-003: PCP Framing Before Anchoring` — .claude/skills/negotiation/references/skills.md:45
- `## Skill-Negotiation-004: Time Control` — .claude/skills/negotiation/references/skills.md:62
- `## Skill-Negotiation-005: Bundle; Never Trade One Dimension` — .claude/skills/negotiation/references/skills.md:79
- `## Skill-Negotiation-006: Model Tier Routing for Negotiation Tasks` — .claude/skills/negotiation/references/skills.md:96
- `## Skill-Negotiation-007: Written Communication Signals` — .claude/skills/negotiation/references/skills.md:119
- `## Skill-Negotiation-008: Anchor First Only With Information Advantage` — .claude/skills/negotiation/references/skills.md:143
- `## Skill-Negotiation-009: BATNA Discipline; Pre-Commit the Walkaway` — .claude/skills/negotiation/references/skills.md:160
- `## Skill-Negotiation-010: Close With Specificity; Reduce Buyer Remorse` — .claude/skills/negotiation/references/skills.md:183
- `## References` — .claude/skills/negotiation/references/skills.md:202

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Empirically grounded in agent research: Cites findings from "Anthropic Project Deal (Dec 2025)" regarding the significant per-item value gap between senior (Opus) and junior (Haiku) models in multi-agent deal-making, noting that participants with weaker agents rated satisfaction identically despite objectively worse financial outcomes.
- Formulates behavioral rules with explicit "Atomicity" metrics (ranging from 78% to 95%) and standardized structured templates (e.g. Invisible Disadvantage Check at line 16, BATNA Worksheet at line 171).
- Provides an adapted written-communication signal table (Skill-Negotiation-007) translating nonverbal comfort/discomfort indicators into text features (qualifiers, sentence clipping, formality shifts, unprompted alternatives).

## Context cost
11804 bytes (~2951 tokens). Standalone reference markdown document.
