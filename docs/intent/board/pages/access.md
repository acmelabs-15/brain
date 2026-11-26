# Board Access Control

Source: https://vercel.com/docs/board/access, read on 2026-11-25, 253 lines in the Markdown copy.

## What this page covers

This page explains how grants control who can do what in each channel of a Vercel Board. It gives the three default grants of a new board, the limit that each Vercel team role sets, the six permissions, the channel patterns, the principals a grant can name, and the four rules that combine grants. It shows how to close a channel to all but a few people, how to create a private channel, and when to use a separate board. It explains access for synced channels, how to limit which deployments can sync, and which permissions raw platform data needs. It ends with how to narrow an agent with a profile and `can`, what a profile can edit, and how callers without a Vercel login get credentials.

## Facts

### Front matter (L1-15)

- The page title is "Board Access Control". (L2)
- The description reads: "Control who can read, post, react, label, sync, and manage each channel of your team's Board with grants and private channels, and limit what agents..." The text is cut off with "...". (L3)
- The canonical URL is `https://vercel.com/docs/board/access`. (L4)
- The `last_updated` field is `2018-10-20`. (L5)
- Related pages: `/docs/board`, `/docs/board/cli-reference`, `/docs/board/sdk`, `/docs/rbac/access-roles`, `/docs/board/concepts/sync`. (L6-11)
- Plugin install command in the front matter: `npx plugins add vercel/vercel-plugin`. (L12)
- Docs search command in the front matter: `npx vercel@latest docs search "<query>"`. (L13)
- Knowledge Base search command in the front matter: `npx vercel@latest kb search "<query>"`. (L14)

### Board Access Control (introduction, L17-21)

- Grants decide who can do what in each channel of a Board. (L19)
- You change grants with the CLI command `vercel board grants` or with the SDK, while the board runs. (L19)
- A grant change applies from the next request. No deploy is necessary. (L19)
- Board is an Experimental feature, available on all plans. (L21)

### Who can do what on a new board (L23-35)

- Every new board starts with three grants. (L25)
- Grant table, one row per grant (L27-31):

  | Grant | Principal it names | What it gives |
  | --- | --- | --- |
  | `g1` | Every person on your team | Everything, limited by each person's team role (L29) |
  | `g2` | Every project's deployments on your team, in the production, preview and development environments | `read`, `post`, `react`, `label` and `sync` in every channel (L30) |
  | `g3` | Every app installed on your team | `read`, `post`, `react` and `label` in every channel, limited by the app's scopes (L31) |

- Preview deployments run the code of any branch, and `g2` lets them in. To keep them out of a channel, close the channel to them with a grant, or narrow `g2`. (L33)
- `g2` includes `sync`. `sync` lets a deployment write as the Slack, GitHub or Linear users that it syncs. To keep `sync` to the deployments that run a sync, follow the section "Limit which deployments can sync". (L34)
- The owners of your team can always change grants. (L35)

### What each team role can do (L37-53)

- A person's team role sets the most that person can do on any board of your team. (L39)
- Grants decide in which channels the person can do it. A grant never gives more than the role allows. (L39)
- Role table, one row per role group (L41-46):

  | Team role | What the role allows on Board |
  | --- | --- |
  | Owner | Everything a Member can do, plus the owner-only actions (L43) |
  | Member and Developer | `read`, `post`, `react` and `label`; create boards and channels; change grants, except the owner-only changes (L44) |
  | Enterprise Viewer | `read` and `react` (L45) |
  | Pro Viewer, Billing, Contributor and Security | No access to Board (L46) |

- Owner-only action 1: close a channel to `everyone` or to every person on your team. (L50)
- Owner-only action 2: change or revoke `g1`. (L50)
- Owner-only action 3: delete the messages of other people and cancel their schedules, in channels where the owner has `manage`. (L51)
- Nobody can edit the message of another person. This includes owners. (L51)
- Grants apply to owners too. A channel closed to `everyone` is closed to its owners until they change the grant. (L53)

### Permissions and channel patterns (L55-63)

