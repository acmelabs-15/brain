---
package: addy
path: skills/security-and-hardening/SKILL.md
type: skill
bytes: 24192
unit: inv-addy-17
---

# skills/security-and-hardening/SKILL.md

## Purpose — required, verbatim
> "Security-first development practices for web applications. Treat every external input as hostile, every secret as sacred, and every authorization check as mandatory. Security isn't a phase — it's a constraint on every line of code that touches user data, authentication, or external systems." — skills/security-and-hardening/SKILL.md:10

## Design intent — required
Establishes an authoritative security engineering framework and defensive programming constraint set across the web application lifecycle, centering on the axiom that "security isn't a phase" but a continuous architectural constraint. It enforces a "threat model first" methodology (mapping trust boundaries, assets, STRIDE threat analysis, and authoring abuse cases alongside use cases) before implementation begins. It structures operations through a strict three-tier boundary system (Always Do, Ask First, Never Do), concrete OWASP Top 10 prevention implementations (parameterized queries, bcrypt/scrypt/argon2 password hashing, secure cookie flags, contextual auto-escaping, resource ownership checks, helmet CSP/CORS headers, and unicast IP filtering against SSRF), supply-chain hygiene with reachability-based dependency audit triaging (blocking install scripts and rejecting automatic forced fixes), comprehensive data privacy engineering (data classification, retention TTLs, and findable/erasable data-subject deletion pipelines for GDPR/CCPA), and defenses against OWASP 2025 LLM application risks (treating prompt injection as untrusted input, parsing model outputs defensively via Zod, and scoping agent tool permissions). Without it, autonomous coding agents routinely introduce high-severity vulnerabilities, blindly trust untrusted inputs or model outputs, leak secrets into repositories or logs, and treat compliance and privacy as unmaintainable post-hoc additions.

## Phase — required
addy:Review

## Inputs — required
- Codebase accepting untrusted user input, managing authentication/authorization, handling file uploads, storing sensitive/personal data, or making external API/webhook requests (`skills/security-and-hardening/SKILL.md:14-20, 25`)
- Architecture/design models specifying trust boundaries, assets, and data flows (`skills/security-and-hardening/SKILL.md:23-40`)
- Dependency manifests and lockfiles at the workspace installation boundary (`skills/security-and-hardening/SKILL.md:53, 301-304`)
- Environment configurations, `.env.example`, `.env`, `.gitignore` (`skills/security-and-hardening/SKILL.md:334-346`)
- Native package manager audit output (`skills/security-and-hardening/SKILL.md:272-290`)
- Standing reference checklists:
  - `../../references/security-checklist.md` (`skills/security-and-hardening/SKILL.md:77, 303, 451`)
- Cross-skill policies:
  - `skills/observability-and-instrumentation/SKILL.md` (`skills/security-and-hardening/SKILL.md:369`)
  - `skills/debugging-and-error-recovery/SKILL.md` (`skills/security-and-hardening/SKILL.md:375`)

## Outputs — required
- Threat model analysis over trust boundaries using STRIDE (`skills/security-and-hardening/SKILL.md:25-37`)
- Abuse cases paired with use cases as automated test specifications (`skills/security-and-hardening/SKILL.md:38`)
- Defensive code implementations across boundaries:
  - Parameterized database queries (`skills/security-and-hardening/SKILL.md:86-89`)
  - Password hashing and secure session configuration (`skills/security-and-hardening/SKILL.md:95-113`)
  - Contextual output encoding and sanitization (`skills/security-and-hardening/SKILL.md:123-127`)
  - Resource ownership authorization checks (`skills/security-and-hardening/SKILL.md:134-147`)
  - HTTP security headers and CORS configurations (`skills/security-and-hardening/SKILL.md:154-173`)
  - Safe URL assertion mechanism against SSRF with unicast DNS filtering (`skills/security-and-hardening/SKILL.md:203-216`)
  - Strict schema validation at API boundaries using Zod (`skills/security-and-hardening/SKILL.md:227-252`)
  - File upload MIME type and size validation guards (`skills/security-and-hardening/SKILL.md:258-270`)
  - API and auth endpoint rate limiting configurations (`skills/security-and-hardening/SKILL.md:315-330`)
  - Sanitized public API projections omitting sensitive fields (`skills/security-and-hardening/SKILL.md:179-182`)
  - Defensively parsed and validated LLM output schemas (`skills/security-and-hardening/SKILL.md:394-403`)
