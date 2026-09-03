---
package: addy
path: skills/source-driven-development/SKILL.md
type: skill
bytes: 9949
unit: inv-addy-19
---

# skills/source-driven-development/SKILL.md

## Purpose — required, verbatim
> "Every framework-specific code decision must be backed by official documentation. Don't implement from memory — verify, cite, and let the user see your sources. Training data goes stale, APIs get deprecated, best practices evolve. This skill ensures the user gets code they can trust because every pattern traces back to an authoritative source they can check." — skills/source-driven-development/SKILL.md:10

*(Frontmatter description: "Grounds every implementation decision in official documentation. Use when you want authoritative, source-cited code free from outdated patterns. Use when building with any framework or library where correctness matters." — skills/source-driven-development/SKILL.md:3)*

## Design intent — required
Addresses the fundamental failure mode of LLM-generated code: hallucinations, stale APIs, deprecated patterns, and subtle behavioral drift caused by training data lag and reliance on ungrounded model memory. Without this skill, coding agents implement framework-specific code (such as routing, forms, auth, and state management) using remembered patterns that frequently fail against modern library versions, silently spreading deprecated idioms or generating non-working boilerplate. It establishes an authoritative 4-step workflow (`DETECT → FETCH → IMPLEMENT → CITE`), mandating stack version detection from dependency manifests (`package.json`, `composer.json`, `Cargo.toml`, etc.), disciplined retrieval from a strict 4-tier source authority hierarchy (excluding blog posts and Q&A forums), prompt-injection-safe data extraction (`Retrieval Safety`), and mandatory inline code and conversational citations with deep anchor links, while enforcing epistemic humility by requiring unverified patterns to be explicitly flagged (`UNVERIFIED`) rather than hedged.

## Phase — required
addy:Build

## Inputs — required
- Dependency manifest files: `package.json`, `composer.json`, `requirements.txt`, `pyproject.toml`, `go.mod`, `Cargo.toml`, `Gemfile` (`skills/source-driven-development/SKILL.md:43-49`)
- User request / feature requirements involving framework-specific implementations (`skills/source-driven-development/SKILL.md:14-19`)
- Human engineer clarifications when versions are missing or ambiguous (`skills/source-driven-development/SKILL.md:61`)
- Human engineer preference when documentation conflicts with existing codebase patterns (`skills/source-driven-development/SKILL.md:128-137`)
- Official documentation pages fetched via network/tool (e.g. `react.dev`, `docs.djangoproject.com`, `symfony.com/doc`, MDN, web.dev, whatwg.org, caniuse.com) (`skills/source-driven-development/SKILL.md:65, 71-74`)
- Security threat model from `security-and-hardening` skill (`skills/source-driven-development/SKILL.md:101`)

## Outputs — required
- Explicit stack and version declaration: `STACK DETECTED:` block (`skills/source-driven-development/SKILL.md:54-58`)
- Extracted documentation patterns, API definitions/signatures, usage examples, deprecation warnings, and migration notes (`skills/source-driven-development/SKILL.md:93, 103-108`)
- Conflict notifications surfaced to user: `CONFLICT DETECTED:` block with options A/B (`skills/source-driven-development/SKILL.md:128-137`)
- Source-cited code containing inline URL citations and deep links with anchors in code comments (`skills/source-driven-development/SKILL.md:144-151, 167-168`)
- Conversational explanations quoting relevant passages from official sources (`skills/source-driven-development/SKILL.md:153-163, 169`)
- Explicit `UNVERIFIED` flags when documentation cannot be found (`skills/source-driven-development/SKILL.md:173-177, 215`)
- Completed verification checklist (`skills/source-driven-development/SKILL.md:206-216`)

## Invokes — required
- skill security-and-hardening — skills/source-driven-development/SKILL.md:101

