# Channels in Vercel Board

Source: https://vercel.com/docs/board/concepts/channels, read on 2026-11-25, 108 lines in the Markdown copy.

## What this page covers

This page defines a channel: a named path on a board that holds threads. It gives the naming rule for a channel path and says that a path never changes. It shows the two ways to create a channel (the first post, or `channels create`) and the permissions that creation needs. It explains how a `/` groups channels into subtrees, and how a trailing slash names a whole subtree in commands and grants. It ends with who can use a channel on a new board, how grants and private channels change that, and how sync to Slack, GitHub or Linear affects who can read a channel.

## Facts

### Page metadata (front matter)

- The page title is "Channels in Vercel Board". (L2)
- The page description says a channel is "a named path on a board, such as dev or www/production, that holds threads". The description text stops after "grouped into..." and is cut off. (L3)
- The page URL is `https://vercel.com/docs/board/concepts/channels`. (L4)
- The field `last_updated` has the value `2018-10-20`. (L5)
- The front matter lists four related pages: `/docs/board/concepts/boards`, `/docs/board/concepts/threads`, `/docs/board/access` and `/docs/board/concepts/sync`. (L6-10)
- The field `install_vercel_plugin` has the value `npx plugins add vercel/vercel-plugin`. (L11)
- The field `search_with_vercel_cli` has the value `npx vercel@latest docs search "<query>"`. (L12)
- The field `search_kb_with_vercel_cli` has the value `npx vercel@latest kb search "<query>"`. (L13)

### Channels in Vercel Board (introduction)

- Concept "channel": a named path on a board. (L18)
- The page gives three example channel paths: `dev`, `errors-www` and `www/production`. (L18)
- A channel holds threads. (L18)
- Access to a board is decided channel by channel. (L18)
- Board is an Experimental feature, and it is available on all plans. (L20)

### Names

- A channel path has one or more segments. (L24)
- A segment contains only lowercase letters, numbers, `_` (underscore) and `-` (hyphen). (L24)
- The segments are joined by `/`. (L24)
- A channel path never changes. (L24)

### How a channel is created

- Command `vercel board post <channel> "<text>"`: the example posts the text "deploy failed on a1b2c3" to the channel `errors-www`. The example caption says this creates the `errors-www` channel with its first post. (L29, L33)
- Command `vercel board channels create <channel>`: the example creates the channel `dev/alerts`. The caption calls the result "an empty channel". (L30, L33-34)
- Rule: the first post to a channel creates that channel. Channels need no setup. (L36)
- Rule: `channels create` makes a channel before anything posts to it. The page gives two reasons: a watcher can follow the channel, or people can find it. (L37)
- Rule: when `channels create` names a channel that already exists, that channel stays as it is. (L37)
- Permission rule: creating a channel takes the `read` and `post` permissions in that channel. (L38)

### Subtrees

- A `/` in a path groups channels. (L42)
- Example: `www/production` and `www/preview` both sit under `www/`. (L42)
- Rule: a path with a trailing slash (for example `www/`) names the whole subtree. This works "wherever a channel goes". (L44)
- Command `vercel board read www/`: reads every channel under `www/`. (L47, L52)
- Command `vercel board tail www/ --label kind=bug`: follows bugs in every channel under `www/`. The flag `--label` takes a `key=value` pair; the example value is `kind=bug`. (L48, L52)
- Command `vercel board grants create --user ada@acme.com --can 'www/=all'`: grants access to the whole `www/` subtree. The flag `--user` takes an email address. The flag `--can` takes `<channel or subtree>=<permission>`; the example permission is `all`. (L49, L52-53)

### List channels

- Command `vercel board channels` (no arguments): lists the channels that you can read. (L57)
- The list is grouped by path prefix. (L57)
- A channel that you cannot read does not appear in the list. (L57)

### Who can use a channel

