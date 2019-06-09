import React from "react"
import { Link, graphql } from "gatsby"
import EventCard from '../components/Event-card/event-card'
import Layout from "../components/layout"
import style from './css/event.module.css'
import moment from 'moment'



function getUpcomingEvents(data)
{
 
  
  let today = new Date()
 
  today.setHours(0, 0, 0, 0);
  let Upcomingevents = []
  let eventList = data.allMarkdownRemark.edges
  eventList.map(({ node }) => {
    let date=node.frontmatter.date;
    let eventDate = moment(date, 'DD-MMM-YYYY')
    if (today < eventDate._d) {
      
    

    return Upcomingevents.push(
      <EventCard
        slug={node.frontmatter.slug}
        title={node.frontmatter.name}
        cover={node.frontmatter.cover}
        date={node.frontmatter.date}
        caption={node.frontmatter.caption}
      />
    )
    }
  })
  return Upcomingevents
}

function getRecentEvents(data)
{
  
 
  let today = new Date()
 
  today.setHours(0, 0, 0, 0);
  let RecentEvents = []
  let eventList = data.allMarkdownRemark.edges
  eventList.map(({ node }) => {
    let date= node.frontmatter.date;
    let eventDate = moment(date, 'DD-MMM-YYYY')
    if (today >eventDate._d) {
      
    

    return RecentEvents.push(
      <EventCard
        slug={node.frontmatter.slug}
        title={node.frontmatter.name}
        cover={node.frontmatter.cover}
        date={node.frontmatter.date}
        caption={node.frontmatter.caption}
      />
    )
    }
  })
  return RecentEvents
}
 

// function getEvents(data) {
//   let events = []
//   let eventList = data.allMarkdownRemark.edges
//   console.log(eventList);
//   eventList.map(({ node }) => {
   
//     return events.push(
//       <EventCard
//         slug={node.frontmatter.slug}
//         title={node.frontmatter.name}
//         cover={node.frontmatter.cover}
//         date={node.frontmatter.date}
//         caption={node.frontmatter.caption}
//       />
//     )
//   })
//   return events
// }



const EventsPage = ({data}) => (
  <Layout>
   <div className={style.page}>
  <div className={style.container}>
    <div>
  <div className={style.title_wrap}> <p className={style.title}>Upcoming Events</p>
  {/* <div className={style.underline}></div> */}
  </div> 
  {getUpcomingEvents(data)}
  </div>

  <div>
  <div className={style.title_wrap}> <p className={style.title}>Recent Events</p>
  {/* <div className={style.underline}></div> */}
  </div> 
  {getRecentEvents(data)}
  </div>

  
   </div>
   </div>
  </Layout>
)

export default EventsPage

export const eventsQuery = graphql`
query eventsQuery{
  allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/events/.*md$/" } }
  ){
    totalCount
    edges{
      node{
        frontmatter{
          slug
          name
          caption
          date(formatString: "DD-MMM-YYYY")
          cover {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1000) {
                srcSet
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
}
`
