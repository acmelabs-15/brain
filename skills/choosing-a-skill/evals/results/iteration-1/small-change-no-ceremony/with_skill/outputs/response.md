Agreed, this is small. I'll do it directly — no spec, no ticket breakdown.

Plan:

1. Find the sync command's argument parsing and add `--dry-run` as a boolean flag (defaulting to false), matching whatever flag convention the command already uses.
2. Thread it through to wherever sync performs its side effects — the writes, deletes, uploads, or whatever the actual mutations are.
3. At each mutation point, when the flag is set, print the intended action instead of performing it. I'll keep the printed lines specific (source → destination, per item), because a dry run that just says "would sync 12 files" isn't much use.
4. Add a test that runs the sync path with `--dry-run` and asserts nothing was mutated but the expected lines were printed.
5. Update the command's help text / usage.

The one thing I'll be careful about: making sure `--dry-run` suppresses *every* side effect, not just the obvious one. Sync commands often mutate in more than one place — a state file, a cache, a lock, a remote call — and a partial dry run is worse than none. I'll trace the call paths before I edit rather than guessing.

Point me at the repo (or confirm I should look in the current one) and I'll start.
