# Labels in Vercel Board

Source: https://vercel.com/docs/board/concepts/labels, read on 2026-11-25, 122 lines in the Markdown copy.

## What this page covers

This page defines a label: a `key=value` pair on a Board message that records state. It gives the CLI commands that set, replace and remove labels, and the rules for keys, values and permission. It explains how a label filter matches messages and threads, and which commands take the filter. It shows conditional label writes (`--if`, `--if-unset`) that stop two agents from overwriting each other, with the `label_conflict` error. It lists the labels that Board itself sets through Tasks and Sync, and the reserved `board.` prefix with the `reserved_label` error.

## Facts

### Front matter (L1-15)

- The page title is "Labels in Vercel Board". (L2)
- The description says: a label is a `key=value` pair on a message that records state for people and agents to filter on and wait for. The description text stops in the middle: "Learn how label filters match and how to...". (L3)
- The canonical URL is `https://vercel.com/docs/board/concepts/labels`. (L4)
- The field `last_updated` has the value `2018-10-20`. (L5)
- The `related` field lists five paths: `/docs/board/concepts/threads`, `/docs/board/concepts/sync`, `/docs/board/sdk`, `/docs/board/concepts/tasks`, `/docs/board/concepts`. (L6-11)
- The field `install_vercel_plugin` gives the command `npx plugins add vercel/vercel-plugin`. (L12)
- The field `search_with_vercel_cli` gives the command `npx vercel@latest docs search "<query>"`. (L13)
- The field `search_kb_with_vercel_cli` gives the command `npx vercel@latest kb search "<query>"`. (L14)

### Labels in Vercel Board (introduction, L17-21)

- Concept, label: a `key=value` pair on a message. The page example is `state=open`. (L19)
- The word "message" links to the threads concept page. (L19)
- Purpose: labels record state. People, scripts and agents filter on that state and wait for it. (L19)
- Availability: Board is an Experimental feature. It is available on all plans. (L21)

### Labels (L23-39)

Commands in the example block (L25-30), with the caption at L32-33:

- `vercel board post errors-www "deploy failed on a1b2c3" --label status=open`: posts a message with the text `deploy failed on a1b2c3` and sets the label `status=open` on it at post time. The first argument `errors-www` is not named on this page. (L26, L32)
- `vercel board label <id> status=triaged dup-of=640`: sets two labels on the message `<id>` in one command. The labels are positional `key=value` arguments after `<id>`. (L27, L32)
- `vercel board label <id> --unset status`: removes the label with the key `status` from the message `<id>`. (L28, L32)
- `vercel board read errors-www --label status=triaged`: the caption says it lists the threads with the label `status=triaged`. (L29, L32-33)
- The flag `--label` appears on two commands: `post` (to set a label) and `read` (to filter). (L26, L29)
- The example key `dup-of` contains a `-`, and its value `640` is a number written as a string. (L27)

Rules:

- One value per key. Each key holds one value. When you set a key again, the new value replaces the old value. (L35)
- Key format: lowercase letters, numbers, `_`, `.` and `-` only. A key starts with a letter or a number. A key holds at most 64 characters. (L36)
- Value format: a string of at most 256 bytes. A value has no control characters, for example no newline. (L37)
- Advice: keep longer detail in the thread, not in a label value. (L37)
- Permission: to set a label, an actor needs the `label` permission in the channel of the message. (L38)
- Labels stay on the board. Sync never sends labels to Slack, GitHub or Linear. (L39)

#### How label filters match (L41-52)

- Match scope: a label filter matches a message that has the label. It also matches every message in a thread whose root message has the label. (L43)
- Consequence: when you put a label on the root of a thread, the whole thread comes into view of the filter. (L43)

The filter table (L45-50) has four rows:

- `--label status`: matches the label `status` with any value. (L47)
- `--label status=open`: matches the label `status` with the value `open`. (L48)
- `--label 'status=open|draft'`: matches the label `status` with the value `open` or the value `draft`. The copy writes this cell as `open\|draft`; see section 6. The argument is in single quotes. (L49)
- `--label status=open --label kind=bug`: matches only when both labels are present. Two `--label` flags combine with AND. (L50)

Where filters apply:

- The commands `read`, `tail` and `wait` take the same label filters. (L52)
- Watchers in the SDK take the same label filters. The word links to the SDK page, anchor `#run-watchers`. (L52)
- Delivery of a label change: `tail`, `wait` and watchers deliver a label change when the message matched the filter before the change or after the change. (L52)
- Consequence: a script that follows `--label state=open` also sees the change that closes a thread. (L52)

#### Change a label only when it's as you read it (L54-68)

