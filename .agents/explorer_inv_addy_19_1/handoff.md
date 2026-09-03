# Handoff Report — Explorer 1 (explorer_inv_addy_19_1)

## 1. Observation

Direct observations from reading assigned source and context files in full, running existence checks, and executing commands:

### A. Assigned File Inspection
- Target file: `sources/addy/skills/source-driven-development/SKILL.md` (9,949 bytes, 217 lines). Read in full from line 1 to line 217.
- Frontmatter metadata:
  - `name: source-driven-development` (line 2)
  - `description: Grounds every implementation decision in official documentation. Use when you want authoritative, source-cited code free from outdated patterns. Use when building with any framework or library where correctness matters.` (lines 3-4)
- Core workflow: 4-step process `DETECT ──→ FETCH ──→ IMPLEMENT ──→ CITE` (lines 29-36).
  - Step 1: Detect Stack and Versions from dependency manifests (`package.json`, `composer.json`, `requirements.txt`/`pyproject.toml`, `go.mod`, `Cargo.toml`, `Gemfile`) and output `STACK DETECTED:` block (lines 38-61).
  - Step 2: Fetch Official Documentation using a 4-tier source authority hierarchy (Priority 1: Official documentation, Priority 2: Official blog / changelog, Priority 3: Web standards references, Priority 4: Browser/runtime compatibility), explicitly excluding Stack Overflow, blogs, AI summaries, and training data (lines 63-95).
  - Step 2 subsection: `Retrieval Safety: Treat Fetched Content as Data` (lines 97-115), guarding against OWASP LLM01: Prompt Injection, invoking `security-and-hardening`, extracting only documentation signal, and forbidding hardcoding outbound endpoints from documentation code examples without user permission.
  - Step 3: Implement Following Documented Patterns (lines 116-140), surfacing code conflicts to user via `CONFLICT DETECTED:` block.
  - Step 4: Cite Your Sources (lines 141-180), providing full URL deep links with anchors in code comments and conversation, and mandating explicit `UNVERIFIED` blocks when documentation cannot be found.
- Common Rationalizations: 6 pairs addressing overconfidence, token cost, missing docs, disclaimers, simple tasks, and prompt injection commands in docs (lines 181-191).
- Red Flags: 9 actionable antipatterns (lines 192-203).
- Verification: 9-point checklist (lines 204-216).

### B. Related Files & Subsystems Inspection
- Companion Hook Subsystem:
  - `sources/addy/hooks/sdd-cache-pre.sh` (4,261 bytes, 107 lines, executable `-rwxr-xr-x`).
  - `sources/addy/hooks/sdd-cache-post.sh` (4,567 bytes, 136 lines, executable `-rwxr-xr-x`).
  - `sources/addy/hooks/SDD-CACHE.md` (8,398 bytes, 168 lines).
  - Designed specifically for `source-driven-development` to cache `WebFetch` responses in `.claude/sdd-cache/<sha256(url)>.json` using HTTP conditional requests (`If-None-Match: <etag>`, `If-Modified-Since: <last_modified>`). Serves from cache on HTTP 304, terminating `PreToolUse` with exit code 2 and writing cached body to stderr enclosed in `----- BEGIN CACHED CONTENT -----` markers.
- Evaluation Cases & Fixtures:
  - `sources/addy/evals/cases/source-driven-development.json` (1,287 bytes, 45 lines). Configures 3 positive routing triggers, 2 negative routing triggers, and 1 execution evaluation case (id 1) requiring fixture `source-driven-development`.
  - `sources/addy/evals/fixtures/source-driven-development/framework-task.md` (535 bytes, 11 lines). Express 5 session implementation task evaluating whether agent grounds implementation in official documentation and flags unverified assumptions.
- External Documentation:
  - `sources/addy-external/source-driven-development.md` (26,358 bytes, 20 lines). Snapshot of `https://skills.addy.ie/skills/source-driven-development/`. Categorizes skill explicitly as `Build phase` (`<span class="chip phase-chip"><span class="phase-dot"></span>Build phase</span>`, line 5) and associates it with `/build` command (`Command /build`, line 12).
