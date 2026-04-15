import { createViemHandleClient } from "@iexec-nox/handle";
import { createWalletClient, custom } from "viem";
import { arbitrumSepolia } from "viem/chains";

export async function getHandleClient() {
  if (typeof window === "undefined" || !(window as any).ethereum) {
    throw new Error("No ethereum provider found");
  }

  const walletClient = createWalletClient({
    chain: arbitrumSepolia,
    transport: custom((window as any).ethereum),
  });

  const handleClient = await createViemHandleClient(walletClient);

  return handleClient;
}
