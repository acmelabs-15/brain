# Migrate layout 1

Read this branch in full before any migration decision or write. Keep ask-user-question loaded. Before a candidate or set question, read its [selection procedure](../ask-user-question/references/selection.md). Reuse answers already settled in this run.

Layout 1 covers Brain 0.9 and earlier. The writer moves selected tracked, clean files with git mv, adds frontmatter, and makes one scoped migration commit. It preserves every byte below the old frontmatter boundary. Tracker removal is the exception: it requires explicit approval. Dirty or untracked files remain in place with a reason.

| Legacy file | Destination |
|---|---|
| Root CONTEXT.md and CONTEXT-MAP.md, when approved | GLOSSARY.md and GLOSSARY-MAP.md |
| SPEC.md, spec/SPEC.md, spec/SPEC-module.md | A numbered spec folder under the selected specs path |
| tasks/plan.md and tasks/todo.md | The selected spec's tasks folder |
| A capability map in spec | A decision record |
| Numbered legacy ADRs in the decisions folder | Decision records with kind: architecture |
| A selected external ADR folder | Architecture decision records; a kept folder remains history |
| DEC or RES without frontmatter | The same file with frontmatter |
| Selected docs/intent Markdown files | Numbered ideas, with migrated provenance and no guessed status |
| Legacy issue-tracker.md and triage-labels.md | Removed only when approved |

Other files stay where they are. A successful migration records layout: 2 in workspace.md. A skipped file waiting for a commit holds back that marker, so a later run can resume. A future layout or invalid workspace configuration needs repair or a compatible Brain version, not this migration.

## Resolve the remaining decisions

1. Find which spec owns a legacy plan. One spec or an explicit, consistent plan pointer can settle the fact. Ask only for remaining ambiguity. Include every candidate and an explicit keep-in-place outcome through the supported selection procedure. The script takes --plan-spec with the path or none.
2. Decide which intent documents become ideas. Inspect each document first. Ask one unresolved decision at a time; reuse a previously approved exact set. Pass selected paths comma-separated to --ideas, or none. A migrated idea's status remains open for review instead of being guessed.
3. When legacy tracker files exist, inspect their readers. Ask whether to remove or keep them. Recommend removal only when no other tool relies on them. Pass --tracker-files remove only after explicit approval; otherwise keep.
4. Resolve a root glossary rename when its new name is absent. Recommend git mv to keep history; pass --rename-glossary only when approved. Per-context files and links need their own review.
5. Inspect external ADR folders. Ask whether to move their records or keep them as history. Recommend keeping a folder that another tool still writes. Pass --adr-folder move or keep. New Brain decisions still use the workspace's decisions folder.
6. Resolve a specs-folder collision only when the writer reports one. Apply the main skill's folder decision and retain --specs-folder in both runs.

## Preview, approve, apply, verify

Run only the flags whose answers are settled. Quote values containing spaces:

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/setup/write.ts" --root . --migrate --plan-spec <path-or-none> --ideas <paths-or-none> --tracker-files <remove-or-keep> --adr-folder <move-or-keep> --dry-run
```

Show every planned move, update, creation, removal and skip. Inspect the proposed frontmatter and destinations. A missing answer exits 2 before writes; address the named flags, then preview again. A dirty or untracked source waits for its owner to preserve it; do not stage unrelated work to make migration proceed.

Apply only after the user approves the concrete migration. Reuse an approval that already covers this exact set. Run the same command without --dry-run. The command reports its commit. On a failure, inspect the reported rollback result; a rollback failure remains red. This is a scoped file migration, not a whole-repo backup or proof that arbitrary old prose becomes current rows.

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts" check
```

Show every finding. Migrated decisions without kind are informational; unresolved validation findings remain red. Verify moved bodies and kept files against the preview. Record skips and their next actions. Return to the main skill's workspace preview and capabilities steps. Migration is complete only when intended files are accounted for, the marker accurately describes the result, and checks pass; seeing a finding does not resolve it.
