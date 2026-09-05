# Brain Conventions

Recorded in Phase 0 per METHOD.md §1.3 and §5 step 5. This document establishes the starting state and baseline environment for brain on the `v2` branch.

---

## 1. Starting State and Stated Intent

Brain on the `v2` branch is an empty Claude Code plugin scaffold. There is no `CLAUDE.md`, no pre-existing skill or agent exemplar, and no `.claude-plugin/plugin.json` yet.

The `README.md` states the plugin's intent verbatim:
> "A development lifecycle for Claude Code, delivered as one plugin."
> 
> "`agents/`, `commands/`, and `skills/` are populated as the lifecycle specification is implemented. The plugin is listed in the ACMElabs marketplace once `.claude-plugin/plugin.json` exists."

---

## 2. Plugin Layout

The repository root layout consists of:
- `agents/`: Claude Code canonical agent definitions (holds only `.gitkeep`)
- `commands/`: Claude Code slash commands (holds only `.gitkeep`)
- `skills/`: Claude Code skills, one directory each (holds only `.gitkeep`)
- `docs/`: Project documentation
  - `docs/analysis/`: Source analysis, manifests, duplication ledgers, and inventory
  - `docs/decisions/`: Append-only decision log (`DECISIONS.md`)
  - `docs/plan/`: Operating manual (`METHOD.md`), living state (`STATE.md`), glossary, preferences, sessions, and spec
- `.agents/`: Dual-target Antigravity/Gemini mirrors (D-009) populated in Part 2

---

## 3. Toolchain and Verification Contract

- **Runtime & Package Manager:** Bun (`bunfig.toml`, `package.json`). Pure Bun only (D-003) for all project tooling and built scripts.
- **Typechecking:** `bun run typecheck` (`tsc --noEmit`). Configuration in `tsconfig.json` (`strict: true`, `noUncheckedIndexedAccess: true`, `noImplicitOverride: true`).
- **Testing:** `bun test` (`bunfig.toml` configures coverage and path ignores).
- **CI Contract:** `.github/workflows/ci.yml` runs on push to `main` and pull requests:
  - `bun install --frozen-lockfile`
  - `bun run typecheck`
  - `bun test`

---

## 4. Undecided Authoring Conventions

As noted in METHOD.md §1.3:
*Frontmatter shape, skill directory structure, naming style, invocation patterns, and test conventions for built artifacts are undecided and will be set by Phase 4–5 decisions.*

Those decisions draw on what the three source packages do (the `invocation-patterns` concordance family exists for this) and on Claude Code plugin requirements. Every convention decided this way will be recorded as a `D-1xx` entry in `DECISIONS.md`, and Phase 7 builds against it.

---

## 5. Dual-Target Architecture (D-009)

Part 2 output is **dual-target**: Claude Code first, with full Antigravity parity.
- **Canonical form:** Follows Claude Code plugin standards at root (`skills/<name>/`, `commands/`, `agents/`, plus `.claude-plugin/plugin.json`).
- **Antigravity mirror:** Shipped wherever standards differ:
  - Root `AGENTS.md`
  - `.agents/skills/`
  - `.agents/agents/`
  - `.agents/mcp_config.json` (remote servers use `serverUrl`)
  - `.agents/hooks.json` (five events: `PreToolUse`, `PostToolUse`, `PreInvocation`, `PostInvocation`, `Stop`)
  - `.agents/plugin.json` (Antigravity plugin manifest)
- **Mirror policy:** Claude layout is the canonical source; Antigravity artifacts are mirrors derived from it, never hand-forked. Each Phase 7 build unit produces both forms; Phase 8 verifies 100% parity.
- **Project Tooling:** Tools in `scripts/synthesis/` are pure Bun helpers for this synthesis and are not plugin content in either manifest.
