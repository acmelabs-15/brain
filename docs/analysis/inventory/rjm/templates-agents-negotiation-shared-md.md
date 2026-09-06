---
package: rjm
path: templates/agents/negotiation.shared.md
type: agent
bytes: 7850
unit: inv-rjm-318
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/negotiation.shared.md

## Purpose — required, verbatim
> "Negotiation specialist who analyzes offers, drafts counter-proposals, and surfaces deal intelligence using behavioral frameworks and agent-era research findings. Use when reviewing any offer (real estate, compensation, vendor contract, resource allocation) or when you need to detect information asymmetry, anchor manipulation, or value gaps." — templates/agents/negotiation.shared.md:4

## Design intent — required
The `negotiation` shared agent template defines an offer analysis and counter-proposal specialist that combines classic behavioral influence frameworks (ZOPA, BATNA, PCP framing, Navarro nonverbal signals) with agent-era deal intelligence research findings (Anthropic Project Deal). It forces quantification of value gaps, mandates that all counter-offers be marked as DRAFT requiring human confirmation before sending, flags irreversible concessions, and neutralizes manipulative negotiation tactics (anchoring, artificial urgency, salami slicing).

## Phase — required
rjm:support

## Inputs — required
- Offer text or description of negotiation situation provided via `argument-hint` ("Paste the offer text or describe the negotiation situation" — templates/agents/negotiation.shared.md:5).
- Strategic memories queried from Serena (`negotiation-zopa-batna`, `pcp-influence-model`, `second-order-thinking`, `project-deal-findings`, `navarro-nonverbal`, `hughes-influence`, `information-asymmetry` — templates/agents/negotiation.shared.md:60-69).
- Domain reference context (real estate, compensation, vendor contracts — templates/agents/negotiation.shared.md:194-196).

## Outputs — required
- RADAR analysis report covering all 5 steps (Read/Decode, Analyze/Map the Zone, Design/Counter, Assess/Invisible Disadvantage Check, Review/Draft for Approval — templates/agents/negotiation.shared.md:75-169).
- Quantified dollar value gaps and ZOPA/BATNA boundaries (templates/agents/negotiation.shared.md:91-109).
- Draft counter-proposals marked DRAFT with analysis notes and response contingencies (templates/agents/negotiation.shared.md:154-169).
- Explicit flags for irreversible deal terms (templates/agents/negotiation.shared.md:167).

## Invokes — required
none

## Invoked by — required
- doc docs/agent-catalog.md — docs/agent-catalog.md:34

## Concepts named — required, verbatim
- `support` — templates/agents/negotiation.shared.md:2 — defined here
- `opus` — templates/agents/negotiation.shared.md:3 — used here
- `Style Guide Compliance` — templates/agents/negotiation.shared.md:18 — used here
- `Text status indicators` — templates/agents/negotiation.shared.md:26 — used here
- `Core Identity` — templates/agents/negotiation.shared.md:36 — defined here
- `Deal Intelligence Specialist` — templates/agents/negotiation.shared.md:38 — defined here
- `Activation Profile` — templates/agents/negotiation.shared.md:42 — defined here
- `Strategic Knowledge Available` — templates/agents/negotiation.shared.md:54 — defined here
- `Negotiation Theory` — templates/agents/negotiation.shared.md:58 — defined here
- `Behavioral Frameworks` — templates/agents/negotiation.shared.md:65 — defined here
- `RADAR` — templates/agents/negotiation.shared.md:71 — defined here
- `ZOPA` — templates/agents/negotiation.shared.md:91 — used here
- `BATNA` — templates/agents/negotiation.shared.md:96 — used here
- `Information Asymmetry` — templates/agents/negotiation.shared.md:101 — defined here
- `Value Gap` — templates/agents/negotiation.shared.md:105 — defined here
- `PCP` — templates/agents/negotiation.shared.md:113 — defined here
- `INVISIBLE DISADVANTAGE CHECK` — templates/agents/negotiation.shared.md:134 — defined here
- `Time as Leverage` — templates/agents/negotiation.shared.md:171 — defined here
- `Detecting Manipulation Patterns` — templates/agents/negotiation.shared.md:178 — defined here
- `Domain Knowledge` — templates/agents/negotiation.shared.md:190 — defined here
- `Output Requirements` — templates/agents/negotiation.shared.md:200 — defined here

## Structure
- # Negotiation Agent — templates/agents/negotiation.shared.md:16
- ## Style Guide Compliance — templates/agents/negotiation.shared.md:18
- ## Core Identity — templates/agents/negotiation.shared.md:36
- ## Activation Profile — templates/agents/negotiation.shared.md:42
- ## Strategic Knowledge Available — templates/agents/negotiation.shared.md:54
- ## Core Protocol: RADAR — templates/agents/negotiation.shared.md:71
- ### Step 1: Read, Decode — templates/agents/negotiation.shared.md:75
- ### Step 2: Analyze, Map the Zone — templates/agents/negotiation.shared.md:86
- ### Step 3: Design, Counter — templates/agents/negotiation.shared.md:111
- ### Step 4: Assess, Invisible Disadvantage Check — templates/agents/negotiation.shared.md:129
- ### Step 5: Review, Draft for Approval — templates/agents/negotiation.shared.md:149
- ## Time as Leverage — templates/agents/negotiation.shared.md:171
- ## Detecting Manipulation Patterns — templates/agents/negotiation.shared.md:178
- ## Domain Knowledge — templates/agents/negotiation.shared.md:190
- ## Output Requirements — templates/agents/negotiation.shared.md:200

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Cites Anthropic Project Deal (Dec 2025) research at line 142 regarding agent negotiation capability asymmetries, treating the qualitative finding ("model capability gap is invisible without explicit quantification") as load-bearing while treating specific dollar values as illustrative.
- Forms VARIANT V3 with `.claude/agents/negotiation.md` (95% shared). Divergence card is at `docs/analysis/inventory/rjm/_divergence/claude-agents-negotiation-md--templates-agents-negotiation-shared-md.md`.
- Strictly gates actionability: counter-offers must always be presented as DRAFT requiring explicit human authorization prior to transmission (`templates/agents/negotiation.shared.md:33`).

## Context cost
7,850 bytes (~1,962 tokens) standalone. Loads no subsidiary files directly.