- Triage verdicts for package manager dependency audit advisories (`skills/security-and-hardening/SKILL.md:277-290`)
- Data privacy classification table (Non-personal, Personal/PII, Sensitive) with retention limits and deletion paths (`skills/security-and-hardening/SKILL.md:360-374`)
- Completed Security Review Checklist (`skills/security-and-hardening/SKILL.md:405-448`)
- Verification audit results against pre-commit security gates (`skills/security-and-hardening/SKILL.md:485-500`)

## Invokes — required
- reference ../../references/security-checklist.md — skills/security-and-hardening/SKILL.md:77, skills/security-and-hardening/SKILL.md:303, skills/security-and-hardening/SKILL.md:451
- skill skills/observability-and-instrumentation/SKILL.md — skills/security-and-hardening/SKILL.md:369
- skill skills/debugging-and-error-recovery/SKILL.md — skills/security-and-hardening/SKILL.md:375

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:25
- command commands/review.toml — commands/review.toml:11
- command .claude/commands/review.md — .claude/commands/review.md:12
- doc README.md — README.md:270, README.md:369
- skill skills/code-review-and-quality/SKILL.md — skills/code-review-and-quality/SKILL.md:66, skills/code-review-and-quality/SKILL.md:300
- skill skills/constraint-driven-development/SKILL.md — skills/constraint-driven-development/SKILL.md:10, skills/constraint-driven-development/SKILL.md:310
- skill skills/observability-and-instrumentation/SKILL.md — skills/observability-and-instrumentation/SKILL.md:91
- skill skills/source-driven-development/SKILL.md — skills/source-driven-development/SKILL.md:101
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:35, skills/using-agent-skills/SKILL.md:185
- reference references/definition-of-done.md — references/definition-of-done.md:48
- reference references/observability-checklist.md — references/observability-checklist.md:30
- reference references/security-checklist.md — references/security-checklist.md:3
- doc docs/getting-started.md — docs/getting-started.md:63, docs/getting-started.md:135
- doc docs/adoption-guide.md — docs/adoption-guide.md:52, docs/adoption-guide.md:100
- doc docs/cursor-setup.md — docs/cursor-setup.md:161
- doc docs/gemini-cli-setup.md — docs/gemini-cli-setup.md:78
- doc docs/windsurf-setup.md — docs/windsurf-setup.md:47
- config evals/cases/security-and-hardening.json — evals/cases/security-and-hardening.json:2, evals/cases/security-and-hardening.json:35
- config evals/cases/context-engineering.json — evals/cases/context-engineering.json:25
- config evals/cases/documentation-and-adrs.json — evals/cases/documentation-and-adrs.json:25
- config evals/cases/idea-refine.json — evals/cases/idea-refine.json:25
- external-doc sources/addy-external/security-and-hardening.md — sources/addy-external/security-and-hardening.md:1, sources/addy-external/security-and-hardening.md:5, sources/addy-external/security-and-hardening.md:12

