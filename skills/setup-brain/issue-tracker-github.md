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

## Pull requests as a triage surface

PRs as a request surface: no. Set to `yes` if this repo treats external PRs as feature requests; the triage skill reads this flag.

When `yes`, PRs run through the same labels and states as issues with the `gh pr` equivalents:

- Read a PR: `gh pr view <number> --comments`, and `gh pr diff <number>` for the diff.
- List external PRs: `gh pr list --state open --json number,title,body,labels,author,comments`, then keep the PRs whose `author.login` is not a repo collaborator, checked with `gh api repos/{{repo}}/collaborators/<login> --silent`.
- Comment, label, close: `gh pr comment`, `gh pr edit --add-label` or `--remove-label`, `gh pr close`.

GitHub shares one number space across issues and PRs: resolve a bare `#42` with `gh pr view 42`, then `gh issue view 42`.

## When a skill says "publish to the issue tracker"

Create a GitHub issue.

## When a skill says "fetch the relevant issue"

Run `gh issue view <number> --comments`.

## Wayfinding operations

Used by the wayfinder skill. The map is one issue; its child issues are the tickets.

- Map: one issue labelled `wayfinder:map`, holding the Notes, Decisions so far and Fog body: `gh issue create --label wayfinder:map`.
- Child ticket: an issue linked to the map as a GitHub sub-issue through `gh api` on the sub-issues endpoint. Where sub-issues are not enabled, add the child to a task list in the map body and put `Part of #<map>` at the top of the child body. Labels: `wayfinder:<type>`, one of `research`, `prototype`, `interview`, `task`. A claimed ticket is assigned to the driving developer.
- Blocking: GitHub's native issue dependencies. Add an edge with `gh api --method POST repos/{{repo}}/issues/<child>/dependencies/blocked_by -F issue_id=<blocker-db-id>`, where the id comes from `gh api repos/{{repo}}/issues/<n> --jq .id`. Where dependencies are not available, a `Blocked by: #<n>, #<n>` line at the top of the child body. A ticket is unblocked when every blocker is closed.
- Frontier: `gh issue list --state open` scoped to the map's children; drop any with an open blocker or an assignee; the first in map order wins.
- Claim: `gh issue edit <n> --add-assignee @me`, the session's first write.
- Resolve: `gh issue comment <n> --body "<answer>"`, then `gh issue close <n>`, then edit the map body: `gh issue view <map> --json body --jq .body > map.md`, append the one-line pointer to Decisions so far, `gh issue edit <map> --body-file map.md`.
