import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from "../components/layout"
import Gallery from "../components/gallery-drupal.js"
import Description from "../components/descirption-drupal.js"

const WorkPage = ({data}) => {
    const pageData = data.nodeWorksPage;
    const pageImages = data.nodeWorksPage.relationships.field_work_image;
    const pageImagesDesc = data.nodeWorksPage.field_work_image;
    const images = [];
    pageImages.forEach ((pageImage, index) => {
      const currentImage = {
        title: pageImagesDesc[index].title,
        description: pageImagesDesc[index].alt,
        imageData: pageImage.localFile.childImageSharp,
        publicURL: pageImage.localFile.publicURL,
        id: pageImage.localFile.id,
      }
      images.push(currentImage);
    })

if (typeof document !== 'undefined') {
  let currentPath = document.location.pathname;
    currentPath =  currentPath.slice(1,currentPath.length-1);
    console.log(images);

    
      return (
          <Layout>
            <Description>
                {pageData.body.processed}
        </Description>
            <Gallery path = {currentPath} images = {images} isDescription = {pageData.body.processed ? true : false}/>
          </Layout>
      )
    } else {
      return null
    }
}

WorkPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    query($id: String!) {
        nodeWorksPage(id: {eq: $id}) {
            id
            title
            field_work_image {
                    alt
                    title
                }
            body {
            processed
        }
        relationships {
            field_work_image {
              created
              localFile {
                id
                publicURL
                childImageSharp {
                     gatsbyImageData(
                        formats: [AUTO, WEBP, AVIF], 
                        placeholder: BLURRED, 
                        layout: CONSTRAINED, 
                        width: 600
                        )
                        original {
                          width
                          height
                        }
                  }
            }
            }
        }
        }
    }
    `;

export default WorkPage;