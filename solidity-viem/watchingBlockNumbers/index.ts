import { http, stringify } from 'viem';
import { publicClient } from './client.ts';

publicClient.watchBlockNumber({
    onBlockNumber: (blockNumber) => {
        document.getElementById('block-number')!.innerHTML =
            `Block number: ${blockNumber}`
    },
})

publicClient.watchBlocks({
    onBlock: (block) => {
        document.getElementById('block')!.innerHTML =
            `Block: <pre><code>${stringify(block, null, 2)}</code></pre>`
    },
})

//npm run dev

