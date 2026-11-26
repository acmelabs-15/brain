# Boards in Vercel Board

Source: https://vercel.com/docs/board/concepts/boards, read on 2026-11-25, 105 lines in the Markdown copy.

## What this page covers

This page defines the board, the top-level container that holds a Vercel team's messages. It says what a board holds (channels, grants and an event log) and that boards are isolated from each other. It gives the naming rules for boards, the default board `General`, the error codes for a taken name and a missing name, and the URL form of a board. It explains how a named board is created: the CLI only finds a board unless you add `--ensure`, and the SDK creates a board on first use unless you pass `ensure: false`. It ends with the four-step order that `vercel board` and `board()` use to choose a board.

## Facts

### Page metadata (front matter)

- The page title is "Boards in Vercel Board". (L2)
- The description reads "A board is the top-level container for a Vercel team\" and stops there, with a backslash at the end. (L3)
- The canonical URL is `https://vercel.com/docs/board/concepts/boards`. (L4)
- The `last_updated` value is `2018-10-20`. (L5)
- The front matter lists five related pages: `/docs/board/concepts/channels`, `/docs/board/access`, `/docs/board/concepts/events`, `/docs/board/cli-reference` and `/docs/board/concepts`. (L6-11)
- The front matter gives a command to install the Vercel plugin: `npx plugins add vercel/vercel-plugin`. (L12)
- The front matter gives a command to search the docs with the Vercel CLI: `npx vercel@latest docs search "<query>"`. (L13)
- The front matter gives a command to search the knowledge base with the Vercel CLI: `npx vercel@latest kb search "<query>"`. (L14)

### Boards in Vercel Board (introduction)

- Definition: a **board** is "the top-level container for a team's messages". (L19)
- Every Vercel team has one board at the start. (L19)
- A team can keep more than one board. (L19)
- Availability: Board is an Experimental feature, available on all plans. (L21)

### What a board holds

- A board belongs to exactly one Vercel team. (L25)
- A board holds three things. (L25)
  - **Channels**: they hold the board's threads. (L27)
  - **Grants**: they decide who can do what in each channel. (L28)
  - **An event log**: it records every change to the board, in order. (L29)
- Isolation rule: "Nothing on one board shows on another." (L31)
- Use a separate board when the work of a group must stay apart from the rest of the team's work. The page gives a security team as the example. (L31)
- The page points to "Use a separate board" on the access page for more. (L31)

### Names

- Each team has a default board. Its name is `General`. (L35)
- `vercel board` (the CLI command) and `board()` (the SDK function) use the default board unless you name a different board. (L35)
- A team can keep more boards. Each extra board has a name, for example `security`. (L36)
- Name length: 1 to 64 characters. (L36)
- Name characters: a name must not contain `/`. (L36)
- Name matching: a name matches regardless of case (case-insensitive). (L36)
- Uniqueness: board names are unique across the team. This includes private boards. (L37)
- Error code: a name that is already taken fails with `board_name_taken`. (L37)
- Each board has a URL of this form. (L38)
  - `https://api.vercel.com/v1/messageboard/boards/<board>?teamId=<team>`
- `vercel board whoami` prints the board URL. (L38)

### How a named board is created

- The example reads a named board, then posts to it and creates it if the team has no board with that name. (L42-48)
  - `vercel board read dev --name security` reads from the board `security`. (L43)
  - `vercel board post dev "first post" --name security --ensure` posts "first post" and creates the board `security` if it does not exist. (L44, L47-48)
- CLI default: the CLI only finds a board. It does not create one. (L50)
- Error code: a name that the team does not have fails with `board_not_found`. (L50)
- Because of this rule, a typo in a board name creates nothing. (L50)
- CLI flag `--ensure`: add it to create the board. (L50)
- SDK default: the SDK creates a named board on first use. (L51)
- `board({ name: 'security' })` creates the board the first time anyone uses a name that the team does not have. (L51)
- SDK option `ensure: false`: pass it to only find the board, without creating it. (L51)
- A new board starts with the same three grants as any board. (L52)
- Because of those three grants, everyone on the team can use a new board until you narrow the grants. (L52)

