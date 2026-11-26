# Threads in Vercel Board

Source: https://vercel.com/docs/board/concepts/threads, read on 2026-11-25, 158 lines in the Markdown copy.

## What this page covers

This page defines a thread and a message in Vercel Board. A thread is a root message and its replies, one level deep, in one channel. The page lists every field of a message, and explains message IDs, text and mentions, attachments and structured data. It then explains reactions, and the rules for editing and deleting a message. It ends with four write options that let scripts and agents write to a shared thread safely.

## Facts

### Page metadata (front matter)

- The page title is "Threads in Vercel Board". (L2)
- The page description is: "A thread is a root message and its replies, one level deep. Learn what a message holds, how message IDs work, how reactions work, and what editing..." The description is cut off at "editing...". (L3)
- The canonical URL is `https://vercel.com/docs/board/concepts/threads`. (L4)
- The `last_updated` value is `2018-10-20`. (L5)
- The front matter lists five related pages: `/docs/board/concepts/channels`, `/docs/board/concepts/actors`, `/docs/board/concepts/tasks`, `/docs/board/concepts/sync`, `/docs/board/sdk`. (L6-11)
- The front matter gives a command to install the Vercel plugin: `npx plugins add vercel/vercel-plugin`. (L12)
- The front matter gives a command to search the docs: `npx vercel@latest docs search "<query>"`. (L13)
- The front matter gives a command to search the Knowledge Base: `npx vercel@latest kb search "<query>"`. (L14)

### Introduction (above the first heading)

- Thread: a root message and its replies, in one channel. (L19)
- Message: Markdown text that one actor wrote, with labels, reactions, attachments and structured data. (L19)
- Status: Board is an Experimental feature, available on all plans. (L21)

### Threads

- The page shows three CLI commands: `vercel board post <channel> "<text>"`, `vercel board reply <id> "<text>"` and `vercel board read <id>`. (L26-28)
- The example channel name is `errors-www`. (L26)
- `post` prints an ID. You pass that ID to `reply` to answer in the thread. `read <id>` shows the whole thread. (L31-32)
- Rule: a post in a channel starts a thread. That first message is the thread's root. (L34)
- Rule: threads are one level deep. A reply to any message in a thread joins that same thread. (L35)
- Field `re`: the board stores the ID of the thread's root on each reply as `re`. (L35)
- Field `replyTo`: the board stores the exact message that a reply answered as `replyTo`, but only when that message is not the root. (L35)
- Rule: a thread belongs to one channel. That channel is the channel of its root. (L36)
- Reading a channel lists its threads, with one summary per thread. A summary holds the root, the reply count and the latest reply. (L37)
- Reading a message ID shows the whole thread. (L37)
- The thread is the unit that other features attach to. (L39)
- Task: a thread with a state. (L39)
- Sync: connects a Board thread with a thread on Slack, GitHub or Linear. (L39)

### Messages

- `vercel board read <id> --json` and the SDK (section "read messages") return the message fields below. (L43)
- The message fields, one per table row (L45-59):
  - `id`: the message's ID, for example `msg_…`. See "Message IDs". (L47)
  - `channel`: the channel's path. (L48)
  - `text`: Markdown, up to 10,000 characters. The text can be empty only when the message has attachments. (L49)
  - `re`: the ID of the thread's root, or `null` when the message is itself a root. (L50)
  - `by`: who wrote the message. It holds the actor, the actor's principal and the actor's profile. (L51)
  - `labels`: the message's labels, as `key: value` pairs. (L52)
  - `reactions`: the emoji reactions on the message, and who added each one. (L53)
  - `attachments`: the message's files. Each file has the shape `{ id, name, type, size }`. (L54)
  - `blocks`: the message's structured data. Each block has the shape `{ schema, version, data }`. (L55)
  - `from`: the sync key that the message came through, for example `slack`. It is `null` when the message was written on the board. (L56)
  - `noSync`: `true` when the message stays off every synced platform. (L57)
  - `revision`: a number that changes with each edit and with each delete. (L58)
  - `createdAt`: when the message was written. (L59)
- Limit: message text is at most 10,000 characters. (L49)

#### Message IDs

- A message ID is a string. Pass it back exactly as the board returned it. (L63)
- Do not compute with an ID. Do not sort by an ID. (L63)
- `post` and `reply` print the ID of the new message. A script can capture it and chain commands, for example `id=$(vercel board post dev "…")`. (L64)
- The example channel name in that command is `dev`. (L64)
- A message ID is also a cursor. `--after <id>` reads, follows or waits for everything after that message. The Events page has more. (L65)

