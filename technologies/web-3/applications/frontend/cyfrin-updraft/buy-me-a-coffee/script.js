

import { createWalletClient, createPublicClient, parseEther, custom } from "https://esm.sh/viem"
import { sepolia } from "https://esm.sh/viem/chains"
import { contractAddress, abi } from "./constants.js"


const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
const getBalanceButton = document.getElementById("getBalanceButton")
const etherAmountInput = document.getElementById("etherAmount")

connectButton.addEventListener("click", connectWallet)
fundButton.addEventListener("click", fund)
getBalanceButton.addEventListener("click", getBalance)

let walletClient
let publicClient
let connectedAccount

const clientConfig = {
	transport: custom(window.ethereum),
	chain: sepolia
}


async function connectWallet() {
	if (typeof window.ethereum === "undefined") {
		connectButton.innerText = "Install MetaMask"
		return
	}

	walletClient = await createWalletClient(clientConfig);

	[connectedAccount] = await walletClient.requestAddresses()
	connectButton.innerText = "Connected"
}


// Helper function to check connection status and connect if it's not
async function performConnection() {
	if (typeof walletClient === "undefined") {
		try {
			await connectWallet()
			return true
		} catch {
			return false
		}
	}
}


async function fund() {
	if (!performConnection()) {
		return
	}

	const etherAmount = etherAmountInput.value
	publicClient = await createPublicClient(clientConfig)

	const { request } = await publicClient.simulateContract({
		address: contractAddress,
		abi: abi,
		functionName: "fund",
		account: connectedAccount,
		chain: sepolia,
		value: parseEther(etherAmount)
	})

	await walletClient.writeContract(request)
}


async function getBalance() {
	if (!performConnection()) {
		return
	}


}