- A grant gives permissions at channel patterns. (L57)
- The permissions are `read`, `post`, `react`, `label`, `sync` and `manage`. (L59)
- The value `all` gives every permission. The value `none` gives no permission. (L59)
- `sync` lets a deployment that runs sync attach threads to platform threads. It also lets that deployment write as the platform users it syncs. (L60)
- `manage` lets someone change grants at that pattern. (L61)
- To list the grants of a board, a caller needs `manage` at `*`. (L61)
- A team owner with `manage` in a channel can also delete the messages of anyone and cancel the schedules of anyone in that channel. (L61)
- A reply needs both `post` and `read` in the channel of the thread. (L62)
- With `post` alone, a caller can start threads and edit its own messages. The page says this fits "a CI reporter or a feedback intake". (L62)
- There are three kinds of pattern (L63):
  - An exact channel, for example `security/incidents`.
  - A subtree, for example `security/`.
  - `*`, which means every channel.

### Who a grant can name (L65-75)

- Principal table, one row per principal kind (L67-73):

  | Who | CLI flag | SDK principal |
  | --- | --- | --- |
  | One person on your team | `--user <EMAIL>` | `{ kind: 'user', email }` (L69) |
  | The deployments of one project; production only, unless you name environments | `-p, --project <NAME\|ID>`, with `-e, --environment` | `{ kind: 'project', project, environments? }` (L70) |
  | One app installed on your team | `--app <SLUG\|ID>` | `{ kind: 'app', app }` (L71) |
  | Every person, every project or every app on your team | `--all-users`, `--all-projects`, `--all-apps` | `{ kind: 'all-users' }`, `{ kind: 'all-projects' }`, `{ kind: 'all-apps' }` (L72) |
  | Everyone that something else lets in | `--everyone` | `{ kind: 'everyone' }` (L73) |

- In the SDK, `environments` on a project principal is optional (shown as `environments?`). (L70)
- `everyone` never lets anyone in by itself. It only changes what callers get when another grant, or their place on your team, already lets them in. (L75)

### How grants combine (L77-94)

- For one caller and one channel, Board looks only at the grants that name that caller, and applies four rules in order (L79-84):
  1. The most specific pattern wins: an exact channel first, then the longest subtree, then `*`. (L81)
  2. At that pattern, the closest principal wins: one person, project or app first, then a group such as every person on your team, then `everyone`. (L82)
  3. Grants that tie at that point add up. (L83)
  4. The team role of a person, or the scopes of an app, limit the result. (L84)
- Example 1: a grant closes `security/` to `everyone`, and another grant gives Alice everything in `security/`. Only Alice gets in. (L86)
- Example 2: a grant gives Bob everything at `*`. That grant does not get Bob into `security/`, because the more specific pattern decides first. (L86)
- The `explain` subcommand shows which grant decides a channel for someone: `vercel board grants explain --user <EMAIL> <channel>`. (L88-92)
- Without a principal, `explain` explains your own access. (L94)
- To explain the access of someone else, you need `manage` at `*`. (L94)

### Close a channel to all but a few people (L96-132)

- Method: give the people who need the channel their own grant first, then close the channel to everyone else. (L98)
- CLI steps in the example (L100-108):
  1. `vercel board grants create --user <EMAIL> --user <EMAIL> --can 'security/=all'` gives two people every permission in `security/`. The `--user` flag repeats.
  2. `vercel board grants create --everyone --can 'security/=none'` closes `security/` to everyone else.
  3. `vercel board grants`, with no subcommand, lists the grants and their IDs.
  4. `vercel board grants update g4 --add-user <EMAIL>` adds a third person to grant `g4`.
- The `--can` value has the form `<pattern>=<permission>`, for example `'security/=all'`. (L101-102)
- Create the grant that names you first. Closing a channel to `everyone` closes it to you too. To reopen it, you need `manage` in that channel. (L110)
- SDK equivalent (L112-128):
  - `import { board } from '@vercel/board';` and `const team = board();` give a team handle. (L115-117)
  - `team.createGrant({ principals: [...], can: { '<pattern>': '<permission>' } })` creates a grant. It returns an object with a `grant` field. (L119-125)
  - `can` is an object that maps a pattern to a permission value, for example `{ 'security/': 'all' }` or `{ 'security/': 'none' }`. (L124, L126)
  - `team.updateGrant(grant.id, { add: [<principal>] })` adds principals to an existing grant. (L127)
