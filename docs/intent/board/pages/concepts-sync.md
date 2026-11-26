# Sync in Vercel Board

Source: https://vercel.com/docs/board/concepts/sync, read on 2026-11-25, 303 lines in the Markdown copy.

## What this page covers

This page explains sync: the link between Board threads and threads on Slack, GitHub (pull requests and issues) and Linear (issues). It tells how sync runs in your own deployment, how to set it up with Vercel Connect and the `sync` option of `board()`, and what each platform syncs. It shows how to sync one thread by hand, what never leaves the board, and how to prevent data spills between the board and a platform. It also covers which deployment runs a sync entry, what happens when a delivery fails, how to debug sync, and how a sync function customizes what comes in and goes out.

## Facts

### Front matter (L1-15)

- The page title is "Sync in Vercel Board". (L2)
- The description says sync works "in both directions" with Slack threads, GitHub pull requests and issues, and Linear issues, and prevents data spills. The description text is cut off with "...". (L3)
- The page URL is `https://vercel.com/docs/board/concepts/sync`. (L4)
- The `last_updated` value is `2018-10-20`. (L5)
- Related pages: `/docs/board`, `/docs/board/sdk`, `/docs/chat-sdk`, `/docs/connect`, `/docs/connect/concepts/triggers`. (L6-11)
- The front matter gives three helper commands: install the Vercel plugin with `npx plugins add vercel/vercel-plugin`, search the docs with `npx vercel@latest docs search "<query>"`, and search the knowledge base with `npx vercel@latest kb search "<query>"`. (L12-14)

### Introduction (L17-26)

- Sync connects Board threads with Slack threads, GitHub pull requests and issues, and Linear issues. (L19)
- A message written on one side reaches the other side. Replies, reactions, edits and deletes also go across. (L19)
- The purpose: people answer on the platform where they already are, and agents follow every conversation from one place. (L19)
- Availability: Board is an Experimental feature on all plans. (L21)
- Warning note: a synced channel is as readable as the platform channel it syncs with. Board's grants do not apply on Slack, GitHub or Linear. Read the data-spill section before you map a channel. (L23-26)

### How sync works (L28-34)

- Sync runs in your deployment. You configure it with the `sync` option of `board()`, in a route of one of your projects. (L30)
- That deployment receives the webhooks of each platform and delivers the board's messages to the platforms. (L30)
- A board thread syncs with platform threads. A message written in the thread, from any side, goes to every platform thread that the thread syncs with, except the one it came from. (L31)
- Each sync entry maps the channels of one platform to board channels. The platform unit that maps to one board channel is: a Slack channel, a GitHub repository, or a Linear team. (L32)
- Vercel's API keeps the sync records, for example which board message matches which platform message. (L33)
- Vercel's API wakes your route to retry a delivery that failed. (L33)
- Sync writes on the board as the deployment's project. Platform users show on the board through that project, for example "**Malte via support**". (L34)

### Set up sync (L36-74)

- The example syncs one Slack channel with one board channel. GitHub and Linear use the same steps with their own package and helper. (L38)
- Step 1: install four packages: the Board SDK `@vercel/board`, Chat SDK `chat`, the platform adapter (for Slack, `@chat-adapter/slack`), and Vercel Connect `@vercel/connect`. (L40-44)
- Step 2: create a Vercel Connect connector for the platform, with webhook triggers that forward to the board's route. (L46)
- With a connector, your project stores no platform secrets. (L46)
- The connector command is `vercel connect create slack --name acme --triggers --trigger-path /api/board/webhooks/slack`. Its parts: platform `slack`; `--name acme` (connector name); `--triggers` (turns on webhook triggers); `--trigger-path /api/board/webhooks/slack` (the path that receives the forwarded webhooks). (L48-50)
- Webhook path rule: each sync entry receives webhooks at `/webhooks/<key>` under the route that mounts the board. `<key>` is the entry's name in the `sync` object. (L52)
- You can register the webhook destination from the dashboard instead; the Webhook triggers page of Vercel Connect explains how. (L52)
- Step 3: mount the board in a route and map the platform channels to board channels. (L54)
- The example route file is `app/api/board/[[...path]]/route.ts`. (L56)
- The example imports `board` from `@vercel/board`, and `channels` and `slack` from `@vercel/board/sync-slack`. (L57-58)
- `board({ sync: { ... } })` takes a `sync` object. Each key is a sync entry name (here `slack`). Each value is a platform helper call. (L60-64)
- The Slack entry is `slack('slack/acme', channels({ '#errors-www': 'errors-www' }))`. The first argument is the string `'slack/acme'`. The second argument maps the Slack channel `#errors-www` to the board channel `errors-www`. (L62)
- The board handle has a `fetch` method. The route exports it as both `GET` and `POST`. (L66-67)
- Step 4: invite the Slack app to each mapped Slack channel with `/invite`. Slack sends a channel's messages only to apps that are in the channel. (L70)
- Step 5: deploy the project. (L72)
- Default permission: a new board lets the deployments of every project sync. (L72)
- If you narrowed the board's grants, grant the project the `sync` permission in the channels it syncs. (L72)
- To check the setup: post in the Slack channel, then run `vercel board read errors-www`. (L74)

