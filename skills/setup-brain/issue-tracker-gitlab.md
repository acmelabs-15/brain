# Issue tracker: GitLab

Adapted from mattpocock/skills, MIT, commit c55ee46. Repo: {{repo}}.

Issues for this repo live as GitLab issues. Use the `glab` CLI for every operation. The spec and the plan live in the repo, at `SPEC.md` or under `spec/`, and under `tasks/`.

## Conventions

- Create an issue: `glab issue create --title "..." --description "..."`, with a heredoc for a long description.
- Read an issue: `glab issue view <number> --comments`; `-F json` for machine-readable output.
- List issues: `glab issue list -F json` with `--label` filters.
- Comment: `glab issue note <number> --message "..."`. GitLab calls comments notes.
- Labels: `glab issue update <number> --label "..."` or `--unlabel "..."`. A label that does not exist yet is created first: `glab label create --name "<name>" --description "<meaning>"`.
- Close: post the explanation as a note first, then `glab issue close <number>`.
- Merge requests: `glab mr create`, `glab mr view`, `glab mr note`, the same shape as `gh pr ...` with `mr` for `pr` and `note --message` for `comment --body`.

`glab` infers the repo from `git remote -v` inside a clone.

## Merge requests as a triage surface

MRs as a request surface: no. Set to `yes` if this repo treats external merge requests as feature requests; the triage skill reads this flag.

When `yes`, MRs run through the same labels and states as issues with the `glab mr` equivalents: `glab mr view <number> --comments` and `glab mr diff <number>` to read; `glab mr list -F json`, keeping the MRs whose author is not a project member; `glab mr note`, `glab mr update --label` or `--unlabel`, `glab mr close`.

GitLab numbers issues and MRs separately, so `#42` is unambiguous once the surface is known.

## When a skill says "publish to the issue tracker"

Create a GitLab issue.

## When a skill says "fetch the relevant issue"

Run `glab issue view <number> --comments`.

## Wayfinding operations

Used by the wayfinder skill. The map is one issue; its child issues are the tickets.

- Map: one issue labelled `wayfinder:map`, holding the Notes, Decisions so far and Fog body: `glab issue create --label wayfinder:map`. An epic may hold the map on tiers that have epics; a labelled issue works everywhere.
- Child ticket: an issue with `Part of #<map>` at the top of its description and a `wayfinder:<type>` label, one of `research`, `prototype`, `interview`, `task`. A claimed ticket is assigned to the driving developer.
- Blocking: GitLab's native blocking link, added as a note with the quick action: `glab issue note <child> --message "/blocked_by #<blocker>"`. Native links are a Premium or Ultimate feature; on the free tier, a `Blocked by: #<n>, #<n>` line at the top of the description. A ticket is unblocked when every blocker is closed.
- Frontier: `glab issue list -F json` scoped to the map's children; drop any with an open blocker (`glab api projects/:id/issues/:iid/links`) or an assignee; the first in map order wins.
- Claim: `glab issue update <n> --assignee @me`, the session's first write.
- Resolve: `glab issue note <n> --message "<answer>"`, then `glab issue close <n>`, then edit the map description with `glab issue update <map> --description "$(cat map.md)"` after appending the one-line pointer to Decisions so far.