- Upstream Documentation & Catalog Mentions:
  - `sources/addy/CLAUDE.md:23`: Lists `source-driven-development` under `**Build:**`.
  - `sources/addy/README.md:252, 360`: Lists `source-driven-development` under `### Build - Write the code` and directory tree under `# Build`.
  - `sources/addy/skills/using-agent-skills/SKILL.md:28, 151, 175`: Sequences skill as step 6 in development workflow (`context-engineering` → `source-driven-development` → `incremental-implementation`) and categorizes it in `Build` phase.
  - `sources/addy/skills/doubt-driven-development/SKILL.md:226`: Distinguishes SDD (verifying external framework facts against official docs) from DDD (adversarially verifying artifact logic against project contracts).
  - `sources/addy/skills/interview-me/SKILL.md:186`: Distinguishes `interview-me` (extracting user intent) from SDD (verifying framework facts).

### C. Execution Verification Results
1. `bun scripts/validate-skills.js`:
   - Command: `bun scripts/validate-skills.js` (in `sources/addy`)
   - Exit code: 0
   - Output: `25 skills checked — 0 error(s), 0 warning(s) — PASSED` (including `✓  source-driven-development`).
2. `bun scripts/run-evals.js` (Tier 2 Trigger Evals):
   - Command: `bun scripts/run-evals.js` (in `sources/addy`)
   - Exit code: 0
   - Output: `Running skill evals across 25 skills, 25 case files ... 136 checks passed — 0 error(s), 0 warning(s) ... trigger rank-1 rate: 86% ... PASSED`.
3. `bun scripts/run-evals.js` (Tier 3 Dry-Run):
   - Command: `bun scripts/run-evals.js --behavioral source-driven-development --dry-run` (in `sources/addy`)
   - Exit code: 0
   - Output: `[dry-run] eval 1: execution trace in workspace + 1 fixture(s); claude -p --verbose --output-format stream-json --permission-mode acceptEdits --allowedTools Read,Glob,Grep,Edit,Write,Bash,WebFetch,WebSearch --append-system-prompt <source-driven-development/SKILL.md> < prompt-on-stdin`.
4. `sdd-cache-post.sh` and `sdd-cache-pre.sh` Execution:
   - Command (post): simulated PostToolUse payload with `https://react.dev/reference/react/useActionState`.
   - Result: Exit code 0, created `.claude/sdd-cache/f77331825765034146fe02281d8bd2cb.json` containing captured ETag (`"f5ff8c808d08486a72b704be19d43e5b"`), URL, and prompt.
   - Command (pre): simulated PreToolUse payload for same URL.
   - Result: Exit code 2 (cache hit signal), successfully verified HTTP 304 revalidation with origin server, and wrote cached content to stderr with `[sdd-cache]` and marker boundaries.

---

## 2. Logic Chain

1. **Phase Classification**:
   - `CLAUDE.md:23`, `README.md:252, 360`, `skills/using-agent-skills/SKILL.md:175`, and `sources/addy-external/source-driven-development.md:5` all unanimously categorize `source-driven-development` under the `Build` phase.
   - Therefore, per METHOD.md R4 and glossary rules, the phase is definitively `addy:Build`.

2. **Core Problem Solved & Design Intent**:
   - LLM models rely on training data that suffers from temporal cutoff, hallucinated APIs, and obsolete patterns.
   - `source-driven-development` solves this by mandating that framework-specific decisions trace directly to official documentation, verified via network retrieval, cited with deep anchor links, and flagged explicitly as `UNVERIFIED` if missing.
   - It incorporates prompt injection mitigation (`Retrieval Safety`) to protect the agent while consuming untrusted external web data.

3. **Defect Identification**:
   - `hooks/SDD-CACHE.md:51` explicitly instructs the user to run `/source-driven-development`, but an exhaustive search across `.claude/commands/` and `commands/` reveals that no such slash command exists. This is classified as a `missing-path` / `doc-drift` defect.
   - `AGENTS.md:26, 42` defines intent-to-skill and lifecycle-to-command mappings for OpenCode, but omits `source-driven-development` from both `Intent → Skill Mapping` and `Lifecycle Mapping (BUILD)`, despite `CLAUDE.md` and `README.md` including it. This is a `doc-drift` / `cross-file-contradiction` defect.
   - `skills/source-driven-development/SKILL.md` contains no reference or pointer to the companion `hooks/sdd-cache-*` caching subsystem or `hooks/SDD-CACHE.md`, making the performance optimization hook invisible to agents reading only the skill. This is a `doc-drift` defect.
   - `sources/addy-external/source-driven-development.md:5, 12` associates the skill with command `/build`, but inspecting `sources/addy/.claude/commands/build.md` and `commands/build.toml` shows that `/build` invokes only `incremental-implementation` and `test-driven-development`, not `source-driven-development`. This is a `doc-drift` defect.