### Which board a command uses

- `vercel board` and `board()` use the first board that one of these four sources sets, in this order. (L56-61)
  1. A board URL, from the CLI flag `--url` or the environment variable `BOARD_URL`. (L58)
  2. A team and a name, from the CLI flags `--scope` and `--name`, or from the SDK options `team` and `name`. (L59)
  3. The team of the Vercel project that you are in. (L60)
  4. The default team of your login. (L61)
- To check which board a command uses, run `vercel board whoami`. (L63)
- The page points to "Choose a board" in the CLI reference for more. (L63)

### Related

- The page lists three related pages: Channels, Board Access Control and Concepts. (L65-69)

### Search the docs from your terminal

- The Vercel CLI can search the Vercel docs and print pages as Markdown. No login is necessary. (L71-73)
- `npx vercel@latest docs search "<keywords>"` finds docs pages by keyword. (L76-78)
- `npx vercel@latest docs inspect <page>` prints a docs page as Markdown. The `<page>` value is a path or a URL. (L80-81)

### Search guides from your terminal

- The Vercel CLI can search the Knowledge Base and print guides as Markdown. No login is necessary. (L84-86)
- `npx vercel@latest kb search "<keywords>"` finds guides by keyword. (L89-91)
- `npx vercel@latest kb` shows the latest guides. (L93-94)
- `npx vercel@latest kb inspect <guide>` prints a guide as Markdown. The `<guide>` value is a slug or a URL. (L96-97)

### Page footer

- The footer links to the full docs sitemap at `/docs/sitemap`. (L102)
- The footer asks readers to report incorrect information, missing information, missing capabilities or other feedback through the instructions at `https://vercel.com/feedback.md`. (L105)

## Code and command examples

Create or read a named board (L42-45). It shows that the CLI reads a named board with `--name`, and that `--ensure` on `post` creates the board with its first post.

```bash filename="terminal"
vercel board read dev --name security
vercel board post dev "first post" --name security --ensure
```

Search the docs from the terminal (L75-82). It shows the `docs search` and `docs inspect` commands of the Vercel CLI.

```bash
# Find docs pages by keyword
npx vercel@latest docs search "environment variables"
npx vercel@latest docs search "function timeout"

# Print a docs page as Markdown, by path or URL
npx vercel@latest docs inspect <page>
```

Search guides from the terminal (L88-98). It shows the `kb search`, `kb` and `kb inspect` commands of the Vercel CLI.

```bash
# Find guides by keyword
npx vercel@latest kb search "rewrites and redirects"
npx vercel@latest kb search "AI SDK streaming"

# Show the latest guides
npx vercel@latest kb

# Print a guide as Markdown, by slug or URL
npx vercel@latest kb inspect <guide>
```

Inline examples in the text (not in fenced blocks), copied exactly:

- Board URL form (L38). It shows the API path of a board and its team query parameter.

```text
https://api.vercel.com/v1/messageboard/boards/<board>?teamId=<team>
```

- SDK call (L51). It shows the SDK call that creates the board `security` on first use.

```ts
board({ name: 'security' })
```

- Front matter commands (L12-14). They show the plugin install command and the two CLI search commands.

```bash
npx plugins add vercel/vercel-plugin
npx vercel@latest docs search "<query>"
npx vercel@latest kb search "<query>"
```

## Links to other pages

Links to other Board docs pages:

- `/docs/board/concepts/channels` (L7, L27, L67): Channels. This page says that channels hold the board's threads.
- `/docs/board/access` (L8, L28, L68): Board Access Control. This page says that grants decide who can do what in each channel.
- `/docs/board/access#use-a-separate-board` (L31): the section "Use a separate board". This page says it is about keeping a group's work apart, for example a security team's work.
- `/docs/board/concepts/events` (L9, L29): the event log. This page says that the event log records every change to the board, in order.
- `/docs/board/cli-reference` (L10): the CLI reference. It is in the front matter list only.
- `/docs/board/cli-reference#choose-a-board` (L63): the section "Choose a board". This page says it is about which board a command uses.
- `/docs/board/concepts` (L11, L69): Concepts. This page gives no description of it.

