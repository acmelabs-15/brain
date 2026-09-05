---
package: rjm
path: .claude/skills/adr-generator/references/ad-quality-frameworks.md
type: reference
bytes: 6876
unit: inv-rjm-76
in_scope_via: .claude/skills/adr-generator/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/adr-generator/references/ad-quality-frameworks.md

## Purpose — required, verbatim
> "Quality frameworks for the full ADR lifecycle, based on Olaf Zimmermann's research (2020-2023)." — .claude/skills/adr-generator/references/ad-quality-frameworks.md:3

## Design intent — required
Provides formal architectural decision quality assessment models synthesizing Olaf Zimmermann's research (2020-2023) across the architectural decision lifecycle. It equips ADR authors and reviewers with objective filtering and evaluation instruments: the 7-criterion ASR (Architectural Significance Requirement) Test to determine if an issue warrants an ADR, the 5-part START checklist as a Definition of Ready (DoR) gating entry to decision-making, and the 5-part ecADR checklist as a Definition of Done (DoD) gating exit from documentation to implementation. It also defines an author pledge, a 7-point review checklist, and detailed anti-pattern catalogs covering subjectivity (Fairy Tale, Sales Pitch, Free Lunch Coupon, Dummy Alternative), time dimension (Sprint/Rush, Tunnel Vision, Maze), size/content (Blueprint/Policy in Disguise, Mega-ADR), magic tricks (False Urgency, Problem-Solution Mismatch, Pseudo-Accuracy), and review pitfalls. Without it, decision records would lack systematic criteria for architectural significance, leading to either under-documentation of critical choices or low-quality, biased records that obscure real trade-offs.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill adr-generator — .claude/skills/adr-generator/SKILL.md:72
- skill adr-generator — .claude/skills/adr-generator/SKILL.md:249
- reference zimmermann-review-guidance.md — .claude/skills/adr-review/references/zimmermann-review-guidance.md:69

## Concepts named — required, verbatim
- `ASR Test` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:5 — defined here
- `Business value/risk` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:11 — defined here
- `Key stakeholder concern` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:12 — defined here
- `Runtime QoS` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:13 — defined here
- `External dependencies` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:14 — defined here
- `Cross-cutting` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:15 — defined here
- `FOAK` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:16 — defined here
- `Past trouble` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:17 — defined here
- `START` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:21 — defined here
- `Definition of Ready` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:21 — defined here
- `Most Responsible Moment` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:28 — used here
- `START Checklist` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:33 — defined here
- `ecADR` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:43 — defined here
- `Definition of Done` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:43 — defined here
- `ecADR Checklist` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:55 — defined here
- `ADR Author Pledge` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:77 — defined here
- `ADR Review Checklist` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:87 — defined here
- `ADR Creation Anti-Patterns` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:99 — defined here
- `Fairy Tale` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:105 — defined here
- `Sales Pitch` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:106 — defined here
- `Free Lunch Coupon` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:107 — defined here
- `Dummy Alternative` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:108 — defined here
- `Sprint/Rush` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:114 — defined here
- `Tunnel Vision` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:115 — defined here
- `Maze` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:116 — defined here
- `Blueprint/Policy in Disguise` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:122 — defined here
- `Mega-ADR` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:123 — defined here
- `False Urgency` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:129 — defined here
- `Problem-Solution Mismatch` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:130 — defined here
- `Pseudo-Accuracy` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:131 — defined here
- `Review Anti-Patterns` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:133 — defined here
- `Pass Through` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:137 — defined here
- `Copy Edit` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:138 — defined here
- `Siding/Dead End` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:139 — defined here
- `Self Promotion` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:140 — defined here
- `Power Game` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:141 — defined here
- `Offended Reaction` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:142 — defined here
- `Groundhog Day` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:143 — defined here

## Structure
- `# AD Quality Frameworks` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:1
- `## ASR Test: Is This Decision Worth an ADR?` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:5
- `## START: Definition of Ready` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:21
- `### START Checklist` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:33
- `## ecADR: Definition of Done` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:43
- `### ecADR Checklist` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:55
- `## How the Frameworks Fit Together` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:65
- `## ADR Author Pledge` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:77
- `## ADR Review Checklist` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:87
- `## ADR Creation Anti-Patterns (Zimmermann)` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:99
- `### Subjectivity` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:101
- `### Time Dimension` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:110
- `### Size and Content` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:118
- `### Magic Tricks` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:125
- `## Review Anti-Patterns` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:133
- `## Sources` — .claude/skills/adr-generator/references/ad-quality-frameworks.md:147

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Synthesizes 4 distinct frameworks by Olaf Zimmermann into an integrated lifecycle pipeline: ASR Test (Filter issues) -> START (Gate In to decision) -> Option selection -> ecADR (Gate Out from documentation).
- Highlights core review principle: "Review like you want to be reviewed." (line 145).

## Context cost
6876 bytes (~1720 tokens). Invokes nothing additional.
