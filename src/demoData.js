export const selectListArray = [
   {
      id: 1,
      mainLabel: 'Select a measure-root',
      subLists: [
         {
            subLabel: 'Measures',
            values: ['sub-filter', 'number'],
         },
         {
            subLabel: 'Stock attributes',
            values: [
               'symbol',
               'industry',
               'sector',
               'marketcapname',
               'open',
               'high',
               'low',
               'close',
               'volume',
               'change',
            ],
         },
      ],
   },
   {
      id: 2,
      mainLabel: 'Select an operation',
      subLists: [
         {
            subLabel: 'Operations',
            values: ['Remove all on right',],
         },
         {
            subLabel: 'Arithmetic Operations',
            values: [
               '+',
               '-',
               '*',
               '/',
            ],
         },
         {
            subLabel: 'Comparison Operations',
            values: [
               'Equals',
               'Not equals',
               'Greater than',
               'Greater than equal to',
               'Less than',
               'Less than equal to',
            ],
         },
         {
            subLabel: 'Cross Operations',
            values: [
               'Crossed above',
               'Crossed below',
            ],
         },
      ],
   },
   {
      id: 3,
      mainLabel: 'Select a measure',
      subLists: [
         {
            subLabel: 'Measures',
            values: ['Number',],
         },
         {
            subLabel: 'Stock attributes',
            values: [
               'Symbol',
               'Industry',
               'Sector',
               'Marketcapname',
               'Open',
               'High',
               'Low',
               'Close',
               'Volume',
            ],
         },
         
      ],
   },
];
