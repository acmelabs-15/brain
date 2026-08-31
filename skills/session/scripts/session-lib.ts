/**
 * The pure half of the session-log tool (`session.ts` is the CLI around it):
 * parsing a session file's header, choosing which session a run acts on, and
 * the text edits that never touch an entry.
 *
 * A session is a bounded stream of work toward one Goal. Its status is
 * `in progress` from `new` until `close` writes `done` — the same words a plan
 * and a plan part carry (ADR-024). A conversation names the session it logs
 * into; one that changes nothing needs none. A file without a Status line, or
 * with the pre-ADR-024 words `open` / `closed`, is read as `in progress` / `done`.
 */

export const FILL = "_(fill in)_";
export const STATUSES = ["in progress", "done"] as const;
export type Status = (typeof STATUSES)[number];
/** The words sessions carried before ADR-024; read, never written. */
const LEGACY_STATUS: Record<string, Status> = { open: "in progress", closed: "done" };

export interface SessionHeader {
  seq: number;
  started: string;
  title: string;
  goal: string;
  status: Status;
  /** The plan (and part) this session serves, or "" when unplanned. */
  plan: string;
}

export interface Session extends SessionHeader {
  file: string;
  name: string;
  text: string;
}

export function id(seq: number): string {
  return `SES-${String(seq).padStart(3, "0")}`;
}

export function slugify(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function parseHeader(name: string, text: string): SessionHeader {
  const num = name.match(/^SES-(\d{3})-.+\.md$/);
  if (!num) throw new Error(`${name}: not a session file name (SES-NNN-<slug>.md)`);
  const h1 = text.match(/^# (\d{4}-\d{2}-\d{2} \d{2}:\d{2}) · (.+)$/m);
  if (!h1) throw new Error(`${name}: first heading must be "# YYYY-MM-DD HH:MM · Title"`);
  const goal = text.match(/^- Goal: (.+)$/m)?.[1] ?? "";
  const rawStatus = text.match(/^- Status: (.+?)\s*$/m)?.[1];
  const status: Status | undefined =
    rawStatus === undefined
      ? undefined
      : STATUSES.includes(rawStatus as Status)
        ? (rawStatus as Status)
        : LEGACY_STATUS[rawStatus];
  if (rawStatus !== undefined && status === undefined) {
    throw new Error(`${name}: Status must be one of ${STATUSES.join(" | ")}, got "${rawStatus}"`);
  }
  const plan = (text.match(/^- Plan: (.+)$/m)?.[1] ?? "").trim();
  return {
    seq: Number(num[1]),
    started: h1[1] ?? "",
    title: h1[2] ?? "",
    goal,
    status: status ?? "in progress",
    plan: plan === "—" || plan === "-" || plan === "none" ? "" : plan,
  };
}

export function template(started: string, title: string, plan: string): string {
  return `# ${started} · ${title}

- Goal: ${FILL}
- Status: in progress
- Plan: ${plan || "—"}
- Outcome: ${FILL}
- Open at end: ${FILL}

## Narrative

${FILL} — what was asked, decided, tried and abandoned, verified (and how); cite entries by sha.

## Changes (one entry per commit, in order)
`;
}

/**
 * Placeholder lines the gate counts: entry lines, the Goal and the Narrative
 * placeholder. `Outcome` and `Open at end` are the closing lines — a session
 * in progress has none yet — so only `close` (`closing: true`) counts them.
 */
export function placeholderCount(text: string, closing = false): number {
  return text.split("\n").filter((l) => {
    if (!l.includes(FILL)) return false;
    if (!closing && /^- (Outcome|Open at end): /.test(l)) return false;
    return /^\s*- |^_\(fill in\)_/.test(l);
  }).length;
}

/** Rewrite the Status line, inserting one after Goal when the file predates it. */
export function withStatus(text: string, status: Status): string {
  if (/^- Status: .+$/m.test(text)) return text.replace(/^- Status: .+$/m, `- Status: ${status}`);
  if (!/^- Goal: .+$/m.test(text)) throw new Error("no Goal line to insert Status after");
  return text.replace(/^(- Goal: .+)$/m, `$1\n- Status: ${status}`);
}

/**
 * Whether a session's `Plan:` line serves the named plan — `PLAN-003 · part 2`
 * serves `PLAN-003` and `plan-003`; `PLAN-0031` does not.
 */
export function servesPlan(plan: string, wanted: string): boolean {
  const p = plan.trim().toLowerCase();
  const w = wanted.trim().toLowerCase();
  return w.length > 0 && p.startsWith(w) && !/[0-9]/.test(p.charAt(w.length));
}

export function indexRow(s: Session): string {
  const plan = s.plan ? ` · ${s.plan}` : "";
  return `- [${id(s.seq)} · ${s.started} · ${s.title}](${s.name}) — ${s.status}${plan} — ${s.goal}`;
}

/**
 * Which session a run acts on. Named (`--session SES-004`, `4`, or the file
 * name) wins; otherwise the one session in progress. None or several in
 * progress are errors that say what to do, because guessing wrong writes into
 * another conversation's file.
 */
export function selectSession(all: readonly Session[], arg: string | undefined): Session {
  if (arg !== undefined) {
    const want = arg.replace(/\.md$/, "");
    const found = all.find(
      (s) => s.name.replace(/\.md$/, "") === want || String(s.seq) === want || id(s.seq) === want,
    );
    if (!found) throw new Error(`no session file matches --session ${arg}`);
    return found;
  }
  const active = all.filter((s) => s.status === "in progress");
  if (active.length === 1 && active[0]) return active[0];
  if (active.length === 0) {
    throw new Error(
      "no session in progress — name one with `--session SES-NNN` or start one with `new <slug>`",
    );
  }
  const list = active.map((s) => `${id(s.seq)} (${s.title})`).join(", ");
  throw new Error(`${active.length} sessions in progress — say which with --session: ${list}`);
}

/**
 * The shas a session accounts for: every entry heading, plus every sha a parent
 * entry names on an `- Also:` line -- a fix-up commit whose value belongs to that
 * parent gets no entry of its own, so the parent vouches for it.
 */
export function knownShas(text: string): string[] {
  const heads = [...text.matchAll(/^### .* · ([0-9a-f]{7,40})$/gm)].map((m) => m[1] ?? "");
  const also = [...text.matchAll(/^\s*- Also: ([0-9a-f]{7,40})\b/gm)].map((m) => m[1] ?? "");
  return [...heads, ...also].filter((s) => s.length > 0);
}

/**
 * A commit that says, in its own message, that the session log has nothing to gain
 * from it: the trailer `Session-entry: none`. The tool skips it like it skips
 * `docs(session)` commits. Only the commit's author can make that call, and
 * only at commit time -- which is the point: the session log holds value, and the
 * decision that a commit has none is recorded where it cannot be forgotten.
 */
export function declinesEntry(body: string): boolean {
  return /^Session-entry:\s*none\s*$/im.test(body);
}