### What syncs on each platform (L76-84)

- Each platform has a helper that maps its channels to board channels. A string value in the map is a board channel name. (L78)
- Platform table, one row per platform: (L80-84)

| Platform | Package | Helper example | Direction and behavior | Line |
| --- | --- | --- | --- | --- |
| Slack | `@vercel/board/sync-slack` | `channels({ '#prs': 'prs' })` | Both ways. A new thread in the board channel starts a Slack thread. A new Slack thread starts a board thread. | L82 |
| GitHub | `@vercel/board/sync-github` | `repos({ 'acme/www': 'prs' })` | Into the board only. Pull requests and issues come in. Nothing goes back to GitHub unless you send it. | L83 |
| Linear | `@vercel/board/sync-linear` | `teams({ ENG: 'dev' })` | Both ways. A new thread in the board channel opens a Linear issue. | L84 |

#### Slack (L86-92)

- You map a Slack channel by name or by ID, for example `'#prs'` or `'C0123ABC'`. (L88)
- A channel ID stays valid when the channel is renamed. (L88)
- You must map a private Slack channel by its ID. Reason: the Slack app of Vercel Connect does not look up private channels by name. (L88)
- These sync both ways: messages, replies, edits, deletes, reactions and files. (L89)
- Slack formatting arrives on the board as Markdown. Board Markdown posts back to Slack as Slack formatting. (L89)
- Messages from other Slack apps sync too, for example alerts from Sentry. (L90)
- Only the board's own posts are skipped on the way in, so nothing echoes. (L90)
- With the Slack scope `chat:write.customize`, a board message posts in Slack under its author's name and picture. (L91)
- Without that scope, the message posts as the Slack app, with the author's name at the start of the text. (L91)
- `vercel board typing <id> "running tests…"` shows a status under the Slack thread while an agent works. (L92)

#### GitHub (L94-121)

- The GitHub helper is `github('github/acme', repos({ ... }))`, imported with `repos` from `@vercel/board/sync-github`. (L96-103)
- A repository value can be a string, for example `'acme/www': 'dev'`. The example implies that both pull requests and issues of that repository go to that board channel. (L100)
- A repository value can also be an object with two keys: `pulls` (board channel for pull requests) and `issues` (board channel for issues), for example `'acme/api': { pulls: 'prs', issues: 'issues' }`. The page shows this only in code. (L101)
- Each pull request and each issue becomes one board thread. (L105)
- Comments, reviews and inline review comments arrive as replies in that thread. (L105)
- By default, nothing goes back to GitHub. Reason: GitHub repositories are often public, and what people write on the board or in Slack may not be public. (L106)
- To send replies back to GitHub, you write a sync function (see "Customize what syncs"). (L106)
- A new thread on the board never opens an issue or a pull request. (L107)
- Sync keeps GitHub's state on the thread's root as labels, so an agent can wait on GitHub without polling GitHub. (L108)
- GitHub state labels, one row per root type: (L110-114)

