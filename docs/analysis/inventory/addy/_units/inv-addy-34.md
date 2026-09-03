---
unit: inv-addy-34
phase: 1
package: addy
session: 009
subagent_returned: complete
---

# Unit inv-addy-34

## Files assigned
- [x] `sources/addy-external/interview-me.md` (24,935 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/external-interview-me-md.md` (24,597 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-34.md` (8,753 bytes)

## Scripts executed
- External Vercel Skills CLI (`@vercel-labs/skills`) — `bunx --yes skills add addyosmani/agent-skills --skill interview-me -y --copy` (in isolated `/tmp/test-interview-me-$$` temp directory) — Exit code: `0` (Output: Agent detected — installing non-interactively ... Selected 1 skill: interview-me ... Installed 1 skill: ✓ interview-me (copied) → ./.agents/skills/interview-me; downloaded `SKILL.md` 14,359 bytes)
- External Vercel Skills CLI (`@vercel-labs/skills`) — `bunx --yes skills add addyosmani/agent-skills -l` — Exit code: `0` (Output: enumerated all 25 skills in `addyosmani/agent-skills` including `interview-me` with full description)
- Upstream Skill Validation — `cd sources/addy && bun scripts/validate-skills.js` — Exit code: `0` (Output: 25 skills checked — 0 error(s), 0 warning(s) — PASSED; confirms `interview-me` is checked and satisfies all 6 required section headers)
- Upstream Reference Link Validation — `cd sources/addy && bun scripts/validate-reference-links.js` — Exit code: `0` (Output: 25 skills checked — 0 error(s) — PASSED; validates `skills/interview-me/SKILL.md`)
- Upstream Command Parity & Description Validation — `cd sources/addy && bun scripts/validate-commands.js` — Exit code: `0` (Output: 9 commands checked — 0 error(s) — PASSED)
- Upstream Plugin Manifest Version Validation — `cd sources/addy && bun scripts/validate-versions.js` — Exit code: `0` (Output: All plugin manifests use version 0.6.8)
- Upstream Artifact Paths Validation — `cd sources/addy && bun scripts/validate-artifact-paths.js` — Exit code: `0` (Output: 7 files checked — 0 error(s) — PASSED)
- Upstream Behavioral Eval Dry Run — `cd sources/addy && bun scripts/run-evals.js --behavioral interview-me --dry-run` — Exit code: `0` (Output: [dry-run] eval 1: dialogue transcript; no fixture required; claude -p ... <interview-me/SKILL.md> < prompt-on-stdin)
- Synthesis Glossary Lint — `bun run scripts/synthesis/glossary-lint.ts` — Exit code: `0` (Output: Glossary lint: clean)
- Synthesis Coverage Check — `bun run scripts/synthesis/coverage.ts` — Exit code: `1` (Output: Unchecked manifest rows: 1195, Empty required inventory fields: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **External Documentation Architectural Role:**
  - `sources/addy-external/interview-me.md` is a rendered HTML snapshot compiled by Astro for the public web catalog at `https://skills.addy.ie/skills/interview-me/`.
  - It functions as a public discoverability showcase, onboarding landing page, and distribution portal rather than an executable agent skill file.
- **Canonical Implementation Precedence (Companion to inv-addy-18):**
  - The external page presents a standardized 6-section anatomy overview (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`) and links directly to GitHub (`https://github.com/addyosmani/agent-skills/blob/main/skills/interview-me/SKILL.md`) for the full operational workflow.
  - `SKILL.md` (inventoried in unit `inv-addy-18` as `skills-interview-me-skill-md.md`) remains the authoritative source of procedural instructions and contains operational protocols (hypothesis formulation with confidence score, sub-70% rationale, one-question-at-a-time interview with attached guess, ~95% confidence stopping rule, intent drift check, and intent brief delivery schema) that the public landing page abstracts or omits.
- **Defects Cataloged (`doc-drift`, `internal-contradiction`, `missing-path`, `orphan`):**
  - *Purpose & Description Drift:* External page condenses purpose to `"Extracts what the user actually wants instead of what they think they should want, through a one-question-at-a-time interview until ~95% confidence about the underlying intent."` (`lines 1, 5`), omitting the self-policing trigger `"when you catch yourself silently filling in ambiguous requirements before any plan, spec, or code exists"` (`SKILL.md:3`).
  - *Trigger Condition Condensation:* External page reduces triggering conditions to a single line `"The ask is underspecified, or you invoke \"interview me\" / \"grill me\"."` (`line 5`), omitting multiple trigger phrases (`"are we sure?"`, `"stress-test my thinking"`) and completely omitting the explicit "When NOT to use" list (`SKILL.md:30-36`).
  - *Loading Constraints Omission:* External page omits the strict `Loading Constraints` prohibition from `SKILL.md:34-37` forbidding execution in non-interactive contexts like CI pipelines, scheduled runs, `/loop`, or autonomous loops.
  - *Structural Anatomy vs Operational Process Drift:* External page asserts that every skill follows a 6-part anatomy including `03 Process — Step-by-step workflow`, but `SKILL.md:38-133` structures its operational workflow under `## The Process` as 5 sequential steps (`### Step 1: Hypothesize, with a confidence number`, `### Step 2: Ask one question at a time, each with a guess attached`, `### Step 3: Listen for "want vs. should want"`, `### Step 4: Restate intent in the user's own words`, `### Step 5: Confirm — explicit yes, not "whatever you think"`), concluding with `### The 95% Confidence Stop`.
  - *Command Binding Discrepancy:* External page displays `Command /spec` in the Define phase sidebar card (`line 12`). In the repository, `/spec` executes `spec-driven-development` exclusively (`commands/spec.toml:1-17`, `.claude/commands/spec.md:1-18`); `interview-me` has no dedicated slash command or TOML command configuration.
  - *Installation Tooling Drift:* External page documents installation via Vercel's `skills CLI` (`npx skills add addyosmani/agent-skills --skill interview-me`, `line 8`), which is also documented in `README.md:46-59`, but omits the per-skill reference isolation limitation detailed in `README.md:61-65`, while `SKILL.md` contains no CLI installation instructions.
  - *Setup Link Collapse:* Footer setup links for "Claude Code", "Codex", "Cursor", and "Antigravity" (`line 15`) all resolve to `/docs/getting-started/`, whereas the repository maintains dedicated platform setup guides in `docs/` for `codex-setup.md`, `cursor-setup.md`, and `antigravity-setup.md`, with Claude Code documented in `getting-started.md` and `CLAUDE.md`.
  - *Sibling Skill Omission:* External page displays only `idea-refine` and `spec-driven-development` under "More in the Define phase" (`line 12`), omitting `constraint-driven-development` which is cataloged under Define in `README.md:353-356` (and omitting `doubt-driven-development`, which `SKILL.md:14` describes as a Define-phase skill though `README.md:361` classifies it under Build).
  - *Format Mismatch:* The file bears a `.md` markdown extension in `sources/addy-external/` and the manifest, but contains 100% minified HTML (`<!DOCTYPE html><html...`).
  - *Internal Contradiction:* The page states skills follow an anatomy that is "a workflow the agent follows, not a doc it reads" (`line 9`), but immediately offers a button labeled "Read the full SKILL.md" (`line 11`).
  - *Missing Internal Paths:* Web-relative paths (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/_astro/...`, `/.netlify/...`) do not resolve locally on disk.
  - *Orphan Status:* Brought into scope exclusively via METHOD.md §1.1; not linked or invoked by any source file in `sources/addy/`.
- **Define Phase Cluster:**
  - The external landing page explicitly cross-references `idea-refine` and `spec-driven-development` (`/spec`) under "More in the Define phase", validating the clustering of Define-stage skills.
- **Session Assignment:**
  - `STATE.md:98` and current session progression assign unit `inv-addy-34` to session `009` batch execution.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~6,500 tokens (24,935 bytes of external HTML snapshot plus cross-referenced skill and command files).
- Approximate tokens of output written: ~5,500 tokens across 1 inventory entry and 1 unit report.
