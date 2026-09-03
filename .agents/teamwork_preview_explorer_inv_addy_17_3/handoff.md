# Handoff Report — Explorer 3 (inv-addy-17)

## 1. Observation

### 1.1 In-Scope Files & Properties
Direct observation of the three target skills and their external documentation snapshots:
1. `sources/addy/skills/security-and-hardening/SKILL.md`: 500 lines, 24,192 bytes.
   - Frontmatter name: `security-and-hardening` (line 2).
   - Frontmatter description: `"Hardens code against vulnerabilities. Use when handling user input, authentication, data storage, or external integrations. Use when building any feature that accepts untrusted data, manages user sessions, or interacts with third-party services. Use when personal data or privacy compliance (GDPR, CCPA) is involved."` (lines 3-4).
   - Verbatim Purpose statement:
     > `"Security-first development practices for web applications. Treat every external input as hostile, every secret as sacred, and every authorization check as mandatory. Security isn't a phase — it's a constraint on every line of code that touches user data, authentication, or external systems."` — `sources/addy/skills/security-and-hardening/SKILL.md:10`
   - Phase classification in repo: `CLAUDE.md:25` places it under `**Review:** ... security-and-hardening ...`; `README.md:369` categorizes it under `# Review`.
2. `sources/addy/skills/deprecation-and-migration/SKILL.md`: 248 lines, 12,516 bytes.
   - Frontmatter name: `deprecation-and-migration` (line 2).
   - Frontmatter description: `"Manages deprecation and migration. Use when removing old systems, APIs, or features. Use when migrating users from one implementation to another. Use when deciding whether to maintain or sunset existing code."` (line 3).
   - Verbatim Purpose statement:
     > `"Code is a liability, not an asset. Every line of code has ongoing maintenance cost — bugs to fix, dependencies to update, security patches to apply, and new engineers to onboard. Deprecation is the discipline of removing code that no longer earns its keep, and migration is the process of moving users safely from the old to the new."` — `sources/addy/skills/deprecation-and-migration/SKILL.md:10`
   - Phase classification in repo: `CLAUDE.md:26` places it under `**Ship:** ... deprecation-and-migration ...`; `README.md:373` categorizes it under `# Ship`.
3. `sources/addy/skills/observability-and-instrumentation/SKILL.md`: 204 lines, 11,053 bytes.
   - Frontmatter name: `observability-and-instrumentation` (line 2).
   - Frontmatter description: `"Instruments code so production behavior is visible and diagnosable. Use when adding logging, metrics, tracing, or alerting. Use when shipping any feature that runs in production and you need evidence it works. Use when production issues are reported but you can't tell what happened from the available data."` (line 3).
   - Verbatim Purpose statement:
     > `"Code you can't observe is code you can't operate. Observability is the ability to answer "what is the system doing and why?" from the outside, using the telemetry the code emits. Instrumentation is not a post-launch add-on — it's written alongside the feature, the same way tests are. If a feature ships without telemetry, the first user-reported bug becomes archaeology instead of a query."` — `sources/addy/skills/observability-and-instrumentation/SKILL.md:10`
   - Phase classification in repo: `CLAUDE.md:26` places it under `**Ship:** ... observability-and-instrumentation ...`; `README.md:375` categorizes it under `# Ship`.

### 1.2 External Documentation Snapshots & Documentation Drift
Direct inspection of `sources/addy-external/`:
1. `sources/addy-external/security-and-hardening.md` (26,475 bytes, HTML snapshot):
   - Header badge / Crumb: `<span class="crumb-phase">Review</span>` (line 5), `<span class="chip phase-chip">Review phase</span>` (line 5).
   - Command sidebar: `<span data-astro-cid-jrlgpo3w>Command</span> <code class="mono" data-astro-cid-jrlgpo3w>/review</code>` (line 12).
   - Summary / Meta description: `"Hardens code against vulnerabilities. OWASP Top 10 prevention, auth patterns, secrets management, dependency auditing, and a three-tier boundary system for any feature that accepts untrusted data."` (line 1, 5).
   - Trigger summary: `<div class="detail-when">Use when: Handling user input, auth, data storage, or external integrations.</div>` (line 5).
   - *Drift observation*: The external doc adopts `README.md:270`'s summary rather than `SKILL.md:3`'s full frontmatter trigger conditions (omits session management, third-party service interactions, and privacy/GDPR/CCPA compliance triggers). Additionally, while `SKILL.md:10` asserts `"Security isn't a phase — it's a constraint on every line of code..."`, both external doc and internal repository tables classify it as Review phase.