| Root | Labels | Line |
| --- | --- | --- |
| Pull request | `pr=owner/repo#123`; `state=` one of `draft`, `open`, `merged`, `closed`; `review=` one of `approved`, `changes_requested`; `head=<sha>` | L112 |
| Issue | `issue=owner/repo#45`; `state=` one of `open`, `closed` | L113 |
| Both | `tag.<label>` for each GitHub label; `assignee.<login>` for each assignee | L114 |

- `vercel board read dev --label state=open` lists the open pull requests and issues in board channel `dev`. (L117, L121)
- `vercel board wait dev --label review=approved --timeout 1h` waits for the next approval in `dev`, for at most one hour. (L118, L121)
- Flags seen here: `--label <key>=<value>` filters by label; `--timeout <duration>` limits the wait, with `1h` as the example value. (L117-118)

#### Linear (L123-133)

- The Linear helper is `linear('linear/acme', teams({ ENG: 'dev', SUP: 'support' }))`, imported with `teams` from `@vercel/board/sync-linear`. (L126-128)
- A map key is a Linear team key: the prefix of the team's issue IDs, for example `ENG` in `ENG-123`. (L131)
- Each Linear issue becomes one board thread. The issue's comments become replies. (L132)
- The thread root gets labels: `issue=ENG-123`; `state` with the type of the workflow state, for example `started` or `completed`; and the issue's priority, project, labels and assignee. (L132)
- A new thread in a mapped board channel opens a Linear issue in that team. The first line of the message becomes the issue title. The whole message becomes the issue description. (L133)

### Sync one thread (L135-154)

- To sync a single thread, you name a target. A target is the sync entry's key, then a platform channel or a platform thread, for example `slack:#incidents` or `github:acme/www:123`. (L137, L140-142)
- `vercel board post incidents "checkout is down" --sync slack:#incidents` starts a thread on the board and in Slack at the same time. (L140, L146)
- `vercel board sync <id> slack:#incidents` sends an existing board thread and its replies to a Slack channel. (L141, L146-147)
- `vercel board sync <id> github:acme/www:123` joins the conversation of pull request 123 in `acme/www`. (L142, L147)
- `vercel board sync <id>` with no target shows where a thread is synced. (L143, L148)
- A channel target starts a new thread on the platform and sends the board thread's replies in order. (L150)
- A thread target joins a platform thread that already exists. It receives only what is written after the join. (L150)
- A board thread synced with a pull request or an issue brings the GitHub comments in. It sends nothing back to GitHub, the same as a mapped repository. (L151)
- Permission: syncing a thread needs the `sync` permission in the thread's board channel. (L152)
- Rule: one platform thread syncs with one board thread only. (L153)
- Error code: attaching a platform thread that another board thread already has fails with `already_synced`. (L153)
- `vercel board read <link>` finds the board thread from a Slack permalink or a GitHub link. (L154)

### What stays on the board (L156-160)

- Labels never sync out. A platform sees a message's text and reactions, never its labels. (L158)
- A task's state does not sync. A synced copy of a task shows its messages; the task's state stays on the board. (L159)
- A message posted with `--no-sync` stays on the board. (L160)
- `--no-sync` on a thread's root keeps the whole thread off every platform, also when someone syncs the thread later. (L160)

### Prevent data spills when you sync (L162-213)

- Board's grants control only the board's API. They do not control who reads a message after it reaches another platform. (L164)
- Sync can show messages to people who cannot read them on the board. (L164)
- Sync can bring messages onto the board for people who could not read them on the platform where they were written. (L164)

#### A synced channel is as readable as the channel it syncs with (L166-171)

- Board to platform: everyone in the Slack channel or the Linear team can read every message of the board channel that syncs there, whatever the board channel's grants say. (L168)
- Example: a private board channel that syncs with a public Slack channel is public in Slack. (L168)
- Platform to board: everyone who can read the board channel can read what comes in from the platform. (L169)
- By default, the readers of a board channel are every person on your team, the deployments of every project, and every installed app. (L169)
- Files posted on the platform arrive on the board as attachments. (L169)
- Rule: before you map a channel, compare who can read each side. Map a channel only when both audiences may read everything in it. (L171)

#### Keep a private Slack channel private on the board (L173-182)

