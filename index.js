import path from "path";
import copy from "@doraemon-module/nuxt-functions/lib/copy";
import mkdirp from "@doraemon-module/nuxt-functions/lib/mkdirp";
import { dirname } from "path";
import { fileURLToPath } from "url";

export default async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  const network = mkdirp(path.join(process.cwd(), "network"));
  const xmpp = mkdirp(path.join(network, "xmpp"));
  copy(
    path.join(__dirname, "lib", "connect.js"),
    path.join(xmpp, "connect.js")
  );
  copy(
    path.join(__dirname, "lib", "disconnect.js"),
    path.join(xmpp, "disconnect.js")
  );
  copy(path.join(__dirname, "lib", "hook.js"), path.join(xmpp, "hook.js"));
};
