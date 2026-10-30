/**
 * brain new-doc <TYPE> <slug> [--title "<text>"]: claim the next number of a type, write its file
 * from the type's template, and print the path. A SPEC gets a folder with three files, each
 * printed. Each H1 gets the title: the --title text, or the slug as words. The folders come
 * from the workspace config; the number is one above every file of the type and every claim
 * made before.
 */
import { mkdir, realpath } from "node:fs/promises";
import path from "node:path";

import { claim, claimsFolder } from "./claims";
import { findRepo, readConfig } from "./config";
import type { Paths } from "./config";

const usage = `usage: brain new-doc <TYPE> <slug> [--title "<text>"]

  TYPE     IDEA, DEC, RES or SPEC
  slug     lowercase words joined by hyphens, such as pin-addy-skills
  --title  the title after the ID in each H1; without it, the slug as words: "Pin addy skills"`;

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u;

type Kind = {
  folder: keyof Paths;
  /** Each file to write, from the end of its path after `<folder>/<ID>-<slug>` to its template. */
  templates: Record<string, string>;
};

const kinds = new Map<string, Kind>([
  ["IDEA", { folder: "ideas", templates: { ".md": "IDEA" } }],
  ["DEC", { folder: "decisions", templates: { ".md": "DEC" } }],
  ["RES", { folder: "research", templates: { ".md": "RES" } }],
  [
    "SPEC",
    {
      folder: "specs",
      templates: { "/spec.md": "spec", "/tasks/plan.md": "plan", "/tasks/todo.md": "todo" },
    },
  ],
]);

function twoDigits(part: number): string {
  return String(part).padStart(2, "0");
}

/** Today's date in the local time zone, as the templates' YYYY-MM-DD. */
function today(): string {
  const now = new Date();
  return `${now.getFullYear()}-${twoDigits(now.getMonth() + 1)}-${twoDigits(now.getDate())}`;
}

/** The title a slug gives when there is no --title: its words, the first one capitalized. */
function titleOf(slug: string): string {
  const words = slug.replaceAll("-", " ");
  return `${words.charAt(0).toUpperCase()}${words.slice(1)}`;
}

/**
 * Fill a template: `{{id}}` in a numbered file and `{{spec}}` in a spec folder take the ID. The
 * title goes in last, through a function, so its text stays as given: no `$&` or `{{id}}` in it
 * is read as a pattern.
 */
function fill(template: string, id: string, date: string, title: string): string {
  return template
    .replaceAll("{{id}}", id)
    .replaceAll("{{spec}}", id)
    .replaceAll("{{date}}", date)
    .replaceAll("{{title}}", () => title);
}

async function create(type: string, kind: Kind, slug: string, title: string): Promise<string[]> {
  const cwd = await realpath(process.cwd());
  const repo = await findRepo(cwd);
  const config = await readConfig(repo.root);
  const folder = path.join(repo.root, config.paths[kind.folder]);
  // Every template is read before the claim, so a claim fails only when a write does.
  const files = await Promise.all(
    Object.entries(kind.templates).map(async ([end, template]) => ({
      end,
      template: await Bun.file(`${import.meta.dir}/templates/${template}.md`).text(),
    })),
  );
  const number = await claim(claimsFolder(repo), type, folder);
  const id = `${type}-${String(number).padStart(3, "0")}`;
  const date = today();
  const written: string[] = [];
  try {
    for (const { end, template } of files) {
      const file = `${folder}/${id}-${slug}${end}`;
      await mkdir(path.dirname(file), { recursive: true });
      await Bun.write(file, fill(template, id, date, title));
      written.push(path.relative(cwd, file));
    }
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(`claimed ${id}, but writing its files failed: ${reason}`, { cause: error });
  }
  return written;
}

/**
 * Split off --title and the text after it: the other arguments, and the title (null when there is
 * no --title). Null when --title has no text after it.
 */
function takeTitle(args: string[]): { rest: string[]; title: string | null } | null {
  const at = args.indexOf("--title");
  if (at === -1) {
    return { rest: args, title: null };
  }
  const title = args[at + 1];
  return title === undefined ? null : { rest: args.toSpliced(at, 2), title };
}

/** Run `brain new-doc <TYPE> <slug> [--title "<text>"]` and return the exit code. */
export async function newDoc(args: string[]): Promise<number> {
  const taken = takeTitle(args);
  const [type, slug] = taken?.rest ?? [];
  if (taken?.rest.length !== 2 || type === undefined || slug === undefined) {
    console.error(usage);
    return 2;
  }
  const kind = kinds.get(type);
  if (kind === undefined) {
    console.error(`unknown type: ${type}`);
    console.error(usage);
    return 2;
  }
  if (!slugPattern.test(slug)) {
    console.error(`bad slug: ${JSON.stringify(slug)}`);
    console.error(usage);
    return 2;
  }
  // A title must fill one H1 line, so it needs text and no line break.
  const { title } = taken;
  if (title !== null && (title.trim() === "" || /[\r\n]/u.test(title))) {
    console.error(`bad title: ${JSON.stringify(title)}`);
    console.error(usage);
    return 2;
  }
  try {
    for (const file of await create(type, kind, slug, title?.trim() ?? titleOf(slug))) {
      console.log(file);
    }
    return 0;
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    return 1;
  }
}