2. `sources/addy-external/deprecation-and-migration.md` (26,252 bytes, HTML snapshot):
   - Header badge / Crumb: `<span class="crumb-phase">Ship</span>` (line 5), `<span class="chip phase-chip">Ship phase</span>` (line 5).
   - Command sidebar: `<span data-astro-cid-jrlgpo3w>Command</span> <code class="mono" data-astro-cid-jrlgpo3w>/ship</code>` (line 12).
   - Summary: `"Manages deprecation and migration. A code-as-liability mindset, compulsory vs advisory deprecation, migration patterns, and zombie-code removal for deciding whether to maintain or sunset existing code."` (line 1, 5).
   - *Critical Drift / Defect*: The external doc explicitly claims that `deprecation-and-migration` maps to command `/ship`. However, in `sources/addy/.claude/commands/ship.md:5` and `sources/addy/commands/ship.toml:4`, `/ship` explicitly invokes `agent-skills:shipping-and-launch` (`Invoke the agent-skills:shipping-and-launch skill.`). Neither `/ship` nor any other slash command in `sources/addy` invokes or references `deprecation-and-migration`. In `AGENTS.md:45`, the lifecycle mapping for SHIP is strictly `SHIP → shipping-and-launch`. `deprecation-and-migration` is a command orphan.
3. `sources/addy-external/observability-and-instrumentation.md` (26,344 bytes, HTML snapshot):
   - Header badge / Crumb: `<span class="crumb-phase">Ship</span>` (line 5), `<span class="chip phase-chip">Ship phase</span>` (line 5).
   - Command sidebar: `<span data-astro-cid-jrlgpo3w>Command</span> <code class="mono" data-astro-cid-jrlgpo3w>/ship</code>` (line 12).
   - Summary: `"Instruments code so production behavior is visible and diagnosable. Structured logging, RED metrics, OpenTelemetry tracing, and symptom-based alerting - instrument as you build, not after an incident."` (line 1, 5).
   - *Critical Drift / Defect*: The external doc claims `observability-and-instrumentation` maps to command `/ship`. As observed above, `/ship` invokes only `shipping-and-launch` and spawns `code-reviewer`, `security-auditor`, and `test-engineer`. Neither `commands/ship.toml` nor `.claude/commands/ship.md` invokes `observability-and-instrumentation`.

### 1.3 Complete Repository-Wide `Invoked by` Lists

#### `security-and-hardening`
- **Commands**:
  - `sources/addy/.claude/commands/review.md:12`: `4. **Security** — Input validated? Secrets safe? Auth checked? (Use security-and-hardening skill)`
  - `sources/addy/commands/review.toml:11`: `4. **Security** — Input validated? Secrets safe? Auth checked? (Use security-and-hardening skill)`
