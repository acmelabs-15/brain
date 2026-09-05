---
package: addy
path: external/security-and-hardening.md
type: external-doc
bytes: 26475
unit: inv-addy-28
deprecated: false
aliases: []
memo_inputs:
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/security-and-hardening.md

## Purpose — required, verbatim
> "Hardens code against vulnerabilities. OWASP Top 10 prevention, auth patterns, secrets management, dependency auditing, and a three-tier boundary system for any feature that accepts untrusted data." — external/security-and-hardening.md:5

## Design intent — required
This documentation page serves as the public catalog entry and reference page for Addy Osmani's `security-and-hardening` skill, published at `skills.addy.ie`. It provides public web discoverability for the skill within the catalog, communicating its core capabilities (OWASP Top 10 prevention, auth patterns, secrets management, dependency auditing, three-tier boundary system), triggering conditions ("Handling user input, auth, data storage, or external integrations."), anatomy structure, CLI installation commands via Vercel's `skills` CLI (`npx skills add`), and placement within the "Review" lifecycle phase alongside `/review`. Without it, developers and agents discovering skills through the public web catalog would lack a high-level overview of security hardening workflows, quick installation commands, lifecycle phase context, and direct navigation to the canonical repository implementation on GitHub.

## Phase — required
addy:Review
> "Review phase" — external/security-and-hardening.md:5

## Inputs — required
none (static HTML documentation page; conceptually describes evaluation applied before merge: "Handling user input, auth, data storage, or external integrations." — external/security-and-hardening.md:5)

## Outputs — required
none (pure reference/documentation page)

## Invokes — required
- skill security-and-hardening — external/security-and-hardening.md:5
- command /review — external/security-and-hardening.md:12
- skill code-review-and-quality — external/security-and-hardening.md:12
- skill code-simplification — external/security-and-hardening.md:12
- command /code-simplify — external/security-and-hardening.md:12
- skill performance-optimization — external/security-and-hardening.md:12
- command /webperf — external/security-and-hardening.md:12

## Invoked by — required
orphan (external web documentation page; not invoked by any in-scope file)

## Concepts named — required, verbatim
- `security-and-hardening` — external/security-and-hardening.md:5 — defined here
- `Review` — external/security-and-hardening.md:5 — used here
- `Review phase` — external/security-and-hardening.md:5 — used here
- `OWASP Top 10` — external/security-and-hardening.md:5 — used here
- `auth patterns` — external/security-and-hardening.md:5 — used here
- `secrets management` — external/security-and-hardening.md:5 — used here
- `dependency auditing` — external/security-and-hardening.md:5 — used here
- `three-tier boundary system` — external/security-and-hardening.md:5 — used here
- `security` — external/security-and-hardening.md:5 — used here
- `hardening` — external/security-and-hardening.md:5 — used here
- `skills CLI` — external/security-and-hardening.md:6 — used here
- `Overview` — external/security-and-hardening.md:10 — used here
- `When to Use` — external/security-and-hardening.md:10 — used here
- `Process` — external/security-and-hardening.md:10 — used here
- `Rationalizations` — external/security-and-hardening.md:10 — used here
- `Red Flags` — external/security-and-hardening.md:10 — used here
- `Verification` — external/security-and-hardening.md:10 — used here
- `gates` — external/security-and-hardening.md:12 — used here
- `/review` — external/security-and-hardening.md:12 — used here
- `lifecycle` — external/security-and-hardening.md:12 — used here
- `code-review-and-quality` — external/security-and-hardening.md:12 — used here
- `five-axis review` — external/security-and-hardening.md:12 — used here
- `code-simplification` — external/security-and-hardening.md:12 — used here
- `Chesterton’s Fence` — external/security-and-hardening.md:12 — used here
- `Rule of 500` — external/security-and-hardening.md:12 — used here
- `/code-simplify` — external/security-and-hardening.md:12 — used here
- `performance-optimization` — external/security-and-hardening.md:12 — used here
- `Measure-first` — external/security-and-hardening.md:12 — used here
- `Core Web Vitals` — external/security-and-hardening.md:12 — used here
- `bundle analysis` — external/security-and-hardening.md:12 — used here
- `N+1 fixes` — external/security-and-hardening.md:12 — used here
- `/webperf` — external/security-and-hardening.md:12 — used here

