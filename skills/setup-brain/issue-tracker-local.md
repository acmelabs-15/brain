# Issue tracker: local markdown

Adapted from mattpocock/skills, MIT, commit c55ee46.

Issues for this repo live as markdown files under `.scratch/`. The spec and the plan do not: they live at `SPEC.md` or under `spec/`, and under `tasks/`.

## Conventions

- One feature per directory: `.scratch/<feature-slug>/`
- One file per issue at `.scratch/<feature-slug>/issues/<NN>-<slug>.md`, numbered from `01`, never one combined file
- An issue's state is a `Status:` line near the top of each issue file; the role strings are in `triage-labels.md`
- Comments append at the bottom under a `## Comments` heading

## When a skill says "publish to the issue tracker"

Create a new file under `.scratch/<feature-slug>/issues/`, creating the directory if needed.

## When a skill says "fetch the relevant issue"

Read the file at the path the user gave.

## When a skill says "list the issues in a bucket"

Scan `.scratch/*/issues/*.md` and match the `Status:` line.
