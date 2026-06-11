export interface DiagnosticNode {
  id: string;
  title: string;
  description: string;
  type: 'question' | 'solution';
  options?: {
    label: string;
    nextNodeId: string;
  }[];
  steps?: string[];
  cautions?: string[];
}

export const diagnosticTree: Record<string, DiagnosticNode> = {
  root: {
    id: 'root',
    title: 'Are you buying or selling tickets?',
    description: 'Select your role to match the specific match-day error handling workflows.',
    type: 'question',
    options: [
      { label: 'I am a BUYER (My tickets are missing or stuck)', nextNodeId: 'buyer_root' },
      { label: 'I am a SELLER (StubHub is demanding Web Portal transfer / giving errors)', nextNodeId: 'seller_portal_trap' }
    ]
  },

  // BUYER STARTING NODE
  buyer_root: {
    id: 'buyer_root',
    title: 'What ticket emergency are you facing?',
    description: 'Select your situation below to find the crowdsourced community fix instantly.',
    type: 'question',
    options: [
      { label: 'I bought tickets on StubHub/Viagogo, but they are not showing up in my FIFA account', nextNodeId: 'proxy_trap_check' },
      { label: 'I am trying to transfer a ticket to a friend, but it is stuck on "Pending"', nextNodeId: 'pending_transfer_check' },
      { label: 'My ticket transfer was completed, but my guest sees an empty wallet app', nextNodeId: 'guest_wallet_empty' }
    ]
  },

  // PATH 1: The Proxy Email Trap Branch (Updated with Domain Blocks & Guest Pass Forwarding)
  proxy_trap_check: {
    id: 'proxy_trap_check',
    title: 'Did you check the confirmation email from your marketplace?',
    description: 'Look carefully at the order confirmation or delivery email sent by StubHub or Viagogo.',
    type: 'question',
    options: [
      { label: 'Yes, it mentions a weird transfer email or a "proxy" address', nextNodeId: 'proxy_trap_detected' },
      { label: 'No, it says it was sent directly to my personal email address', nextNodeId: 'direct_email_error' }
    ]
  },
  proxy_trap_detected: {
    id: 'proxy_trap_detected',
    title: 'Did you get an "Access Restricted" or error when creating the proxy account?',
    description: 'FIFA periodically throttles or restricts accounts using marketplace proxy domains (like @ticketoperations.com or @ticketmanager.com).',
    type: 'question',
    options: [
      { label: 'Yes, I am blocked from registering the proxy email on the FIFA portal', nextNodeId: 'proxy_domain_blocked' },
      { label: 'No, I can register it, I just need the steps to get my tickets', nextNodeId: 'proxy_trap_resolution' }
    ]
  },
  proxy_trap_resolution: {
    id: 'proxy_trap_resolution',
    title: '🚨 Resolution: The Proxy Account Login & Guest Pass Rescue',
    description: 'Marketplaces mask identities by creating a temporary proxy address. You must claim this account and then extract your tickets to safety.',
    type: 'solution',
    steps: [
      'Open your ticket marketplace dashboard (StubHub/Viagogo) and find your order details page.',
      'Locate the "Transfer/Proxy Email Address" generated specifically for this purchase.',
      'Log OUT of your personal account on the official FWC2026 Mobile Tickets App.',
      'Create a brand NEW FIFA Ticketing Account using that exact proxy email address.',
      'Verify the new account via the confirmation link (StubHub forwards these verification emails directly to your personal inbox within 5-10 minutes).',
      'Once logged in under the proxy account, your ticket QR codes will instantly render.',
      '🔥 THE RESCUE STEP: Tap on the tickets, select "Manage Guests", assign the ticket to your REAL name, and enter your personal email address. This forwards the ticket out of the proxy trap and safely into your main personal wallet permanently.'
    ],
    cautions: [
      'Do not attempt to change the email on the proxy account profile settings before your tickets render—this breaks the cryptographic data link payload.',
      'Once you successfully forward the Guest Pass to your personal email, log out of the proxy and log back into your real account to verify the permanent transfer.'
    ]
  },
  proxy_domain_blocked: {
    id: 'proxy_domain_blocked',
    title: '🚨 Resolution: Bypassing the @ticketoperations Domain Block',
    description: 'FIFA ticketing portals block automated registrations from known reseller domains. You must force StubHub to deliver the tickets manually.',
    type: 'solution',
    steps: [
      'Call StubHub/Viagogo phone support immediately (Do not use the web chat, as it uses automated bots).',
      'State explicitly: "FIFA has blacklisted the @ticketoperations.com domain portal. I cannot register the account to claim my match tickets."',
      'Demand that the support agent escalate your ticket to the Fulfillment Team to contact the seller directly.',
      'The seller must cancel the proxy email route and transfer the ticket directly to your real, personal FIFA account email via the official FIFA Web Portal.'
    ],
    cautions: [
      'If your match is less than 4 hours away, go directly to the Stadium Resolution Center / Help Desk with your StubHub proof of purchase. Staff can manually override entry restrictions if you show the domain error code.'
    ]
  },
  direct_email_error: {
    id: 'direct_email_error',
    title: '🚨 Resolution: FIFA Email Sync Lag',
    description: 'If the seller transferred directly to your email address but your wallet remains completely blank, the app is experiencing local state cache desynchronization.',
    type: 'solution',
    steps: [
      'Force close the FWC2026 Mobile Tickets App on your smartphone.',
      'Go to your device App Settings -> Storage -> Clear Cache (Do not clear data yet).',
      'Check your personal inbox (and spam folder) for an automated invitation email directly from FIFA Ticketing.',
      'Click the unique confirmation link inside that official FIFA email directly from your mobile device to force the deep-link execution handler to bind the ticket UUID to your local wallet.'
    ],
    cautions: [
      'If you never received the email from FIFA, the seller may have typed a character wrong. Contact marketplace support immediately to request a seller verification proof.'
    ]
  },

  // PATH 2: Stuck Pending Transfer Branch
  pending_transfer_check: {
    id: 'pending_transfer_check',
    title: 'Is the ticket stuck on "Pending" on your seller dashboard?',
    description: 'When you look at your wallet or the marketplace portal, does the transfer state indicate it is awaiting action?',
    type: 'question',
    options: [
      { label: 'Yes, it has been stuck on "Pending" for hours/days', nextNodeId: 'stuck_pending_resolution' },
      { label: 'No, it says "Completed" on my side but the recipient has nothing', nextNodeId: 'guest_wallet_empty' }
    ]
  },
  stuck_pending_resolution: {
    id: 'stuck_pending_resolution',
    title: '🚨 Resolution: Force the Direct Invite URL Link',
    description: 'The automated transactional email system between ticketing databases is failing under heavy match-day loads.',
    type: 'solution',
    steps: [
      'Open your FWC2026 Mobile Tickets App and tap on the pending ticket asset.',
      'Tap on "Manage Transfer" or "Share Invite Link".',
      'Copy the direct URL link generated by the app straight to your clipboard.',
      'Manually send this exact string to your buyer/friend via WhatsApp, SMS, or Reddit DM.',
      'Instruct the recipient to open that URL directly on their mobile device where their FIFA app is installed to bypass the broken email distribution layer entirely.'
    ],
    cautions: [
      'Never post this unique registration link publicly on social media or forums; anyone who clicks it can claim ownership of that specific ticket ticket payload instantly.'
    ]
  },

  // PATH 3: Completed but Empty Guest Wallet
  guest_wallet_empty: {
    id: 'guest_wallet_empty',
    title: '🚨 Resolution: Dynamic Ticket Token Re-Sync',
    description: 'The transfer is completed on the ledger, but the local client wallet instance has not refreshed its layout state.',
    type: 'solution',
    steps: [
      'Have the recipient open the FWC2026 Mobile Tickets App.',
      'Pull down firmly on the main screen wallet interface to manually trigger a database sync event handler.',
      'If the tickets still do not fetch, log out of the account completely, clear the app device data cache, and log back in.',
      'Ensure the time settings on the smartphone are set to "Automatic Time Sync (NTP)". If the local system clock mismatches the FIFA server time by even 60 seconds, the rotating security QR tokens will fail to render.'
    ],
    cautions: [
      'Ensure the recipient is using the latest official update version from the iOS App Store or Google Play Store. Outdated builds completely block the new secure rolling ticket formats.'
    ]
  },

  // PATH 4: SELLER PORTAL TRAP (Brand New Intelligence Added)
  seller_portal_trap: {
    id: 'seller_portal_trap',
    title: '🚨 Resolution: App Transfer vs. Web Portal Requirements',
    description: 'StubHub automatically flags and penalizes sellers who complete transfers using the FWC Mobile App instead of the official FIFA Web Portal interface.',
    type: 'solution',
    steps: [
      'Do NOT just hit "Transfer" inside the mobile app. App transfers are classified as "loans" and allow you to pull the ticket back, which breaks StubHub policy.',
      'Open a desktop browser and log into the official FIFA Ticketing Web Portal.',
      'Navigate to your ticket management section on the web platform.',
      'Enter the buyer’s proxy email provided by StubHub directly into the Web Portal interface.',
      'Completing the transfer via the Web Portal strips your account of the ownership seeds permanently, which triggers the automated "Transfer Complete" signal back to StubHub.',
      'Take a screenshot of the web confirmation showing "Transferred to [Proxy Email]" to upload as your fulfillment insurance policy if StubHub tries to levy a penalty fee.'
    ],
    cautions: [
      'If you already completed an app-based transfer, go into the app, click "Cancel Transfer," and immediately execute it again via the Web Portal interface instead to protect your seller payout.'
    ]
  }
};