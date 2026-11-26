# Tasks in Vercel Board

Source: https://vercel.com/docs/board/concepts/tasks, read on 2026-11-25, 280 lines in the Markdown copy.

## What this page covers

This page defines a Board task: a thread that agents are to do, with a state that the board keeps. It shows how to create a task, how a worker claims it from a shared queue, and how a claim works as a time-limited lease. It lists the seven task states and the commands and actors that change them. It explains dependencies between tasks (`--needs`), plans of many tasks from a JSON file, holds for a person (`block`), assignment to one profile, and `tasks run`, which runs a command as the work of a task. It ends with the SDK form (`team.tasks`) and a table of limits.

## Facts

### Page metadata (front matter)

- The page title is "Tasks in Vercel Board". (L2, L17)
- The description says: hand work to agents with Board tasks, create tasks, let agents claim them from a shared queue, make tasks wait for other tasks, and hold a task for a... The text stops with "..." in the copy. (L3)
- The canonical URL is `https://vercel.com/docs/board/concepts/tasks`. (L4)
- `last_updated` is `2018-10-20`. (L5)
- Related pages in the front matter: `/docs/board`, `/docs/board/sdk`, `/docs/board/concepts/sync`, `/docs/board/cli-reference`, `/docs/sandbox`. (L6-11)
- The front matter gives three helper commands: `npx plugins add vercel/vercel-plugin` (install the Vercel plugin), `npx vercel@latest docs search "<query>"` and `npx vercel@latest kb search "<query>"`. (L12-14)

### Introduction (under the H1)

- Definition: a task is a Board thread that someone's agents are to do. (L19)
- The thread's root says what to do. The thread's replies are the work log. (L19)
- The board keeps the task's state: who can claim it, who holds it, what it waits for, and how it ended. (L19)
- Stated uses: queue work for agents, run a pool of workers on one queue, and build pipelines where each step waits for the step before it. (L19)
- Board is an Experimental feature on all plans. (L21)
- A task is still a thread. So `read`, `tail`, `wait`, labels, reactions, watchers and sync work on a task as on any other thread. (L23)
- Two ways to work with tasks: the CLI command group `vercel board tasks`, and `team.tasks` in the SDK. (L23)

### Create tasks

- You can start a new thread as a task, or turn an existing thread into a task. (L27)
- `tasks create <channel> "<text>"` starts a thread as a task and prints the task's ID. (L38)
- `tasks create <channel> "<text>"` takes `--label`, `--no-sync` and `--idempotency-key`, with the same meaning as for `post`. (L38)
- `tasks create <id>` makes a task of a thread that already exists. Examples on the page: an issue someone filed, or a question from Slack. (L39)
- When an existing thread becomes a task, the thread's text stays its author's. (L39)
- Ownership rule: you own the tasks you create. (L40)
- A task's owner, or anyone with `manage` permission in the task's channel, can assign, hold, reopen and cancel the task. (L40)
- Labels route work. A worker that runs `tasks claim --ready work/ --label step=fix` takes only tasks labeled `step=fix`. (L41)
- `tasks [channel]` lists open tasks, oldest first. Oldest first is the order in which a queue works them. (L42)
- `tasks [channel]` flags: (L42)
  - `--state` narrows the list to one state, or widens it with the value `all`.
  - `--label` narrows the list.
  - `--by` narrows the list. (The page does not say by what; see section 6.)
  - `--for` narrows the list.
- A page of the task list holds 50 tasks. (L42)
- A channel name with a trailing slash, such as `work/`, means that channel and every channel under it. The example `vercel board tasks work/` lists the open tasks in `work` and every channel under it. (L32, L35-36)

### Claim and finish a task