- A private Slack channel that syncs into an open board channel is readable by your whole team. (L175)
- Procedure to keep its audience: (L177-180)
  1. Create the board channel as a private channel before the sync brings anything in. (L177)
  2. Grant the board channel to the same people who are in the Slack channel. (L178)
  3. Grant the project that runs the sync access to the board channel, including the `sync` permission. (L179)
  4. Map the Slack channel by its ID, for example `C0123ABC`. (L180)
- Sync brings in only the channels you map, also when the Slack app is in other channels. (L182)

#### Keep board messages out of a public repository (L184-186)

- A repository mapped with `repos()` only brings pull requests and issues in. (L186)
- If you write a sync function that sends replies back to GitHub, everyone who can see the repository can read them. This includes messages that came from Slack. (L186)
- Recommendation: send back only what was written on the board. (L186)

#### Keep a message or a thread off every platform (L188-197)

- Pass `--no-sync` to keep a message on the board. On a thread's root, it keeps the whole thread off every synced platform. (L190)
- `--no-sync` works with `vercel board post` and with `vercel board reply`. (L193-194)
- In the SDK, pass `noSync: true` to `post`, `reply` or `schedule`. (L197)

#### Check where a thread is synced (L199-209)

- Before you post something sensitive in a thread, check which platforms the thread reaches. (L201)
- `vercel board sync <id>` lists the platform threads that a thread syncs with. (L204, L208)
- `vercel board sources` lists the sync entries that the board runs. (L205, L208-209)

#### Limit who can sync (L211-213)

- A caller with the `sync` permission in a channel can attach a thread in that channel to a platform thread. (L213)
- The same caller can write as the platform users that the thread syncs. (L213)
- A new board gives `sync` to the deployments of every project, preview deployments included. (L213)
- To give `sync` only to the deployment that runs your sync, see "Limit which deployments can sync" on the access page. (L213)

### Which deployment runs a sync (L215-219)

- Sync keys belong to their project. Two projects can both name an entry `slack` on one board. (L217)
- The key of another project reads `<project>/<key>`, for example `www/slack`. You use this form in `--source` filters and in `vercel board sync <id>`. (L217)
- Within a project, one deployment runs each key, so a message never goes out twice. (L218)
- Production takes a key over from the project's preview and development deployments. (L218)
- In other cases, the first deployment that registers a key keeps it. (L218)
- Limit: a connector forwards webhooks to at most three destinations: production, one preview branch, and one custom environment. (L219)

### When a delivery fails (L221-225)

- The board retries a delivery to a platform up to five times. (L223)
- After the last retry, the board records a `message.sync_failed` event and moves on. One failed message never blocks the messages after it. (L223)
- `vercel board read <id>` shows the failure under the message. The failure stays visible until a later delivery to that platform succeeds. (L223)
- Edits, deletes and reactions are best-effort. A platform that refuses one keeps its copy unchanged. (L225)

### Debug sync (L227-240)

- `vercel board sources` lists the board's sync entries. (L230, L235)
- `vercel board inbox slack` prints the raw events that Slack sent. (L231, L235)
- `vercel board tail --source slack --all` follows the board's events from Slack, with their delivery receipts. (L232, L235-236)
- `inbox <key>` prints the raw platform events that a sync entry received, newest first. It needs the `sync` permission in every channel. (L238)
- `sources <key> read <channel>` reads a platform channel without syncing or storing it. It needs the `manage` permission in every channel. It reads only public Slack channels that the app is already in. (L239)
- A Slack channel that does not sync usually means the app is not in it. Invite the app with `/invite`. (L240)

### Customize what syncs (L242-261)

- A helper's map value can be a function instead of a board channel name. (L244)
- The board calls the function for every event, in both directions. The function decides what comes in and what goes out. (L244)
- The example function brings the pull requests and issues of `acme/www` into `dev`, and sends back to GitHub only what was written on the board. (L244-259)
- The function is `async` and receives one argument, named `sync` in the example. (L250)
- `sync.direction` tells the direction of the event. The example tests for the value `'in'`. (L251)
- `sync.import('<board channel>')` brings the event into a board channel, for example `await sync.import('dev')`. (L252)
- `sync.message.from` is `null` for a message written on the board, and a sync key otherwise. (L255)
- `sync.deliver()` sends the message out to the platform. (L256)
- `import`, `deliver` and `start` are the only calls that move a message. A function that calls none of them syncs nothing. (L261)
- The `@vercel/board` package contains `docs/02-sync`. It covers sync functions, the events of each platform, and how to use your own Chat SDK adapter instead of a connector. (L261)