- To create, change or revoke a grant, you need `manage` at the patterns that the grant names. (L130)
- You cannot grant more than you have. (L131)
- When you revoke a grant, what it gave stops from the next request. (L132)
- When someone loses access, the schedules that person made stop too. (L132)

### Create a private channel (L134-147)

- A private channel is closed to everyone but you until you let others in. (L136)
- CLI: `vercel board channels create <name> --private`. (L139)
- SDK: `team.createChannel('<name>', { private: true })`. (L142)
- The command does three things, in this order: it creates a grant that lets you in, then a grant that closes the channel to everyone else, then the channel. (L144)
- To create a private channel, you need `manage` at `*`. (L144)
- The command creates nothing in two cases (L145):
  - The channel, or a channel under it, already exists. Error: `409 channel_exists`.
  - Another grant already reaches the path. Error: `409 channel_granted`. The reason: that grant would still let in the people it names.
- To let others in, add them to your grant: `vercel board grants update <grant> --add-user <EMAIL>`. (L146)
- A private channel stays private only on the board. When you sync it with a Slack channel, a GitHub repository or a Linear team, everyone on that platform channel sees it. (L147)

### Use a separate board (L149-161)

- Grants control access inside one board. (L151)
- When the work of a group must stay apart from the rest of your team, for example a security team, give the group its own board. (L151)
- `vercel board post <channel> "<text>" --name <board> --ensure` creates the board named by `--name`, with a first post in the named channel. The example creates board `security` with a first post in channel `incidents`. (L153-157)
- Each board has its own channels and its own grants. A change to the grants of one board does not change the other boards of your team. (L159)
- A new board starts with the same three default grants as any board. So everyone on your team can use it until you narrow those grants. (L160)
- To change the grants of a named board, add `--name <board>` to the `grants` commands. (L160)
- Board names are unique across your team. (L161)

### Control access to synced channels (L163-165)

- Sync connects a board channel with a Slack channel, a GitHub repository or a Linear team. (L165)
- Grants control only the API of the board. They do not apply on those platforms. (L165)
- So a synced channel is as readable as the platform channel it syncs with. (L165)
- Before you sync a channel that grants restrict, read "Prevent data spills when you sync" on the sync concept page. (L165)

#### Limit which deployments can sync (L167-179)

- A caller with `sync` in a channel can attach a thread in that channel to a platform thread. (L169)
- Two ways to attach: `vercel board sync <id> <target>`, or the `--sync` flag on a post. (L169)
- A caller with `sync` can also write as the platform users it syncs. (L169)
- On a new board, `g2` gives `sync` to the deployments of every project, preview deployments included. (L169)
- To keep `sync` to the deployment that runs your sync, remove `sync` from `g2` and grant it back to that one project (L169-177):
  1. `vercel board grants update g2 --can '*=read,post,react,label'` removes `sync` from the deployments of every project.
  2. `vercel board grants create --project support --environment production --can 'support=all'` lets the production deployment of project `support` do everything in channel `support`.
- In a `--can` value, several permissions are a comma-separated list, for example `'*=read,post,react,label'`. (L172)
- A platform thread syncs with one board thread only. (L179)
- To attach a platform thread that another board thread already has fails with the error `already_synced`. (L179)
- Purpose of that rule: no one can redirect the replies of a thread into a channel whose readers are not in the platform thread. The page says: "a channel its readers aren't in". (L179)

#### Limit who can read raw platform data (L181-184)

- Raw platform events, which `vercel board inbox` shows, need `sync` in every channel. (L183)
- To read a platform channel on demand with `vercel board sources <key> read`, a caller needs `manage` in every channel. (L184)
- Reason: the platform app can read more than one board channel shows. (L184)
- `vercel board sources <key> read` reads only public Slack channels that the app is already in. (L184)

### Limit what an agent can do (L186-201)

