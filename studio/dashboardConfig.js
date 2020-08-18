export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f3b87ee534d5d806885d385',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fttkmbjt',
                  apiId: '9b229939-35a7-4978-b38f-55e23db5a6cd'
                },
                {
                  buildHookId: '5f3b87ee534d5dbbbb85d0b8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jhi93ks3',
                  apiId: '6d64ae5b-08e9-4dba-92a4-55f3a449a5a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dextermb/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jhi93ks3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