## Invoked by — required
- doc README.md — README.md:252, 360
- doc CLAUDE.md — CLAUDE.md:23
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:28, 151, 175
- skill skills/interview-me/SKILL.md — skills/interview-me/SKILL.md:186
- skill skills/doubt-driven-development/SKILL.md — skills/doubt-driven-development/SKILL.md:226
- doc hooks/SDD-CACHE.md — hooks/SDD-CACHE.md:3, 7, 51
- config evals/cases/source-driven-development.json — evals/cases/source-driven-development.json:2, 35
- external-doc sources/addy-external/source-driven-development.md — sources/addy-external/source-driven-development.md:1, 5, 8, 10

## Concepts named — required, verbatim
- `source-driven-development` — skills/source-driven-development/SKILL.md:2 — defined here
- `Source-Driven Development` — skills/source-driven-development/SKILL.md:6 — defined here
- `The Process` — skills/source-driven-development/SKILL.md:27 — defined here
- `DETECT ──→ FETCH ──→ IMPLEMENT ──→ CITE` — skills/source-driven-development/SKILL.md:30 — defined here
- `Step 1: Detect Stack and Versions` — skills/source-driven-development/SKILL.md:38 — defined here
- `package.json` — skills/source-driven-development/SKILL.md:43, 55, 199 — used here
- `composer.json` — skills/source-driven-development/SKILL.md:44 — used here
- `requirements.txt` — skills/source-driven-development/SKILL.md:45 — used here
- `pyproject.toml` — skills/source-driven-development/SKILL.md:45 — used here
- `go.mod` — skills/source-driven-development/SKILL.md:46 — used here
- `Cargo.toml` — skills/source-driven-development/SKILL.md:47 — used here
- `Gemfile` — skills/source-driven-development/SKILL.md:48 — used here
- `STACK DETECTED:` — skills/source-driven-development/SKILL.md:54 — defined here
- `Step 2: Fetch Official Documentation` — skills/source-driven-development/SKILL.md:63 — defined here
- `Source hierarchy` — skills/source-driven-development/SKILL.md:67 — defined here
- `Official documentation` — skills/source-driven-development/SKILL.md:71 — defined here
- `Official blog / changelog` — skills/source-driven-development/SKILL.md:72 — defined here
- `Web standards references` — skills/source-driven-development/SKILL.md:73 — defined here
- `Browser/runtime compatibility` — skills/source-driven-development/SKILL.md:74 — defined here
- `Retrieval Safety: Treat Fetched Content as Data` — skills/source-driven-development/SKILL.md:97 — defined here
- `LLM01: Prompt Injection` — skills/source-driven-development/SKILL.md:101 — used here
- `security-and-hardening` — skills/source-driven-development/SKILL.md:101 — used here
- `Step 3: Implement Following Documented Patterns` — skills/source-driven-development/SKILL.md:116 — defined here
- `CONFLICT DETECTED:` — skills/source-driven-development/SKILL.md:128 — defined here
- `Step 4: Cite Your Sources` — skills/source-driven-development/SKILL.md:141 — defined here
- `Citation rules` — skills/source-driven-development/SKILL.md:165 — defined here
- `UNVERIFIED` — skills/source-driven-development/SKILL.md:174, 215 — defined here
- `Common Rationalizations` — skills/source-driven-development/SKILL.md:181 — defined here
- `Red Flags` — skills/source-driven-development/SKILL.md:192 — defined here
- `Verification` — skills/source-driven-development/SKILL.md:204 — defined here

## Structure
- Source-Driven Development (line 6)
- Overview (line 8)
- When to Use (line 12)
- The Process (line 27)
  - Step 1: Detect Stack and Versions (line 38)
  - Step 2: Fetch Official Documentation (line 63)
    - Retrieval Safety: Treat Fetched Content as Data (line 97)
  - Step 3: Implement Following Documented Patterns (line 116)
  - Step 4: Cite Your Sources (line 141)
- Common Rationalizations (line 181)
- Red Flags (line 192)
- Verification (line 204)