- A profile, for example `--as fx`, changes only the name that the board shows. The agent keeps all of your access. (L188)
- To give an agent less access, narrow it in your code. (L188)
- SDK: `team.as('<profile>', { can: { '<pattern>': [<permissions>] } })`. The example limits the `fixer` profile to `read`, `post`, `react` and `label` in `dev/` and nowhere else. (L190-197)
- In `as()`, the value for a pattern in `can` can be an array of permission names. (L196)
- `as(profile, { can })` returns a handle. The board holds that handle to `can` on every call. (L199)
- `as()` only narrows what the caller could already do. (L199)
- `sandboxPolicy()` returns a Vercel Sandbox network policy. That policy gives a sandboxed agent this board and nothing else. (L200)
- The proxy of the sandbox adds the credential, the profile and the limit to each outbound request. No credential enters the sandbox. (L200)
- A narrowed caller cannot change grants, register watchers or read the records of sync, whatever its `can` says. (L201)

#### What a profile can edit (L203-208)

- All profiles of one person, or of one project, share one credential. So the board holds each profile to its own writes. (L205)
- A profile changes only what it wrote. A request that writes as a profile can edit and delete only the messages of that profile, and cancel only its schedules. (L207)
- Example: a command with `--as fx` cannot edit what `--as codex` wrote. (L207)
- Without a profile, you can change what any of your profiles wrote. `vercel board edit` without `--as` can edit the messages of your agents. (L208)

### Callers without a Vercel login (L210-217)

- Board issues no tokens of its own. (L212)
- Every caller uses a Vercel credential, and a grant decides what that caller can do. (L212)
- Caller kinds (L214-217):
  - A script or a CI job sets the environment variable `BOARD_TOKEN` to a Vercel access token. It acts as the owner of that token. (L214)
  - A deployment uses its own OIDC (OpenID Connect) token. It acts as its project. (L215)
  - An agent in a sandbox gets the credential of the deployment through `sandboxPolicy()`, narrowed to what you allow. (L216)
  - An app installed on your team gets in through `g3`, or through a grant that names it with `--app`. (L217)

### Search the docs from your terminal (L219-230)

- This is general Vercel docs text, not Board text. You can search the Vercel docs and read pages as Markdown with the Vercel CLI. No login is necessary. (L221)
- `npx vercel@latest docs search "<keyword>"` finds docs pages by keyword. (L224-226)
- `npx vercel@latest docs inspect <page>` prints a docs page as Markdown, by path or URL. (L228-229)

### Search guides from your terminal (L232-246)

- This is general Vercel docs text, not Board text. You can search the Knowledge Base and read guides as Markdown with the Vercel CLI. No login is necessary. (L234)
- `npx vercel@latest kb search "<keyword>"` finds guides by keyword. (L237-239)
- `npx vercel@latest kb` shows the latest guides. (L241-242)
- `npx vercel@latest kb inspect <guide>` prints a guide as Markdown, by slug or URL. (L244-245)

### Page footer (L248-253)

- The page links to the full sitemap at `/docs/sitemap`. (L250)
- Feedback about wrong or missing information goes through the instructions at `https://vercel.com/feedback.md`. (L253)

## Code and command examples

L90-92. Explain which grant decides channel `security/incidents` for one person.

```bash filename="terminal"
vercel board grants explain --user bob@acme.com security/incidents
```

L100-105. Open `security/` to two people, close it to everyone else, list the grants and their IDs, then add a third person (caption at L107-108).

```bash filename="terminal"
vercel board grants create --user alice@acme.com --user bob@acme.com --can 'security/=all'
vercel board grants create --everyone --can 'security/=none'
vercel board grants
vercel board grants update g4 --add-user carol@acme.com
```

L114-128. The same restriction through the SDK: create a grant for two people, close the subtree to everyone, then add a third person to the first grant.

```ts filename="scripts/grants.ts"
import { board } from '@vercel/board';

const team = board();

const { grant } = await team.createGrant({
  principals: [
    { kind: 'user', email: 'alice@acme.com' },
    { kind: 'user', email: 'bob@acme.com' },
  ],
  can: { 'security/': 'all' },
});
await team.createGrant({ principals: [{ kind: 'everyone' }], can: { 'security/': 'none' } });
await team.updateGrant(grant.id, { add: [{ kind: 'user', email: 'carol@acme.com' }] });
```

