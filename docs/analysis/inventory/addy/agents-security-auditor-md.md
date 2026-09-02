---
package: addy
path: agents/security-auditor.md
type: agent
bytes: 4992
unit: inv-addy-5
---

# agents/security-auditor.md

## Purpose — required, verbatim
> "Security engineer focused on vulnerability detection, threat modeling, and secure coding practices. Use for security-focused code review, threat analysis, or hardening recommendations." — agents/security-auditor.md:3

## Design intent — required
Specialized subagent persona for vulnerability detection, practical threat modeling, and secure coding review across 6 core domains (Input Handling, Auth/Authz, Data Protection, Infrastructure, Third-Party Integrations, AI/LLM Features). Enforces focus on exploitable vulnerabilities rather than theoretical risks, mandates proof-of-concept / exploitation scenarios for Critical and High findings, requires STRIDE-based reasoning from trust boundaries, forbids advising disabling security controls as a fix, and serves as an independent parallel reviewer in the pre-launch `/ship` fan-out pipeline.

## Phase — required
`addy:Ship` (and `addy:Review` for direct security-focused passes)

## Inputs — required
- Code diff, modified files, or system component under review
- Threat models, auth/authz configurations, endpoint definitions, third-party integrations, AI/LLM feature code, dependency manifests

## Outputs — required
- Security Audit Report (Summary with counts of Critical, High, Medium, Low; Findings with Location, Description, Impact, Proof of concept, Recommendation; Positive Observations; Recommendations) — agents/security-auditor.md:70-95

## Invokes — required
- doc docs/agents.md — agents/security-auditor.md:112

## Invoked by — required
- .claude/commands/ship.md:16, 26, 62
- commands/ship.toml:15, 25, 32, 61
- docs/agents.md:8, 30, 44, 65, 110
- CLAUDE.md:11
- AGENTS.md:80
- README.md:294
- docs/getting-started.md:100
- docs/antigravity-setup.md:97
- docs/copilot-setup.md:32, 38, 85
- references/orchestration-patterns.md:23, 54, 123, 137, 160, 166, 230, 247, 304
- agents/code-reviewer.md:101, 102
- agents/test-engineer.md:94
- docs/comparison.md:54, 98

## Concepts named — required, verbatim
- `security-auditor` — agents/security-auditor.md:2, 110 — defined here
- `Security Engineer` — agents/security-auditor.md:8 — defined here
- `Security Auditor` — agents/security-auditor.md:6 — defined here
- `Review Scope` — agents/security-auditor.md:10 — defined here
- `Input Handling` — agents/security-auditor.md:12 — defined here
- `Authentication & Authorization` — agents/security-auditor.md:19 — defined here
- `Data Protection` — agents/security-auditor.md:27 — defined here
- `Infrastructure` — agents/security-auditor.md:34 — defined here
- `Third-Party Integrations` — agents/security-auditor.md:41 — defined here
- `AI / LLM Features` — agents/security-auditor.md:48 — defined here
- `injection vectors` — agents/security-auditor.md:14 — used here
- `SQL` — agents/security-auditor.md:14, 49 — used here
- `NoSQL` — agents/security-auditor.md:14 — used here
- `OS command` — agents/security-auditor.md:14 — used here
- `LDAP` — agents/security-auditor.md:14 — used here
- `XSS` — agents/security-auditor.md:15 — used here
- `IDOR` — agents/security-auditor.md:23 — used here
- `bcrypt` — agents/security-auditor.md:20 — used here
- `scrypt` — agents/security-auditor.md:20 — used here
- `argon2` — agents/security-auditor.md:20 — used here
- `PII` — agents/security-auditor.md:31 — used here
- `CSP` — agents/security-auditor.md:35 — used here
- `HSTS` — agents/security-auditor.md:35 — used here
- `X-Frame-Options` — agents/security-auditor.md:35 — used here
- `CORS` — agents/security-auditor.md:36 — used here
- `PKCE` — agents/security-auditor.md:45 — used here
- `SSRF` — agents/security-auditor.md:46 — used here
- `prompt injection` — agents/security-auditor.md:50 — used here
- `excessive agency` — agents/security-auditor.md:52 — used here
- `unbounded consumption` — agents/security-auditor.md:53 — used here
- `OWASP Top 10 for LLM Applications` — agents/security-auditor.md:55 — used here
- `OWASP Top 10` — agents/security-auditor.md:103 — used here
- `LLM Top 10` — agents/security-auditor.md:103 — used here
- `STRIDE` — agents/security-auditor.md:106 — used here
- `Severity Classification` — agents/security-auditor.md:57 — defined here
- `Critical` — agents/security-auditor.md:61, 73, 80, 101 — defined here
- `High` — agents/security-auditor.md:62, 74, 87, 101 — defined here
- `Medium` — agents/security-auditor.md:63, 75 — defined here
- `Low` — agents/security-auditor.md:64, 76 — defined here
- `Info` — agents/security-auditor.md:65 — defined here
- `Security Audit Report` — agents/security-auditor.md:70 — defined here
- `Proof of concept` — agents/security-auditor.md:84, 101 — defined here
- `Positive Observations` — agents/security-auditor.md:90 — defined here
- `Recommendations` — agents/security-auditor.md:93 — defined here
- `trust boundaries` — agents/security-auditor.md:106 — used here
- `CVEs` — agents/security-auditor.md:104 — used here
- `supply-chain risk` — agents/security-auditor.md:104 — used here
- `code-reviewer` — agents/security-auditor.md:111, 112 — used here
- `test-engineer` — agents/security-auditor.md:111 — used here
- `/ship` — agents/security-auditor.md:111 — used here
- `/audit` — agents/security-auditor.md:111 — used here
- `docs/agents.md` — agents/security-auditor.md:112 — used here

