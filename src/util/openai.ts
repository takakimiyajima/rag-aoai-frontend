import { AzureKeyCredential, OpenAIClient } from '@azure/openai'
import axios from 'axios'

export const getOnYourData = async (message: string): Promise<any> => {
  return new Promise(async (resolve, reject) => {

    const endpoint = process.env.AZURE_OPENAI_ENDPOINT!
    const azureAoiKey = process.env.AZURE_OPENAI_API_KEY!
    const deploymentId = process.env.AZURE_OPENAI_DEPLOYMENT_ID!

    console.log('OnYourData start', endpoint)

    const apiUrl = ''

    const requestData = {
      messages: [
        {
          role: 'user',
          content: message
        }
      ]
    }

    const res = await axios.post(apiUrl, requestData)

    const content = `
    # 質問
    ${message}
    # 回答
    ${res.data}
    `
    const messages : any[] = [
      {
        role: 'system',
        content: 'Your are a helpful assistant'
      },
      {
        role: 'user',
        content
      }
    ]

    const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureAoiKey))
    const result = await client.getChatCompletions(deploymentId, messages)

    resolve(result.choices)
  })
}