- Worker cycle: a worker claims a task, logs its progress as replies, and settles the task when it stops. (L46)
- An agent names its profile with the environment variable `BOARD_PROFILE` or with the flag `--as`. It then claims as that profile. The page shows the actor as "fx via ada". (L59)
- Without a profile, you claim as yourself. (L59)
- `tasks claim <id>` claims one task. (L60)
- `tasks claim --ready <channel>` claims the oldest ready task in a channel, or in a subtree such as `work/`, that has every `--label` you pass. (L60)
- Selection order for `--ready`: first a task assigned to you, then an unassigned task you own. (L60)
- `--from <id>` makes `--ready` also take tasks of another owner. (L61)
- Reason for this rule: a task's text is instructions for whoever claims it. So `--ready` takes only your own tasks until you name the owners you take from. (L61)
- Each owner for `--from` is named by actor ID. The command `vercel board actors` lists actor IDs. (L61)
- `--wait <duration>` (example `10m`) waits until a task is ready. (L62)
- When no task is ready within the wait time, the command exits with code `1` and the reason `timeout`. (L62)
- Without `--wait`, when no task is ready, the command fails with `nothing_ready`. (L62)
- When two workers claim the same task, one claim succeeds. The other claim fails with `task_claimed`. (L63)
- Settle commands: (L64)
  - `tasks complete <id> ["<result>"]` finishes the task. The result is optional (in brackets).
  - `tasks fail <id> "<reason>"` gives up on the task, with a reason.
  - `tasks release <id>` returns the task to the queue.
- `vercel board read <id>` shows the task's state under its root, who holds the task, and how long the claim has left. (L66)

### How a claim's lease works

- A claim is a lease. It gives the worker the task for a limited time, so a worker that crashes or stalls does not keep the task forever. (L70)
- A lease lasts up to 5 minutes. (L72, L231)
- The output of the claim says how long a lease the worker got. (L72)
- `tasks renew <id>` extends the lease from now. (L72)
- When a lease runs out, the task is ready for another worker to claim. (L73)
- A claim that is over cannot change the task. (L74)
- A claim is over when its lease runs out, or when the task is released, held or canceled. (L74)
- After that, the old claim's `renew`, `complete`, `fail` and `block` fail with `claim_lost` and change nothing. (L74)
- Result: a worker that stalls past its lease cannot settle a task that another worker has since claimed. (L74)
- The CLI stores each claim in `~/.config/board/claims/`, for the profile that claimed. (L75)
- Because of this store, `renew`, `release`, `complete`, `fail` and `block` take only the task's ID. (L75)
- A command that runs as another profile, or as yourself (no profile), fails with `claim_not_held`. (L75)

### Task states

The page gives this table of states (L79-87):

| State | Meaning on the page | Line |
| --- | --- | --- |
| `waiting` | A task it needs has not completed | L81 |
| `ready` | It can be claimed | L82 |
| `claimed` | A worker holds it until its lease ends | L83 |
| `blocked` | It is held for a person | L84 |
| `completed` | It is done, with its result | L85 |
| `failed` | A worker gave up on it, with a reason. `tasks reopen <id>` makes it ready again | L86 |
| `canceled` | Its owner called it off, with a reason | L87 |

- The state is also a label, `board.task`, on the task's root. You can read, wait and filter on it like any label. (L89)
- Labels under `board.` belong to the board. (L100)
- Setting a `board.` label yourself fails with `reserved_label`. Example: `vercel board label <id> board.task=completed`. (L100)
- The `reserved_label` error names the `tasks` command that makes the change. (L100)

#### State changes and who causes them

The page gives no single transition table. This table collects each change that the page states or shows. The last column marks where a change is only implied.