- **Skills**:
  - `sources/addy/skills/code-review-and-quality/SKILL.md:66`: `For detailed security guidance, see security-and-hardening. Does the change introduce vulnerabilities?`
  - `sources/addy/skills/code-review-and-quality/SKILL.md:300`: `For triaging npm audit findings and supply-chain risk (typosquatting, compromised maintainers), follow the security-and-hardening skill — this section covers the upgrade workflow, that one covers the security verdict.`
  - `sources/addy/skills/source-driven-development/SKILL.md:101`: `For the underlying threat model (LLM01: Prompt Injection), follow the security-and-hardening skill — this section covers extraction hygiene, that one covers the threat model.`
  - `sources/addy/skills/observability-and-instrumentation/SKILL.md:91`: `Never log secrets, tokens, passwords, or full PII. This is a hard rule from the security-and-hardening skill — telemetry pipelines are a classic data-leak path.`
  - `sources/addy/skills/constraint-driven-development/SKILL.md:10`: `security-and-hardening gives you a threat list.`
  - `sources/addy/skills/constraint-driven-development/SKILL.md:310`: `- security-and-hardening — what the security dimension should contain`
  - `sources/addy/skills/using-agent-skills/SKILL.md:35`: `│   ├── Security concerns? ───────→ security-and-hardening`
  - `sources/addy/skills/using-agent-skills/SKILL.md:185`: `| Review | security-and-hardening | OWASP prevention, input validation, least privilege |`
- **References & Checklists**:
  - `sources/addy/references/definition-of-done.md:48`: `- [ ] Security implications reviewed for any untrusted input, auth, or data handling (see security-and-hardening)`
  - `sources/addy/references/security-checklist.md:3`: `Quick reference for web application security. Use alongside the security-and-hardening skill.`
  - `sources/addy/references/observability-checklist.md:30`: `- [ ] No secrets, tokens, passwords, or unredacted PII in any log line (hard rule from security-and-hardening)`
- **Agent Personas**:
  - `sources/addy/agents/security-auditor.md`: While not mentioning the skill filename directly, the persona's checklist and structure mirror `security-and-hardening`.
- **Documentation**:
  - `sources/addy/README.md:270, 369`
  - `sources/addy/CLAUDE.md:25`
  - `sources/addy/docs/getting-started.md:63, 135`
  - `sources/addy/docs/adoption-guide.md:52, 100`
  - `sources/addy/docs/cursor-setup.md:161`
  - `sources/addy/docs/gemini-cli-setup.md:78`
  - `sources/addy/docs/windsurf-setup.md:47`
- **Evals & Tests**:
  - `sources/addy/evals/cases/security-and-hardening.json:2, 35` (direct eval suite)
  - `sources/addy/evals/cases/idea-refine.json:25` (negative prompt routing owner)
  - `sources/addy/evals/cases/documentation-and-adrs.json:25` (negative prompt routing owner)
  - `sources/addy/evals/cases/context-engineering.json:25` (negative prompt routing owner)
- **External Documentation**:
  - `sources/addy-external/security-and-hardening.md:1, 5, 12`

#### `deprecation-and-migration`
- **Commands**:
  - None. No command invokes this skill. (External doc claims `/ship`, which is documented drift).
- **Skills**:
  - `sources/addy/skills/git-workflow-and-versioning/SKILL.md:311`: `Breaking changes get a migration note and a deprecation window (follow the deprecation-and-migration skill); shipping the actual release is the shipping-and-launch skill's job — this section is the versioning contract that feeds it.`
  - `sources/addy/skills/api-and-interface-design/SKILL.md:30`: `- **Plan for deprecation at design time.** See deprecation-and-migration for how to safely remove things users depend on.`
  - `sources/addy/skills/using-agent-skills/SKILL.md:39`: `├── Deprecating/migrating? ────────→ deprecation-and-migration`
  - `sources/addy/skills/using-agent-skills/SKILL.md:160`: `15. deprecation-and-migration   → Retire old systems and move users safely when needed`
  - `sources/addy/skills/using-agent-skills/SKILL.md:189`: `| Ship | deprecation-and-migration | Remove old systems and migrate users safely |`
- **Documentation**:
  - `sources/addy/README.md:279, 373`
  - `sources/addy/CLAUDE.md:26`
  - `sources/addy/docs/adoption-guide.md:104`: `deprecation-and-migration is the brownfield skill par excellence...`
- **Evals & Tests**:
  - `sources/addy/evals/cases/deprecation-and-migration.json:2, 34` (direct eval suite)
  - `sources/addy/evals/cases/performance-optimization.json:29` (negative prompt routing owner)
