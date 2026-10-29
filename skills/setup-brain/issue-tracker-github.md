# Issue tracker: GitHub

Adapted from mattpocock/skills, MIT, commit c55ee46. Repo: {{repo}}.

Issues for this repo live as GitHub issues. Use the `gh` CLI for every operation. The spec and the plan live in the repo, at `SPEC.md` or under `spec/`, and under `tasks/`.

## Conventions

- Create an issue: `gh issue create --title "..." --body "..."`, with a heredoc for a long body.
- Read an issue: `gh issue view <number> --comments`.
- List issues: `gh issue list --state open --json number,title,body,labels,comments --jq '[.[] | {number, title, body, labels: [.labels[].name], comments: [.comments[].body]}]'` with `--label` and `--state` filters.
- Comment: `gh issue comment <number> --body "..."`.
- Labels: `gh issue edit <number> --add-label "..."` or `--remove-label "..."`. A label that does not exist yet is created first: `gh label create "<name>" --description "<meaning>"`.
- Close: `gh issue close <number> --comment "..."`.

`gh` infers the repo from `git remote -v` inside a clone.

## Pull requests as a request surface

PRs as a request surface: no. Set to `yes` if this repo treats external PRs as feature requests.

When `yes`, PRs run through the same labels and states as issues with the `gh pr` equivalents:

- Read a PR: `gh pr view <number> --comments`, and `gh pr diff <number>` for the diff.
- List external PRs: `gh api 'repos/{{repo}}/pulls?state=open' --jq '.[] | {number, title, author: .user.login, author_association}'`, then keep the PRs whose `author_association` is `CONTRIBUTOR`, `FIRST_TIME_CONTRIBUTOR` or `NONE`. The `gh pr list` JSON has no such field.
- Comment, label, close: `gh pr comment`, `gh pr edit --add-label` or `--remove-label`, `gh pr close`.

GitHub shares one number space across issues and PRs: resolve a bare `#42` with `gh pr view 42`, then `gh issue view 42`.

## When a skill says "publish to the issue tracker"

Create a GitHub issue.

## When a skill says "fetch the relevant issue"

Run `gh issue view <number> --comments`.
