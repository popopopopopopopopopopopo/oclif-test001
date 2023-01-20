import {Command, Flags} from '@oclif/core'
import {readFile} from 'node:fs/promises'

export default class Settlement extends Command {
  static description = 'Settlement On Service.'

  static examples = [
    `$ oex settlement {filePath} --from oclif
settlement stripe from oclif! (./src/commands/settlement/index.ts)
`,
  ]

  static flags = {
    from: Flags.string({char: 'f', description: 'credential file', required: true}),
  }

  static args = [{name: 'filePath', description: 'filePath of ids txt.', required: true}]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Settlement)
    this.log('called settlement from ids txt.')
    const fileContent = await readFile(args.filePath, {encoding: 'utf8'}).catch(error => {
      this.error(error)
      throw error
    })
    console.log(flags.f)
    const ids = fileContent.toString().split('\n')

    await Promise.all(ids.map(async (id, idx) => {
      console.log(idx.toString() + ':' + id)
    }))
  }
}