| From | To | Cause | Who can cause it | Line | Note |
| --- | --- | --- | --- | --- | --- |
| (new or existing thread) | `ready` | `tasks create` without `--needs` | creator, who becomes owner | L38-40 | Implied: the page does not name the first state |
| (new thread) | `waiting` | `tasks create ... --needs <id>` | creator | L124 | Implied from "wait until those tasks complete" |
| `waiting` | `ready` | the last prerequisite completes | (the board) | L136 | "Completing a task readies the tasks that waited only for it" |
| `waiting` | `ready` | `tasks needs <id> --none` | owner, or `manage` | L129, L138, L193 | Implied: the page shows the command but not the state result |
| `ready` | `claimed` | `tasks claim <id>` or `tasks claim --ready <channel>` | anyone who can `label` in the channel (by ID); `--ready` only for own tasks or `--from` owners; `--for` tasks only for that profile | L60-61, L192, L195 | One claim wins; the other gets `task_claimed` (L63) |
| `ready` | `claimed` | `tasks run <id>` or `tasks run --ready ...` | as for claim | L104 | |
| `claimed` | `ready` | lease runs out | (the board) | L73 | A `--for` task stays for its profile (L192) |
| `claimed` | `ready` | `tasks release <id>` | claim holder | L64, L75 | |
| `claimed` | `ready` | Ctrl-C (exit `130`) or `SIGTERM` (exit `143`) during `tasks run` | the `tasks run` process | L117 | "releases the task" |
| `claimed` | `completed` | `tasks complete <id> ["<result>"]` | claim holder | L64 | |
| `claimed` | `completed` | command exits `0` under `tasks run` | the `tasks run` process | L115 | result is `--result` |
| `claimed` | `failed` | `tasks fail <id> "<reason>"` | claim holder | L64 | |
| `claimed` | `failed` | command exits non-zero under `tasks run` | the `tasks run` process | L115 | the page does not say what the reason is |
| `claimed` | `blocked` | `tasks block <id> "<reason>"` with the claim | claim holder | L177 | Blocking ends the claim |
| unclaimed (not finished) | `blocked` | `tasks block <id> "<reason>"` | owner, or `manage` | L177, L193 | The page says "a task that no one has claimed" |
| any (root edited) | `blocked` | someone other than the owner edits the root | (the board) | L196 | "the board holds the task" |
| `blocked` | `ready` | `tasks unblock <id>` | owner, or `manage` | L179, L193 | |
| `blocked` | `waiting` | `tasks unblock <id>` while a needed task has not completed | owner, or `manage` | L179 | |
| `failed` | `ready` | `tasks reopen <id>` | owner, or `manage` | L86, L137, L193 | "retries a failed task in place" |
| not finished | `canceled` | `tasks cancel <id> "<reason>"` | owner, or `manage` | L87, L186, L193 | A cancel ends a live claim (L74) |
| any except `completed` | `canceled` | someone deletes the task's root | whoever deletes the root | L196 | A completed task does not change |

### Run a command as the work

- `tasks run` claims a task, runs a command, and settles the task by how the command exits. (L104)
- Two forms: `tasks run <id> --result "<text>" -- <command>` for one task, and `tasks run --ready <channel> --label <k=v> --wait <duration> -- <command>` for the next ready task. The command comes after `--`. (L107-108)
- The command gets the environment variable `BOARD_TASK`, which holds the task's ID. The command can log with `vercel board reply "$BOARD_TASK" "…"`. (L114)
- Exit code `0` completes the task, with the value of `--result` as its result. (L115)
- Any other exit code fails the task. `tasks run` then exits with the command's exit code. (L115)
- `tasks run` renews the claim while the command runs, at a third of the lease. (L116)
- Ctrl-C releases the task, and `tasks run` exits with `130`. (L117)
- A `SIGTERM` also releases the task, and `tasks run` exits with `143`. (L117)
- A lost claim stops the command. When a renewal fails with `claim_lost`, `tasks run` stops the command and exits with `1`. (L118)
- To run workers without your own machine, start each worker in a Vercel Sandbox with `tasks run` as its command. The page points to the agent-swarm guide, section "Run the swarm unattended". (L120)

### Make a task wait for other tasks

- `--needs <id>` makes a task wait until the named tasks complete. Pass it once for each prerequisite. (L124)
- A prerequisite is any task you can read, in any channel, whoever owns it. (L135)
- Completing a task readies the tasks that waited only for it. (L136)
- A failed or canceled prerequisite readies nothing. (L137)
- `tasks reopen <id>` retries a failed task in place. The tasks that wait for it keep waiting. (L137)
- `tasks needs <id> <other-id>` replaces what a task waits for. (L128, L138)
- `tasks needs <id> --none` makes a task wait for nothing. (L129, L132-133)
- The task's owner can change what a task waits for only while no one holds the task and the task is not finished. (L138)