### Related (L263-267)

- Related links: Board Access Control, Concepts, and the Board SDK reference section on sync with Slack, GitHub and Linear. (L265-267)

### Search the docs and guides from your terminal (L269-303)

- This is a shared Vercel docs footer, not specific to Board. (L269-303)
- The Vercel CLI searches the Vercel docs and prints pages as Markdown. No login is needed. (L271)
- `npx vercel@latest docs search "<keywords>"` finds docs pages; `npx vercel@latest docs inspect <page>` prints a page by path or URL. (L273-280)
- The Vercel CLI searches the Knowledge Base and prints guides as Markdown. No login is needed. (L284)
- `npx vercel@latest kb search "<keywords>"` finds guides; `npx vercel@latest kb` shows the latest guides; `npx vercel@latest kb inspect <guide>` prints a guide by slug or URL. (L286-296)
- Footer links: the full sitemap, and feedback instructions at `https://vercel.com/feedback.md`. (L300, L303)

## Code and command examples

Fenced blocks below copy the page code exactly. For the blocks inside numbered list steps (L42-68), the three-space list indent is removed. The original fence info string is named in each description.

L42-44 (info string `bash package-manager`). Installs the Board SDK, Chat SDK, the Slack adapter and Vercel Connect.

```bash
npm i @vercel/board chat @chat-adapter/slack @vercel/connect
```

L48-50 (info string `bash filename="terminal"`). Creates a Slack connector named `acme` with webhook triggers that forward to the board route's Slack entry.

```bash
vercel connect create slack --name acme --triggers --trigger-path /api/board/webhooks/slack
```

L56-68 (info string `ts filename="app/api/board/[[...path]]/route.ts"`). Mounts the board in a route with one Slack sync entry, and exports the handle's `fetch` as `GET` and `POST`.

```ts
import { board } from '@vercel/board';
import { channels, slack } from '@vercel/board/sync-slack';

const team = board({
  sync: {
    slack: slack('slack/acme', channels({ '#errors-www': 'errors-www' })),
  },
});

export const GET = team.fetch;
export const POST = team.fetch;
```

L96-103 (info string `ts`). Maps one repository to one board channel, and one repository to separate channels for pull requests and issues.

```ts
import { github, repos } from '@vercel/board/sync-github';

github('github/acme', repos({
  'acme/www': 'dev',
  'acme/api': { pulls: 'prs', issues: 'issues' },
}));
```

L116-119 (info string `bash filename="terminal"`). Lists open pull requests and issues by label, and waits up to one hour for the next approval.

```bash
vercel board read dev --label state=open
vercel board wait dev --label review=approved --timeout 1h
```

L125-129 (info string `ts`). Maps two Linear teams, `ENG` and `SUP`, to the board channels `dev` and `support`.

```ts
import { linear, teams } from '@vercel/board/sync-linear';

linear('linear/acme', teams({ ENG: 'dev', SUP: 'support' }));
```

L139-144 (info string `bash filename="terminal"`). Starts a thread on the board and in Slack, sends an existing thread to a Slack channel, joins a pull request's conversation, and shows where a thread is synced.

```bash
vercel board post incidents "checkout is down" --sync slack:#incidents
vercel board sync <id> slack:#incidents
vercel board sync <id> github:acme/www:123
vercel board sync <id>
```

L192-195 (info string `bash filename="terminal"`). Posts a new thread and a reply that stay on the board only.

```bash
vercel board post incidents "postmortem draft, internal only" --no-sync
vercel board reply <id> "notes for the team only" --no-sync
```

L203-206 (info string `bash filename="terminal"`). Lists the platform threads of one thread, and lists the board's sync entries.

```bash
vercel board sync <id>
vercel board sources
```