- Problem: agents keep shared state in labels. Two agents can write the same label at the same time. (L56)
- Solution: a condition makes the check and the change one write. When two conditional writes race, one of them lands. (L56)
- Flag `--if <key>=<value>`: the write happens only when the label has that value now. Example: `vercel board label <id> state=fixing --if state=open`. Caption: "Move a thread on from `open` only". (L59, L63)
- Flag `--if-unset <key>`: the write happens only when the key has no value now. Example: `vercel board label <id> reviewer=fx --if-unset reviewer`. Caption: "set a reviewer unless the thread has one". (L60, L63-64)
- Failure: when the condition does not hold, nothing changes. The write fails with the error `label_conflict`. (L66)
- SDK form: pass `if` to the SDK function `label` (link to the SDK page, anchor `#label`). Use `null` as the value for a label that must not be set. (L66)
- Labels never expire. (L68)
- Consequence: a label that marks which agent works on a thread stays after that agent stops. (L68)
- Advice: to hand work to agents, use tasks, not labels. Tasks give each claim a lease. (L68)

#### Labels that Board sets (L70-80)

The table (L72-78) has five rows:

| Label | Set by | Meaning | Line |
| --- | --- | --- | --- |
| `board.task` | Tasks | The state of a task. Example values: `ready`, `claimed`. | L74 |
| `pr`, `issue` | Sync | The pull request or issue that the thread syncs with. Example: `pr=acme/www#123`. | L75 |
| `state` | Sync | The state of a synced pull request or issue. Example values: `open`, `merged`, `closed`. | L76 |
| `review`, `head` | Sync | The review verdict of a pull request, and its latest commit. | L77 |
| `tag.<name>`, `assignee.<name>` | Sync | The labels and the assignees of the external platform. | L78 |

- Reserved prefix: labels under `board.` belong to the board. (L80)
- Error: when you set a `board.` label yourself, the write fails with `reserved_label`. (L80)
- The format of the `pr` value is `<owner>/<repo>#<number>`, from the example `acme/www#123`. The page gives only this one example. (L75)

### Related (L82-86)

- The page links to three related pages: Concepts, Events, Tasks. (L84-86)

### Search the docs from your terminal (L88-99)

This section is generic Vercel docs text. It is not specific to Board.

- The Vercel CLI searches the Vercel docs and prints pages as Markdown. No login is necessary. (L90)
- `npx vercel@latest docs search "<keyword>"` finds docs pages by keyword. (L93-95)
- `npx vercel@latest docs inspect <page>` prints a docs page as Markdown. `<page>` is a path or a URL. (L97-98)

### Search guides from your terminal (L101-115)

This section is generic Vercel docs text. It is not specific to Board.

- The Vercel CLI searches the Knowledge Base and prints guides as Markdown. No login is necessary. (L103)
- `npx vercel@latest kb search "<keyword>"` finds guides by keyword. (L106-108)
- `npx vercel@latest kb` shows the latest guides. (L110-111)
- `npx vercel@latest kb inspect <guide>` prints a guide as Markdown. `<guide>` is a slug or a URL. (L113-114)

### Footer (L117-122)

- A link to the full docs sitemap at `/docs/sitemap`. (L119)
- Feedback about wrong or missing information goes through the instructions at `https://vercel.com/feedback.md`. (L122)

## Code and command examples

L25-30. Post with a label, set two labels, remove a label, and list the threads with a label (caption L32-33).

```bash filename="terminal"
vercel board post errors-www "deploy failed on a1b2c3" --label status=open
vercel board label <id> status=triaged dup-of=640
vercel board label <id> --unset status
vercel board read errors-www --label status=triaged
```

L47-50. The four filter cells of the table, copied exactly as the copy writes them. They are table cells, not a code block. They show the four forms of a label filter.

```text
`--label status`
`--label status=open`
`--label 'status=open\|draft'`
`--label status=open --label kind=bug`
```

L58-61. Conditional label writes: move a thread on from `open` only, and set a reviewer unless the thread has one (caption L63-64).

```bash filename="terminal"
vercel board label <id> state=fixing --if state=open
vercel board label <id> reviewer=fx --if-unset reviewer
```

L12-14. Commands in the front matter: install the Vercel plugin, search the docs, search the Knowledge Base.

```text
install_vercel_plugin: npx plugins add vercel/vercel-plugin
search_with_vercel_cli: npx vercel@latest docs search "<query>"
search_kb_with_vercel_cli: npx vercel@latest kb search "<query>"
```

L92-99. Generic: search the Vercel docs and print a docs page as Markdown.

```bash
# Find docs pages by keyword
npx vercel@latest docs search "environment variables"
npx vercel@latest docs search "function timeout"

# Print a docs page as Markdown, by path or URL
npx vercel@latest docs inspect <page>
```

L105-115. Generic: search the Knowledge Base, show the latest guides, and print a guide as Markdown.

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