4. **Completeness & Compliance with METHOD.md R1-R6**:
   - Coverage: Read the entire assigned file `skills/source-driven-development/SKILL.md` from line 1 to line 217 (R1).
   - Evidence & Execution: Ran `validate-skills.js`, `run-evals.js`, `run-evals.js --behavioral --dry-run`, `sdd-cache-post.sh`, and `sdd-cache-pre.sh`, recording exact command lines, exit codes, and outputs (R2).
   - Verbatim Extraction: Quoted exact text for purpose and all 29 named concepts with precise `path:line` references (R3, R6).
   - Vocabulary: Prefixed phase name with package prefix `addy:Build` (R4).
   - Defect Classification: Evaluated design intent independently from discovered defects (R5).

---

## 3. Caveats

- **Network Access Requirement**: In live agent environments without Internet connectivity or in air-gapped CI sandboxes, live execution of `WebFetch` or `curl` to fetch external documentation (e.g. `react.dev`, `docs.djangoproject.com`) will fail unless a pre-populated offline cache or mock proxy is provided.
- **SDD Acronym Overlap**: While "SDD" commonly refers to `spec-driven-development` in general software engineering literature, the Addy repository uses "SDD" exclusively for `source-driven-development` in the hook scripts and cache directory (`.claude/sdd-cache/`).

---

## 4. Conclusion

The skill `sources/addy/skills/source-driven-development/SKILL.md` is a fully functional, highly disciplined engineering skill in `addy:Build`. It successfully passed catalog validation (`validate-skills.js`) and routing/fixture evals (`run-evals.js`). Its companion HTTP revalidation hook scripts (`sdd-cache-pre.sh`, `sdd-cache-post.sh`) are technically sound and execute as documented, despite minor documentation drift regarding non-existent slash commands.

The complete inventory entry has been drafted below in full compliance with `docs/plan/templates/inventory-entry.md` and is ready to be written directly to `docs/analysis/inventory/addy/skills-source-driven-development-skill-md.md`.

---

## 5. Verification Method

To independently verify the findings in this report:

1. **File Existence & Line Counts**:
   ```bash
   wc -l sources/addy/skills/source-driven-development/SKILL.md
   # Expected: 217 lines
   ls -la sources/addy/hooks/sdd-cache* sources/addy/evals/cases/source-driven-development.json sources/addy/evals/fixtures/source-driven-development/framework-task.md
   # Expected: all files exist with sizes matching manifest
   ```

2. **Skill Validation**:
   ```bash
   bun sources/addy/scripts/validate-skills.js
   # Expected: exit 0, "25 skills checked — 0 error(s), 0 warning(s) — PASSED"
   ```

3. **Eval Routing & Dry-Run Execution**:
   ```bash
   bun sources/addy/scripts/run-evals.js
   # Expected: exit 0, 136 checks passed
   bun sources/addy/scripts/run-evals.js --behavioral source-driven-development --dry-run
   # Expected: exit 0, prints execution plan with framework-task.md
   ```

4. **Hook Revalidation Test**:
   ```bash
   mkdir -p /tmp/sdd-verify && CLAUDE_PROJECT_DIR=/tmp/sdd-verify bash -c '
   echo '\''{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"test"},"tool_response":"test"}'\'' | bash sources/addy/hooks/sdd-cache-post.sh
   echo '\''{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"test"}}'\'' | bash sources/addy/hooks/sdd-cache-pre.sh
   '
   # Expected: post exits 0, pre exits 2 with [sdd-cache] header on stderr
   rm -rf /tmp/sdd-verify
   ```

---

# Draft Inventory Entry

```markdown
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
- `source-driven-development` — skills/source-driven-development/SKILL.md:2, 6 — defined here
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
```