## Concepts named — required, verbatim
- `security-and-hardening` — skills/security-and-hardening/SKILL.md:2 — defined here
- `GDPR` — skills/security-and-hardening/SKILL.md:3 — used here
- `CCPA` — skills/security-and-hardening/SKILL.md:3 — used here
- `Security and Hardening` — skills/security-and-hardening/SKILL.md:6 — defined here
- `PII` — skills/security-and-hardening/SKILL.md:19 — used here
- `Threat Model First` — skills/security-and-hardening/SKILL.md:21 — defined here
- `threat model` — skills/security-and-hardening/SKILL.md:23 — defined here
- `trust boundaries` — skills/security-and-hardening/SKILL.md:25 — defined here
- `attack surface` — skills/security-and-hardening/SKILL.md:25 — defined here
- `STRIDE` — skills/security-and-hardening/SKILL.md:27 — defined here
- `Spoofing` — skills/security-and-hardening/SKILL.md:31 — defined here
- `Tampering` — skills/security-and-hardening/SKILL.md:32 — defined here
- `Repudiation` — skills/security-and-hardening/SKILL.md:33 — defined here
- `Information disclosure` — skills/security-and-hardening/SKILL.md:34 — defined here
- `Denial of service` — skills/security-and-hardening/SKILL.md:35 — defined here
- `Elevation of privilege` — skills/security-and-hardening/SKILL.md:36 — defined here
- `abuse cases` — skills/security-and-hardening/SKILL.md:38 — defined here
- `use cases` — skills/security-and-hardening/SKILL.md:38 — used here
- `OWASP` — skills/security-and-hardening/SKILL.md:40 — used here
- `A04: Insecure Design` — skills/security-and-hardening/SKILL.md:40 — used here
- `The Three-Tier Boundary System` — skills/security-and-hardening/SKILL.md:42 — defined here
- `Always Do (No Exceptions)` — skills/security-and-hardening/SKILL.md:44 — defined here
- `XSS` — skills/security-and-hardening/SKILL.md:48 — used here
- `HTTPS` — skills/security-and-hardening/SKILL.md:49 — used here
- `bcrypt` — skills/security-and-hardening/SKILL.md:50 — used here
- `scrypt` — skills/security-and-hardening/SKILL.md:50 — used here
- `argon2` — skills/security-and-hardening/SKILL.md:50 — used here
- `security headers` — skills/security-and-hardening/SKILL.md:51 — defined here
- `CSP` — skills/security-and-hardening/SKILL.md:51 — used here
- `HSTS` — skills/security-and-hardening/SKILL.md:51 — used here
- `X-Frame-Options` — skills/security-and-hardening/SKILL.md:51 — used here
- `X-Content-Type-Options` — skills/security-and-hardening/SKILL.md:51 — used here
- `httpOnly, secure, sameSite cookies` — skills/security-and-hardening/SKILL.md:52 — defined here
- `native audit` — skills/security-and-hardening/SKILL.md:53 — defined here
- `Ask First (Requires Human Approval)` — skills/security-and-hardening/SKILL.md:55 — defined here
- `CORS` — skills/security-and-hardening/SKILL.md:60 — used here
- `rate limiting` — skills/security-and-hardening/SKILL.md:62 — defined here
- `Never Do` — skills/security-and-hardening/SKILL.md:65 — defined here
- `OWASP Top 10 Prevention Patterns` — skills/security-and-hardening/SKILL.md:75 — defined here
- `security-checklist` — skills/security-and-hardening/SKILL.md:77 — used here
- `Injection` — skills/security-and-hardening/SKILL.md:79 — defined here
- `SQL injection` — skills/security-and-hardening/SKILL.md:82 — defined here
- `NoSQL` — skills/security-and-hardening/SKILL.md:79 — used here
- `OS Command` — skills/security-and-hardening/SKILL.md:79 — used here
- `Parameterized query` — skills/security-and-hardening/SKILL.md:86 — defined here
- `Broken Authentication` — skills/security-and-hardening/SKILL.md:92 — defined here
- `Password hashing` — skills/security-and-hardening/SKILL.md:95 — defined here
- `Session management` — skills/security-and-hardening/SKILL.md:102 — defined here
- `CSRF` — skills/security-and-hardening/SKILL.md:110 — used here
- `Cross-Site Scripting (XSS)` — skills/security-and-hardening/SKILL.md:116 — defined here
- `auto-escaping` — skills/security-and-hardening/SKILL.md:122 — used here
- `DOMPurify` — skills/security-and-hardening/SKILL.md:126 — used here
- `Broken Access Control` — skills/security-and-hardening/SKILL.md:130 — defined here
- `Security Misconfiguration` — skills/security-and-hardening/SKILL.md:150 — defined here
- `helmet` — skills/security-and-hardening/SKILL.md:154 — used here
- `Content Security Policy` — skills/security-and-hardening/SKILL.md:157 — defined here
- `Sensitive Data Exposure` — skills/security-and-hardening/SKILL.md:175 — defined here
- `Server-Side Request Forgery (SSRF)` — skills/security-and-hardening/SKILL.md:189 — defined here
- `TOCTOU gap` — skills/security-and-hardening/SKILL.md:220 — defined here
- `DNS rebinding` — skills/security-and-hardening/SKILL.md:220 — used here
- `Input Validation Patterns` — skills/security-and-hardening/SKILL.md:222 — defined here
- `Schema Validation at Boundaries` — skills/security-and-hardening/SKILL.md:224 — defined here
- `Zod` — skills/security-and-hardening/SKILL.md:227 — used here
- `File Upload Safety` — skills/security-and-hardening/SKILL.md:254 — defined here
- `magic bytes` — skills/security-and-hardening/SKILL.md:268 — used here
- `Triaging Dependency Audit Results` — skills/security-and-hardening/SKILL.md:272 — defined here
- `Supply-Chain Hygiene` — skills/security-and-hardening/SKILL.md:299 — defined here
- `installation boundary` — skills/security-and-hardening/SKILL.md:301 — defined here
- `frozen/immutable install` — skills/security-and-hardening/SKILL.md:304 — defined here
- `A06` — skills/security-and-hardening/SKILL.md:310 — used here
- `LLM03` — skills/security-and-hardening/SKILL.md:310 — used here
- `typosquatting` — skills/security-and-hardening/SKILL.md:310 — used here
- `Rate Limiting` — skills/security-and-hardening/SKILL.md:312 — defined here
- `Secrets Management` — skills/security-and-hardening/SKILL.md:332 — defined here
- `secret rotation` — skills/security-and-hardening/SKILL.md:354 — defined here
- `Data Privacy & Compliance` — skills/security-and-hardening/SKILL.md:356 — defined here
- `data classification` — skills/security-and-hardening/SKILL.md:360 — defined here
- `Non-personal` — skills/security-and-hardening/SKILL.md:364 — defined here
- `Personal (PII)` — skills/security-and-hardening/SKILL.md:365 — defined here
- `Sensitive` — skills/security-and-hardening/SKILL.md:366 — defined here
- `observability-and-instrumentation` — skills/security-and-hardening/SKILL.md:369 — used here
- `retention limit` — skills/security-and-hardening/SKILL.md:370 — defined here
- `data-subject rights` — skills/security-and-hardening/SKILL.md:371 — defined here
- `consent` — skills/security-and-hardening/SKILL.md:372 — defined here
- `data-processing agreement` — skills/security-and-hardening/SKILL.md:372 — defined here
- `data-residency` — skills/security-and-hardening/SKILL.md:373 — defined here
- `debugging-and-error-recovery` — skills/security-and-hardening/SKILL.md:375 — used here
- `Securing AI / LLM Features` — skills/security-and-hardening/SKILL.md:377 — defined here
- `OWASP Top 10 for LLM Applications (2025)` — skills/security-and-hardening/SKILL.md:379 — used here
- `LLM05: Improper Output Handling` — skills/security-and-hardening/SKILL.md:381 — used here
- `LLM01: Prompt Injection` — skills/security-and-hardening/SKILL.md:382 — used here
- `LLM02` — skills/security-and-hardening/SKILL.md:383 — used here
- `LLM07` — skills/security-and-hardening/SKILL.md:383 — used here
- `LLM06: Excessive Agency` — skills/security-and-hardening/SKILL.md:384 — used here
- `LLM10: Unbounded Consumption` — skills/security-and-hardening/SKILL.md:385 — used here
- `LLM08: Vector and Embedding Weaknesses` — skills/security-and-hardening/SKILL.md:386 — used here
- `RAG` — skills/security-and-hardening/SKILL.md:386 — used here
- `Security Review Checklist` — skills/security-and-hardening/SKILL.md:405 — defined here
- `Common Rationalizations` — skills/security-and-hardening/SKILL.md:453 — defined here
- `Red Flags` — skills/security-and-hardening/SKILL.md:469 — defined here
- `Verification` — skills/security-and-hardening/SKILL.md:485 — defined here