- Default on a new board: the whole team can use every channel. (L61)
- "The whole team" covers three kinds of actor: every person (within that person's team role), the deployments of every project, and every installed app. (L61)
- Grants change the default. A grant can apply to one channel, to a subtree, or to the whole board. (L61)
- Use case: close a channel to all but a few people. The procedure is on the access page. (L63)
- Use case: create a private channel that only you can use. The command is `vercel board channels create <channel> --private`. The procedure is on the access page. (L64)
- Flag `--private` on `channels create`: makes the new channel private to the person who creates it. (L64)
- Rule: the grants of a channel apply on the board only. (L66)
- Rule: a channel that syncs with a Slack channel, a GitHub repository or a Linear team is as readable as that platform channel. (L66)
- The sync page has a section on how to prevent data spills when you sync. (L66)

### Related

- The Related section lists three pages: Boards, Threads and "Board Access Control". (L68-72)

### Search the docs from your terminal

- This section is general Vercel documentation text, not Board text. (L74-85)
- The Vercel CLI can search the Vercel docs and print docs pages as Markdown. No login is necessary. (L76)
- Command `npx vercel@latest docs search "<keyword>"`: finds docs pages by keyword. (L80-81)
- Command `npx vercel@latest docs inspect <page>`: prints a docs page as Markdown. The argument is a path or a URL. (L84)

### Search guides from your terminal

- This section is general Vercel documentation text, not Board text. (L87-101)
- The Vercel CLI can search the Knowledge Base and print guides as Markdown. No login is necessary. (L89)
- Command `npx vercel@latest kb search "<keyword>"`: finds guides by keyword. (L93-94)
- Command `npx vercel@latest kb` (no arguments): shows the latest guides. (L97)
- Command `npx vercel@latest kb inspect <guide>`: prints a guide as Markdown. The argument is a slug or a URL. (L100)

### Footer

- A link goes to the full sitemap at `/docs/sitemap`. (L105)
- Feedback about wrong information, missing information or missing capabilities goes through the instructions at `https://vercel.com/feedback.md`. (L108)

## Code and command examples

L28-31: create a channel with its first post, and create an empty channel.

```bash filename="terminal"
vercel board post errors-www "deploy failed on a1b2c3"
vercel board channels create dev/alerts
```

L46-50: use a trailing slash to read, follow and grant on a whole subtree.

```bash filename="terminal"
vercel board read www/
vercel board tail www/ --label kind=bug
vercel board grants create --user ada@acme.com --can 'www/=all'
```

L57 (inline in prose): list the channels that you can read.

```bash
vercel board channels
```

L64 (inline in prose): create a private channel that only you can use.

```bash
vercel board channels create <channel> --private
```

L78-85: search the Vercel docs and print a docs page from the terminal (general Vercel text).

```bash
# Find docs pages by keyword
npx vercel@latest docs search "environment variables"
npx vercel@latest docs search "function timeout"

# Print a docs page as Markdown, by path or URL
npx vercel@latest docs inspect <page>
```

L91-101: search the Knowledge Base, show the latest guides and print a guide (general Vercel text).

```bash
# Find guides by keyword
npx vercel@latest kb search "rewrites and redirects"
npx vercel@latest kb search "AI SDK streaming"

# Show the latest guides
npx vercel@latest kb

# Print a guide as Markdown, by slug or URL
npx vercel@latest kb inspect <guide>
```

L11-13 (front matter values, not a fenced block on the page): install the Vercel plugin, and search the docs and the Knowledge Base.

```bash
npx plugins add vercel/vercel-plugin
npx vercel@latest docs search "<query>"
npx vercel@latest kb search "<query>"
```

## Links to other pages

- `/docs/board/concepts/boards` (L7, L18, L70): the board concept. This page says a channel is a named path on a board.
- `/docs/board/concepts/threads` (L8, L18, L71): the thread concept. This page says a channel holds threads.
- `/docs/board/access` (L9, L61, L72), titled "Board Access Control": grants, which change who can use a channel, a subtree or the whole board.
- `/docs/board/access#close-a-channel-to-all-but-a-few-people` (L63): how to close a channel to all but a few people.
- `/docs/board/access#create-a-private-channel` (L64): how to create a private channel that only you can use.
- `/docs/board/concepts/sync` (L10, L66): sync of a channel with a Slack channel, a GitHub repository or a Linear team.
- `/docs/board/concepts/sync#prevent-data-spills-when-you-sync` (L66): how to prevent data spills when a channel syncs to another platform.

Links that are not Board pages:

- `/docs/sitemap` (L105): the full Vercel docs sitemap.
- `https://vercel.com/feedback.md` (L108): instructions for feedback to Vercel.

## What this page does not say

Naming:

- The page gives no maximum length for a path or a segment, and no maximum number of segments.
- The page does not say if a segment can be empty (for example `a//b`), or if a path can start with `/`.
- The page does not say if a segment can start or end with `_` or `-`.
- The page does not say what happens to an invalid name: an error (and which error code), or a change to lowercase.
- The page does not say if names are unique per board, per team or globally.
- "A channel's path never changes" (L24) suggests that there is no rename. The page does not say this directly. It also does not say if a channel can be deleted or archived, or what happens to its threads.

Subtrees:

- The page does not say if `www` (no slash) can be a channel when `www/production` also exists.
- The page does not say if the subtree `www/` includes a channel named `www`.
- The page does not say if a subtree includes deeper levels, for example `www/a/b`. "The whole subtree" (L44) suggests yes, but it is not explicit.
- "Wherever a channel goes" (L44) is unclear for write commands. The page does not say what `vercel board post www/ ...` does.
- The page does not say if a subtree grant applies to channels that are created under that subtree later.

Creation:

- L38 says that creating a channel takes `read` and `post`. It is unclear if this rule also applies when the first post creates the channel (L36).
- L37 says an existing channel "stays as it is". The page does not say if the command then returns an error, a warning or success.
- The page does not say what `channels create <channel> --private` does when the channel already exists. By L37 the channel probably stays public, but the page does not confirm this.
- The page does not say who can create a new channel inside a subtree when the creator has no grant there.
- The term "watcher" (L37) is not defined on this page.

Listing and reading:

- The page does not show the output format of `vercel board channels`, or what "grouped by path prefix" (L57) means for paths with several levels.
- The page does not say who "you" is when the caller is a deployment or an installed app (L57, L61).
- The page does not define `read` (reach of history, paging) or `tail` (live stream, polling, end condition).
- The page does not define labels. It uses `--label kind=bug` (L48) but does not say which keys and values exist, or if `--label` can repeat.

Access:

- The page names three permissions: `read` (L38, L57), `post` (L38) and `all` (L49). It does not give the full list, or what `all` contains.
- The page does not say how a team role limits a person (L61), or which roles exist.
- The page does not say if a private channel (L64) can later get more members, or if team admins can still see it.
- L18 says access is decided "channel by channel", but L61 says a grant can apply to the whole board. These two statements are not a contradiction, but L18 is less exact than L61.
- L66 says a synced channel "is as readable as that platform channel". The page does not say exactly which direction this goes: who on the other platform can read board content, and if board grants then have no effect for readers.
- The page does not say if a private channel can sync, or if a synced channel can be made private.

Limits and status:

- The page gives no limits: channels per board, threads per channel, or rate limits.
- The page does not say what "Experimental" (L20) means for stability, breaking changes or data retention.

Unclear or broken points in the page:

- The front matter description is cut off after "grouped into..." (L3).
- `last_updated: 2018-10-20` (L5) looks wrong for a feature that the page calls Experimental.
- The front matter lists the sync page as related (L10), but the Related section (L68-72) does not list it.
- The example captions (L33, L52) contain backslash-escaped backticks, for example `\`errors-www\``. This looks like an escaping error in the Markdown copy.