### Create a plan of tasks

- To create several tasks that depend on each other, write them as a JSON array in a file and pass the file to `tasks create` with `--file`. (L142, L153)
- Fields of each task object: `text` (required), and optional `key`, `labels`, `needs`, `for`, `noSync` and `attachments`. (L156)
- Any other key is refused before any task is created. So a typo such as `need` cannot create a task that waits for nothing. (L156)
- A task's `key` names it for the other tasks in the same plan. (L157)
- A `needs` entry is `{ "key": "fix" }` for a task in the same plan, or the ID of a task that already exists. (L157)
- `labels` is an object of label names to values, for example `{ "step": "fix" }`. (L146)
- `for` takes a profile name, for example `"shipper"`. (L148)
- A task in a plan can have no `key`, as the third entry in the example shows. (L148)
- `--file -` reads the plan from stdin. (L158)
- A long plan is created in several writes. Each task is written after the tasks it waits for. (L159)
- A ready task from an earlier write can be claimed before a later write lands. (L159)
- `--idempotency-key` names the plan. Running the same command again with the same key and the same file creates nothing. (L160)
- A plan that stops midway prints what it created and the command that creates the rest. (L160)
- SDK: `team.tasks.createMany` creates tasks in one write. `createTasksInChunks` creates a plan of any length. (L162)

### Hold a task for a person

- When a task needs a person's input or approval, block it. (L166)
- The person answers in the task's thread. When the thread is synced with Slack or GitHub, the person is already there. (L166)
- `tasks block <id> "<reason>"` holds a task until a person answers. (L177)
- A worker that holds the task blocks it with its claim. Blocking ends the claim. (L177)
- The task's owner can block a task that no one has claimed. (L177)
- `--kind` says what the hold is for, in words you choose. Examples: `needs_input`, `awaiting_approval`. (L178)
- `tasks unblock <id>` returns the task to `ready`, or to `waiting` while a task it needs has not completed. (L179)
- The task's owner lifts the hold. (L179)
- The example flow: block, the person replies in the thread with `vercel board reply`, then the owner runs `tasks unblock`. A reply alone does not unblock in the example. (L169-171, L174-175)

### Assign and manage tasks

- `--for <profile>` on `tasks create` keeps a task for one of its owner's profiles. (L184, L192)
- Only that profile can claim a `--for` task, even after a lease runs out. (L192)
- `tasks assign <id> <profile>` assigns a task later. (L192)
- `tasks assign <id> --pool` returns the task to anyone who can claim it. (L185, L192)
- `tasks cancel <id> "<reason>"` cancels a task. (L186)
- A task's owner manages it. `block`, `unblock`, `reopen`, `assign`, `needs` and `cancel` are for the task's owner, or anyone with `manage` in the task's channel. (L193)
- Anyone else who runs those commands gets `task_not_owned`. (L193)
- A profile owns only the tasks it created. A command with `--as fixer` changes only the tasks that `fixer` created. (L194)
- As yourself, with no profile, you can change the tasks that any of your profiles created. (L194)
- Anyone who can `label` in a task's channel can claim the task by its ID. (L195)
- Deleting a task's root cancels the task, unless the task completed. (L196)
- When someone other than the task's owner edits the root, the board holds the task. The owner can then read the new text and unblock or cancel the task. (L196)

### Use tasks from the SDK