## Structure
- `---` (frontmatter: name, description) — agents/security-auditor.md:1-4
- `# Security Auditor` — agents/security-auditor.md:6
- `## Review Scope` — agents/security-auditor.md:10
- `### 1. Input Handling` — agents/security-auditor.md:12
- `### 2. Authentication & Authorization` — agents/security-auditor.md:19
- `### 3. Data Protection` — agents/security-auditor.md:27
- `### 4. Infrastructure` — agents/security-auditor.md:34
- `### 5. Third-Party Integrations` — agents/security-auditor.md:41
- `### 6. AI / LLM Features (if present)` — agents/security-auditor.md:48
- `## Severity Classification` — agents/security-auditor.md:57
- `## Output Format` — agents/security-auditor.md:67
- `### Summary` (in template) — agents/security-auditor.md:72
- `### Findings` (in template) — agents/security-auditor.md:78
- `### Positive Observations` (in template) — agents/security-auditor.md:90
- `### Recommendations` (in template) — agents/security-auditor.md:93
- `## Rules` — agents/security-auditor.md:97
- `## Composition` — agents/security-auditor.md:108

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` / `doc-drift`: Line 111 references "or any future `/audit` command", but no `/audit` command exists in `sources/addy/commands/` or `.claude/commands/`.
- `cross-file-contradiction`: Severity classification (`Critical`, `High`, `Medium`, `Low`, `Info` at lines 59-65) contradicts `code-reviewer.md:51-57` (`Critical`, `Required`, `Optional`, `Nit`) and `.claude/commands/review.md:15` (`Critical`, `Important`, `Suggestion`), although it matches `web-performance-auditor.md:116-122`.

## Observations
- Practical exploitability mandate: Explicitly rejects theoretical nitpicks ("You focus on practical, exploitable issues rather than theoretical risks", line 8) and mandates proof-of-concept / exploit scenarios for Critical and High findings (Rule 3).
- Threat modeling rigor: Mandates starting from trust boundaries and reasoning with STRIDE before enumerating findings (Rule 8).
- Modern AI vulnerability scope: Includes explicit coverage for LLM application vulnerabilities (prompt injection, excessive agency, unbounded consumption, OWASP Top 10 for LLMs).
- Anti-pattern defense: Explicitly forbids advising developers to disable security controls (e.g. disabling CORS or skipping SSL verification) as a fix (Rule 7).

## Context cost
- File size: 4,992 bytes (~1,250 tokens).
- Transitive context cost when loaded alongside `references/security-checklist.md`: ~4,250 tokens (16,873 bytes total).
