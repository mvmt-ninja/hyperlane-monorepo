import { getChains } from '../../config/environments/dev/chains';
import { agentConfig } from '../../config/environments/dev/agent';
import { runKeymasterHelmCommand } from '../../src/agents';
import { HelmCommand } from '../../src/utils/helm';

async function main() {
  const chains = await getChains();
  return runKeymasterHelmCommand(HelmCommand.Install, agentConfig, chains);
}

main().then(console.log).catch(console.error);