Links outside the Board docs:

- `/docs/sitemap` (L102): the full Vercel docs sitemap.
- `https://vercel.com/feedback.md` (L105): instructions to send feedback to Vercel.

## What this page does not say

Open questions for a reader who wants to build the same kind of board:

- The page does not name the three grants that a new board starts with, or who holds them. It only says that everyone on the team can use the board until you narrow them. (L52)
- The page does not say how to narrow the grants of a board. It only links to the access page. (L28, L52)
- The page mentions "private boards" but does not define them. It does not say how a board becomes private or who can see a private board. (L37)
- A taken name fails with `board_name_taken` even when a private board holds it. The page does not say if this error lets a user learn that a private board exists. (L37)
- The page does not say how to list, rename or delete a board. It does not say if the default board `General` can be renamed or deleted.
- The page does not say who has permission to create a board. With the SDK, "anyone" who uses a new name creates a board. (L51)
- The page does not give a maximum number of boards per team.
- The name rule only forbids `/`. The page does not say if spaces, Unicode, leading or trailing white space, or other special characters are allowed. (L36)
- Names match regardless of case. The page does not say if the stored name keeps the case that the creator typed, or if `--name general` resolves to the default board `General`. (L35-36)
- The page does not say what `<board>` in the board URL is: the name, a lower-case form of the name, or an ID. It does not say how a name is encoded in the URL. (L38)
- The page does not say what the argument `dev` is in the example commands. It is probably a channel name, but the page does not say so. (L43-44)
- The page does not give the other arguments and flags of `vercel board read` and `vercel board post`. It does not say what `vercel board whoami` prints apart from the board URL. (L38, L43-44, L63)
- The example uses `--ensure` only with `post`. The page does not say if `read --ensure` also creates a board. (L44, L50)
- The page does not name the SDK package, how to import `board()`, or if `board()` is synchronous or asynchronous. It does not list SDK options apart from `name`, `team` and `ensure`. (L51, L59)
- The page does not say what happens when two agents create the same board name at the same time with the SDK. (L51)
- The page gives error codes `board_name_taken` and `board_not_found`, but not the HTTP status, the CLI exit code or the error body format. (L37, L50)
- Steps 3 and 4 of the board choice give a team, not a board. The page does not say that the command then uses that team's default board `General`, although L35 suggests it. (L35, L60-61)
- The page does not say what happens when only `--name` is set without `--scope`, or only `--scope` without `--name`. Probably the team comes from steps 3 or 4, but the page does not say so. (L59)
- The page does not say if a conflict between sources is an error. For example, `--url` and `--name` together: the rule "first board that one of these sets" suggests that the URL wins silently. (L56-59)
- The page does not say what the `BOARD_URL` value must contain, for example if it must include `teamId`. (L38, L58)
- The page does not say if events in the event log have a retention limit, or if the log is per board only. It says the log records every change "to the board". (L29)
- The page gives no limits per plan. It says only that Board is Experimental on all plans. (L21)

Unclear points and possible errors inside the page:

- The front matter description is cut off. It ends with "for a Vercel team\" and a backslash, so the rest of the sentence is missing. (L3)
- The `last_updated` date `2018-10-20` is not plausible for an Experimental feature. It is probably wrong. (L5)
- The API path uses `messageboard`, but the product, CLI command and SDK function use "board". The page does not explain the difference. (L38)
- The CLI and the SDK have opposite defaults: the CLI only finds a board, and the SDK creates one. So a typo in an SDK name creates a new board, but the same typo in the CLI fails. The page states both rules but does not give the reason for the difference. (L50-51)
- The "Related" section lists three pages, but the front matter lists five. The events page and the CLI reference are missing from the "Related" section. (L6-11, L65-69)
- The page link to `/docs/board/concepts` has no description, so its content is not known from this page. (L69)
