---
name: setup-brain
description: "Prepare or refresh a consumer repo's Brain workspace, domain guidance and capabilities. Use on first setup, after a Brain update, for --check, for a reported workspace problem, or to migrate layout 1. Preserve consumer root instructions; configure Codex instruction blocks only when the user selects that adapter."
---

# Setup brain

Setup prepares the consumer workspace. Brain's root AGENTS.md and CLAUDE.md govern development of Brain itself. Consumer Claude sessions get Brain's startup guidance from the enabled plugin hook; their root instruction files are not prerequisites and normal setup leaves them unchanged.

Load ask-user-question before a decision. Reuse settled requirements and scoped authorization. An absent glossary is valid: domain-modeling creates it after the first resolved term.

## 1. Resolve the plugin and prerequisites

This file is `skills/setup-brain/SKILL.md` inside the plugin. Its root is two folders above it. On Claude Code, the host substitutes `${CLAUDE_PLUGIN_ROOT}` in loaded skill text. On another host, use the resolved plugin path in each command below. Give that path to workers.

Read the plugin's package.json and its declared Bun range. Run:

```
bun --version
```

The version must satisfy `engines.bun`, not merely print successfully. Bun must be on the host process's PATH before Claude's startup hook can run. If Bun is missing or unsupported, name the required range and the [Bun installation guide](https://bun.sh/docs/installation). Resume setup after the prerequisite passes. A failed hook is not evidence that startup context loaded.

## 2. Inspect the consumer

Read existing workspace, domain and capabilities files in full. Inspect the branch and working changes. Preserve other work.

- Read the workspace paths and max_parallel. A refresh keeps those settings and any extra frontmatter. An invalid or newer layout stops the writer before any change; resolve it rather than downgrading it.
- Keep the domain layout already selected. On first setup, use single-context unless real monorepo boundaries warrant a user choice. A workspace declaration, packages with separate source trees, or a glossary map supplies evidence; a folder name alone does not settle the boundary.
- Inspect GLOSSARY.md, GLOSSARY-MAP.md, the configured decisions folder, and legacy root CONTEXT.md/CONTEXT-MAP.md. An absent optional glossary needs no repair.
- If a legacy docs/STATUS.md exists, read it fully. Save each live action, condition and wait in its idea, plan or linked record before retiring the note. The writer preserves its bytes as history; a conflicting history file remains an explicit unresolved collision.
- Detect layout 1 from legacy specs, plans, intent docs, numbered ADRs and tracker guidance when the workspace does not record layout 2. **Before any migration decision or write, read [MIGRATION.md](MIGRATION.md) in full and complete that branch.** A remaining legacy file beside layout 2 can be an intentional keep.

## 3. Resolve only open choices

Put the inspected evidence, recommendation and costs inside each question. Read ask-user-question's [selection procedure](../ask-user-question/references/selection.md) before selecting a set or presenting more candidates than the host permits.

| Choice | When it is open | Result |
|---|---|---|
| Domain layout | First setup has meaningful context boundaries and no settled choice | Select single-context or multi-context. Recommend single-context when evidence is weak. |
| Glossary rename | A legacy root name exists without its new name | Recommend the history-preserving rename. A declined rename remains explicit; current Brain guidance reads the GLOSSARY names. Per-context files require separate review. |
| Specs folder | Dry run exits 2 and names --specs-folder | Prefer docs/specs when root specs holds unrelated files; otherwise retain the selected/default location. Show the conflicting files and cost. |
| Codex adapter | This is a Codex setup request, or the user explicitly requests configuring Codex | Select global or project scope. Global affects every Codex repo; project edits consumer AGENTS.md and affects teammates. Explain those scopes before selection. |

A Codex home directory alone authorizes no Codex work. Claude, Gemini and Antigravity setup omit the Codex adapter. Brain currently supplies Codex context through marked AGENTS blocks; this is a packaging choice, not a host limitation.

The default specs folder is specs. On first setup, existing Brain spec folders in docs/specs retain that location. A selected alternate folder stays inside the repo. A refresh keeps the workspace's existing paths. Explain these reversible choices and proceed.

## 4. Preview and write the workspace

The writer owns workspace and domain templates. Before refreshing an existing body, inspect the exact changes and preserve any repo-specific instructions. Resolve a conflict before accepting a template replacement. Capabilities remains a repo-owned file.

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/setup/write.ts" --root . --dry-run
```

Add only flags supported by the settled choices:

- `--layout single` or `--layout multi` for an explicit layout selection. Omit it on refresh to retain the existing domain layout.
- `--rename-glossary` after the rename is authorized. Dirty or untracked glossary files need preservation before a move.
- `--specs-folder <folder>` after the folder decision.
- `--codex-scope global` or `--codex-scope project` only for the selected Codex adapter. Global uses CODEX_HOME, then ~/.codex; --codex-home supplies an explicit location. For a run without Codex, omit --codex-scope.

Show every planned file and any skipped-file reason. Show the exact marked blocks before an authorized Codex write; text outside the markers and existing symlinks remain intact. Exit 2 names missing or invalid answers: settle the named choice, then preview again.

Proceed without --dry-run when the request or an explicit answer authorizes these concrete changes. Ask only for missing permission. The writer validates templates, markers and workspace configuration before applying changes. This preflight is not a whole-repo backup or an atomic filesystem transaction; report any runtime write failure and inspect its resulting state.

## 5. Review capabilities

Use the skill names actually available on this host, as listed. Preserve their spelling. An incomplete host catalog is a limit, not evidence that a skill does not exist.

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/setup/capabilities.ts" --root . --skills "<name>,<name>" --dry-run
```

The proposal reads packageManager and engines, version checks named in AGENTS.md, matching dependency skills, and repo MCP configuration. User-wide server configuration is not a repo fact. Inspect each source and each skipped-source warning.

For a new capabilities file, show the proposed rows and resolve its approval once. Options can keep all rows, omit named entries, or use empty tables. Recommend rows supported by the repo; an empty scaffold is appropriate when none are needed. Pass --omit for declined entries. An already-authorized scaffold needs no repeated approval. A plain-text answer may supply scoped approval when no native question tool is permitted; ask-user-question owns that fallback.

Run the same command without --dry-run to create the approved file. On refresh, the script keeps the file and reports missing rows and changed values separately. Reconcile those differences with the user-owned policy; preserve deliberate overrides and server proof commands. Update approved rows without replacing unrelated text. A user's refusal remains a recorded limitation, not successful setup.

## 6. Verify and return

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/setup/write.ts" --root . --check
bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts" check
bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts" status
```

Use the same selected adapter and layout flags for --check. It writes nothing. It covers the writer's files; capabilities dry-run covers its source comparisons. Run the toolchain and server checks the approved capabilities file requires.

Report each created, updated, moved, unchanged or skipped file. Distinguish a passed check from an unresolved skip, declined capability, absent prerequisite or unverified host behavior. Setup is complete when required guidance is present, workspace checks pass, and remaining limitations are explicit. Return to using-brain with the original user request and current state.

Root-instruction cleanup is a separate user request. **Only for that request, read [ROOT-CLEANUP.md](ROOT-CLEANUP.md) before reporting or changing overlap.** Cleanup is not part of ordinary setup or proof that startup works.