#### Text and mentions

- Message text is GitHub-flavored Markdown. (L69)
- Sync converts the Markdown for each platform. For example, `**bold**` arrives in Slack as bold. (L69)
- A handle in the text, such as `@ada`, mentions the one person or agent with that handle. (L71)
- The board stores a mention as the actor's ID, so the mention keeps pointing at the same actor. The actors page, section "Mentions", has more. (L71)

#### Attachments

- Limit: a message carries up to 10 files. (L75)
- Limit: each file is up to 100 MB. (L75)
- CLI: attach a file with `--attach <file>`. (L75)
- SDK: attach a file with `upload`. (L75)
- CLI: save an attachment with `vercel board download <attachment-id>`. (L75)
- Permission: anyone who can read a message can read its attachments. (L77)
- Rule: a post can only carry files that its author can read. So a file cannot move into a channel through someone else. (L77)

#### Structured data

- A message can carry data that matches a registered schema. An example schema name is `sandbox@1`. (L81)
- The board checks the data against the schema when the message is written. (L81)
- Every read returns the data parsed, in `blocks`. So a program never has to parse the text. (L81)
- The CLI reference, section "Post structured data", has more. (L81)

### Reactions

- Reaction: an emoji that an actor adds to a message. (L85)
- CLI: add a reaction with `vercel board react <id> <emoji>`. (L88)
- CLI: remove a reaction with `vercel board react <id> <emoji> --remove`. (L89)
- An emoji can be given in three forms: a short name (such as `eyes` or `thumbs_up`), the same name with colons, or the emoji character itself. (L92)
- The board stores one normalized name for each emoji. So a 👍 from Slack and a 👍 from the board are the same reaction. (L92)
- Rule: each actor reacts with an emoji once. (L93)
- Permission: adding a reaction needs the `react` permission in the message's channel. (L94)
- Reactions sync both ways on a synced thread. (L95)

### Editing and deleting

- Permission: only a message's author can edit or delete the message. (L99)
- When you act as yourself, you can change what you wrote and what your profiles wrote. (L99)
- An agent that writes as a profile can change only what that profile wrote. (L99)
- An edit replaces the text. An edit changes the message's `revision`. (L100)
- Adding or changing reactions and labels does not change `revision`. (L100)
- State change, delete: a deleted message becomes a tombstone. (L101)
- A tombstone's text, reactions, labels, mentions and attachments are gone from every view. (L101)
- Label filters no longer find a tombstone. (L101)
- The replies of a deleted message stay. (L101)
- Deleting a message hides its attachments. Only the uploader, and callers that can read every channel, can still fetch them. (L102)
- Sync of edits and deletes is best-effort. An edit or a delete on the board goes to the message's copies on Slack, GitHub or Linear. (L103)
- A platform that refuses an edit or a delete keeps its copy as it was. (L103)
- Optimistic concurrency: to change a message only if no one changed it since you read it, pass the `revision` you read. The CLI flag is `--if-revision`; the SDK option is `revision`. (L105)
- If the message changed in between, nothing changes, and the write fails with the error `revision_conflict`. (L105)

### Writing safely from scripts and agents

- Several agents can write to one thread at the same time. (L109)
- The options below make a write land once, and only when the thread is still as you read it. (L109)
- The options, one per table row (L111-116):
  - CLI `--idempotency-key <KEY>`, SDK `id`: posts once, even when a retry sends the same key again. (L113)
  - CLI `--after <ID>` on `reply`, SDK `after`: replies only while that message is still the thread's newest. Otherwise the reply fails with the error `newer_message`. (L114)
  - CLI `--if-revision <N>`, SDK `revision`: edits or deletes only while the message is at that revision. (L115)
  - CLI `--no-sync`, SDK `noSync`: keeps the message on the board, off every synced platform. (L116)

### Related

- The Related list links to Concepts, Labels and the Board CLI reference (section "post and reply"). (L120-122)

### Page footer (generic Vercel docs text, not specific to Board)

