import * as React from "react"
import DocLayout from "./../../components/documentation/DocLayout"
import StepList from "./../../components/documentation/StepList"
import VsBox from "./../../components/documentation/VsBox"
import TipsBox from "./../../components/documentation/TipsBox"
import ContentBox from "./../../components/documentation/ContentBox"
import { useStaticQuery, graphql } from "gatsby"

const SentenceRewriter = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "documentation" } }) {
        nodes {
          documentation {
            sentenceRewriter {
              title
              description
              stepsTitle
              stepsList {
                stepNo
                description
              }
              tipsTitle
              tipsDescription
              inputVsOutput {
                title
                leftHeading
                rightHeading
                row {
                  leftContent
                  rightContent
                }
              }
              contentCreationsTitle
              contentCreationsImage {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `)

  let title = data.allWpPage.nodes[0].documentation.sentenceRewriter.title
  let description =
    data.allWpPage.nodes[0].documentation.sentenceRewriter.description
  let stepsTitle =
    data.allWpPage.nodes[0].documentation.sentenceRewriter.stepsTitle
  let stepsList =
    data.allWpPage.nodes[0].documentation.sentenceRewriter.stepsList
  let tipsTitle =
    data.allWpPage.nodes[0].documentation.sentenceRewriter.tipsTitle
  let tipsDescription =
    data.allWpPage.nodes[0].documentation.sentenceRewriter.tipsDescription
  let vsTitle =
    data.allWpPage.nodes[0].documentation.sentenceRewriter.inputVsOutput.title
  let leftHeading =
    data.allWpPage.nodes[0].documentation.sentenceRewriter.inputVsOutput
      .leftHeading
  let rightHeading =
    data.allWpPage.nodes[0].documentation.sentenceRewriter.inputVsOutput
      .rightHeading
  let row =
    data.allWpPage.nodes[0].documentation.sentenceRewriter.inputVsOutput.row
  let contentCreationsTitle =
    data.allWpPage.nodes[0].documentation.sentenceRewriter.contentCreationsTitle

  let contentCreationsImage =
    data.allWpPage.nodes[0].documentation.sentenceRewriter
      .contentCreationsImage != null
      ? data.allWpPage.nodes[0].documentation.sentenceRewriter
          .contentCreationsImage.sourceUrl
      : null

  return (
    <DocLayout>
      <div className="documentation-row documentation-detail-page">
        <div className="container small-container">
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <div className="steps-title-box ptb80">
            <h3 dangerouslySetInnerHTML={{ __html: stepsTitle }} />
            <ul>
              {stepsList.map((item, i) => {
                return (
                  <StepList
                    key={i}
                    stepNo={item.stepNo}
                    description={item.description}
                  />
                )
              })}
            </ul>
          </div>
          <TipsBox title={tipsTitle} description={tipsDescription} />
          <VsBox
            title={vsTitle}
            leftHeading={leftHeading}
            rightHeading={rightHeading}
            row={row}
          />
          <ContentBox
            className={"content-creations"}
            title={contentCreationsTitle}
            img={contentCreationsImage}
          />
        </div>
      </div>
    </DocLayout>
  )
}

export default SentenceRewriter
