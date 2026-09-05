# Brain Conventions

This document records the baseline repository conventions established on the `v2` branch as of Phase 0, per `docs/plan/METHOD.md` §1.3.

---

## 1. Intent and Scope

Brain on the `v2` branch is an empty Claude Code plugin scaffold. The repository's stated intent from `README.md` is:

> "A development lifecycle for Claude Code, delivered as one plugin."
> 
> "`agents/`, `commands/`, and `skills/` are populated as the lifecycle specification is implemented. The plugin is listed in the ACMElabs marketplace once `.claude-plugin/plugin.json` exists."

There are no inherited authoring conventions, pre-existing skills, or legacy exemplars on this branch. This project establishes all lifecycle conventions through systematic analysis, concordance, and explicit decisions.

---

## 2. Plugin Layout

The canonical repository layout at the root consists of:

```
agents/         ← Claude Code agent definitions (currently holds only .gitkeep)
commands/       ← Claude Code slash commands (currently holds only .gitkeep)
skills/         ← Claude Code skills, one directory each (currently holds only .gitkeep)
docs/
  analysis/     ← Source analysis, inventories, concept cards, concordance, verification
  decisions/    ← Append-only decision log (DECISIONS.md)
  plan/         ← Method, state, glossary, preferences, sessions, lifecycle specification
scripts/
  synthesis/    ← Pure Bun synthesis tooling for this analysis project; not plugin content
```

---

## 3. Toolchain and CI Contract

The repository uses Bun natively (D-003):

- **Package**: `@acmelabs/brain` (v0.5.0-dev, private, ESM module)
- **Configuration**: `bunfig.toml`, `tsconfig.json`, `bun.lock`
- **Commands**:
  - `bun install`: dependency installation
  - `bun test`: runs test suite
  - `bun run typecheck`: runs `tsc --noEmit`
- **CI Contract** (`.github/workflows/ci.yml`):
  - Triggers on push to `main` and on pull requests.
  - Runs on `ubuntu-latest` with `oven-sh/setup-bun@v2`.
  - Executes: `bun install --frozen-lockfile`, `bun run typecheck`, and `bun test`.

---

## 4. Undecided Conventions (Phase 4–5 Decisions)

Per `METHOD.md` §1.3:
*Frontmatter shape, skill directory structure, naming style, invocation patterns, and test conventions for built artifacts are undecided and will be set by Phase 4–5 decisions.*

Those decisions draw on what the three source packages do (investigated during Phase 1–3 and aligned in the `invocation-patterns` concordance family) and on Claude Code plugin requirements. Every convention decided this way will be recorded as a `D-1xx` entry in `DECISIONS.md`, and Phase 7 will build directly against those entries.

---

## 5. Dual-Target Strategy (D-009)

Part 2 output is **dual-target**: Claude Code first, with full Antigravity parity.

1. **Canonical Claude Code source**:
   - `skills/<name>/SKILL.md` (with Claude Code frontmatter)
   - `commands/<name>.md`
   - `agents/<name>.md`
   - `.claude-plugin/plugin.json`
2. **Antigravity / Gemini mirrors**:
   - Root `AGENTS.md` context file
   - `.agents/skills/`
   - `.agents/agents/<name>.md` (with Antigravity frontmatter)
   - `.agents/mcp_config.json` (remote servers use `serverUrl`)
   - `.agents/hooks.json` (five events: `PreToolUse`, `PostToolUse`, `PreInvocation`, `PostInvocation`, `Stop`)
   - Antigravity `plugin.json`
3. **Parity rule**:
   The Claude layout is the canonical source; Antigravity artifacts are derived mirrors, never hand-forked. Each Phase 7 build unit produces both forms, and Phase 8 verifies parity in `docs/analysis/integration-verification.md`.
