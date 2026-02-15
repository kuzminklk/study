

import { createWalletClient, createPublicClient, custom } from "https://esm.sh/viem"


const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
const etherAmountInput = document.getElementById("etherAmount")

connectButton.addEventListener("click", connectWallet)
fundButton.addEventListener("click", fund)

let walletClient
let publicClient

const clientConfig = {
		transport: custom(window.ethereum)
	}

async function connectWallet() {
	if (typeof window.ethereum === "undefined") {
		connectButton.innerText = "Install MetaMask"
		return
	}

	walletClient = createWalletClient(clientConfig)

	await walletClient.requestAddresses()
	connectButton.innerText = "Connected"
}

async function fund() {
	if (typeof walletClient === "undefined") {
		connectWallet()
	}

	const etherAmount = etherAmountInput.value
	publicClient = createPublicClient(clientConfig)

	await publicClient.simulateContract({
		address: "",
	})
}