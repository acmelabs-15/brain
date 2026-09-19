# Plan: plain-talk

Spec: `SPEC-plain-talk.md` (approved 2026-09-19). Depends on host-manifests, built.

## Components and order

| # | Component | Depends on | Risk |
|---|---|---|---|
| 1 | The source text `plain-talk/PLAIN-TALK.md`, from Peter's output style with the two edits, and the three templates | — | the AskUserQuestion line must become host-neutral without losing the rule |
| 2 | `scripts/plain-talk/render.ts` with `--check`, its tests, the package scripts | 1 | none |
| 3 | The three rendered outputs, committed; `claude plugin validate` still passes with `output-styles/` present | 2 | `force-for-plugin` is read from frontmatter; a typo there fails silently |
| 4 | CI: `plain-talk:render -- --check` | 2 | none |

Sequential 1 to 4.

## Verification checkpoints

- After 2: render tests pass; the body is byte-identical across the three outputs.
- After 3: `bun run check` and `bun run validate` pass on the tree.
- Manual, later: spec success criteria 2 and 3, the Claude and Gemini every-turn checks, are run by Peter from an installed copy and recorded on the install pages.

## Not in this plan

The setup skill that writes the AGENTS.md block into a repo (module `setup`), and any
measure of whether the text works (module `evals`).