## Structure
- Security and Hardening (line 6)
- Overview (line 8)
- When to Use (line 12)
- Process: Threat Model First (line 21)
- The Three-Tier Boundary System (line 42)
  - Always Do (No Exceptions) (line 44)
  - Ask First (Requires Human Approval) (line 55)
  - Never Do (line 65)
- OWASP Top 10 Prevention Patterns (line 75)
  - Injection (SQL, NoSQL, OS Command) (line 79)
  - Broken Authentication (line 92)
  - Cross-Site Scripting (XSS) (line 116)
  - Broken Access Control (line 130)
  - Security Misconfiguration (line 150)
  - Sensitive Data Exposure (line 175)
  - Server-Side Request Forgery (SSRF) (line 189)
- Input Validation Patterns (line 222)
  - Schema Validation at Boundaries (line 224)
  - File Upload Safety (line 254)
- Triaging Dependency Audit Results (line 272)
  - Supply-Chain Hygiene (line 299)
- Rate Limiting (line 312)
- Secrets Management (line 332)
- Data Privacy & Compliance (line 356)
- Securing AI / LLM Features (line 377)
- Security Review Checklist (line 405)
- See Also (line 449)
- Common Rationalizations (line 453)
- Red Flags (line 469)
- Verification (line 485)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — sources/addy/AGENTS.md:44 maps the Review phase solely as `- REVIEW → code-review-and-quality`, completely omitting `security-and-hardening` from the primary implicit lifecycle mapping, whereas `sources/addy/CLAUDE.md:25`, `sources/addy/README.md:369`, and `sources/addy-external/security-and-hardening.md:5` explicitly classify `security-and-hardening` in the `Review` phase.
- doc-drift — sources/addy-external/security-and-hardening.md:10 asserts that the skill follows a generic 6-part anatomy (`Overview`, `When to Use`, `Process`, `Rationalizations`, `Red Flags`, `Verification`), omitting its 7 extensive architectural prevention sections (`The Three-Tier Boundary System`, `OWASP Top 10 Prevention Patterns`, `Input Validation Patterns`, `Triaging Dependency Audit Results`, `Rate Limiting`, `Secrets Management`, `Data Privacy & Compliance`, and `Securing AI / LLM Features`).
- doc-drift — commands/review.toml:11 designates `security-and-hardening` as axis 4 of the composite `/review` command, and `sources/addy-external/security-and-hardening.md:5` maps this skill to `Command: /review`, but no dedicated top-level slash command (e.g. `/security`) exists in `sources/addy/commands/`.