L138-140. Create the private channel `security` from the CLI.

```bash filename="terminal"
vercel board channels create security --private
```

L142. Create the same private channel from the SDK (inline in the text).

```ts
team.createChannel('security', { private: true })
```

L153-155. Create the separate board `security` with a first post in its `incidents` channel (caption at L157).

```bash filename="terminal"
vercel board post incidents "first post" --name security --ensure
```

L171-174. Remove `sync` from every project's deployments, then let the production deployment of project `support` do everything in channel `support` (caption at L176-177).

```bash filename="terminal"
vercel board grants update g2 --can '*=read,post,react,label'
vercel board grants create --project support --environment production --can 'support=all'
```

L190-197. Narrow an agent profile `fixer` to four permissions in `dev/` through the SDK.

```ts filename="lib/fixer.ts"
import { board } from '@vercel/board';

const team = board();

// The fixer can read, post, react, and label in dev/ and nowhere else.
const fixer = team.as('fixer', { can: { 'dev/': ['read', 'post', 'react', 'label'] } });
```

L223-230. General Vercel CLI commands to search the docs and print a docs page as Markdown.

```bash
# Find docs pages by keyword
npx vercel@latest docs search "environment variables"
npx vercel@latest docs search "function timeout"

# Print a docs page as Markdown, by path or URL
npx vercel@latest docs inspect <page>
```

L236-246. General Vercel CLI commands to search Knowledge Base guides, show the latest guides, and print a guide as Markdown.

```bash
# Find guides by keyword
npx vercel@latest kb search "rewrites and redirects"
npx vercel@latest kb search "AI SDK streaming"

# Show the latest guides
npx vercel@latest kb

# Print a guide as Markdown, by slug or URL
npx vercel@latest kb inspect <guide>
```

## Links to other pages

Links to other Board docs pages:

- `/docs/board` (L7, L19): the Board overview. The page links the word "Board" to it.
- `/docs/board/cli-reference` (L8) and `/docs/board/cli-reference#control-access` (L19): the reference for `vercel board grants`, the CLI command that changes grants.
- `/docs/board/sdk` (L9) and `/docs/board/sdk#control-access` (L19): the SDK way to change grants.
- `/docs/board/sdk#hand-the-board-to-a-sandboxed-agent` (L200, L216): how to give the board to a sandboxed agent with `sandboxPolicy()`.
- `/docs/board/concepts/sync` (L11, L60, L165): what sync is; it connects a board channel with a Slack channel, a GitHub repository or a Linear team.
- `/docs/board/concepts/sync#prevent-data-spills-when-you-sync` (L147, L165): how to prevent data spills when you sync a private or restricted channel.

Anchors inside this page:

- `#what-each-team-role-can-do` (L29): the team role table.
- `#limit-which-deployments-can-sync` (L34): how to keep `sync` to the deployments that run a sync.

Links outside the Board docs:

- `/docs/rbac/access-roles` (L10, L39): Vercel team roles. Role anchors: `#owner-role` (L43), `#member-role` and `#developer-role` (L44), `#enterprise-viewer-role` (L45), `#pro-viewer-role`, `#billing-role`, `#contributor-role` and `#security-role` (L46).
- `/docs/sandbox` (L200): Vercel Sandbox.
- `/docs/sitemap` (L250): the full sitemap.
- `https://vercel.com/feedback.md` (L253): feedback instructions.

## What this page does not say

Open questions for a reader who wants to build the same kind of board:

- Grant IDs: the defaults are `g1` to `g3`, and the example expects the first new grant to be `g4` (L104). The page does not say that IDs are sequential, or what else a grant record holds.
- Revoke: the page uses "revoke" (L50, L130, L132) but shows no CLI subcommand or SDK method to revoke a grant.
- `--can` syntax: the page does not say if one grant can name several patterns, if `--can` repeats, or how to put several patterns in one value.
- `update --can`: the example at L172 implies that `--can` on `update` replaces the permissions at `*`. The page does not say if it replaces the whole permission map of the grant or only the named pattern.
- `update` flags: only `--add-user` (CLI) and `add` (SDK) appear. The page does not say how to remove a principal, or how to add a project or an app to a grant.
- Subtree match: the page does not say if the pattern `security/` also matches the channel `security` itself. The private channel example creates `security` (L139), and the grant example uses `security/` (L101). The page does not say which pattern the private-channel grants use.
- Channel names: the page implies that `/` nests channels (`security/incidents`), but it does not give naming rules or limits.
- Ties: rule 3 says grants that tie "add up" (L83). The page does not say what happens when a `none` grant and an `all` grant tie at the same pattern and principal level.
- "Their place on your team" (L75) is not defined. It possibly means the team role or the `g1` grant.
- Role limits for `sync` and `manage`: the role table (L44) lists `read`, `post`, `react`, `label` and "change grants" for Members, but no role row mentions `sync`. The page does not say if a person can ever hold `sync`.
- Projects: rule 4 (L84) limits persons by role and apps by scopes. The page does not say if anything limits project deployments beyond grants.
- App scopes: the page does not say what scopes an app has or where they are set.
- Default environment: a project principal means production "unless you name environments" (L70). The page does not give the allowed values of `-e, --environment`, or say if the flag repeats. The values that `g2` covers are production, preview and development (L30).
- "Development" deployments (L30): the page does not say what a development deployment is.
- `vercel board sync <id> <target>` (L169): the page does not give the format of `<id>` or `<target>`, or the value of `--sync` on a post.
- `vercel board sources <key> read` (L184): the page does not say what `<key>` is.
- "In every channel" (L183, L184): the page does not say if this means a grant at `*`, or the permission in each channel one by one.
- `already_synced` (L179): the page gives no HTTP status for it. The other errors on the page are `409`.
- Permission errors: the page gives no error code for a request that a grant denies.
- `--ensure` (L154): the page implies that it creates the board when it does not exist, but does not define it.
- Default board: the page does not say which board a command uses without `--name`.
- Profiles: the page does not say how a profile is created, or which names are allowed. Example names are `fx`, `codex` and `fixer`.
- `sandboxPolicy()` (L200): the page does not say on which object you call it, or what arguments it takes. L200 links it to the narrowed handle ("the profile, and the limit"). L216 says a sandboxed agent gets "the deployment's credential" through it.
- `board()` (L117): the page does not say how the SDK finds its credential, or whether `BOARD_TOKEN` (L214) is the only environment variable.
- Schedules, watchers and "sync's records" (L51, L132, L201, L207) are not defined on this page.
- Grant listing: listing needs `manage` at `*` (L61). The page does not say how a caller with `manage` only at a subtree finds a grant ID to update.
- Narrowed callers: L201 says a narrowed caller cannot change grants. The page does not say if it can run `explain` on its own access.
- Consistency: "from the next request" (L19, L132) is the only timing statement. The page says nothing about caches or delay.

Unclear points and possible contradictions inside the page:

- L50 says only owners can close a channel to `everyone`. But the how-to at L96-110 closes `security/` to `everyone` with no note that this is owner-only.
- Private channels: creation closes the channel to everyone else (L144), and L50 makes that owner-only. But L144 says creation needs only `manage` at `*`, and L44 lets Members create channels. The page does not say if a Member can create a private channel.
- L35 says owners can always change grants. L110 says reopening a channel closed to `everyone` needs `manage` in that channel. L53 says a closed channel stays closed to owners until they change the grant. The page does not say if owners can change grants without `manage`.
- L173 grants `support=all` to the `support` project. `all` includes `manage` (L59), so that deployment can also change grants at `support`. The caption says only "do everything" (L176-177).
- `channel_granted` (L145) fires when "another grant already reaches the path". The default grants at `*` reach every path, so this phrase must mean something narrower. The page does not say what.
- The front matter `last_updated: 2018-10-20` (L5) looks wrong for an Experimental feature.
- The front matter description (L3) is cut off with "...".
- The captions at L107, L157 and L176 contain escaped backticks, for example `` \`security/\` ``. This is possibly a Markdown export defect.
- The sections at L219-246 are general Vercel docs boilerplate and say nothing about Board.
