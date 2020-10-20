
const baseUrl = `http://${process.env.SKOWRONEK_DB_KEY}@${process.env.SKOWRONEK_DB_URL}/api/`

export const config = {
  name: 'skowronekRest',
  connector: 'rest',
  baseURL: baseUrl,
  crud: false,
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  },
  operations: [
    {
      template: {
        method: 'GET',
        url:
          `${baseUrl}orders?display=full&filter[date_upd]=>[{dateAdd}]&date=1&output_format=JSON`,
        responsePath: '$.orders[*]',
        fullResponse: false
      },
      functions: {
        getNewOrdersFullList: ['dateAdd'],
      }
    }
  ]
};