- **External Documentation**:
  - `sources/addy-external/deprecation-and-migration.md:1, 5, 12`

#### `observability-and-instrumentation`
- **Commands**:
  - None. No command invokes this skill directly. (External doc claims `/ship`, which is documented drift).
- **Skills**:
  - `sources/addy/skills/security-and-hardening/SKILL.md:369`: `Don't log PII into telemetry (the observability-and-instrumentation skill makes the same point from the ops side).`
  - `sources/addy/skills/shipping-and-launch/SKILL.md:122`: `Monitoring active (metrics, error rate, logs) — see observability-and-instrumentation`
  - `sources/addy/skills/using-agent-skills/SKILL.md:41`: `├── Adding logs/metrics/alerts? ───→ observability-and-instrumentation`
  - `sources/addy/skills/using-agent-skills/SKILL.md:153`: `8.  observability-and-instrumentation → Instrument as you build (runs parallel with 7-9, not after)`
  - `sources/addy/skills/using-agent-skills/SKILL.md:191`: `| Ship | observability-and-instrumentation | Structured logs, RED metrics, traces, symptom-based alerts |`
- **References & Checklists**:
  - `sources/addy/references/definition-of-done.md:49`: `- [ ] Observability in place for new critical paths (logs, metrics, traces) (see observability-and-instrumentation)`
  - `sources/addy/references/observability-checklist.md:3`: `Quick reference for instrumenting production code. Use alongside the observability-and-instrumentation skill.`
- **Documentation**:
  - `sources/addy/README.md:281, 375`
  - `sources/addy/CLAUDE.md:26`
  - `sources/addy/docs/getting-started.md:138`: `| observability-checklist.md | observability-and-instrumentation |`
  - `sources/addy/docs/adoption-guide.md:62, 105`
- **Evals & Tests**:
  - `sources/addy/evals/cases/observability-and-instrumentation.json:2, 34` (direct eval suite)
  - `sources/addy/evals/cases/spec-driven-development.json:29` (negative prompt routing owner)
  - `sources/addy/evals/cases/ci-cd-and-automation.json:25` (negative prompt routing owner)
  - `sources/addy/evals/cases/incremental-implementation.json:21` (negative prompt routing owner)
- **External Documentation**:
  - `sources/addy-external/observability-and-instrumentation.md:1, 5, 12`

### 1.4 Verification of Referenced Paths
- `skills/security-and-hardening/SKILL.md`:
  - `../../references/security-checklist.md` (lines 77, 303, 451): Checked with `view_file`; exists on disk (11,881 bytes, 206 lines).
- `skills/deprecation-and-migration/SKILL.md`:
  - Mentions no file path directly (only mentions skill `incremental-implementation` in prose at line 183).
- `skills/observability-and-instrumentation/SKILL.md`:
  - `../../references/observability-checklist.md` (line 203): Checked with `view_file`; exists on disk (4,931 bytes, 92 lines).
- Verified via `bun scripts/validate-reference-links.js`: checked all 25 skills, 0 errors, status `PASSED`.
- There are **zero broken or missing referenced paths** across the 3 skills.

### 1.5 Runnable Scripts and Verification Tests Execution
Direct execution of scripts under `sources/addy/scripts/` using Bun:
1. `bun scripts/validate-skills.js`:
   - Command: `bun scripts/validate-skills.js`
   - Exit code: `0`
   - Output: `25 skills checked — 0 error(s), 0 warning(s) — PASSED` (including `security-and-hardening`, `deprecation-and-migration`, `observability-and-instrumentation`).
2. `bun scripts/validate-reference-links.js`:
   - Command: `bun scripts/validate-reference-links.js`
   - Exit code: `0`
   - Output: `25 skills checked — 0 error(s) — PASSED`.
3. `bun scripts/validate-commands.js`:
   - Command: `bun scripts/validate-commands.js`
   - Exit code: `0`
   - Output: `9 commands checked — 0 error(s) — PASSED`.
