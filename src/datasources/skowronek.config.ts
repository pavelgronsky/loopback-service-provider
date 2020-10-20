const baseUrl = `http://FUI8IIQP28WE8JEZLJ8ICWRNCY99URG1@skowronek.milleniumhost.pl/api/`;

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
      //Get VAT from tax_rule_groups
      template: {
        method: 'GET',
        url: `${baseUrl}tax_rule_groups?output_format=JSON&display=full`,
        responsePath: '$.tax_rule_groups[*]',
        fullResponse: false,
      },
      functions: {
        getTaxRuleGroup: [],
      },
    },
  ],
};