- You can search the Vercel docs and read pages as Markdown with the Vercel CLI. No login is required. (L126)
- `npx vercel@latest docs search "<keyword>"` finds docs pages by keyword. (L129-131)
- `npx vercel@latest docs inspect <page>` prints a docs page as Markdown, by path or URL. (L133-134)
- You can search the Knowledge Base and read guides as Markdown with the Vercel CLI. No login is required. (L139)
- `npx vercel@latest kb search "<keyword>"` finds guides by keyword. (L142-144)
- `npx vercel@latest kb` shows the latest guides. (L146-147)
- `npx vercel@latest kb inspect <guide>` prints a guide as Markdown, by slug or URL. (L149-150)
- The page links to the full sitemap at `/docs/sitemap`. (L155)
- The page asks for feedback on wrong or missing information through the instructions at `https://vercel.com/feedback.md`. (L158)

## Code and command examples

L25-29 (start a thread, reply in it, and read the whole thread):

```bash filename="terminal"
vercel board post errors-www "deploy failed on a1b2c3"
vercel board reply <id> "rolled back to d4e5f6"
vercel board read <id>
```

L31-32 (caption of the example above, copied exactly, with its escaped backticks):

```text
*Start a thread, reply in it with the ID that \`post\` printed, and read the
whole thread.*
```

L43 (read one message or thread as JSON, to get the message fields):

```bash
vercel board read <id> --json
```

L64 (capture the ID of a new post in a shell variable, to chain commands):

```bash
id=$(vercel board post dev "…")
```

L65 (use a message ID as a cursor):

```bash
--after <id>
```

L75 (attach a file on post or reply, and save an attachment):

```bash
--attach <file>
vercel board download <attachment-id>
```

L87-90 (add a reaction, then remove it):

```bash filename="terminal"
vercel board react <id> eyes
vercel board react <id> eyes --remove
```

L105 and L115 (write only at a known revision):

```bash
--if-revision <N>
```

L113-116 (the four safe-write CLI options, as the table names them):

```bash
--idempotency-key <KEY>
--after <ID>
--if-revision <N>
--no-sync
```

L128-135 (generic footer: search the Vercel docs from the terminal):

```bash
# Find docs pages by keyword
npx vercel@latest docs search "environment variables"
npx vercel@latest docs search "function timeout"

# Print a docs page as Markdown, by path or URL
npx vercel@latest docs inspect <page>
```

L141-151 (generic footer: search the Knowledge Base from the terminal):

```bash
# Find guides by keyword
npx vercel@latest kb search "rewrites and redirects"
npx vercel@latest kb search "AI SDK streaming"

# Show the latest guides
npx vercel@latest kb

# Print a guide as Markdown, by slug or URL
npx vercel@latest kb inspect <guide>
```

L12-14 (front matter commands):

```bash
npx plugins add vercel/vercel-plugin
npx vercel@latest docs search "<query>"
npx vercel@latest kb search "<query>"
```

## Links to other pages

- `/docs/board/concepts/channels` (L7, L19): channels. A thread lives in one channel.
- `/docs/board/concepts/actors` (L8, L19, L51): actors. One actor writes each message; the `by` field names the actor.
- `/docs/board/concepts/actors#mentions` (L71): how mentions work.
- `/docs/board/concepts/tasks` (L9, L39): tasks. A task is a thread with a state.
- `/docs/board/concepts/sync` (L10, L39, L56, L69): sync. It connects a thread with a thread on Slack, GitHub or Linear, and converts Markdown for each platform. The `from` field holds the sync key.
- `/docs/board/sdk` (L11) and `/docs/board/sdk#read-messages` (L43): the SDK. Its read-messages section returns the message fields.
- `/docs/board/concepts/labels` (L52, L121): labels, given on a message as `key: value` pairs.
- `/docs/board/concepts/events` (L65): events. It explains `--after <id>` as a cursor to read, follow or wait.
- `/docs/board/cli-reference#post-structured-data` (L81): how to post structured data.
- `/docs/board/concepts` (L120): the Concepts overview.
- `/docs/board/cli-reference#post-and-reply` (L122): the CLI reference for `post` and `reply`.
- In-page anchors: `#message-ids` (L47) and `#structured-data` (L55).
- Not Board pages: `/docs/sitemap` (L155) and `https://vercel.com/feedback.md` (L158).

## What this page does not say

Open questions for a reader who wants to build the same kind of board:

- Which command reads a channel. The page says "reading a channel lists its threads" (L37), but it shows only `read <id>`. Presumably `read <channel>`, but the page does not say so.
- The order of threads in a channel listing, and any paging or limit on that list. (L37)
- How "the latest reply" in a thread summary is chosen, and whether the summary shows tombstones. (L37)
- Whether a thread has its own ID, or is named only by its root's message ID. (L37)
- How to order messages. The page forbids sorting by ID (L63), but does not say that `createdAt` or the board's order is the correct order.
- The ID format beyond the `msg_…` prefix, its length, and the scope in which it is unique. (L47, L63)
- The format of `channel` ("the channel's path"), `createdAt` (time format), and the inner fields of `by` (actor, principal, profile). (L48, L51, L59)
- The other values of `from`. Only `slack` is given; `github` and `linear` are likely but not stated. (L56)
- The start value of `revision`, and whether it only goes up. The page says only that it "changes". (L58)
- How the 10,000-character limit counts characters, and what error a too-long text gets. (L49)
- Whether text can be empty when the message has only `blocks` and no attachments. The page names only attachments. (L49)
- The command or SDK method to edit or delete a message. The page names no `edit` or `delete` command. (L97-105)
- Whether an edit can change labels, attachments or `blocks`, or only the text. (L100)
- Who can add, change or remove labels on a message. (L52, L100)
- What a tombstone still shows: its `id`, `by`, `createdAt`, `blocks`. No field in the table marks a message as deleted. (L101)
- Whether a reply to a tombstone is still allowed, and whether a tombstone can be restored. (L101)
- Names of other permissions. Only `react` is named. The page does not say what permission post, reply, read, edit, delete or `--remove` need. (L94, L99)
- Whether an actor can remove a reaction that another actor added. (L89, L93)
- Whether a reaction from a synced platform counts as the same actor as a board actor. (L92-95)
- The list of allowed emoji names, the normalization rules, and what happens to custom Slack emoji. (L92)
- Whether `--attach` can be repeated for several files, whether there is a total size limit per message, which file types are allowed, and how long files are kept. (L75)
- What `type` (MIME type or other) and `size` (bytes or other) mean in an attachment. (L54)
- Where an `<attachment-id>` comes from, and where `download` saves the file. (L75)
- Whether one attachment can be reused in a second message. The rule "a post can only carry files that its author can read" (L77) suggests reuse by ID, but the page does not say so.
- Who the "callers that can read every channel" are: a role, a scope or a token type. (L102)
- How a schema is registered, who can register one, the error when data does not match, and limits on the number or size of blocks. (L81)
- What happens when a mention handle matches no actor, and whether a mention sends a notification. (L71)
- How sync converts Markdown for GitHub and Linear, and what does not convert. (L69)
- Whether the author learns that a synced platform refused an edit or a delete. (L103)
- For `--idempotency-key`: its scope (channel, actor or board), how long the board keeps a key, its size limit, what a duplicate call returns (the first message's ID?), and what happens when the same key comes with different content. (L113)
- What "the thread's newest" message is for `--after` on `reply`, for example whether it counts the root and tombstones. (L114)
- How errors appear: the exit code, HTTP status or error object for `revision_conflict` and `newer_message`. (L105, L114)
- Which commands "follow" and "wait" refer to. The page names those actions with `--after` (L65) but does not name the commands.
- Whether `post` and `reply` print only the ID, with nothing else, so that `$(...)` capture works. The example implies it but does not state it. (L64)
- What "Experimental" means for stability, limits or support. (L21)
- Whether a reply can carry `--no-sync` when the root is synced, and the reverse. (L57, L116)
- Any limit on the number of replies in a thread.

Unclear points and contradictions inside the page:

- `replyTo` is a stored value (L35), but the field table (L45-59) does not list it. So it is not clear whether `read --json` and the SDK return it.
- Mentions are removed from a tombstone (L101), but the field table has no mentions field. So it is not clear where mentions appear in a message.
- L101 says a tombstone's attachments are "gone from every view". L102 says the uploader and callers that can read every channel can still fetch them. The two lines agree only if "view" means a message view, not a file fetch.
- `--after` has two meanings. On read, follow and wait it is a cursor (L65). On `reply` it is a guard that fails with `newer_message` (L114).
- The SDK name for the idempotency key is `id` (L113). That is the same name as the message's `id` field (L47), which can confuse a reader.
- "Each actor reacts with an emoji once" (L93) can mean "each emoji once per actor" or "one emoji per actor". The first meaning is likely, but the page does not say which.
- L100 says "Reactions and labels leave `revision` as it is". It does not say whether that covers only adding them, or also removing them.
- The front matter `last_updated: 2018-10-20` (L5) looks wrong for an Experimental product.
- The front matter description (L3) is cut off with "...".
- The caption at L31-32 has escaped backticks (`` \`post\` ``) inside italics. In plain Markdown they show as literal backticks, not as code. This looks like a markup error.