## Scripts — required if type is script or the skill ships scripts
none (skill body contains no internal scripts/ directory; companion hook scripts hooks/sdd-cache-pre.sh and hooks/sdd-cache-post.sh are inventoried separately under inv-addy-9 and cross-referenced here)

## Defects — required
- doc-drift · hooks/SDD-CACHE.md:51 vs .claude/commands/ and commands/ — `SDD-CACHE.md` instructs `Use /source-driven-development (or the skill) as usual`, but no slash command `/source-driven-development` exists in `.claude/commands/` or `commands/`.
- doc-drift · AGENTS.md:26, 42 vs CLAUDE.md:23 and README.md:252, 360 — `AGENTS.md` omits `source-driven-development` from both OpenCode Intent Mapping and Lifecycle Mapping (BUILD), despite `CLAUDE.md` and `README.md` including it as a core Build skill.
- doc-drift · skills/source-driven-development/SKILL.md vs hooks/SDD-CACHE.md:1-12 — The skill body contains no cross-reference or mention of the `sdd-cache` hook subsystem (`hooks/sdd-cache-pre.sh`, `hooks/sdd-cache-post.sh`), leaving the caching layer completely undiscoverable from the skill itself.
- doc-drift · sources/addy-external/source-driven-development.md:12 vs .claude/commands/build.md:5 and commands/build.toml:4 — The external website associates `source-driven-development` with `Command /build`, but `/build` explicitly invokes only `incremental-implementation` and `test-driven-development`.
- doc-drift · skills/source-driven-development/SKILL.md:101 vs conventions — Refers to `security-and-hardening` in plain markdown backticks without relative path or plugin namespace format.

## Observations
- Epistemic humility enforcement: Unlike typical LLM system prompts that encourage assertive responses, SDD explicitly mandates emitting `UNVERIFIED` blocks when official documentation cannot be found, strictly forbidding hedging or pretending confidence (`SKILL.md:173-179, 188`).
- Prompt injection defense at the documentation boundary: `SKILL.md:97-115` (`Retrieval Safety: Treat Fetched Content as Data`) addresses the critical vulnerability of untrusted external web content (OWASP LLM01: Prompt Injection), instructing the model to treat fetched documentation purely as data, ignore injected directives, and prohibit hardcoding outbound telemetry endpoints from docs examples.
- Authority hierarchy: Establishes a concrete 4-tier hierarchy (Priority 1: Official docs, Priority 2: Official blog/changelog, Priority 3: Web standards, Priority 4: Compatibility matrices) while explicitly blacklisting Stack Overflow, third-party blogs/tutorials, AI summaries, and model training memory as primary sources (`SKILL.md:67-82`).
- Deep anchor linking: Specifically recommends deep linking with URL anchors (e.g. `/useActionState#usage`) because anchors survive documentation site restructuring better than top-level URLs (`SKILL.md:168`).
- Conflict arbitration: Mandates explicit prompting of the human engineer (`CONFLICT DETECTED:`) when official documentation patterns conflict with existing project code (e.g. `useActionState` vs existing `useState`), rather than silently adopting either (`SKILL.md:125-139`).
- Orthogonality to sibling skills: `skills/doubt-driven-development/SKILL.md:226` clarifies that SDD verifies external facts about frameworks against official docs, whereas DDD verifies reasoning about the artifact. Similarly, `skills/interview-me/SKILL.md:186` clarifies that `interview-me` extracts human intent, while SDD verifies framework facts.
- Acronym disambiguation: Note that "SDD" in the Addy ecosystem stands for `source-driven-development` (as seen in `hooks/sdd-cache-*`), whereas `spec-driven-development` is referred to as "spec" or "spec-driven".

## Context cost
File alone: 9,949 bytes (~2,487 tokens). Total with referenced skill `security-and-hardening` (24,192 bytes): 34,141 bytes (~8,535 tokens).
