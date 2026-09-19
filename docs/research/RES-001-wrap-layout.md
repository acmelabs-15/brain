# RES-001: How brain carries agent-skills for four hosts

Date: 2026-09-19. Status: evidence gathered, decision open.

## Question

brain is one install that wraps addyosmani/agent-skills and adds its own skills.
It must work in Claude Code, Codex CLI, Gemini CLI and Antigravity CLI.
How does the repo carry addy's skills, and how does it follow upstream?

## What each host reads

| Host | Manifest | Skills folder | Plugin needs another plugin | Every-turn instructions from the plugin |
|---|---|---|---|---|
| Claude Code | `.claude-plugin/plugin.json` | `skills/<name>/SKILL.md`, or paths the manifest lists | yes, `dependencies` | yes, an output style with `force-for-plugin` |
| Codex CLI | root `plugin.json` (agent-plugins.org schema) or `.codex-plugin/plugin.json` | `skills/<name>/SKILL.md`, one level | no | no; `AGENTS.md` in the user's repo |
| Gemini CLI | `gemini-extension.json` at repo root | `skills/<name>/SKILL.md` | no | yes, `contextFileName` (a `GEMINI.md` in the extension) |
| Antigravity CLI | root `plugin.json` (`name`, `description` only) | `skills/` | no | `rules/` in the plugin, always-on rules unverified; else `AGENTS.md` in the workspace |

Sources: https://developers.openai.com/plugins/build/plugins ,
https://developers.openai.com/codex/skills , https://geminicli.com/docs/extensions/reference/ ,
https://geminicli.com/docs/extensions/writing-extensions/ , https://antigravity.google/docs/cli/plugins/ ,
https://code.claude.com/docs/en/plugins-reference , https://code.claude.com/docs/en/output-styles

Two facts decide the layout:

- Only Claude Code can require another plugin. In the other three hosts a plugin
  must carry every skill file it wants the agent to see.
- Codex drops symlinks when it copies a plugin into its cache
  (mattpocock/skills, `.agents/adr/0002`). A link into another folder arrives empty.

So addy's skills must exist as real files inside brain's own `skills/` folder.

## What other multi-host repos do

Six repos ship for three or more of the four hosts:
addyosmani/agent-skills, obra/superpowers, EveryInc/compound-engineering-plugin,
fcakyon/claude-codex-settings, pendo-io/novus-plugin, juftin/skills.

They share one shape:

- one `skills/` tree, flat, `skills/<name>/SKILL.md`
- one metadata-only manifest per host at the root
- one script or release bot that writes one version into every manifest
- where commands exist, one folder per host format (`.md` for Claude, `.toml` for Gemini and Antigravity)

Examples of the version script: obra/superpowers `scripts/bump-version.sh` with `.version-bump.json`;
pendo-io/novus-plugin `scripts/set-version.sh` and `check-version.sh`;
fcakyon `.github/scripts/sync-versions.sh` with `.claude-plugin/plugin.json` as the source of truth.

## How repos in the wild bundle another project's skills

| Repo | Mechanism | Update | Pain they state |
|---|---|---|---|
| antfu/skills | git submodules under `vendor/`, `meta.ts` maps source skill to output name, copy into `skills/`, a `SYNC.md` per skill with source, SHA, date | `pnpm start check`, then `pnpm start sync` | "Do NOT modify synced skills manually." Submodules need an init step after clone |
| fcakyon/claude-codex-settings | one shell script per vendor: clone to a work dir, delete target, copy `SKILL.md` and listed subfolders, inject a `license:` line | re-run the script, commit the diff | no lockfile; 20 vendors, 20 scripts |
| zhengfran/dotconfig | lockfile `.skill-lock.json` with source URL, path and folder hash; shallow clone; copy changed folders | `skills-update`, `--force` | reports a conflict when a local edit meets an upstream change |
| Asymmetric-al/core | shallow clone at a ref, copy in | `bun run skills:refresh-upstream` | "Re-apply any repo-specific notes if the refresh overwrote them" |

No skills repo found in the wild uses `git subtree` for this.

## Local test: git subtree with only addy's skills folder

Tested on 2026-09-19 in a scratch repo, against a full clone of agent-skills.

| Step | Result |
|---|---|
| `git subtree split --prefix=skills` on the addy clone | a 162-commit history of `skills/` alone |
| `git subtree add --squash --prefix=skills` into an empty prefix | addy's 25 skills at `skills/`, no vendor folder, 2 commits |
| same for `references/` | 7 checklists at `references/` |
| add `skills/brain-own/` beside them, then pull an upstream change | brain's skill kept; upstream edit, new skill and a deletion all arrived |
| brain edits a vendored file, upstream edits the same file, pull | merge conflict, as expected |

Gotchas from the git source and man page: `add` dies if the prefix folder already
exists; every merge must use `--squash` once the first one did; the update needs a
full clone plus a split before each pull, so it is a script, not a one-liner.
Source: https://github.com/git/git/blob/master/contrib/subtree/git-subtree.txt

## The skills.sh CLI

`npx skills add owner/repo` writes to `.claude/skills/` for Claude Code and to
`.agents/skills/` for Codex, Gemini CLI and Antigravity. It honours the `skills`
array in `.claude-plugin/plugin.json`. Its project-scope lockfile is an open issue
(vercel-labs/skills #155). It is a per-project copy, not a plugin install.
Source: https://github.com/vercel-labs/skills/blob/main/README.md

## Layout options

All three keep the shape every multi-host repo uses: flat `skills/`, `references/`
at the root, one manifest per host, one version script. They differ in how addy's
files get in and stay current.

### A. Pin and sync

- `upstream.json` at the root pins agent-skills to a SHA and lists the skills, references and agents to take.
- `bun run sync` fetches that SHA into a temp folder, copies the listed folders into `skills/`, `references/`, `agents/`, and writes their hashes into the pin file.
- CI runs the sync in check mode and fails if a vendored file differs from the pin.
- brain never edits a vendored file. A change goes upstream as a pull request.
- Update: bump the SHA, run the sync, read the diff, commit.
- No vendor folder, no submodule, no git subtree. This is the pattern three repos in the wild use.

### B. git subtree of addy's skills folder

- Same tree on disk as A.
- `bun run upstream:pull` clones addy, splits `skills/` and `references/`, and pulls them with `--squash`.
- brain may edit a vendored file; git merges the upstream change into it three-way, and a clash shows as a conflict.
- Update: run the script, resolve any conflict, commit.
- No repo in the wild does this for skills; the mechanism is tested here and documented by git.

### C. Vendor folder plus copy

- addy's whole repo under `vendor/agent-skills/` as a submodule or subtree, and a copy step into `skills/`.
- Each vendored file exists twice in the tree.
- This is antfu's pattern. Peter said on 2026-09-19 that he does not like this layout.

## What is not yet settled

- Whether Antigravity honours always-on `rules/` shipped by a plugin.
- Whether Gemini CLI discovers skills two levels deep inside an extension. brain keeps one level, so this does not bind.
- Codex and Antigravity both read a root `plugin.json` with different schemas. addy resolves it by giving Codex `.codex-plugin/plugin.json` and Antigravity the root file. brain can do the same.
