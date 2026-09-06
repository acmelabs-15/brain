---
package: rjm
path: docs/spec-quality/hedge-phrases.md
type: doc
bytes: 9252
unit: inv-rjm-193
in_scope_via: .claude/commands/spec.md
aliases: []
memo_inputs:
  - {path: docs/spec-quality/hedge-phrases.md, sha256: 6c4f3bb4682ea4dd9beb248236205588a15cff8ed663225de1b26fea8127b8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/spec-quality/hedge-phrases.md

## Purpose — required, verbatim
> "A reusable reference for spec-quality gates. The `/spec` command runs a Step 0 First Principles Gate before it lets a change proceed to requirements. One of the gate's blocking checks scans the author's six answers for hedge phrases: vague, aspirational, or speculative language that masks the absence of a concrete demand signal. An answer that hedges fails the gate and the spec does not proceed." — docs/spec-quality/hedge-phrases.md:3-7

## Design intent — required
Public reference specification and audit mirror for the Step 0 First Principles Gate implemented in `/spec`. Publishes the 21-phrase blocklist of speculative, aspirational, or unverified terms that prevent ungrounded change proposals, explains regex word-boundary matching rules, details RFC 2119 requirement keyword exemptions (`should`, `might`, `could`) and technical suffix exemptions (`eventually consistent`), and provides full provenance mapping each phrase to REQ-016 and historical incident retrospectives.

## Phase — required
rjm:spec

## Inputs — required
- "author's six answers" — docs/spec-quality/hedge-phrases.md:5
- ".claude/commands/spec.md" — docs/spec-quality/hedge-phrases.md:17
- "tests/commands/step0_parser.py" — docs/spec-quality/hedge-phrases.md:20
- ".agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md" — docs/spec-quality/hedge-phrases.md:118

## Outputs — required
- "The 21-phrase blocklist" — docs/spec-quality/hedge-phrases.md:39
- "HEDGE_TECHNICAL_SUFFIXES" — docs/spec-quality/hedge-phrases.md:83

## Invokes — required
- command spec — docs/spec-quality/hedge-phrases.md:3
- script step0_parser.py — docs/spec-quality/hedge-phrases.md:20
- doc REQ-016-spec-step0-first-principles-gate.md — docs/spec-quality/hedge-phrases.md:118
- doc 2025-12-26-prd-planning-workflow.md — docs/spec-quality/hedge-phrases.md:126
- doc 2026-05-05-pr-1887-iteration-paradox.md — docs/spec-quality/hedge-phrases.md:130
- doc 2026-01-03-adr-generation-quality.md — docs/spec-quality/hedge-phrases.md:134
- doc 2025-12-15-documentation-gap.md — docs/spec-quality/hedge-phrases.md:138

## Invoked by — required
- reference spec-step0-gates.md — .claude/skills/spec-generator/references/spec-step0-gates.md:3

## Concepts named — required, verbatim
- `Step 0 Hedge-Phrase Blocklist` — docs/spec-quality/hedge-phrases.md:1 — defined here
- `Step 0 First Principles Gate` — docs/spec-quality/hedge-phrases.md:3-4 — used here
- `hedge phrases` — docs/spec-quality/hedge-phrases.md:5 — defined here
- `HEDGE_TECHNICAL_SUFFIXES` — docs/spec-quality/hedge-phrases.md:21 — used here
- `The 21-phrase blocklist` — docs/spec-quality/hedge-phrases.md:39 — defined here
- `RFC 2119 non-hedge exemptions` — docs/spec-quality/hedge-phrases.md:67 — defined here
- `Technical-suffix exemption table` — docs/spec-quality/hedge-phrases.md:75 — defined here
- `eventually consistent` — docs/spec-quality/hedge-phrases.md:88 — defined here

## Structure
- # Step 0 Hedge-Phrase Blocklist — docs/spec-quality/hedge-phrases.md:1
- ## Canonical source — docs/spec-quality/hedge-phrases.md:13
- ## How the match works — docs/spec-quality/hedge-phrases.md:28
- ## The 21-phrase blocklist — docs/spec-quality/hedge-phrases.md:39
- ## RFC 2119 non-hedge exemptions — docs/spec-quality/hedge-phrases.md:67
- ## Technical-suffix exemption table — docs/spec-quality/hedge-phrases.md:75
- ## How to extend the list — docs/spec-quality/hedge-phrases.md:95
- ## Source attribution — docs/spec-quality/hedge-phrases.md:110
- ## References — docs/spec-quality/hedge-phrases.md:140

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Functions as a public reference mirror of the Step 0 gate table defined canonically in `.claude/commands/spec.md`. The design prevents false positives on RFC 2119 requirement words (`should`, `might`, `could`) and distributed system concepts (`eventually consistent`) while strictly enforcing demand validation before specifications proceed.

## Context cost
9252 bytes, approximately 2300 tokens.
