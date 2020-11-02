import Boot from "./src/Boot.svelte";
import Dapps from "./src/Recycle/Dapps.svelte"
import Start from "./src/Recycle/Start.svelte"
import Install from "./src/Recycle/Install.svelte"
import Intro from "./src/Recycle/Intro.svelte"
import Login from "./src/Recycle/Login.svelte"
import Mail from "./src/Recycle/Mail.svelte"
import Odentity from "./src/Recycle/Odentity.svelte"
import Register from "./src/Recycle/Register.svelte"
import SaveName from "./src/Recycle/SaveName.svelte"
import SaveProfileImage from "./src/Recycle/SaveProfileImage.svelte"

import WalletIntro from "./src/Recycle/WalletIntro.svelte"
import WalletConnectCircleSeed from "./src/Recycle/WalletConnectCircleSeed.svelte"
import WalletExplainSafe from "./src/Recycle/WalletExplainSafe.svelte"
import WalletUnlock from "./src/Recycle/WalletUnlock.svelte"
import WalletTransactions from "./src/Recycle/WalletTransactions.svelte"
import WalletToken from "./src/Recycle/WalletToken.svelte"
import WalletSafes from "./src/Recycle/WalletSafes.svelte"
import BucketImageUpload from "./src/2-Molecules/BucketImageUpload.svelte";

import FriendsIntro from "./src/Recycle/FriendsIntro.svelte"
import FriendsOverview from "./src/Recycle/FriendsOverview.svelte"

import TextileKeys from "./src/Recycle/TextileKeys.svelte"
import TextileAccounts from "./src/Recycle/TextileAccounts.svelte"
import TextileThreads from "./src/Recycle/TextileThreads.svelte"

import WebsiteLandingPage from "./src/Recycle/WebsiteLandingPage.svelte"

export const ViewComponents = [Boot, BucketImageUpload, Dapps, Start, Install, Intro, Login, Mail, Odentity, Register, SaveName, SaveProfileImage, WalletIntro, WalletConnectCircleSeed, WalletExplainSafe, WalletTransactions, WalletSafes, WalletToken, WalletUnlock, FriendsIntro, FriendsOverview, TextileKeys, TextileAccounts, TextileThreads, WebsiteLandingPage]

export { Boot };