4. `bun scripts/validate-artifact-paths.js`:
   - Command: `bun scripts/validate-artifact-paths.js`
   - Exit code: `0`
   - Output: `7 files checked — 0 error(s) — PASSED`.
5. `bun scripts/run-evals.js` (Tier 2 trigger routing and collision checks):
   - Command: `bun scripts/run-evals.js`
   - Exit code: `0`
   - Output: `136 checks passed — 0 error(s), 0 warning(s) | trigger rank-1 rate: 86% | PASSED`.
6. Tier 3 behavioral eval dry-runs for the 3 target skills:
   - `bun scripts/run-evals.js --behavioral security-and-hardening --dry-run`: Exit code `0`.
   - `bun scripts/run-evals.js --behavioral deprecation-and-migration --dry-run`: Exit code `0`.
   - `bun scripts/run-evals.js --behavioral observability-and-instrumentation --dry-run`: Exit code `0`.
7. Full unit test suite for repository scripts:
   - Command: `bun test ./scripts/*-test.js`
   - Exit code: `0`
   - Output: `35 pass, 0 fail across 5 test files [738.00ms]`.

### 1.6 Synthesis Tooling & Manifest State
- Manifest rows in `docs/analysis/manifest/addy.md`:
  - Line 179: `| skills/security-and-hardening/SKILL.md | 24192 | skill | [ ] |`
  - Line 180: `| skills/deprecation-and-migration/SKILL.md | 12516 | skill | [ ] |`
  - Line 181: `| skills/observability-and-instrumentation/SKILL.md | 11053 | skill | [ ] |`
- `scripts/synthesis/coverage.ts`: Checks that manifest rows are marked `[x]` and inventory files have non-empty required fields.
- `scripts/synthesis/glossary-lint.ts`: Enforces canonical glossary terminology and package-prefix conventions (`addy:<Phase>`, `addy:<Term>`).

---

## 2. Logic Chain

1. **Premise**: Work unit `inv-addy-17` requires cross-cutting analysis of 3 skills (`security-and-hardening`, `deprecation-and-migration`, `observability-and-instrumentation`) against external documentation, repository commands, checklists, evals, and tooling.
2. **From Observation 1.1**: The three skills have distinct lifecycle phases: `security-and-hardening` is assigned to `addy:Review` (with a documented philosophical note in `SKILL.md:10` that security is an omnipresent constraint), while `deprecation-and-migration` and `observability-and-instrumentation` are assigned to `addy:Ship`.
3. **From Observation 1.2**: Comparison of `SKILL.md` files against `sources/addy-external/` reveals two significant defects:
   - Both `deprecation-and-migration.md` and `observability-and-instrumentation.md` in external docs claim that the skills are executed via `Command: /ship`.
   - However, inspection of `sources/addy/.claude/commands/ship.md` and `commands/ship.toml` shows that `/ship` executes only `shipping-and-launch` and parallel review personas. Neither command file mentions or executes `deprecation-and-migration` or `observability-and-instrumentation`.
   - This represents an unambiguous documentation drift defect between external marketing/documentation pages and the actual command implementation.
4. **From Observation 1.3**: The `Invoked by` mapping is asymmetric across the 3 skills:
   - `security-and-hardening` is heavily connected: invoked by `/review` (`.claude/commands/review.md:12`, `commands/review.toml:11`), referenced across 5 core skills (`code-review-and-quality`, `source-driven-development`, `observability-and-instrumentation`, `constraint-driven-development`, `using-agent-skills`), 3 checklists (`definition-of-done`, `security-checklist`, `observability-checklist`), and multiple documentation guides.
   - `observability-and-instrumentation` is invoked in `security-and-hardening:369`, `shipping-and-launch:122`, `using-agent-skills:41`, `definition-of-done:49`, and `observability-checklist:3`.
   - `deprecation-and-migration` has no slash commands and no checklists; it is invoked primarily from `git-workflow-and-versioning:311`, `api-and-interface-design:30`, and `using-agent-skills:39`.