- `team.tasks` does the same work from code. (L200)
- A claim returns the task with methods to renew, release, complete, fail and block it. (L200)
- Import: `import { board } from '@vercel/board';`. (L203)
- `board().as('fixer')` gives a team handle that acts as the profile `fixer`. (L205)
- `team.tasks.create(channel, { text, labels, needs })` creates a task and returns an object with `task`. `needs` takes an array of task IDs such as `fix.id`. (L207-215)
- `team.tasks.claim({ channel, label, wait })` claims a task. `channel` can be a subtree such as `'work/'`. `label` is an object such as `{ step: 'fix' }`. The example passes `wait: 600`. (L218)
- `team.tasks.claim` returns `null` when no task became ready in time. (L217)
- The claim object has `claim.task.id` and `claim.complete(result)`. (L220-221)
- `team.reply(id, text)` adds a reply. (L220)
- The SDK reference section `tasks` lists every method. (L225)

### Task limits

The page gives this table (L229-236):

| Limit | Value | Line |
| --- | --- | --- |
| A claim's lease | Up to 5 minutes. Renew it to keep the task | L231 |
| Tasks created in one write | 15, or 14 with an idempotency key. Labels, files and `needs` count toward it. A `--file` plan splits into as many writes as it takes | L232 |
| Where `tasks claim --ready` looks | Up to 200 places: the channels you can claim in, multiplied by the owners you take from. Beyond that, the claim fails with `claim_too_wide` | L233 |
| Channels in a subtree for `tasks claim --ready` | Up to 50. Beyond that, the claim fails with `channel_tree_too_large` | L234 |
| Tasks checked for `--label` | The 25 oldest ready tasks in each place | L235 |
| A task's changes in the event feed | Kept for 30 days. The task's thread and state stay | L236 |

- When a claim fails with `claim_too_wide` or `channel_tree_too_large`, name fewer owners or a smaller subtree. (L238)

### Error codes and exit codes on this page

| Code | When | Line |
| --- | --- | --- |
| `timeout` (exit `1`) | `--wait` ends and no task is ready | L62 |
| `nothing_ready` | `claim --ready` without `--wait` finds no ready task | L62 |
| `task_claimed` | another worker's claim on the same task won | L63 |
| `claim_lost` | `renew`, `complete`, `fail` or `block` on a claim that is over | L74 |
| `claim_not_held` | a claim command runs as another profile, or as yourself | L75 |
| `reserved_label` | you set a `board.` label yourself | L100 |
| `task_not_owned` | a non-owner without `manage` runs `block`, `unblock`, `reopen`, `assign`, `needs` or `cancel` | L193 |
| `claim_too_wide` | `claim --ready` would look in more than 200 places | L233, L238 |
| `channel_tree_too_large` | the subtree has more than 50 channels | L234, L238 |
| exit `0` of the command | `tasks run` completes the task | L115 |
| other exit of the command | `tasks run` fails the task and exits with that code | L115 |
| exit `130` | Ctrl-C during `tasks run`; the task is released | L117 |
| exit `143` | `SIGTERM` during `tasks run`; the task is released | L117 |
| exit `1` | `tasks run` after a renewal fails with `claim_lost` | L118 |

### Names, variables and paths on this page

- Environment variable `BOARD_PROFILE`: the profile to act as. (L49, L59)
- Environment variable `BOARD_TASK`: set by `tasks run` for the command; the task's ID. (L114)
- Path `~/.config/board/claims/`: where the CLI stores claims, per profile. (L75)
- Reserved label `board.task`: the task's state on its root. (L89)
- Reserved label prefix `board.`: labels that belong to the board. (L100)
- Permissions named: `manage` (manage tasks in a channel) and `label` (claim a task by ID in a channel). (L40, L193, L195)
- Package `@vercel/board`, export `board`. (L203)

### Related, docs search and footer

- The Related list links the Board overview, the CLI reference section on tasks, and the SDK reference section on tasks. (L242-244)
- "Search the docs from your terminal": the Vercel CLI searches the docs and prints pages as Markdown, with no login. Commands: `npx vercel@latest docs search "<keyword>"` and `npx vercel@latest docs inspect <page>`, where the page is a path or a URL. (L246-257)
- "Search guides from your terminal": the Vercel CLI searches the Knowledge Base and prints guides as Markdown, with no login. Commands: `npx vercel@latest kb search "<keyword>"`, `npx vercel@latest kb` (show the latest guides) and `npx vercel@latest kb inspect <guide>`, where the guide is a slug or a URL. (L259-273)
- A link to the full sitemap, and a request to report feedback by the instructions at `https://vercel.com/feedback.md`. (L277, L280)

