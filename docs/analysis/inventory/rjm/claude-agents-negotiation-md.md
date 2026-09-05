---
package: rjm
path: .claude/agents/negotiation.md
type: agent
bytes: 7717
unit: inv-rjm-68
in_scope_via: .agents/AGENT-SYSTEM.md
aliases: []
memo_inputs:
  - {path: .claude/agents/negotiation.md, sha256: 1caac2daaa29dde1d3f672383afb71a93b165b4d6f9fb267c62081e03994aff4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/negotiation.md

## Purpose — required, verbatim
> "Negotiation specialist who analyzes offers, drafts counter-proposals, and surfaces deal intelligence using behavioral frameworks and agent-era research findings. Use when reviewing any offer (real estate, compensation, vendor contract, resource allocation) or when you need to detect information asymmetry, anchor manipulation, or value gaps." — .claude/agents/negotiation.md:3

## Design intent — required
A specialized deal intelligence and negotiation support agent designed to evaluate commercial and operational offers (e.g. compensation, vendor agreements, real estate, resource allocations). Guided by behavioral science frameworks (ZOPA, BATNA, PCP framing, and Navarro non-verbal/time dynamics) and empirical agent-era deal intelligence findings (Anthropic Project Deal), it counteracts manipulation tactics, exposes information asymmetry, quantifies value gaps in explicit dollar figures, and drafts human-gated counter-proposals. Without it, negotiators risk premature concession, unexamined anchoring manipulation, and invisible value loss.

## Phase — required
rjm:support

## Inputs — required
- Offer text or negotiation scenario description provided via `argument-hint` ("Paste the offer text or describe the negotiation situation") or orchestrator prompt.
- Memory queries for strategic negotiation knowledge and behavioral influence models (`negotiation-zopa-batna`, `pcp-influence-model`, `second-order-thinking`, `project-deal-findings`, `navarro-nonverbal`, `hughes-influence`, `information-asymmetry`).
- Domain-specific reference materials (real estate, compensation leveling, vendor contracts).

## Outputs — required
- Standardized 5-step RADAR analysis report:
  - Step 1 Read, Decode: Anchors, hedging language, urgency language, omissions
  - Step 2 Analyze, Map the Zone: ZOPA, BATNA, Information Asymmetry, quantified Value Gap
  - Step 3 Design, Counter: PCP framing (Perception, Context, Permission), counter structure
  - Step 4 Assess, Invisible Disadvantage Check: Qualitative market standing, quantified value left on table, risks of countering vs. accepting
  - Step 5 Review, Draft for Approval: DRAFT counter-proposal with analysis notes, response scenarios, irreversible terms check, and concessions rationale

## Invokes — required
- reference negotiation-zopa-batna — .claude/agents/negotiation.md:54
- reference pcp-influence-model — .claude/agents/negotiation.md:55
- reference second-order-thinking — .claude/agents/negotiation.md:56
- reference project-deal-findings — .claude/agents/negotiation.md:57
- reference navarro-nonverbal — .claude/agents/negotiation.md:61
- reference hughes-influence — .claude/agents/negotiation.md:62
- reference information-asymmetry — .claude/agents/negotiation.md:63

## Invoked by — required
- agent negotiation — README.md:418
- agent negotiation — docs/agent-catalog.md:34

## Concepts named — required, verbatim
- `Deal Intelligence Specialist` — .claude/agents/negotiation.md:32 — defined here
- `Strategic Knowledge Available` — .claude/agents/negotiation.md:48 — defined here
- `RADAR` — .claude/agents/negotiation.md:65 — defined here
- `Read, Decode` — .claude/agents/negotiation.md:69 — defined here
- `Analyze, Map the Zone` — .claude/agents/negotiation.md:80 — defined here
- `ZOPA` — .claude/agents/negotiation.md:85 — used here
- `BATNA` — .claude/agents/negotiation.md:90 — used here
- `Information Asymmetry` — .claude/agents/negotiation.md:95 — used here
- `Value Gap` — .claude/agents/negotiation.md:99 — defined here
- `Design, Counter` — .claude/agents/negotiation.md:105 — defined here
- `PCP framing` — .claude/agents/negotiation.md:107 — defined here
- `Invisible Disadvantage Check` — .claude/agents/negotiation.md:123 — defined here
- `Project Deal` — .claude/agents/negotiation.md:136 — used here
- `Draft for Approval` — .claude/agents/negotiation.md:143 — defined here
- `Time as Leverage` — .claude/agents/negotiation.md:166 — defined here
- `Detecting Manipulation Patterns` — .claude/agents/negotiation.md:173 — defined here

## Structure
- # Negotiation Agent — .claude/agents/negotiation.md:10
- ## Style Guide Compliance — .claude/agents/negotiation.md:12
- ## Core Identity — .claude/agents/negotiation.md:30
- ## Activation Profile — .claude/agents/negotiation.md:36
- ## Strategic Knowledge Available — .claude/agents/negotiation.md:48
- ## Core Protocol: RADAR — .claude/agents/negotiation.md:65
- ### Step 1: Read, Decode — .claude/agents/negotiation.md:69
- ### Step 2: Analyze, Map the Zone — .claude/agents/negotiation.md:80
- ### Step 3: Design, Counter — .claude/agents/negotiation.md:105
- ### Step 4: Assess, Invisible Disadvantage Check — .claude/agents/negotiation.md:123
- ### Step 5: Review, Draft for Approval — .claude/agents/negotiation.md:143
- ## Time as Leverage — .claude/agents/negotiation.md:166
- ## Detecting Manipulation Patterns — .claude/agents/negotiation.md:173
- ## Domain Knowledge — .claude/agents/negotiation.md:185
- ## Output Requirements — .claude/agents/negotiation.md:195

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Variant relation: shares 95% of distinct lines with `templates/agents/negotiation.shared.md` (ledger V3).
- Incorporates findings from Anthropic Project Deal (Dec 2025) research noting that capability differences between negotiating parties remain invisible unless value gaps are explicitly measured and quantified.
- Strictly mandates human authorization: all proposed counter-proposals are stamped as DRAFT and cannot be transmitted autonomously.

## Context cost
7717 bytes (approx. 1930 tokens).
