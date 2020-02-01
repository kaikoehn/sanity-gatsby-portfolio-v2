export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3539f0d1494436c31f0e19',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-v2-studio',
                  apiId: '6e5909ab-bdc8-40ce-b2ff-f540754b7a5f'
                },
                {
                  buildHookId: '5e3539f01c77181436d40fd6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-v2',
                  apiId: 'eefe35ab-8a81-499e-9ade-1e511a774949'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kaikoehn/sanity-gatsby-portfolio-v2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-v2.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