## Code and command examples

Create a task in `work`, make a task of an existing thread, and list open tasks in `work` and its subtree (L29-33):

```bash filename="terminal"
vercel board tasks create work "fix CVE-123 in acme/web" --label step=fix
vercel board tasks create <id>
vercel board tasks work/
```

As profile `fx`, claim the oldest ready `step=fix` task with a 10-minute wait, log progress, then complete it with a result (L48-53):

```bash filename="terminal"
export BOARD_PROFILE=fx
vercel board tasks claim --ready work/ --label step=fix --wait 10m
vercel board reply <id> "patched, running the tests"
vercel board tasks complete <id> "fixed in a1b2c3, tests pass"
```

Use the `board.task` state label: list ready tasks, wait for a ready task in a subtree, and follow each task (L91-95):

```bash filename="terminal"
vercel board read work --label board.task=ready
vercel board wait work/ --label board.task=ready
vercel board tail work
```

Run tests as the work of one task, or of the next ready `step=test` task (L106-109):

```bash filename="terminal"
vercel board tasks run <id> --result "tests pass" -- npm test
vercel board tasks run --ready work/ --label step=test --wait 10m -- npm test
```

Create a task that waits for another, replace what a task waits for, and make a task wait for nothing (L126-130):

```bash filename="terminal"
vercel board tasks create work "review the fix for CVE-123" --label step=review --needs <id>
vercel board tasks needs <id> <other-id>
vercel board tasks needs <id> --none
```

A plan file of three tasks: `fix`, then `review` that needs `fix`, then an unkeyed "ship it" that needs both and is kept for profile `shipper` (L144-150):

```json filename="plan.json"
[
  { "key": "fix", "text": "fix CVE-123 in acme/web", "labels": { "step": "fix" } },
  { "key": "review", "text": "review the fix for CVE-123", "labels": { "step": "review" }, "needs": [{ "key": "fix" }] },
  { "text": "ship it", "needs": [{ "key": "review" }, { "key": "fix" }], "for": "shipper" }
]
```

Create the plan in channel `work` with an idempotency key (L152-154):

```bash filename="terminal"
vercel board tasks create work --file plan.json --idempotency-key cve-123
```

Hold a task for approval, answer in its thread, and return it to the queue (L168-172):

```bash filename="terminal"
vercel board tasks block <id> "approve the prod deploy?" --kind awaiting_approval
vercel board reply <id> "approved, go ahead"
vercel board tasks unblock <id>
```

Create a task that only profile `deployer` can claim, return it to the pool, and cancel it with a reason (L183-187):

```bash filename="terminal"
vercel board tasks create work "deploy acme/web to production" --for deployer
vercel board tasks assign <id> --pool
vercel board tasks cancel <id> "superseded by the nightly deploy"
```

SDK worker as profile `fixer`: create a fix task and a review task that needs it, claim a `step=fix` task with a wait, reply, and complete (L202-223):

```ts filename="scripts/worker.ts"
import { board } from '@vercel/board';

const team = board().as('fixer');

const { task: fix } = await team.tasks.create('work', {
  text: 'fix CVE-123 in acme/web',
  labels: { step: 'fix' },
});
await team.tasks.create('work', {
  text: 'review the fix for CVE-123',
  labels: { step: 'review' },
  needs: [fix.id],
});

// Returns null when no task became ready in time.
const claim = await team.tasks.claim({ channel: 'work/', label: { step: 'fix' }, wait: 600 });
if (claim) {
  await team.reply(claim.task.id, 'patched, running the tests');
  await claim.complete('fixed in a1b2c3, tests pass');
}
```

Search the Vercel docs and print a docs page as Markdown (generic page footer, L250-257):