L229-233 (info string `bash filename="terminal"`). Lists sync entries, prints raw Slack events, and follows Slack events with delivery receipts.

```bash
vercel board sources
vercel board inbox slack
vercel board tail --source slack --all
```

L246-259 (info string `ts`). A sync function that imports inbound events into `dev` and delivers outbound only the messages written on the board.

```ts
import { github, repos } from '@vercel/board/sync-github';

github('github/acme', repos({
  'acme/www': async (sync) => {
    if (sync.direction === 'in') {
      await sync.import('dev');
      return;
    }
    // `from` is null for a message written on the board, and a sync key otherwise.
    if (sync.message.from === null) await sync.deliver();
  },
}));
```

L273-280 (info string `bash`). Shared footer: searches Vercel docs and prints a docs page.

```bash
# Find docs pages by keyword
npx vercel@latest docs search "environment variables"
npx vercel@latest docs search "function timeout"

# Print a docs page as Markdown, by path or URL
npx vercel@latest docs inspect <page>
```

L286-296 (info string `bash`). Shared footer: searches Knowledge Base guides, shows the latest guides, and prints a guide.

```bash
# Find guides by keyword
npx vercel@latest kb search "rewrites and redirects"
npx vercel@latest kb search "AI SDK streaming"

# Show the latest guides
npx vercel@latest kb

# Print a guide as Markdown, by slug or URL
npx vercel@latest kb inspect <guide>
```

Inline commands in the prose, not in fenced blocks on the page:

L74. Reads the board channel to check the Slack setup.

```bash
vercel board read errors-www
```

L70 and L240. The Slack command that adds the Slack app to a channel.

```text
/invite
```

L92. Shows a status under the Slack thread while an agent works.

```bash
vercel board typing <id> "running tests…"
```

L154. Finds the board thread from a Slack permalink or a GitHub link.

```bash
vercel board read <link>
```

L223. Shows a delivery failure under a message.

```bash
vercel board read <id>
```

L238-239. Command shapes named without the `vercel board` prefix: raw events of one sync entry, and a read of a platform channel without sync.

```text
inbox <key>
sources <key> read <channel>
```

L197. SDK option that keeps a message off every platform, for `post`, `reply` or `schedule`.

```ts
noSync: true
```

## Links to other pages

Links to other Board docs pages:

- `/docs/board` (L7, L19): the Board product page; the page links "Board" there.
- `/docs/board/sdk` (L8): listed as related in the front matter.
- `/docs/board/sdk#create-a-handle` (L30): the `board()` function, whose `sync` option configures sync.
- `/docs/board/access#limit-which-deployments-can-sync` (L72, L213): how to narrow grants so that only the deployment that runs the sync has `sync`.
- `/docs/board/concepts/tasks` (L159): what a task is; this page says only that a task's state does not sync.
- `/docs/board/access` (L164, L265): Board's grants, "Board Access Control"; this page says grants control only the board's API.
- `/docs/board/access#create-a-private-channel` (L177): how to create a private board channel, step 1 of keeping a private Slack channel private.
- `/docs/board/concepts` (L266): the Concepts index.
- `/docs/board/sdk#sync-with-slack-github-and-linear` (L267): the Board SDK reference section on sync with Slack, GitHub and Linear.

Links to non-Board pages:

- `/docs/chat-sdk` (L9, L40): Chat SDK, installed in step 1.
- `/docs/connect` (L10, L40): Vercel Connect, installed in step 1; its connector holds the platform secrets.
- `/docs/connect/concepts/triggers` (L11, L52): Webhook triggers; how to register the webhook destination from the dashboard.
- `/docs/sitemap` (L300): the full docs sitemap.
- `https://vercel.com/feedback.md` (L303): how to report feedback.

Links inside this page:

- `#prevent-data-spills-when-you-sync` (L25-26): from the warning note at the top.
- `#customize-what-syncs` (L106, L186): from the GitHub section and the public-repository section.

## What this page does not say

Open questions for a reader who wants to build the same kind of board:

- The format of the sync records that Vercel's API keeps (L33), for example how a board message ID maps to a platform message ID, is not given.
- How Vercel's API "wakes your route" to retry (L33) is not explained. The retry delay, backoff and time window are not given.
- "Retries up to five times" (L223) can mean five retries after the first attempt or five attempts in total. The page does not say which.
- The payload of the `message.sync_failed` event (L223) is not given. No other sync event names are listed.
- The page does not say how sync knows a message is "the board's own post" to skip echoes (L90).
- Ordering, deduplication of repeated webhooks, and conflicts (for example, an edit on both sides at the same time) are not described.
- The page does not say how to stop a sync: how to detach a thread from a platform thread, or what happens to existing threads when you remove a mapping.
- The meaning of the first helper argument (`'slack/acme'`, `'github/acme'`, `'linear/acme'`) is not stated. It looks like `<platform>/<connector name>`, which matches `--name acme` (L49), but the page does not confirm this.
- The route file path `app/api/board/[[...path]]/route.ts` (L56) implies a catch-all route. The page does not name the framework or say what other paths the board serves under that route.
- Step 1 installs Chat SDK and `@chat-adapter/slack` (L43), but the page does not say what they do when a Vercel Connect connector is used.
- The target syntax for a Slack thread, and for a Linear team or issue, in `vercel board sync` is not shown. Only `slack:#incidents` (channel) and `github:acme/www:123` (pull request) appear (L140-142).
- For a GitHub thread target, the page does not say how to tell a pull request number from an issue number.
- `vercel board read <link>` (L154) names only Slack permalinks and GitHub links. Linear links are not mentioned.
- The exact label keys for a Linear issue's priority, project, labels and assignee are not given (L132). Only `issue=ENG-123` and `state` are shown.
- For Linear, the page does not say whether board replies become Linear comments, or whether edits, deletes, reactions and files sync. The table only says "Both ways" (L84).
- For GitHub, the page does not say how labels change when the state changes, what `review=` shows with several reviewers, or how label names with spaces appear in `tag.<label>` (L112-114).
- The full shape of the `sync` object in a sync function is not given (L250-256). The outbound value of `sync.direction` is not named; only `'in'` appears.
- The `start` call (L261) is named but not explained. The meaning of the function's return value and of a thrown error is not given.
- The page sends the reader to `docs/02-sync` inside the `@vercel/board` package (L261). That file is not on the web page.
- `vercel board typing` (L92) is described for Slack only. Its effect on other platforms and how long the status stays are not given.
- The `--all` flag of `vercel board tail` (L232) and the term "delivery receipts" (L236) are not explained.
- `inbox <key>` and `sources <key> read <channel>` (L238-239) are written without the `vercel board` prefix. The page does not say if `inbox` needs `sync` in every board channel or only in the mapped channels.
- `sources <key> read <channel>` reads "only public Slack channels" (L239). Its behavior for GitHub and Linear is not given.
- How a deployment "registers" a key (L218), and what happens to a preview deployment after production takes its key over, are not explained.
- The connector limit of three webhook destinations (L219) leaves open how a second preview branch can test sync.
- Rate limits, message size limits and file size limits are not given.
- How the Markdown and Slack formatting conversion handles features that one side lacks (L89) is not given. The mapping of reactions (emoji names) between platforms is not given.
- In "Malte via support" (L34), "support" seems to be the project name, but the page does not say so.
- Webhook verification (for example, signature checks) is not described. The page says only that the connector keeps platform secrets out of the project (L46).

Unclear points and contradictions inside the page:

- L19 says a message written "on either side reaches the other". L83, L106 and L151 say GitHub syncs into the board only by default.
- L32 says a GitHub repository maps to "one board channel". L101 maps one repository to two board channels, `prs` and `issues`.
- L158 says a platform sees "a message's text and reactions". L89 says files also sync both ways to Slack.
- L33 says Vercel's API wakes the route to retry. L223 says "the board retries". The page does not say if these are the same mechanism.
- The data-spill note says a synced channel is "as readable as the platform channel" (L23). L169 adds that the board side, by default, is readable by every person on the team, every project's deployments and every installed app. So the exposure goes both ways, not only toward the platform.
- The front matter date `last_updated: 2018-10-20` (L5) looks wrong for an Experimental product page.
- The front matter description ends with "..." (L3); the text is cut off.
