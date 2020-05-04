export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5eafb0506d3a2de047e11b94',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-k6sirsyu',
                  apiId: 'e3e4228c-4cfd-4217-992d-a6b1a82db9a4'
                },
                {
                  buildHookId: '5eafb050d8d2b70ddc9e1570',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-biufm182',
                  apiId: 'f02964e0-7b4e-4486-b245-3160ebe70c50'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hydrosIII/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-biufm182.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