## Observations
- Line 10 presents a core philosophical assertion: "Security isn't a phase — it's a constraint on every line of code that touches user data, authentication, or external systems." This creates an intentional conceptual tension with its packaging taxonomy, which places it in `addy:Review`.
- Line 220 explicitly flags a production TOCTOU gap in its own DNS-resolution SSRF protection code example, highlighting that standard `fetch` re-resolves DNS after validation, exposing applications to DNS rebinding unless socket IP-pinning or a request-filtering agent proxy is deployed.
- Lines 272-311 provide a pragmatic decision tree for dependency audits that counters automated alert fatigue by filtering CVEs based on runtime code reachability and deployment context rather than raw CVSS severity scores.
- Lines 356-376 elevate data privacy and GDPR/CCPA data-subject rights (retention TTL, verifiable erasure, consent gating) from legal compliance to concrete engineering and schema design constraints.
- Lines 377-404 incorporate contemporary 2025 OWASP Top 10 for LLM Applications protections (prompt injection, improper output handling, excessive agency, unbounded consumption, vector weaknesses).

## Context cost
24,192 bytes (~6,100 tokens) for SKILL.md alone. When loading the primary referenced checklist `references/security-checklist.md` (11,881 bytes), total combined context is 36,073 bytes (~9,100 tokens).