## Structure
- `security-and-hardening` — external/security-and-hardening.md:5
- `Install just this skill` — external/security-and-hardening.md:5
- `How this skill is structured` — external/security-and-hardening.md:8
  - `Overview` — external/security-and-hardening.md:10
  - `When to Use` — external/security-and-hardening.md:10
  - `Process` — external/security-and-hardening.md:10
  - `Rationalizations` — external/security-and-hardening.md:10
  - `Red Flags` — external/security-and-hardening.md:10
  - `Verification` — external/security-and-hardening.md:10
- `Review phase` — external/security-and-hardening.md:12
- `More in the Review phase` — external/security-and-hardening.md:12
- `code-review-and-quality` — external/security-and-hardening.md:12
- `code-simplification` — external/security-and-hardening.md:12
- `performance-optimization` — external/security-and-hardening.md:12
- `Product` — external/security-and-hardening.md:15
- `Setup` — external/security-and-hardening.md:15
- `Resources` — external/security-and-hardening.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift: external catalog summary "Hardens code against vulnerabilities. OWASP Top 10 prevention, auth patterns, secrets management, dependency auditing, and a three-tier boundary system for any feature that accepts untrusted data." — external/security-and-hardening.md:5 differs from the in-repo skill description "Hardens code against vulnerabilities. Use when handling user input, authentication, data storage, or external integrations. Use when building any feature that accepts untrusted data, manages user sessions, or interacts with third-party services. Use when personal data or privacy compliance (GDPR, CCPA) is involved." — skills/security-and-hardening/SKILL.md:3. The web catalog emphasizes technical hardening mechanisms while the repository skill frontmatter emphasizes triggering conditions and regulatory compliance scopes.
- doc-drift: external page asserts a 6-part skill anatomy ("Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/security-and-hardening.md:9) whereas skills/security-and-hardening/SKILL.md implements 12 distinct top-level markdown sections including specialized modules for "Process: Threat Model First" — skills/security-and-hardening/SKILL.md:21, "The Three-Tier Boundary System" — skills/security-and-hardening/SKILL.md:42, "OWASP Top 10 Prevention Patterns" — skills/security-and-hardening/SKILL.md:75, "Input Validation Patterns" — skills/security-and-hardening/SKILL.md:222, "Triaging Dependency Audit Results" — skills/security-and-hardening/SKILL.md:272, "Rate Limiting" — skills/security-and-hardening/SKILL.md:312, "Secrets Management" — skills/security-and-hardening/SKILL.md:332, "Data Privacy & Compliance" — skills/security-and-hardening/SKILL.md:356, "Securing AI / LLM Features" — skills/security-and-hardening/SKILL.md:377, and "Security Review Checklist" — skills/security-and-hardening/SKILL.md:405.
- orphan: "https://skills.addy.ie/skills/security-and-hardening/" — external/security-and-hardening.md:1 — this external documentation snapshot is not referenced or invoked by any file in the source repository.

## Observations
- The page is built using Astro (`data-astro-cid-*`) and rendered as static HTML with embedded Netlify RUM analytics (`data-netlify-rum-site-id`).
- Provides direct copyable commands for the Vercel-labs `skills` CLI: "npx skills add addyosmani/agent-skills --skill security-and-hardening" — external/security-and-hardening.md:8 and "npx skills add addyosmani/agent-skills" — external/security-and-hardening.md:8.
- Explicitly links to the GitHub repository source file: "https://github.com/addyosmani/agent-skills/blob/main/skills/security-and-hardening/SKILL.md" — external/security-and-hardening.md:10.
- Categorizes `security-and-hardening` alongside `code-review-and-quality`, `code-simplification`, and `performance-optimization` within the `Review` phase associated with slash command `/review`: "Review phase" — external/security-and-hardening.md:5, "Command" — external/security-and-hardening.md:12, and "/review" — external/security-and-hardening.md:12.

## Context cost
26475 bytes (~6619 tokens at 4 bytes/token). Follows 0 invoked files. Total: 26475 bytes (~6619 tokens).