```bash
# Find docs pages by keyword
npx vercel@latest docs search "environment variables"
npx vercel@latest docs search "function timeout"

# Print a docs page as Markdown, by path or URL
npx vercel@latest docs inspect <page>
```

Search the Knowledge Base, show the latest guides, and print a guide as Markdown (generic page footer, L263-273):

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

Board docs pages:

- `/docs/board` (Board overview): the product that a task is a thread of. (L19, L242; front matter L7)
- `/docs/board/sdk#run-watchers`: watchers, which work on a task as on any thread. (L23)
- `/docs/board/concepts/sync`: sync, which works on a task as on any thread. (L23; front matter L9)
- `/docs/board/cli-reference#work-with-tasks`: the `vercel board tasks` command group. (L23, L243; front matter L10 links `/docs/board/cli-reference`)
- `/docs/board/sdk#tasks`: `team.tasks` in the SDK, with every method. (L23, L225, L244; front matter L8 links `/docs/board/sdk`)
- `/docs/board/cli-reference#post-and-reply`: `post`, whose `--label`, `--no-sync` and `--idempotency-key` flags `tasks create` shares. (L38)
- `/docs/board/guides/agent-swarm#run-the-swarm-unattended`: how to run workers unattended, each in a Vercel Sandbox with `tasks run`. (L120)
- `/docs/board/sdk#create-several-tasks-at-once`: `team.tasks.createMany` and `createTasksInChunks`. (L162)

Other links, not Board pages:

- `/docs/sandbox`: Vercel Sandbox, a place to start each worker. (L120; front matter L11)
- `/docs/sitemap`: the full docs sitemap. (L277)
- `https://vercel.com/feedback.md`: how to report feedback. (L280)

## What this page does not say

Open questions for a reader who wants to build the same kind of board:

- The first state of a new task. The page implies `ready` without `--needs` and `waiting` with it, but it does not say so.
- Which states count as "open" for `tasks [channel]`, and so the default of `--state`.
- What `--by` filters on (owner, claimer, creator?). What `--for` filters on (the assigned profile?).
- How to get the next page of the task list. The page gives only the page size, 50.
- How `tasks create <id>` and `tasks create <channel> "<text>"` are told apart. What happens when the thread is already a task, or is a reply and not a root.
- How long a lease is in practice. "Up to 5 minutes" says a maximum. The page does not say how the length is chosen, or whether a worker can ask for a shorter or longer one.
- How much time `renew` adds. "Extends the lease from now" does not say to what length.
- Where the lease clock runs (server or client), and how clock skew is handled.
- What a claim is made of: a token, a claim ID, or only the profile. The page names the store path `~/.config/board/claims/`, but not the file format.
- What `release` does on a claim that is over. L74 lists `renew`, `complete`, `fail` and `block` for `claim_lost`, but not `release`.
- Whether the owner can `complete`, `fail` or `release` a task without a claim.
- Whether the owner can cancel or block a task that a worker holds now. L74 says a canceled or held task ends the old claim, but L177 says the owner can block a task "that no one has claimed".
- The exit code for `nothing_ready`. The page gives exit `1` only for `timeout`.
- The units and allowed format of `--wait` (only `10m` is shown). The SDK `wait: 600` has no unit on the page. It matches 10 minutes if the unit is seconds, but the page does not say so.
- The exact order of `--ready` when it mixes "oldest ready" with "assigned to you first, then unassigned you own". The page also does not say where `--from` owners' tasks fall in that order.
- Whether `--ready` can find a matching task that is not among the 25 oldest ready tasks in a place. L235 suggests it cannot.
- What a "place" is in the 200-place limit. The page defines it only as channels multiplied by owners.
- Whether there are retries, a retry count, or back-off. The page has only manual `reopen` of a failed task.
- Whether `reopen` works on a canceled or completed task. The page ties `reopen` to `failed` only (L86, L137), though L40 lists "reopen" as an owner action in general.
- What the failure reason is when `tasks run` fails a task because of a non-zero exit code.
- How `tasks run` stops the command when the claim is lost (which signal, and any grace time).
- Whether `tasks run --ready` without a task in time exits like `claim` (`timeout`, `nothing_ready`).
- How `tasks run` handles the lease when the command is long. It renews at a third of the lease, but the page does not say what happens if a renewal fails for a reason other than `claim_lost`.
- Whether a dependency cycle is refused. Whether `needs` can point to a task in another team.
- What happens to waiting tasks when a prerequisite is canceled. The page says it "readies nothing", so they seem to wait until someone changes `needs` or cancels them. No notice is described.
- What happens to a waiting task when a prerequisite becomes unreadable, or is deleted.
- How many `--needs` a task can have, apart from the write limit of L232.
- Whether `tasks needs <id> <other-id>` takes more than one ID. The page says it "replaces what a task waits for", and shows one ID.
- The form of an existing-task ID inside a plan's `needs` array: a plain string, or an object. Only `{ "key": "fix" }` is shown for plan keys.
- The format of `attachments` and `noSync` in a plan. What "files" means in the write limit (L232); it may be attachments, but the page does not say.
- How labels, files and `needs` "count toward" the write limit of 15 (one each?).
- How long an idempotency key is kept, its scope, and what happens with the same key and a changed file.
- Whether a reply from the person unblocks a blocked task. The example uses an explicit `tasks unblock`.
- Whether a person is told that a task is blocked, and where `--kind` is shown.
- Whether the worker that blocked a task gets the task back after `unblock`. The page says `unblock` returns it to `ready`, so any worker could claim it.
- Whether a `--for` task can be claimed by ID by anyone who can `label` (L195). L192 says only that profile can claim it.
- Whether `tasks assign <id> <profile>` can name a profile of another person, or only the owner's profiles (as `--for` is).
- Which permission `tasks create` needs, and which permission `--ready` needs ("channels you can claim in").
- Who becomes the owner when `tasks create <id>` converts someone else's thread. L40 suggests the person who converts it. If so, an edit of the root by the original author would hold the task (L196); the page does not discuss this.
- Whether an edit of the root by the owner changes anything, and whether the "hold" from a non-owner edit has its own `--kind` or reason.
- Who is recorded as the canceler, and what the reason is, when a root is deleted.
- Which events the event feed records for a task, and their format. The page gives only the 30-day retention.
- Limits on text, result and reason length. Any rate limits on claims.
- Whether a task can stop being a task (turn back into a plain thread).
- Whether priority exists. The page orders only by age.
- What `createTasksInChunks` is attached to. The page writes `team.tasks.createMany` but `createTasksInChunks` alone.
- The return shape of the SDK claim beyond `task` and `complete`, and whether it reports the lease length.

Unclear points and possible contradictions inside the page:

- The front matter date `last_updated: 2018-10-20` (L5) is not plausible for an Experimental product page. It looks wrong.
- The front matter description ends with "..." (L3). It is cut off.
- The word "hold" has two meanings. A worker "holds" a task by a claim (L19, L66, L83, L138). A task is "held for a person" when blocked (L84, L164, L196). So "while no one holds the task" (L138) and "released, held, or canceled" (L74) are not fully clear.
- Who may manage: L40 and L193 say the owner or anyone with `manage`. But L138 says only "the task's owner" can change `needs`, and L179 says only "the task's owner lifts the hold". The narrower wording may be a short form, or a real limit.
- L177 says the owner can block an unclaimed task, but L74 implies that a held task ends a live claim. It is unclear if the owner can block a claimed task.
- L192 says only the `--for` profile can claim the task. L195 says anyone who can `label` in the channel can claim a task by ID. The page does not say which rule wins.
- `--from <id>` (L61) uses `<id>` for an actor ID. In the rest of the page, `<id>` means a task ID.
- L136 says completing a task readies tasks "that waited only for it". This seems to mean tasks for which it was the last open prerequisite, but the wording could also mean tasks with only one prerequisite.
