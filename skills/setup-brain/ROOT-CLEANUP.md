# Optional consumer root cleanup

Use this branch only when the user asks to remove duplicate consumer instructions. Normal setup keeps the root files. Load ask-user-question and its [selection procedure](../ask-user-question/references/selection.md).

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/setup/overlap.ts" --root .
```

The report is a lexical lead, not proof of equivalent meaning. Read each original line beside its suggested replacement. Check scope, order, conditions, permissions, version bounds, and other readers. Keep every distinct rule. A capabilities row with the same name does not replace all instructions that mention that name.

Inspect other contributors and host usage. Recommend report-only when teammates or other tools still need the root text. CLAUDE.md and GEMINI.md are report-only; this script edits AGENTS.md alone.

For a semantically equivalent section, show the exact removal preview and preserved lines:

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/setup/overlap.ts" --root . --remove "<heading>" --dry-run
```

Ask about the exact reviewed set through the supported selection procedure. An explicit none keeps every section. Missing answers authorize no removal. A native multi-select control is used only when the active schema supports it. An explicit scoped text reply is valid through ask-user-question's fallback.

If any offered section includes a distinct rule the script would remove, keep the section. Do not use the section-level removal for a partially equivalent result. Present the exact narrower edit separately if the user wants it.

Run without --dry-run only for the approved set. The script requires a tracked, clean AGENTS.md and writes a commit containing that file alone. Preserve existing changes rather than staging them implicitly. Inspect the resulting diff, report the commit and retained sections, and run the applicable workspace checks. Cleanup is complete when the exact authorized change is verified; it is never a prerequisite for Claude startup.
