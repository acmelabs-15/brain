---
package: addy
path: external/security-and-hardening.md
type: doc
bytes: 26475
unit: inv-addy-28
aliases: []
memo_inputs:
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/security-and-hardening.md

## Purpose — required, verbatim
> "Hardens code against vulnerabilities. OWASP Top 10 prevention, auth patterns, secrets management, dependency auditing, and a three-tier boundary system for any feature that accepts untrusted data." — external/security-and-hardening.md:5

## Design intent — required
Provides an external web documentation entry point for the `security-and-hardening` skill on the `skills.addy.ie` site, articulating the skill's purpose, installation commands (via `npx skills add`), structural anatomy, triggering conditions, and related review-phase tooling. Without this external landing page, developers discovering or installing the skill package outside git repositories lack a web-accessible summary of security hardening practices (OWASP Top 10 prevention, auth patterns, secrets management, dependency auditing, and the three-tier boundary system), CLI installation commands, and contextual navigation within the Addy agent-skills review phase.

## Phase — required
addy:Review

## Inputs — required
- Trigger condition: "Handling user input, auth, data storage, or external integrations." — external/security-and-hardening.md:5
- Feature boundary: "any feature that accepts untrusted data." — external/security-and-hardening.md:5
- Target skill source link: "skills/security-and-hardening/SKILL.md" — external/security-and-hardening.md:10

## Outputs — required
none

## Invokes — required
- skill security-and-hardening — external/security-and-hardening.md:5
- command /review — external/security-and-hardening.md:12
- skill code-review-and-quality — external/security-and-hardening.md:12
- skill code-simplification — external/security-and-hardening.md:12
- command /code-simplify — external/security-and-hardening.md:12
- skill performance-optimization — external/security-and-hardening.md:12
- command /webperf — external/security-and-hardening.md:12
- doc SKILL.md — external/security-and-hardening.md:11
- doc CONTRIBUTING.md — external/security-and-hardening.md:15

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `security-and-hardening` — external/security-and-hardening.md:5 — used here
- `Review phase` — external/security-and-hardening.md:5, 12 — used here
- `/review` — external/security-and-hardening.md:12 — used here
- `OWASP Top 10` — external/security-and-hardening.md:5 — used here
- `auth patterns` — external/security-and-hardening.md:5 — used here
- `secrets management` — external/security-and-hardening.md:5 — used here
- `dependency auditing` — external/security-and-hardening.md:5 — used here
- `three-tier boundary system` — external/security-and-hardening.md:5 — used here
- `untrusted data` — external/security-and-hardening.md:5 — used here
- `skills CLI` — external/security-and-hardening.md:6 — used here
- `anatomy` — external/security-and-hardening.md:9 — defined here
- `Overview` — external/security-and-hardening.md:10 — used here
- `When to Use` — external/security-and-hardening.md:10 — used here
- `Process` — external/security-and-hardening.md:10 — used here
- `Rationalizations` — external/security-and-hardening.md:10 — used here
- `Red Flags` — external/security-and-hardening.md:10 — used here
- `Verification` — external/security-and-hardening.md:10 — used here
- `SKILL.md` — external/security-and-hardening.md:10, 11 — used here
- `code-review-and-quality` — external/security-and-hardening.md:12 — used here
- `Five-axis review` — external/security-and-hardening.md:12 — used here
- `code-simplification` — external/security-and-hardening.md:12 — used here
- `/code-simplify` — external/security-and-hardening.md:12 — used here
- `Chesterton’s Fence` — external/security-and-hardening.md:12 — used here
- `Rule of 500` — external/security-and-hardening.md:12 — used here
- `performance-optimization` — external/security-and-hardening.md:12 — used here
- `/webperf` — external/security-and-hardening.md:12 — used here
- `Measure-first` — external/security-and-hardening.md:12 — used here
- `Core Web Vitals` — external/security-and-hardening.md:12 — used here
- `bundle analysis` — external/security-and-hardening.md:12 — used here
- `N+1 fixes` — external/security-and-hardening.md:12 — used here
- `full lifecycle` — external/security-and-hardening.md:14 — used here
- `The lifecycle` — external/security-and-hardening.md:15 — used here
- `Loop engineering` — external/security-and-hardening.md:15 — used here
- `Evals framework` — external/security-and-hardening.md:15 — used here
- `CONTRIBUTING.md` — external/security-and-hardening.md:15 — used here

## Structure
- "security-and-hardening" — external/security-and-hardening.md:5
- "Install just this skill" — external/security-and-hardening.md:5
- "How this skill is structured" — external/security-and-hardening.md:8
- "Review phase" — external/security-and-hardening.md:12
- "More in the Review phase" — external/security-and-hardening.md:12
- "Product" — external/security-and-hardening.md:15
- "Setup" — external/security-and-hardening.md:15
- "Resources" — external/security-and-hardening.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/security-and-hardening.md:9 · Page asserts "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads" specifying six standardized sections (01 Overview to 06 Verification), but skills/security-and-hardening/SKILL.md implements 16 specialized sections (including The Three-Tier Boundary System, OWASP Top 10 Prevention Patterns, Input Validation Patterns, Triaging Dependency Audit Results, Rate Limiting, Secrets Management, Data Privacy & Compliance, Securing AI / LLM Features, and Security Review Checklist).
- doc-drift · external/security-and-hardening.md:5 · Skill summary specifies triggering condition "Use when Handling user input, auth, data storage, or external integrations", but skills/security-and-hardening/SKILL.md:3 also mandates usage when "building any feature that accepts untrusted data, manages user sessions, or interacts with third-party services. Use when personal data or privacy compliance (GDPR, CCPA) is involved."
- orphan · external/security-and-hardening.md:1 · External documentation snapshot is published on skills.addy.ie but is not linked or referenced by any in-scope repository file.

## Observations
- External documentation web snapshot generated via Astro (`data-astro-cid-*`) representing the public catalog entry at `https://skills.addy.ie/skills/security-and-hardening/`.
- Documents skill installation via the Vercel open `skills` CLI using `npx skills add addyosmani/agent-skills --skill security-and-hardening` (or full pack installation `npx skills add addyosmani/agent-skills`).
- Embeds the skill into the `Review` phase taxonomy alongside sibling skills `code-review-and-quality`, `code-simplification`, and `performance-optimization`.
- Links directly to the `/review` slash command badge and repository skill source on GitHub (`skills/security-and-hardening/SKILL.md`).
- Contains interactive client-side components (clipboard copy buttons for CLI commands, responsive navigation drawer) and telemetry (`netlify-rum-container`).

## Context cost
26,475 bytes (~6,619 tokens). As an external web landing page, it is loaded over HTTP by users or browser agents rather than injected into coding agent conversation windows.