5. **From Observation 1.4 & 1.5**: All referenced paths (`../../references/security-checklist.md`, `../../references/observability-checklist.md`) resolve cleanly. No missing files exist on disk. Furthermore, all repository-level validation scripts (`validate-skills.js`, `validate-reference-links.js`, `validate-commands.js`, `validate-artifact-paths.js`, `run-evals.js`) and all 35 unit tests pass with exit code `0`.
6. **From Observation 1.6**: The inventory entries must be created in `docs/analysis/inventory/addy/` matching the strict template layout, with verbatim quotes, complete `Invoked by` lists, and explicit `doc-drift` defect entries.

---

## 3. Caveats

1. **Headless Claude Execution**: Running `run-evals.js --behavioral <skill>` without `--dry-run` launches a real headless Claude agent process requiring live API access and consuming tokens. In this read-only evaluation environment, `--dry-run` was used to verify the execution plan and fixture resolution deterministically without invoking live LLM tokens.
2. **Node vs Bun Module Resolution**: The root `package.json` specifies `"type": "module"`. Because `sources/addy` does not have an independent `package.json`, executing `node --test` directly causes `ReferenceError: require is not defined in ES module scope`. However, executing with `bun test ./scripts/*-test.js` resolves CommonJS `require()` transparently and succeeds 35/35.
3. **Implicit vs Explicit Invocation in `/ship`**: While `security-auditor` runs during `/ship`, it does not explicitly invoke `security-and-hardening/SKILL.md` by path; instead, it is a standalone persona that covers the same OWASP and threat-modeling principles. `/review` is the only command that explicitly instructs: `(Use security-and-hardening skill)`.

---

## 4. Conclusion

Work unit `inv-addy-17` encompasses 3 critical engineering skills totaling 47,761 source bytes.
- **Reference Integrity**: 100% sound. All `../../references/*.md` links exist and pass automated link validation.
- **Runnable Scripts**: 100% verified. No skill-local scripts exist, but all repository validation scripts and 35 unit tests pass cleanly under Bun.
- **Defects Discovered**:
  - `doc-drift` (Command Orphan in external docs): External docs for both `deprecation-and-migration` and `observability-and-instrumentation` claim `Command: /ship`, but neither skill is invoked by `/ship` or any other slash command.
  - `doc-drift` (Frontmatter vs External Summary): External docs substitute shortened README-derived summaries in place of the complete SKILL.md frontmatter description triggers (e.g., omitting PII/GDPR/CCPA in `security-and-hardening`).
  - `doc-drift` / Conceptual Tension: `security-and-hardening/SKILL.md:10` declares that security is an omnipresent constraint rather than a phase, yet repository manifests and external docs classify it in `addy:Review`.
- The cross-cutting analysis is complete, verified by test execution and source checks, and ready for worker inventory generation.

---

## 5. Verification Method

To independently verify all findings in this report:

1. **Verify script and link integrity**:
   ```bash
   cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy
   bun scripts/validate-skills.js
   bun scripts/validate-reference-links.js
   bun scripts/validate-commands.js
   bun scripts/validate-artifact-paths.js
   bun scripts/run-evals.js
   bun test ./scripts/*-test.js
   ```
   *Expected result*: All commands exit with code 0. Unit tests report 35 passed, 0 failed.

2. **Verify external doc drift**:
   - Inspect `sources/addy-external/deprecation-and-migration.md:12` and `sources/addy-external/observability-and-instrumentation.md:12` to observe `<code class="mono">/ship</code>`.
   - Inspect `sources/addy/.claude/commands/ship.md:5` and `sources/addy/commands/ship.toml:4` to verify they invoke `shipping-and-launch` and make no mention of either skill.
   - Inspect `sources/addy/.claude/commands/review.md:12` to verify `/review` explicitly invokes `security-and-hardening`.

3. **Verify referenced paths on disk**:
   ```bash
   ls -la /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/references/security-checklist.md
   ls -la /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/references/observability-checklist.md
   ```
   *Expected result*: Both files exist and match the byte sizes recorded.