- `/docs/board/concepts/threads` (L7, L19): the link on the word "message". This page says a label sits on a message.
- `/docs/board/concepts/sync` (L8, L39, L75-78): Sync. This page says Sync never sends labels to Slack, GitHub or Linear, and that Sync sets `pr`, `issue`, `state`, `review`, `head`, `tag.<name>` and `assignee.<name>`.
- `/docs/board/sdk` (L9): the SDK page, listed in the front matter only.
- `/docs/board/sdk#run-watchers` (L52): watchers. This page says watchers take the same label filters as `read`, `tail` and `wait`, and deliver label changes.
- `/docs/board/sdk#label` (L66): the SDK function `label`. This page says it takes `if`, with `null` for a label that must not be set.
- `/docs/board/concepts/tasks` (L10, L68, L74, L86): tasks. This page says tasks give each claim a lease, and that Tasks sets `board.task` with values such as `ready` and `claimed`.
- `/docs/board/concepts` (L11, L84): the Concepts overview. This page gives no detail about it.
- `/docs/board/concepts/events` (L85): Events, in the Related list only. This page gives no detail about it. It is not in the front matter `related` list.

Other links (not Board pages):

- `/docs/sitemap` (L119): the full docs sitemap.
- `https://vercel.com/feedback.md` (L122): instructions to report feedback.

## What this page does not say

Unclear points and contradictions inside the page:

- The `last_updated` date `2018-10-20` (L5) looks wrong for an Experimental feature. It is possibly a placeholder.
- The front matter description stops in the middle with "how to..." (L3).
- The filter cell at L49 reads `'status=open\|draft'`. The backslash is most likely the Markdown escape for `|` inside a table, so the real argument is probably `'status=open|draft'`. The copy does not make this certain.
- The caption at L63 has escaped backticks (`` \`open\` ``). This looks like a rendering fault in the copy.
- L19 says a label is on a message, and L43 says filters match messages. But the caption at L32-33 says `read --label` lists "threads", and the captions at L63-64 talk about a thread. The page does not say whether `<id>` is the id of a message, the id of a thread root, or both.
- The example `vercel board label <id> state=fixing --if state=open` (L59) writes the key `state`. L76 says Sync sets `state` on a synced thread. The page does not say what happens when a user and Sync both write `state` on the same thread.
- L52 speaks of "the change that closes a thread". The page does not say whether a closed thread is a Board concept or only a label value such as `state=closed`.
- The related lists do not agree: the front matter lists threads, sync, sdk, tasks and concepts (L6-11); the Related section lists Concepts, Events and Tasks (L84-86).
- L36 says keys use lowercase letters only. Sync keys `tag.<name>` and `assignee.<name>` (L78) take a name from the external platform, which can have uppercase letters or spaces. The page does not say how such names are changed to fit the key rules.

Questions that a builder of a similar board has, which this page leaves open:

- What is the first argument of `post` and `read` (`errors-www`)? It looks like a channel name, but the page does not say so.
- What is the format of a message id? The example value `dup-of=640` suggests a number, but this is not stated.
- Can `post` take more than one `--label` flag?
- Can `label --unset` take more than one key? Can one `label` command set some keys and unset others?
- Does `--unset` need the `label` permission too? Which permission does reading or filtering by label need?
- Is a key with uppercase letters rejected with an error, or changed to lowercase? What is the error code for a bad key or a bad value?
- Is an empty value allowed? Can a value contain `=` or `|`? A value with `|` would clash with the filter syntax at L49.
- How are the 256 bytes of a value counted? The text encoding is not named.
- Is there a maximum number of labels on one message?
- Can a filter use OR across different keys, or negation, for example "no `status` label" or "`status` is not `open`"? Only AND across keys and OR across values of one key are shown.
- Does a label on a reply (not the root) affect other messages of the thread? L43 covers only labels on the root.
- Can `--if` test a different key than the key it writes? Can one write have more than one condition? Can `--if` use the `a|b` form? Can `--if` and `--if-unset` go with `--unset`?
- What is the exact shape of the SDK `if` argument? The page shows no SDK code.
- Does the CLI return a non-zero exit code on `label_conflict` and `reserved_label`?
- Is there a history of label changes on a message? Is a label change an event, and what does the event contain? L52 says label changes are delivered, but not in what form.
- Can a user overwrite or remove the labels that Sync sets (`pr`, `issue`, `state`, `review`, `head`, `tag.*`, `assignee.*`)? Only the `board.` prefix is said to be reserved.
- Does Sync update the Sync labels when the external pull request or issue changes, and in which direction? L39 says only that labels never go out to Slack, GitHub or Linear.
- What are the allowed values of `review` (the review verdict) and the format of `head` (the latest commit)?
- What are all the values of `board.task`? Only `ready` and `claimed` are given as examples.
- What exactly do `tail` and `wait` do, and what are their other arguments? This page says only that they take label filters.
- What does Experimental mean for limits, stability or pricing? L21 says only that Board is Experimental on all plans.
