const path = require('path');

//all possible templates
const templates = {
    workPage: path.resolve('src/template/workPage.js'),
    about: path.resolve('src/template/about.js')
};

//customasing schema from menuItem type
exports.createSchemaCustomization = ({ actions }) => {
    actions.createTypes(`
      type MenuItems implements Node {
        title: String!,
        slug: String,
        id: String,
      }
    `);
};

const crypto = require(`crypto`);

//creates a menuItem node for every page from drupal and links them to the 'site' node
exports.onCreateNode = ({ node, actions, createNodeId, getNodesByType }) => {
    const { createNode,createParentChildLink } = actions;
    if (node.internal.type === 'node__page' || node.internal.type === 'node__works_page') {
        const siteMetadata = getNodesByType('Site');
        const {id,title} = node;
        const slug = node.path.alias;
        const type = node.internal.type === 'node__page' ? 'about' : 'workPage';
        const menuItem =  ({
            id: createNodeId(id),
            original_node_id: id,
            title: title,
            slug: slug,
            type: type,
            template: type === 'workPage' ? templates.workPage : templates.about,
            parent: null,
            childern: [],
            internal: {
                type: 'MenuItems',
                contentDigest: crypto
                .createHash(`md5`)
                .update(JSON.stringify(node))
                .digest(`hex`),
                content: JSON.stringify(node),
                description: `Menu Item`,    
            }   
        });
        createNode(menuItem);
        createParentChildLink ({parent: siteMetadata[0], child: menuItem});
    }
}

//creates pages according to the menuItems
exports.createPages = async ({actions, graphql}) => {
    const {createPage} = actions;
    const pages = await graphql (`
    {
        allMenuItems {
            nodes {
              slug
              title
              original_node_id
              template
            }
          }
    }
    `);
    // console.log(pages);
    pages.data.allMenuItems.nodes.forEach(page=> {
        createPage({
            path: page.slug,
            title: page.title,
            component: page.template,
            context: {
                id: page.original_node_id
            }
        })
    })

}