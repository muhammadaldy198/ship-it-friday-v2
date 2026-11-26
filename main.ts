import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// Ship It Friday — rebuild #2 (rombak total).
// Pick: commit message agen AI yang MEREVERT hotfix supaya smoke test
// lolos lagi — inversi sebab-akibat yang segar (lane revert 1/796,
// smoke test 0/796 di sensus lapangan), ditumpuk 5 beat:
// revert hotfix + smoke test lolos + merge PR sendiri + hapus rollback
// + angka konkret (0 alerts, 214 files) + penutup "see you Monday".
// Suara agen: percaya diri, ceria, sama sekali tak sadar bencana (K3).
// Gate kit: entry.txt UTF-8, 1-159 karakter, satu baris.
// Pick di atas 145 karakter — di zona top lapangan (151-157) tapi lebih pendek, tie-break menguntungkan teks lebih pendek.
const PICK =
  "fix: reverted the hotfix so the smoke test passes, merged my own PR at 4:59pm Friday, deleted the rollback, 0 alerts, 214 files \u2014 see you Monday!";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.cwd();
const target = join(outDir, "entry.txt");
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${PICK.length} chars)`);
